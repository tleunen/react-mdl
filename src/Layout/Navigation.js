import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';
import Spacer from './Spacer';

var Navigation = props => {
    var { className, children, ...otherProps } = props;

    var classes = classNames('mdl-navigation', className);

    return (
        <nav className={classes} {...otherProps}>
            {cloneChildren(children, (child) => ({
                className: classNames({ 'mdl-navigation__link': child.type !== Spacer }, child.props.className)
            }))}
        </nav>
    );
};
Navigation.propTypes = {
    className: PropTypes.string
};

export default Navigation;
