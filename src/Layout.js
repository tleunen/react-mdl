import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Layout extends React.Component {
    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
    }

    render() {
        var { className, fixedDrawer, fixedHeader, fixedTabs, ...otherProps } = this.props;

        var classes = classNames('mdl-layout mdl-js-layout', {
            'mdl-layout--fixed-drawer': fixedDrawer,
            'mdl-layout--fixed-header': fixedHeader,
            'mdl-layout--fixed-tabs': fixedTabs
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    className: PropTypes.string,
    fixedDrawer: PropTypes.bool,
    fixedHeader: PropTypes.bool,
    fixedTabs: PropTypes.bool
};

export default Layout;

import LayoutHeader, { HeaderRow, HeaderTabs } from './LayoutHeader';
export { LayoutHeader as Header, HeaderRow, HeaderTabs };




function renderNavigation(children) {
    return (
        <nav className="mdl-navigation">
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    className: 'mdl-navigation__link'
                });
            })}
        </nav>
    );
}

export class Drawer extends React.Component {
    render() {
        var { className, title, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__drawer', className);

        return (
            <div className={classes} {...otherProps}>
                {title ? <span className="mdl-layout-title">{title}</span> : null}
                {renderNavigation(this.props.children)}
            </div>
        );
    }
}

Drawer.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};

export class Content extends React.Component {
    render() {
        var { className, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__content', className);

        return (
            <main className={classes} {...otherProps}>
                {this.props.children}
            </main>
        );
    }
}

Content.propTypes = {
    className: PropTypes.string
};
