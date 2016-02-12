import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Tab extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
        className: PropTypes.string,
        component: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.func
        ]),
        cssPrefix: PropTypes.string,
        onTabClick: PropTypes.func,
        style: PropTypes.object,
        tabId: PropTypes.number
    };

    static defaultProps = {
        style: {}
    };

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.props.onTabClick(this.props.tabId);
    }

    render() {
        const { active, className, component, children, cssPrefix,
            onTabClick, style, tabId, ...otherProps } = this.props;

        const classes = classNames({
            [`${cssPrefix}__tab`]: true,
            'is-active': active
        }, className);

        style.cursor = 'pointer';

        return React.createElement(component || 'a', {
            className: classes,
            onClick: this._handleClick,
            style,
            ...otherProps
        }, children);
    }
}

export default Tab;
