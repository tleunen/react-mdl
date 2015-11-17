import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Grid = (props) => {
    const { noSpacing, className, children, ...otherProps } = props;

    const classes = classNames('mdl-grid', {
        'mdl-grid--no-spacing': noSpacing,
    }, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

Grid.propTypes = {
    className: PropTypes.string,
    noSpacing: PropTypes.bool
};

/* eslint-disable react/no-multi-comp */
const Cell = (props) => {
    const { align, className, children, col, phone, tablet, ...otherProps } = props;

    const classes = classNames('mdl-cell', {
        [`mdl-cell--${col}-col`]: true,
        [`mdl-cell--${phone}-col-phone`]: typeof phone !== 'undefined',
        [`mdl-cell--${tablet}-col-tablet`]: typeof tablet !== 'undefined',
        [`mdl-cell--${align}`]: typeof align !== 'undefined'
    }, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

Cell.propTypes = {
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
    className: PropTypes.string,
    col: PropTypes.number.isRequired,
    phone: PropTypes.number,
    tablet: PropTypes.number
};

export default Grid;
export { Cell };
