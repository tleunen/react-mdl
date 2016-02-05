// see https://github.com/google/material-design-lite/blob/master/src/palette/_palette.scss
// for the color and level possibilities

export function getColorClass(color, level) {
    const lvlClass = (level) ? `-${level}` : '';
    return `mdl-color--${color}${lvlClass}`;
}

export function getTextColorClass(color, level) {
    const lvlClass = (level) ? `-${level}` : '';
    return `mdl-color-text--${color}${lvlClass}`;
}
