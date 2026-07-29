import {mkdir} from 'fs/promises';

// await mkdir('upload/resume');
// console.log('resume created under upload folder');

await mkdir('images/profile/logis', {recursive: true});
console.log('all folders created');