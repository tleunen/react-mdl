import React, { PropTypes } from 'react';
import classNames from 'classnames';

const DialogTitle = (props) => {
    const { className, component, children, ...otherProps } = props;

    const classes = classNames('mdl-dialog__title', className);

    return React.createElement(component || 'h4', {
        className: classes,
        ...otherProps
    }, children);
};

DialogTitle.propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ])
};

export default DialogTitle;
