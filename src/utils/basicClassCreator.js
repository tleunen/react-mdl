import React from 'react';
import classNames from 'classnames';

export default function(defaultClassName, element = 'div') {
    return (props) => {
        var { className, children, ...otherProps } = props;

        return React.createElement(element, {
            className: classNames(defaultClassName, className),
            ...otherProps
        }, children);
    };
}
