import React, { PropTypes } from 'react';
import classNames from 'classnames';

class LinkList extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        size: PropTypes.oneOf(['mini', 'mega']),
        title: PropTypes.string
    }

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

export default LinkList;
