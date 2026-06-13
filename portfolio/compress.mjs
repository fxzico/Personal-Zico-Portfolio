import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const seqDir = path.join(process.cwd(), 'public/sequence');
const files = fs.readdirSync(seqDir).filter(f => f.endsWith('.png'));

async function processImages() {
  for (const file of files) {
    const filePath = path.join(seqDir, file);
    const outPath = path.join(seqDir, file.replace('.png', '.webp'));
    console.log(`Processing ${file}...`);
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outPath);
    // delete original png
    fs.unlinkSync(filePath);
  }
  console.log('Done!');
}

processImages().catch(console.error);
