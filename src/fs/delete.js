import { unlink } from 'fs/promises';
import { join } from 'path';

const remove = async () => {
    const filePath = join(process.cwd(), 'src', 'fs', 'files', 'fileToRemove.txt');
    
    try {
        await unlink(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();