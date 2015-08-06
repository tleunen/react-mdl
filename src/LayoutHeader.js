import React, { PropTypes } from 'react';
import classNames from 'classnames';

function renderNavigation(children) {
    return (
        <nav className="mdl-navigation">
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    className: classNames('mdl-navigation__link', child.props.className)
                });
            })}
        </nav>
    );
}

export class HeaderRow extends React.Component {
    render() {
        var { className, title, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__header-row', className);

        var hasChildren = React.Children.count(this.props.children);

        return (
            <div className={classes} {...otherProps}>
                {title ? <span className="mdl-layout-title">{title}</span> : null}
                <div className="mdl-layout-spacer"></div>
                {hasChildren ? renderNavigation(this.props.children) : null}
            </div>
        );
    }
}

HeaderRow.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};

export class HeaderTabs extends React.Component {
    render() {
        var { className, ripple, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__tab-bar', {
            'mdl-js-ripple-effect': ripple !== false
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                        className: classNames('mdl-layout__tab', child.props.className)
                    });
                })}
            </div>
        );
    }
}

HeaderTabs.propTypes = {
    className: PropTypes.string,
    ripple: PropTypes.string
};

export default class LayoutHeader extends React.Component {
    render() {
        var { className, scroll, title, transparent, waterfall, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__header', {
            'mdl-layout__header--scroll': scroll,
            'mdl-layout__header--transparent': transparent,
            'mdl-layout__header--waterfall': waterfall
        }, className);

        var isRowOrTab = false;
        React.Children.forEach(this.props.children, child => {
            if(child.type === HeaderRow || child.type === HeaderTabs) {
                isRowOrTab = true;
            }
        });

        return (
            <header className={classes} {...otherProps}>
                {isRowOrTab ? this.props.children : (
                    <HeaderRow title={title}>{this.props.children}</HeaderRow>
                )}
            </header>
        );
    }
}

LayoutHeader.propTypes = {
    className: PropTypes.string,
    scroll: PropTypes.bool,
    title: PropTypes.string,
    transparent: PropTypes.bool,
    waterfall: PropTypes.bool
};
