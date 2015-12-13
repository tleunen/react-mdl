import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Drawer = props => {
    const { className, title, children, ...otherProps } = props;

    const classes = classNames('mdl-layout__drawer', className);

    return (
        <div className={classes} {...otherProps}>
            {title ? <span className="mdl-layout-title">{title}</span> : null}
            {children}
        </div>
    );
};
Drawer.propTypes = {
    className: PropTypes.string,
    title: PropTypes.node
};

export default Drawer;
