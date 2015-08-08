/*
 * Because of the way the MaterialTabs and MaterialTab elements are written in google/material-design-lite
 * I'm forced to rewrite them entirely in React
 * Keep in mind that because of that, it might not always be up to date compared to the original version
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Tab extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.props.onTabClick(this.props.tabId);
    }

    render() {
        var { active, className, tabId, onTabClick, ...otherProps } = this.props;

        var classes = classNames('mdl-tabs__tab', {
            'is-active': active
        }, className);

        return <a className={classes} onClick={this._handleClick} {...otherProps}>{this.props.children}</a>;
    }
}

Tab.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onTabClick: PropTypes.func,
    tabId: PropTypes.number
};

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this._handleClickTab = this._handleClickTab.bind(this);
    }

    _handleClickTab(tabId) {
        this.props.onChange(tabId);
    }

    render() {
        var { activeTab, className, onChange, ...otherProps } = this.props;

        var classes = classNames('mdl-tabs is-upgraded', className);

        return (
            <div className={classes} {...otherProps}>
                <div className="mdl-tabs__tab-bar">
                    {React.Children.map(this.props.children, (child, index) => {
                        return React.cloneElement(child, {
                            tabId: index,
                            active: index === (activeTab || 0),
                            onTabClick: this._handleClickTab
                        });
                    })}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    activeTab: PropTypes.number,
    children: PropTypes.arrayOf(function(props, propName, componentName) {
        var prop = props[propName];
        if(prop.type !== Tab) {
            return new Error('`' + componentName + '` only accepts `Tab` as children.');
        }
    }),
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Tabs;
