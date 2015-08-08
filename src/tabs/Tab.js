import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Tab extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        className: PropTypes.string,
        onTabClick: PropTypes.func,
        tabId: PropTypes.number
    }

    _handleClick = () => {
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

export default Tab;
