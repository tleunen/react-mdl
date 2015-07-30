import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Slider extends React.Component {
    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
    }

    _handleChange(event) {
        this.props.onChange(event.target.value);
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

Slider.propTypes = {
    className: PropTypes.string,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number
};

export default Slider;
