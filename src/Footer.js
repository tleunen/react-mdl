import React, { PropTypes } from 'react';
import classNames from 'classnames';

function cloneChildrenWithSize(children, size) {
    return React.Children.map(children, child => {
        return React.cloneElement(child, {
            size: size
        });
    });
}

export default class Footer extends React.Component {
    render() {
        var { className, size, ...otherProps } = this.props;

        size = size || 'mega';

        var classes = classNames({
            [`mdl-${size}-footer`]: true
        }, className);

        return (
            <footer className={classes} {...otherProps}>
                {cloneChildrenWithSize(this.props.children, size)}
            </footer>
        );
    }
}

Footer.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'mega'])
};

export class Section extends React.Component {
    render() {
        var { className, logo, size, type, ...otherProps } = this.props;

        type = type || 'mega';

        var classes = classNames({
            [`mdl-${size}-footer__${type}-section`]: true
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {logo ? <div className="mdl-logo">{logo}</div> : null}
                {cloneChildrenWithSize(this.props.children, size)}
            </div>
        );
    }
}

Section.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'mega']),
    type: PropTypes.oneOf(['top', 'middle', 'bottom', 'left', 'right'])
};


export class DropDownSection extends React.Component {
    render() {
        var { className, size, title, ...otherProps } = this.props;

        var classes = classNames({
            [`mdl-${size}-footer__drop-down-section`]: true
        }, className);

        return (
            <div className={classes} {...otherProps}>
                <input className={`mdl-${size}-footer__heading-checkbox`} type="checkbox" defaultChecked={true} />
                <h1 className={`mdl-${size}-footer__heading`}>{title}</h1>
                {cloneChildrenWithSize(this.props.children, size)}
            </div>
        );
    }
}

DropDownSection.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'mega']),
    title: PropTypes.string
};


export class LinkList extends React.Component {
    render() {
        var { className, size, title, ...otherProps } = this.props;

        var classes = classNames({
            [`mdl-${size}-footer__link-list`]: true
        }, className);

        return (
            <ul className={classes} {...otherProps}>
                {React.Children.map(this.props.children, child => {
                    return <li>{child}</li>;
                })}
            </ul>
        );
    }
}

LinkList.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'mega']),
    title: PropTypes.string
};

