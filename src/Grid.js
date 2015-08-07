import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Grid extends React.Component {
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

Grid.propTypes = {
    className: PropTypes.string
};

export class Cell extends React.Component {
    render() {
        var { className, col, phone, tablet, ...otherProps } = this.props;

        var classes = classNames('mdl-cell', {
            [`mdl-cell--${col}-col`]: true,
            [`mdl-cell--${phone}-col-tablet`]: typeof phone !== 'undefined',
            [`mdl-cell--${tablet}-col-tablet`]: typeof tablet !== 'undefined'
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {this.props.children}
            </div>
        );
    }
}

Cell.propTypes = {
    className: PropTypes.string,
    col: PropTypes.number.isRequired,
    phone: PropTypes.number,
    tablet: PropTypes.number
};
