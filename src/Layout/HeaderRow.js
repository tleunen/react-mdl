import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spacer from './Spacer';

const HeaderRow = props => {
    const { className, title, children, hideSpacer, ...otherProps } = props;

    const classes = classNames('mdl-layout__header-row', className);

    return (
        <div className={classes} {...otherProps}>
            {title && <span className="mdl-layout-title">{title}</span>}
            {title && !hideSpacer && <Spacer />}
            {children}
        </div>
    );
};
HeaderRow.propTypes = {
    className: PropTypes.string,
    title: PropTypes.node,
    hideSpacer: PropTypes.bool
};

export default HeaderRow;
