import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function(defaultClassName, element = 'div') {
    class BasicClass extends React.Component {
        render() {
            var { className, ...otherProps } = this.props;

            var classes = classNames(defaultClassName, className);

            return React.createElement(element, {
                className: classNames(defaultClassName, className),
                ...otherProps
            }, this.props.children);
        }
    }

    BasicClass.propTypes = {
        className: PropTypes.string
    };

    return BasicClass;
};
