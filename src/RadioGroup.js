import React, { PropTypes } from 'react';
import Radio from './Radio';

const RadioGroup = (props) => {
    const { name, value, children,
        container, childContainer, ...otherProps } = props;

    return React.createElement(container, otherProps,
        React.Children.map(children, child => {
            const clonedChild = React.cloneElement(child, {
                checked: child.props.value === value,
                name,
                ...otherProps
            });

            return childContainer ? React.createElement(childContainer, {}, clonedChild) : clonedChild;
        })
    );
};

RadioGroup.propTypes = {
    childContainer: PropTypes.string,
    children: PropTypes.arrayOf((props, propName, componentName) => {
        const prop = props[propName];
        if(prop.type !== Radio) {
            return new Error('`' + componentName + '` only accepts `Radio` as children.');
        }
    }),
    container: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

RadioGroup.defaultProps = {
    container: 'div'
};

export default RadioGroup;
