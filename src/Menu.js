import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';
import basicClassCreator from './utils/basicClassCreator';

class Menu extends React.Component {
    static propTypes = {
        align: PropTypes.oneOf(['left', 'right']),
        className: PropTypes.string,
        ripple: PropTypes.bool,
        target: PropTypes.string.isRequired,
        valign: PropTypes.oneOf(['bottom', 'top'])
    }

    render() {
        var { align, className, ripple, target, valign, ...otherProps} = this.props;

        align = align || 'left';
        valign = valign || 'bottom';
        // enable ripple by default
        ripple = ripple !== false;

        var classes = classNames('mdl-menu mdl-js-menu', {
            [`mdl-menu--${valign}-${align}`]: true,
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <ul className={classes} htmlFor={target} {...otherProps}>
                {this.props.children}
            </ul>
        );
    }
}

export default mdlUpgrade(Menu);
export var MenuItem = basicClassCreator('mdl-menu__item', 'li');
