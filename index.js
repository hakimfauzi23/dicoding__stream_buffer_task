/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs");

// STREAM DOCUMENT FROM INPUT.TXT
const readableStream = fs.createReadStream("./input.txt", {
  highWaterMark: 15,
});
const writableStream = fs.createWriteStream("./output.txt");

readableStream.on("readable", () => {
  try {
    // WRITE INTO OUTPUT.TXT DOCUMENT
    writableStream.write(`${readableStream.read()}\n`);
  } catch (err) {
    process.stdout.write(err);
  }
});

readableStream.on("end", () => {
  console.log("Done Streaming");
});
