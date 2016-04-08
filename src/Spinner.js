import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

const propTypes = {
    className: PropTypes.string,
    singleColor: PropTypes.bool
};

// eslint-disable-next-line react/prefer-stateless-function
class Spinner extends React.Component {
    render() {
        const { className, singleColor, ...otherProps } = this.props;

        const classes = classNames('mdl-spinner mdl-js-spinner is-active', {
            'mdl-spinner--single-color': singleColor
        }, className);

        return <div className={classes} {...otherProps}></div>;
    }
}

Spinner.propTypes = propTypes;

export default mdlUpgrade(Spinner);
