const getCSS = (variavel) => {
    return getComputedStyle(document.bory).getPropertyValue(variavel)
}

export {getCSS}