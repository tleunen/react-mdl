import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDLComponent from './utils/MDLComponent';

var Tooltip = (props) => {
    var { label, large, children, ...otherProps } = props;
    var id = Math.random().toString(36).substr(2);

    if(typeof label === 'string') {
        label = <span>{label}</span>;
    }

    var element;
    if(typeof children === 'string') {
        element = <span>{children}</span>;
    }
    else {
        element = React.Children.only(children);
    }

    return (
        <div style={{display: 'inline-block'}} {...otherProps}>
            {React.cloneElement(element, { id })}
            <MDLComponent>
                {React.cloneElement(label, {
                    htmlFor: id,
                    className: classNames('mdl-tooltip', {
                        'mdl-tooltip--large': large
                    })
                })}
            </MDLComponent>
        </div>
    );
};

Tooltip.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    label: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    large: PropTypes.bool
};

export default Tooltip;
