import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LinkList = (props) => {
    const { className, size, children, ...otherProps } = props;

    const classes = classNames({
        [`mdl-${size}-footer__link-list`]: true
    }, className);

    return (
        <ul className={classes} {...otherProps}>
            {React.Children.map(children, child =>
                <li>{child}</li>
            )}
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
