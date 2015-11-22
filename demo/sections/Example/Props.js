import React from 'react';
import Prop from './Prop';

export default ( { el } ) => {
    const { props } = el;
    let { defaultProps } = el.type;
    defaultProps = defaultProps || {};

    const keys = Object
        .keys( props )
        .filter( key => key !== 'children' )
        .filter( key => defaultProps[ key ] !== props[ key ] )
        ;
    return (
        <span>
        { keys.map( key =>
            <Prop
                key={ key }
                attr={ key }
                value={ props[ key ] }
            />
        ) }
        </span>
    );
};
