import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import TabBar from './TabBar';
import mdlUpgrade from '../utils/mdlUpgrade';

const TabPropType = (props, propName, componentName) => {
    const prop = props[propName];
    if(prop.type !== Tab) {
        return new Error('`' + componentName + '` only accepts `Tab` as children.');
    }
};

class Tabs extends React.Component {
    static propTypes = {
        activeTab: PropTypes.number,
        children: PropTypes.oneOfType([
            TabPropType,
            PropTypes.arrayOf(TabPropType)
        ]),
        className: PropTypes.string,
        onChange: PropTypes.func,
        ripple: PropTypes.bool,
        tabBarProps: PropTypes.object,
    }

    render() {
        const { activeTab, className, onChange, ripple,
            children, tabBarProps, ...otherProps } = this.props;

        const classes = classNames('mdl-tabs mdl-js-tabs', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <div className={classes} {...otherProps}>
                <TabBar cssPrefix="mdl-tabs" activeTab={activeTab} onChange={onChange} {...tabBarProps} >
                    {children}
                </TabBar>
                <div className="react-mdl-hack" id="undefined" />
            </div>
        );
    }
}

export default mdlUpgrade(Tabs);
