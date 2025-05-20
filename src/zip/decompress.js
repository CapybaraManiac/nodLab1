import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join } from 'path';

const decompress = async () => {
    const sourcePath = join(process.cwd(), 'src', 'zip', 'files', 'archive.gz');
    const targetPath = join(process.cwd(), 'src', 'zip', 'files', 'fileToCompress.txt');
    
    const gunzip = createGunzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(targetPath);
    
    source.pipe(gunzip).pipe(destination);
};

await decompress();