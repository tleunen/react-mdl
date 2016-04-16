import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

const propTypes = {
    className: PropTypes.string,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.number
};

// eslint-disable-next-line react/prefer-stateless-function
class Slider extends React.Component {
    componentDidUpdate() {
        if (typeof this.props.value !== 'undefined') {
            findDOMNode(this).MaterialSlider.change(this.props.value);
        }
    }

    render() {
        const { className, ...otherProps } = this.props;

        const classes = classNames('mdl-slider mdl-js-slider', className);

        return (
            <input
                className={classes}
                type="range"
                {...otherProps}
            />
        );
    }
}

Slider.propTypes = propTypes;

export default mdlUpgrade(Slider);
