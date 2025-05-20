import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
    const filePath = join(process.cwd(), 'src', 'streams', 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath);
    
    readStream.pipe(process.stdout);
};

await read();