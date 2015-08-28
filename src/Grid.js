import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Grid extends React.Component {
    static propTypes = {
        className: PropTypes.string
    }

    render() {
        var { className, ...otherProps } = this.props;

        var classes = classNames('mdl-grid', className);

        return (
            <div className={classes} {...otherProps}>
                {this.props.children}
            </div>
        );
    }
}

class Cell extends React.Component {
    static propTypes = {
        align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
        className: PropTypes.string,
        col: PropTypes.number.isRequired,
        phone: PropTypes.number,
        tablet: PropTypes.number
    }

    render() {
        var { align, className, col, phone, tablet, ...otherProps } = this.props;

        var classes = classNames('mdl-cell', {
            [`mdl-cell--${col}-col`]: true,
            [`mdl-cell--${phone}-col-phone`]: typeof phone !== 'undefined',
            [`mdl-cell--${tablet}-col-tablet`]: typeof tablet !== 'undefined',
            [`mdl-cell--${align}`]: typeof align !== 'undefined'
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {this.props.children}
            </div>
        );
    }
}

export default Grid;
export { Cell };
