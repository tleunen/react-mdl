export default function getTag( el ) {
    if ( typeof el.type === 'string' ) {
        return el.type;
    }
    return el.type.displayName || el.type.name;
}
