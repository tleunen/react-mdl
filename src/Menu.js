import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';
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

export default mdlUpgrade(Menu);
export const MenuItem = basicClassCreator('MenuItem', 'mdl-menu__item', 'li');
