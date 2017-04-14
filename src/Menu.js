import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import basicClassCreator from './utils/basicClassCreator';

const propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    ripple: PropTypes.bool,
    target: PropTypes.string.isRequired,
    valign: PropTypes.oneOf(['bottom', 'top'])
};

const defaultProps = {
    align: 'left',
    valign: 'bottom'
};

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends React.Component {
    componentDidMount() {
        window.componentHandler.upgradeElements(findDOMNode(this));
    }

    componentWillUnmount() {
        const elt = findDOMNode(this);

        window.componentHandler.downgradeElements(elt);

        const parent = elt.parentElement;
        const grandparent = parent && parent.parentElement;

        if (parent && grandparent && parent.classList.contains('mdl-menu__container')) {
            grandparent.replaceChild(elt, parent);
        }
    }

    render() {
        const { align, children, className, ripple,
            target, valign, ...otherProps } = this.props;

        const classes = classNames('mdl-menu mdl-js-menu', {
            [`mdl-menu--${valign}-${align}`]: true,
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <ul className={classes} data-mdl-for={target} {...otherProps}>
                {children}
            </ul>
        );
    }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
export const MenuItem = basicClassCreator('MenuItem', 'mdl-menu__item', 'li');
