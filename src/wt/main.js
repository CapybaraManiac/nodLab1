import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join } from 'path';

const performCalculations = async () => {
    const numCPUs = cpus().length;
    const workers = [];
    const results = [];
    
    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker(join(process.cwd(), 'src', 'wt', 'worker.js'));
        workers.push(worker);
        
        worker.postMessage(10 + i);
        
        const result = await new Promise((resolve) => {
            worker.on('message', (data) => {
                resolve({ status: 'resolved', data });
            });
            
            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });
        });
        
        results.push(result);
    }
    
    console.log(results);
};

await performCalculations();