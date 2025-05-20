import { writeFile } from 'fs/promises';
import { join } from 'path';

const create = async () => {
    const filePath = join(process.cwd(), 'src', 'fs', 'files', 'fresh.txt');
    try {
        await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();