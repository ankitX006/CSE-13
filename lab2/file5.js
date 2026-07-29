import {stat} from 'fs/promises';

const stats = await stat('readme.md');
console.log('isfile:', stats.isFile());
console.log('isDirectory:', stats.isDirectory());
console.log('size:', stats.size);
console.log('created:', stats.birthtime);
