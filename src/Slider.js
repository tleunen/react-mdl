import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Slider extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        max: PropTypes.number,
        min: PropTypes.number,
        onChange: PropTypes.func,
        value: PropTypes.number
    }

    render() {
        var { className, ...otherProps } = this.props;

        var classes = classNames('mdl-slider mdl-js-slider', className);

        return (
            <input
                className={classes}
                type="range"
                {...otherProps}
            />
        );
    }
}

export default mdlUpgrade(Slider);
