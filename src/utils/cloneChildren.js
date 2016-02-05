import React from 'react';

export default (children, props) =>
    React.Children.map(children, child => {
        const newProps = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, newProps);
    });
