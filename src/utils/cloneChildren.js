import React from 'react';

export default function(children, props) {
    return React.Children.map(children, child => {
        const newProps = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, newProps);
    });
}
