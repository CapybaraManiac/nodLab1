import { rename } from 'fs/promises';
import { join } from 'path';

const rename = async () => {
    const sourcePath = join(process.cwd(), 'src', 'fs', 'files', 'wrongFilename.txt');
    const targetPath = join(process.cwd(), 'src', 'fs', 'files', 'properFilename.md');
    
    try {
        await rename(sourcePath, targetPath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();