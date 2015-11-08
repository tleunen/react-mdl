import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

var Footer = (props) => {
    var { className, size, children, ...otherProps } = props;

    var classes = classNames({
        [`mdl-${size}-footer`]: true
    }, className);

    return (
        <footer className={classes} {...otherProps}>
            {cloneChildren(children, { size: size })}
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
