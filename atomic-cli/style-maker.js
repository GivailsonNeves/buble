const fs = require('fs').promises;
const {namesReplacer} = require('./helper');

async function setup(atomicType, elementName) {
    console.log("creating style");
    try {

        const ATOMIC_FOLDER = `${__dirname}/../src/components/${atomicType}/${elementName.toLowerCase()}`;
        fs.mkdir(ATOMIC_FOLDER, { recursive: true }, (err) => {
            if (err) throw err;
        });
        
        const templateContent = await fs.readFile(`${__dirname}/templates/style.txt`, 'utf8');
        
        const data = namesReplacer(atomicType, elementName, templateContent);
    
        const fileName = `styles.scss`;

        await fs.writeFile(`${ATOMIC_FOLDER}/${fileName}`, data,'utf8');
        
        
        console.log("style created");
    } catch (e) {
        console.error('style', e)
    }
}

module.exports = setup;