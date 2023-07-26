import BlueBird from 'bluebird';
import fs from 'fs';

const files = fs.readdirSync(__dirname);
console.log(files);

const migrations = files.filter((file) => file !== 'index.ts')
    BlueBird.map(migrations, async (file) => {
        const func = require(`./${file}`)
        await func();
    });
