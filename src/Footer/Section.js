import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

const Section = (props) => {
    const { className, logo, size, type, children, ...otherProps } = props;

    const classes = classNames({
        [`mdl-${size}-footer__${type}-section`]: true
    }, className);

    return (
        <div className={classes} {...otherProps}>
            {logo ? <div className="mdl-logo">{logo}</div> : null}
            {cloneChildren(children, { size })}
        </div>
    );
};

Section.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.node,
    size: PropTypes.oneOf(['mini', 'mega']),
    type: PropTypes.oneOf(['top', 'middle', 'bottom', 'left', 'right'])
};
Section.defaultProps = {
    size: 'mega',
    type: 'left'
};

export default Section;
