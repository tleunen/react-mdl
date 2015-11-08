import React, { PropTypes } from 'react';
import classNames from 'classnames';

var LinkList = (props) => {
    var { className, size, children, ...otherProps } = props;

    var classes = classNames({
        [`mdl-${size}-footer__link-list`]: true
    }, className);

    return (
        <ul className={classes} {...otherProps}>
            {React.Children.map(children, child => {
                return <li>{child}</li>;
            })}
        </ul>
    );
};

LinkList.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'mega'])
};
LinkList.defaultProps = {
    size: 'mega'
};

export default LinkList;
