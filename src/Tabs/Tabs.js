import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import mdlUpgrade from '../utils/mdlUpgrade';

class Tabs extends React.Component {
    static propTypes = {
        activeTab: PropTypes.number,
        children: PropTypes.arrayOf(function(props, propName, componentName) {
            var prop = props[propName];
            if(prop.type !== Tab) {
                return new Error('`' + componentName + '` only accepts `Tab` as children.');
            }
        }),
        className: PropTypes.string,
        onChange: PropTypes.func,
        ripple: PropTypes.bool
    }

    static defaultProps = {
        activeTab: 0
    }

    _handleClickTab = (tabId) => {
        if (this.props.onChange) {
            this.props.onChange(tabId);
        }
    }

    render() {
        var { activeTab, className, onChange, ripple, ...otherProps } = this.props;

        var classes = classNames('mdl-tabs mdl-js-tabs', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <div className={classes} {...otherProps}>
                <div className="mdl-tabs__tab-bar">
                    {React.Children.map(this.props.children, (child, index) => {
                        return React.cloneElement(child, {
                            tabId: index,
                            active: index === activeTab,
                            onTabClick: this._handleClickTab
                        });
                    })}
                </div>
                <div className="react-mdl-hack" id="undefined" />
            </div>
        );
    }
}

export default mdlUpgrade(Tabs);
export { Tab };
