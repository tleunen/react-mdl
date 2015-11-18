import React, { PropTypes } from 'react';
import classNames from 'classnames';

class TabBar extends React.Component {
    static propTypes = {
        activeTab: PropTypes.number,
        className: PropTypes.string,
        cssPrefix: PropTypes.string.isRequired,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        activeTab: 0
    }

    constructor(props) {
        super(props);

        this._handleClickTab = this._handleClickTab.bind(this);
    }

    _handleClickTab(tabId) {
        if (this.props.onChange) {
            this.props.onChange(tabId);
        }
    }

    render() {
        const { activeTab, className, cssPrefix,
            children, ...otherProps } = this.props;

        const classes = classNames({
            [`${cssPrefix}__tab-bar`]: true
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {React.Children.map(this.props.children, (child, tabId) => {
                    return React.cloneElement(child, {
                        cssPrefix,
                        tabId,
                        active: tabId === activeTab,
                        onTabClick: this._handleClickTab
                    });
                })}

            </div>
        );
    }
}

export default TabBar;
