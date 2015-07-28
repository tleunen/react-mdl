import React, { PropTypes } from 'react';
import Radio from './Radio';

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(value) {
        this.props.onChange(value);
    }

    render() {
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                        name: this.props.name,
                        checked: child.props.value === this.props.value,
                        onChange: this._handleChange
                    });
                }, this)}
            </div>
        );
    }
}

RadioGroup.propTypes = {
    children: PropTypes.arrayOf(function(props, propName, componentName) {
        var prop = props[propName];
        if(prop.type !== Radio) {
            return new Error('`' + componentName + '` only accepts `Radio` as children.');
        }
    }),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default RadioGroup;
