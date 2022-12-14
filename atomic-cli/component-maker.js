const fs = require('fs').promises;
const {namesReplacer, dashNameToCapital} = require('./helper');

async function setup(atomicType, elementName) {
    console.log("creating component");
    try {

        const ATOMIC_FOLDER = `${__dirname}/../src/components/${atomicType}/${elementName.toLowerCase()}`;
        fs.mkdir(ATOMIC_FOLDER, { recursive: true }, (err) => {
            if (err) throw err;
        });
        
        const templateContent = await fs.readFile(`${__dirname}/templates/component.txt`, 'utf8');
        
        const data = namesReplacer(atomicType, elementName, templateContent);
    
        const fileName = `${dashNameToCapital(elementName)}.tsx`;

        await fs.writeFile(`${ATOMIC_FOLDER}/${fileName}`, data,'utf8');
        
        
        console.log("component created");
    } catch (e) {
        console.error('models', e)
    }
}

module.exports = setup;