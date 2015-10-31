import React, { PropTypes } from 'react';
import classNames from 'classnames';

var Grid = (props) => {
    var { className, children, ...otherProps } = props;

    var classes = classNames('mdl-grid', className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

Grid.propTypes = {
    className: PropTypes.string
};

var Cell = (props) => {
    var { align, className, children, col, phone, tablet, ...otherProps } = props;

    var classes = classNames('mdl-cell', {
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
