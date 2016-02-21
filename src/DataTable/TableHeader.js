import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tooltip from '../Tooltip';

const propTypes = {
    cellFormatter: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string,
    numeric: PropTypes.bool,
    tooltip: PropTypes.node
};

const TableHeader = (props) => {
    const { cellFormatter, className, name, numeric,
        tooltip, children, ...otherProps } = props;

    const classes = classNames({
        'mdl-data-table__cell--non-numeric': !numeric
    }, className);


    return (
        <th className={classes} {...otherProps}>
            {!!tooltip ? (
                <Tooltip label={tooltip}>{children}</Tooltip>
            ) : children}
        </th>
    );
};

TableHeader.propTypes = propTypes;

export default TableHeader;
