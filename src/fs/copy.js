import { mkdir, readdir, copyFile } from 'fs/promises';
import { join } from 'path';

const copy = async () => {
    const sourceDir = join(process.cwd(), 'src', 'fs', 'files');
    const targetDir = join(process.cwd(), 'src', 'fs', 'files_copy');
    
    try {
        await mkdir(targetDir, { recursive: false });
        const files = await readdir(sourceDir);
        
        for (const file of files) {
            const sourcePath = join(sourceDir, file);
            const targetPath = join(targetDir, file);
            await copyFile(sourcePath, targetPath);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
