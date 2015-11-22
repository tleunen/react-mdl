import React from 'react';
import Code from './Code';

function getJSON( value ) {
    const json = JSON.stringify( value, 0, 2 );
    return json.replace( /"([^"]+)":/g, '$1:' ).trim();
}
const Prop = ( props ) => {
    let { attr, value } = props;
    attr = ` ${ attr }`;
    if ( value === true ) {
        return <span>{ attr }</span>;
    }
    if ( React.isValidElement( value ) ) {
        return <span>{ attr }={`{ `}<Code el={ value } style={{ marginLeft: '1em' }} />{` }`}</span>;
    }

    switch ( typeof value ) {
        case 'string':
            value = `"${ value }"`;
            break;
        case 'object':
            // value = `{${ getJSON( value ) }}`;
            value = <span style={{ whiteSpace: 'pre' }}>{`{`}{ getJSON( value ) }{`}`}</span>;
            break;
        case 'function':
            value = `{ this._${ props.attr } }`;
            break;
        case 'boolean':
        case 'number':
        default:
            value = `{ ${ value } }`;
    }
    return <span>{ attr }={ value }</span>;
};
Prop.propTypes = {
    attr: React.PropTypes.string,
    value: React.PropTypes.any
};
export default Prop;
