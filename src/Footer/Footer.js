import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

const Footer = (props) => {
    const { className, size, children, ...otherProps } = props;

    const classes = classNames({
        [`mdl-${size}-footer`]: true
    }, className);

    return (
        <footer className={classes} {...otherProps}>
            {cloneChildren(children, { size })}
        </footer>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'mega'])
};
Footer.defaultProps = {
    size: 'mega'
};

export default Footer;
