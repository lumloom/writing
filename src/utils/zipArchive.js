(function () {
  const encoder = new TextEncoder();
  let crcTable;

  function createArchive(files) {
    const normalizedFiles = files.map((file) => ({
      name: encoder.encode(file.name),
      data: typeof file.content === "string" ? encoder.encode(file.content) : file.content,
      modifiedAt: file.modifiedAt ? new Date(file.modifiedAt) : new Date()
    }));
    const localParts = [];
    const centralParts = [];
    let localOffset = 0;

    normalizedFiles.forEach((file) => {
      const crc = crc32(file.data);
      const { time, date } = toDosDateTime(file.modifiedAt);
      const localHeader = new Uint8Array(30 + file.name.length);
      const localView = new DataView(localHeader.buffer);

      writeUint32(localView, 0, 0x04034b50);
      writeUint16(localView, 4, 20);
      writeUint16(localView, 6, 0x0800);
      writeUint16(localView, 8, 0);
      writeUint16(localView, 10, time);
      writeUint16(localView, 12, date);
      writeUint32(localView, 14, crc);
      writeUint32(localView, 18, file.data.length);
      writeUint32(localView, 22, file.data.length);
      writeUint16(localView, 26, file.name.length);
      writeUint16(localView, 28, 0);
      localHeader.set(file.name, 30);

      const centralHeader = new Uint8Array(46 + file.name.length);
      const centralView = new DataView(centralHeader.buffer);

      writeUint32(centralView, 0, 0x02014b50);
      writeUint16(centralView, 4, 20);
      writeUint16(centralView, 6, 20);
      writeUint16(centralView, 8, 0x0800);
      writeUint16(centralView, 10, 0);
      writeUint16(centralView, 12, time);
      writeUint16(centralView, 14, date);
      writeUint32(centralView, 16, crc);
      writeUint32(centralView, 20, file.data.length);
      writeUint32(centralView, 24, file.data.length);
      writeUint16(centralView, 28, file.name.length);
      writeUint16(centralView, 30, 0);
      writeUint16(centralView, 32, 0);
      writeUint16(centralView, 34, 0);
      writeUint16(centralView, 36, 0);
      writeUint32(centralView, 38, 0);
      writeUint32(centralView, 42, localOffset);
      centralHeader.set(file.name, 46);

      localParts.push(localHeader, file.data);
      centralParts.push(centralHeader);
      localOffset += localHeader.length + file.data.length;
    });

    const centralSize = centralParts.reduce((total, part) => total + part.length, 0);
    const endRecord = new Uint8Array(22);
    const endView = new DataView(endRecord.buffer);

    writeUint32(endView, 0, 0x06054b50);
    writeUint16(endView, 4, 0);
    writeUint16(endView, 6, 0);
    writeUint16(endView, 8, normalizedFiles.length);
    writeUint16(endView, 10, normalizedFiles.length);
    writeUint32(endView, 12, centralSize);
    writeUint32(endView, 16, localOffset);
    writeUint16(endView, 20, 0);

    return new Blob([...localParts, ...centralParts, endRecord], { type: "application/zip" });
  }

  function crc32(bytes) {
    if (!crcTable) {
      crcTable = Array.from({ length: 256 }, (_, index) => {
        let value = index;
        for (let bit = 0; bit < 8; bit += 1) {
          value = (value & 1) ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
        }
        return value >>> 0;
      });
    }

    let crc = 0xffffffff;
    bytes.forEach((byte) => {
      crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    });
    return (crc ^ 0xffffffff) >>> 0;
  }

  function toDosDateTime(value) {
    const date = Number.isNaN(value.getTime()) ? new Date() : value;
    const year = Math.max(1980, date.getFullYear());
    return {
      time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
      date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
    };
  }

  function writeUint16(view, offset, value) {
    view.setUint16(offset, value, true);
  }

  function writeUint32(view, offset, value) {
    view.setUint32(offset, value, true);
  }

  window.HaruZip = { createArchive };
})();
