function capitalFirst(name) {
    return name[0].toUpperCase() + name.substring(1);
}

function namesReplacer (atomicElement, componentName, data)  {

    const atomicLowerName = atomicElement.toLowerCase();
    const componentLowerDashName = componentName.toLowerCase();
    const componentUperName = componentLowerName.split("-")
        .map(splitName => capitalFirst(splitName))
        .join("");
    
    return data.replace(/[{ATOMIC_FOLDER}]/g, atomicLowerName)
        .replace(/[{CAPITAL_ATOMIC_FOLDER}]/g, capitalFirst(atomicElement) )
        .replace(/[{DASH_NAME}]/g, componentLowerDashName)
        .replace(/[{UPPER_NAME}]/g, componentUperName);
}

module.exports = {
    namesReplacer,
    capitalFirst
}