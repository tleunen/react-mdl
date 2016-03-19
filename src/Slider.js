import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Slider extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        max: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.number.isRequired
    };

    componentDidUpdate() {
        findDOMNode(this).MaterialSlider.change(this.props.value);
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

export default mdlUpgrade(Slider);
