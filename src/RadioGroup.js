import React, { PropTypes } from 'react';
import Radio from './Radio';
import cloneChildren from './utils/cloneChildren';

class RadioGroup extends React.Component {
    static propTypes = {
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
    }

    _handleChange = (value) => {
        this.props.onChange(value);
    }

    render() {
        return (
            <div>
                {cloneChildren(this.props.children, (child) => ({
                    name: this.props.name,
                    checked: child.props.value === this.props.value,
                    onChange: this._handleChange
                }))}
            </div>
        );
    }
}

export default RadioGroup;
