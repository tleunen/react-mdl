import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import TabBar from './TabBar';
import mdlUpgrade from '../utils/mdlUpgrade';

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
    ripple: PropTypes.bool,
};

const Tabs = props => {
    const { activeTab, className, onChange,
        children, tabBarProps, ripple, ...otherProps } = props;

    const classes = classNames('mdl-tabs mdl-js-tabs', {
        'mdl-js-ripple-effect': ripple
    }, className);

    return (
        <div className={classes} {...otherProps}>
            <TabBar cssPrefix="mdl-tabs" activeTab={activeTab} onChange={onChange} {...tabBarProps} >
                {children}
            </TabBar>
        </div>
    );
};

Tabs.propTypes = propTypes;

export default mdlUpgrade(Tabs, true);
