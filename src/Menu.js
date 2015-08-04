import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Menu extends React.Component {
    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
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

Menu.propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    ripple: PropTypes.bool,
    target: PropTypes.string.isRequired,
    valign: PropTypes.oneOf(['bottom', 'top'])
};

export default Menu;


export class MenuItem extends React.Component {
    render() {
        var { className, ...otherProps } = this.props;

        var classes = classNames('mdl-menu__item', className);

        return (
            <li className={classes} {...otherProps}>
                {this.props.children}
            </li>
        );
    }
}

MenuItem.propTypes = {
    className: PropTypes.string
};
