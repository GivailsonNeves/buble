const fs = require('fs').promises;
const {namesReplacer} = require('./helper');

async function setup(atomicType, elementName) {
    console.log("creating index");
    try {

        const ATOMIC_FOLDER = `${__dirname}/../src/components/${atomicType}/${elementName.toLowerCase()}`;
        fs.mkdir(ATOMIC_FOLDER, { recursive: true }, (err) => {
            if (err) throw err;
        });
        
        const templateContent = await fs.readFile(`${__dirname}/templates/index.txt`, 'utf8');
        
        const data = namesReplacer(atomicType, elementName, templateContent);
    
        const fileName = `index.tsx`;

        await fs.writeFile(`${ATOMIC_FOLDER}/${fileName}`, data,'utf8');
        
        
        console.log("index created");
    } catch (e) {
        console.error('component', e)
    }
}

module.exports = setup;