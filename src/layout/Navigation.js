import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';
import Spacer from './Spacer';

class Navigation extends React.Component {
    static propTypes = {
        className: PropTypes.string
    }

    render() {
        var { className, ...otherProps } = this.props;

        var classes = classNames('mdl-navigation', className);

        return (
            <nav className={classes} {...otherProps}>
                {cloneChildren(this.props.children, (child) => ({
                    className: classNames({ 'mdl-navigation__link': child.type !== Spacer }, child.props.className)
                }))}
            </nav>
        );
    }
}

export default Navigation;
