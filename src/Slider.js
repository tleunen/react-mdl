import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MDL from './mdlbase';

class Slider extends MDL.UpgradedComponent {
    static propTypes = {
        className: PropTypes.string,
        max: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.number
    }

    _handleChange = (event) => {
        this.props.onChange(parseFloat(event.target.value));
    }

    render() {
        var { className, max, min, onChange, value, ...otherProps } = this.props;

        var classes = classNames('mdl-slider mdl-js-slider', className);

        return (
            <input
                className={classes}
                type="range"
                min={min}
                max={max}
                value={value}
                tabIndex="0"
                onChange={this._handleChange}
                {...otherProps}
            />
        );
    }
}

export default Slider;
