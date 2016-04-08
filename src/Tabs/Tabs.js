import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import TabBar from './TabBar';

const TabPropType = (props, propName, componentName) => {
    const prop = props[propName];
    return prop.type !== Tab && new Error(`'${componentName}' only accepts 'Tab' as children.`);
};

const propTypes = {
    activeTab: PropTypes.number,
    children: PropTypes.oneOfType([
        TabPropType,
        PropTypes.arrayOf(TabPropType)
    ]),
    className: PropTypes.string,
    onChange: PropTypes.func,
    tabBarProps: PropTypes.object,
};

const Tabs = props => {
    const { activeTab, className, onChange,
        children, tabBarProps, ...otherProps } = props;

    const classes = classNames('mdl-tabs is-upgraded', className);

    return (
        <div className={classes} {...otherProps}>
            <TabBar cssPrefix="mdl-tabs" activeTab={activeTab} onChange={onChange} {...tabBarProps} >
                {children}
            </TabBar>
        </div>
    );
};

Tabs.propTypes = propTypes;

export default Tabs;
