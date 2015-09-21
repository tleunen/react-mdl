import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';

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
        onChange: PropTypes.func.isRequired
    }

    static defaultProps = {
        activeTab: 0
    }

    _handleClickTab = (tabId) => {
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
                            active: index === activeTab,
                            onTabClick: this._handleClickTab
                        });
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
export { Tab };
