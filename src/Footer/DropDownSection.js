import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

const DropDownSection = (props) => {
    const { className, size, title, children, ...otherProps } = props;

    const classes = classNames({
        [`mdl-${size}-footer__drop-down-section`]: true
    }, className);

    return (
        <div className={classes} {...otherProps}>
            <input className={`mdl-${size}-footer__heading-checkbox`} type="checkbox" defaultChecked />
            <h1 className={`mdl-${size}-footer__heading`}>{title}</h1>
            {cloneChildren(children, { size })}
        </div>
    );
};

DropDownSection.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'mega']),
    title: PropTypes.node.isRequired
};
DropDownSection.defaultProps = {
    size: 'mega'
};

export default DropDownSection;
