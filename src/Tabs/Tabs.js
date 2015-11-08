import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import TabBar from './TabBar';
import mdlUpgrade from '../utils/mdlUpgrade';

class Tabs extends React.Component {
    static propTypes = {
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
    }

    render() {
        const { activeTab, className, onChange, ripple,
            children, ...otherProps } = this.props;

        const classes = classNames('mdl-tabs mdl-js-tabs', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <div className={classes} {...otherProps}>
                <TabBar cssPrefix="mdl-tabs" activeTab={activeTab} onChange={onChange}>
                    {children}
                </TabBar>
                <div className="react-mdl-hack" id="undefined" />
            </div>
        );
    }
}

export default mdlUpgrade(Tabs);
