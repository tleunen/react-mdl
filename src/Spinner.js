import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Spinner extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        singleColor: PropTypes.bool
    }

    render() {
        var { className, singleColor, ...otherProps } = this.props;

        var classes = classNames('mdl-spinner mdl-js-spinner is-active', {
            'mdl-spinner--single-color': singleColor
        }, className);

        return <div className={classes} {...otherProps}></div>;
    }
}

export default mdlUpgrade(Spinner);
