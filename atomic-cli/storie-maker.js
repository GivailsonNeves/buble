const fs = require('fs').promises;
const {namesReplacer, dashNameToCapital} = require('./helper');

async function setup(atomicType, elementName) {
    console.log("creating index");
    try {

        const ATOMIC_FOLDER = `${__dirname}/../src/stories/${atomicType}`;
        fs.mkdir(ATOMIC_FOLDER, { recursive: true }, (err) => {
            if (err) throw err;
        });
        
        const templateContent = await fs.readFile(`${__dirname}/templates/storie.txt`, 'utf8');
        
        const data = namesReplacer(atomicType, elementName, templateContent);
    
        const fileName = `${dashNameToCapital(elementName)}.stories.tsx`;

        await fs.writeFile(`${ATOMIC_FOLDER}/${fileName}`, data,'utf8');
        
        
        console.log("index created");
    } catch (e) {
        console.error('component', e)
    }
}

module.exports = setup;