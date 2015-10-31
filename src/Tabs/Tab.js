import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Tab extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        className: PropTypes.string,
        cssPrefix: PropTypes.string,
        onTabClick: PropTypes.func,
        style: PropTypes.object,
        tabId: PropTypes.number
    }

    static defaultProps = {
        style: {}
    }

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.props.onTabClick(this.props.tabId);
    }

    render() {
        const { active, className, cssPrefix, tabId,
            onTabClick, style, ...otherProps } = this.props;

        const classes = classNames({
            [`${cssPrefix}__tab`]: true,
            'is-active': active
        }, className);

        style.cursor = 'pointer';

        return <a className={classes} onClick={this._handleClick} style={style} {...otherProps}>{this.props.children}</a>;
    }
}

export default Tab;
