import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { join } from 'path';

const calculateHash = async () => {
    const filePath = join(process.cwd(), 'src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    
    try {
        const content = await readFile(filePath);
        const hash = createHash('sha256').update(content).digest('hex');
        console.log(hash);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await calculateHash();