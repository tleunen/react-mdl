import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';
import Spacer from './Spacer';

const Navigation = props => {
    const { className, children, ...otherProps } = props;

    const classes = classNames('mdl-navigation', className);

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
