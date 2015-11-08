import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Spacer from './Spacer';

var HeaderRow = props => {
    var { className, title, children, ...otherProps } = props;

    var classes = classNames('mdl-layout__header-row', className);

    return (
        <div className={classes} {...otherProps}>
            {title && <span className="mdl-layout-title">{title}</span>}
            <Spacer />
            {children}
        </div>
    );
};
HeaderRow.propTypes = {
    className: PropTypes.string,
    title: PropTypes.any
};

export default HeaderRow;
