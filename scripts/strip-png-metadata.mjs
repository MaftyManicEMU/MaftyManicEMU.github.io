import { readFileSync, writeFileSync } from 'node:fs';

const PNG_SIGNATURE_BYTES = 8;
const removableChunkTypes = new Set(['eXIf', 'iTXt', 'tEXt', 'zTXt']);

for (const filename of process.argv.slice(2)) {
  const source = readFileSync(filename);

  if (source.toString('hex', 0, PNG_SIGNATURE_BYTES) !== '89504e470d0a1a0a') {
    throw new Error(`${filename} is not a PNG file`);
  }

  const retainedChunks = [source.subarray(0, PNG_SIGNATURE_BYTES)];
  let offset = PNG_SIGNATURE_BYTES;

  while (offset < source.length) {
    const dataLength = source.readUInt32BE(offset);
    const chunkType = source.toString('ascii', offset + 4, offset + 8);
    const chunkEnd = offset + dataLength + 12;

    if (chunkEnd > source.length) {
      throw new Error(`${filename} contains a truncated ${chunkType} chunk`);
    }

    if (!removableChunkTypes.has(chunkType)) {
      retainedChunks.push(source.subarray(offset, chunkEnd));
    }

    offset = chunkEnd;
  }

  writeFileSync(filename, Buffer.concat(retainedChunks));
}
