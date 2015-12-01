import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Content = props => {
    const { children, className, ...otherProps } = props;

    const classes = classNames('mdl-layout__content', className);

    return (
        <div className={classes} {...otherProps}>
            {children}
            <div className="react-mdl-header-tabs-hack" id="undefined" />
        </div>
    );
};

Content.propTypes = {
    className: PropTypes.string
};

export default Content;
