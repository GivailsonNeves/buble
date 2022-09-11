function capitalFirst(name) {
    return name[0].toUpperCase() + name.substring(1);
}

function dashNameToCapital(name) {
    return name.toLowerCase().split("-")
        .map(splitName => capitalFirst(splitName))
        .join("");
}

function namesReplacer (atomicElement, componentName, data)  {

    const atomicLowerName = atomicElement.toLowerCase();
    const componentLowerDashName = componentName.toLowerCase();
    const componentUpperName = dashNameToCapital(componentName);
    
    return data.replace(/##ATOMIC_FOLDER##/g, atomicLowerName)
        .replace(/##CAPITAL_ATOMIC_FOLDER##/g, capitalFirst(atomicElement) )
        .replace(/##DASH_NAME##/g, componentLowerDashName)
        .replace(/##UPPER_NAME##/g, componentUpperName);
}

module.exports = {
    namesReplacer,
    capitalFirst,
    dashNameToCapital
}