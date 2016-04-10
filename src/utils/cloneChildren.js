import React from 'react';

export default (children, props) =>
    React.Children.map(children, child => {
        if (!child) return child;
        const newProps = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, newProps);
    });
