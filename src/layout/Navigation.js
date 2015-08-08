import React from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="mdl-navigation">
                {cloneChildren(this.props.children, (child) => ({
                    className: classNames('mdl-navigation__link', child.props.className)
                }))}
            </nav>
        );
    }
}

export default Navigation;
