import React, { PropTypes } from 'react';
import Radio from './Radio';

class RadioGroup extends React.Component {
    static propTypes = {
        childContainer: PropTypes.string,
        children: PropTypes.arrayOf(function(props, propName, componentName) {
            var prop = props[propName];
            if(prop.type !== Radio) {
                return new Error('`' + componentName + '` only accepts `Radio` as children.');
            }
        }),
        container: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired
    }

    static defaultProps = {
        container: 'div'
    }

    _handleChange = (value) => {
        this.props.onChange(value);
    }

    render() {
        var { name, onChange, value, children,
            container, childContainer, ...otherProps} = this.props;

        return React.createElement(container, otherProps,
            React.Children.map(children, child => {
                var clonedChild = React.cloneElement(child, {
                    name: name,
                    checked: child.props.value === value,
                    onChange: this._handleChange
                });

                return childContainer ? React.createElement(childContainer, {}, clonedChild) : clonedChild;
            })
        );
    }
}

export default RadioGroup;
