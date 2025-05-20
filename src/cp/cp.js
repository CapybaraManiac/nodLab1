import { spawn } from 'child_process';
import { join } from 'path';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [join(process.cwd(), 'src', 'cp', 'files', 'script.js'), ...args], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
