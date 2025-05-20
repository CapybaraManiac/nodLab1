import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';

const compress = async () => {
    const sourcePath = join(process.cwd(), 'src', 'zip', 'files', 'fileToCompress.txt');
    const targetPath = join(process.cwd(), 'src', 'zip', 'files', 'archive.gz');
    
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(targetPath);
    
    source.pipe(gzip).pipe(destination);
};

await compress();