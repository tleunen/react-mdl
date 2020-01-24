import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DialogTitle = (props) => {
    const { className, component, children, ...otherProps } = props;

    return React.createElement(component || 'h4', {
        className: classNames('mdl-dialog__title', className),
        ...otherProps
    }, children);
};

DialogTitle.propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.elementType,
        PropTypes.func
    ])
};

export default DialogTitle;
