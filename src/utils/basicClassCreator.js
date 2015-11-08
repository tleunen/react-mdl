import React from 'react';
import classNames from 'classnames';

export default function(displayName, defaultClassName, element = 'div') {
    const fn = (props) => {
        const { className, children, ...otherProps } = props;

        return React.createElement(element, {
            className: classNames(defaultClassName, className),
            ...otherProps
        }, children);
    };

    fn.displayName = displayName;

    return fn;
}
