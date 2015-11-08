import React, { PropTypes } from 'react';
import classNames from 'classnames';

var Drawer = props => {
    var { className, title, children, ...otherProps } = props;

    var classes = classNames('mdl-layout__drawer', className);

    return (
        <div className={classes} {...otherProps}>
            {title ? <span className="mdl-layout-title">{title}</span> : null}
            {children}
        </div>
    );
};
Drawer.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};

export default Drawer;
