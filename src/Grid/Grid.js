import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';
import shadows from '../utils/shadows';

const propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ]),
    noSpacing: PropTypes.bool,
    shadow: PropTypes.number
};

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

Grid.propTypes = propTypes;

export default Grid;
