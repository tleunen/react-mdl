import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    activeTab: PropTypes.number,
    className: PropTypes.string,
    cssPrefix: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

const defaultProps = {
    activeTab: 0
};

class TabBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickTab = this.handleClickTab.bind(this);
    }

    handleClickTab(tabId) {
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
                {React.Children.map(children, (child, tabId) =>
                    React.cloneElement(child, {
                        cssPrefix,
                        tabId,
                        active: tabId === activeTab,
                        onTabClick: this.handleClickTab,
                    })
                )}
            </div>
        );
    }
}

TabBar.propTypes = propTypes;
TabBar.defaultProps = defaultProps;

export default TabBar;
