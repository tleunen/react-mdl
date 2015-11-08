import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from '../Tabs/Tab';
import TabBar from '../Tabs/TabBar';

const HeaderTabs = props => {
    const { className, ripple, children, ...otherProps } = props;

    const classes = classNames({
        'mdl-js-ripple-effect': ripple
    }, className);

    return (
        <TabBar cssPrefix="mdl-layout" className={classes} {...otherProps}>
            {children}
        </TabBar>
    );
};
HeaderTabs.propTypes = {
    activeTab: PropTypes.number,
    children: PropTypes.arrayOf((props, propName, componentName) => {
        const prop = props[propName];
        if(prop.type !== Tab) {
            return new Error('`' + componentName + '` only accepts `Tab` as children.');
        }
    }),
    className: PropTypes.string,
    onChange: PropTypes.func,
    ripple: PropTypes.bool
};

export default HeaderTabs;
