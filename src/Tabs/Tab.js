import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Tab extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        className: PropTypes.string,
        onTabClick: PropTypes.func,
        style: PropTypes.object,
        tabId: PropTypes.number
    }

    static defaultProps = {
        style: {}
    }

    _handleClick = () => {
        this.props.onTabClick(this.props.tabId);
    }

    render() {
        var { active, className, tabId, onTabClick, style, ...otherProps } = this.props;

        var classes = classNames('mdl-tabs__tab', {
            'is-active': active
        }, className);

        style.cursor = 'pointer';

        return <a className={classes} onClick={this._handleClick} style={style} {...otherProps}>{this.props.children}</a>;
    }
}

export default Tab;
