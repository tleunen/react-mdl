import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import clamp from 'clamp';
import shadows from '../utils/shadows';

const propTypes = {
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
    className: PropTypes.string,
    col: PropTypes.number,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ]),
    phone: PropTypes.number,
    tablet: PropTypes.number,
    offset: PropTypes.number,
    offsetDesktop: PropTypes.number,
    offsetTablet: PropTypes.number,
    offsetPhone: PropTypes.number,
    hideDesktop: PropTypes.bool,
    hidePhone: PropTypes.bool,
    hideTablet: PropTypes.bool,
    shadow: PropTypes.number
};

function isDefined(data) {
    return typeof data !== 'undefined';
}

const Cell = (props) => {
    const { align, className, children, col, phone, tablet, component,
        hideDesktop, hidePhone, hideTablet, shadow, offset, offsetDesktop,
        offsetTablet, offsetPhone, ...otherProps } = props;

    const hasShadow = isDefined(shadow);
    const shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

    const classes = classNames('mdl-cell', {
        // columns
        [`mdl-cell--${col}-col`]: isDefined(col),
        [`mdl-cell--${phone}-col-phone`]: isDefined(phone),
        [`mdl-cell--${tablet}-col-tablet`]: isDefined(tablet),
        // alignment and offsets
        [`mdl-cell--${align}`]: isDefined(align),
        [`mdl-cell--${offset}-offset`]: isDefined(offset),
        [`mdl-cell--${offsetDesktop}-offset-desktop`]: isDefined(offsetDesktop),
        [`mdl-cell--${offsetTablet}-offset-tablet`]: isDefined(offsetTablet),
        [`mdl-cell--${offsetPhone}-offset-phone`]: isDefined(offsetPhone),
        // utils
        'mdl-cell--hide-desktop': hideDesktop,
        'mdl-cell--hide-phone': hidePhone,
        'mdl-cell--hide-tablet': hideTablet,
        [shadows[shadowLevel]]: hasShadow
    }, className);

    return React.createElement(component || 'div', {
        className: classes,
        ...otherProps
    }, children);
};

Cell.propTypes = propTypes;

export default Cell;
