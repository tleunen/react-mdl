import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';
import shadows from './utils/shadows';

const Grid = (props) => {
    const { noSpacing, className, children, component, shadow, ...otherProps } = props;

    const hasShadow = typeof shadow !== 'undefined';
    const shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

    const classes = classNames('mdl-grid', {
        'mdl-grid--no-spacing': noSpacing,
        [shadows[shadowLevel]]: hasShadow
    }, className);

    return React.createElement(component || 'div', {
        className: classes,
        ...otherProps
    }, children);
};

Grid.propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ]),
    noSpacing: PropTypes.bool,
    shadow: PropTypes.number
};

/* eslint-disable react/no-multi-comp */
const Cell = (props) => {
    const { align, className, children, col, phone, tablet, component,
        hideDesktop, hidePhone, hideTablet, shadow, ...otherProps } = props;

    const hasShadow = typeof shadow !== 'undefined';
    const shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

    const classes = classNames('mdl-cell', {
        [`mdl-cell--${col}-col`]: true,
        [`mdl-cell--${phone}-col-phone`]: typeof phone !== 'undefined',
        [`mdl-cell--${tablet}-col-tablet`]: typeof tablet !== 'undefined',
        [`mdl-cell--${align}`]: typeof align !== 'undefined',
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

Cell.propTypes = {
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
    className: PropTypes.string,
    col: PropTypes.number.isRequired,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ]),
    phone: PropTypes.number,
    tablet: PropTypes.number,
    hideDesktop: PropTypes.bool,
    hidePhone: PropTypes.bool,
    hideTablet: PropTypes.bool,
    shadow: PropTypes.number
};

export default Grid;
export { Cell };
