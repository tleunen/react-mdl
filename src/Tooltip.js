import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDLComponent from './utils/MDLComponent';

const Tooltip = (props) => {
    const { label, large, children, position, ...otherProps } = props;
    const id = Math.random().toString(36).substr(2);

    const newLabel = (typeof label === 'string')
        ? <span>{label}</span>
        : label;

    let element;
    if (typeof children === 'string') {
        element = <span>{children}</span>;
    } else {
        element = React.Children.only(children);
    }

    return (
        <div style={{ display: 'inline-block' }} {...otherProps}>
            {React.cloneElement(element, { id })}
            <MDLComponent>
                {React.cloneElement(newLabel, {
                    htmlFor: id,
                    className: classNames('mdl-tooltip', {
                        'mdl-tooltip--large': large,
                        [`mdl-tooltip--${position}`]: typeof position !== 'undefined'
                    })
                })}
            </MDLComponent>
        </div>
    );
};

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.node.isRequired,
    large: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};

export default Tooltip;
