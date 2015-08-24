import React from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';
import Spacer from './Spacer.js';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="mdl-navigation">
                {cloneChildren(this.props.children, (child) => ({
                    className: classNames({ 'mdl-navigation__link': child.type !== Spacer }, child.props.className)
                }))}
            </nav>
        );
    }
}

export default Navigation;
