import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tooltip from '../Tooltip';

const propTypes = {
    cellFormatter: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    numeric: PropTypes.bool,
    onClick: PropTypes.func,
    nosort: PropTypes.bool,
    sortFn: PropTypes.func,
    tooltip: PropTypes.node
};

const TableHeader = props => {
    const { className, name, numeric, onClick,
        nosort, tooltip, children, ...otherProps } = props;

    const classes = classNames({
        'mdl-data-table__cell--non-numeric': !numeric
    }, className);

    const clickFn = !nosort && onClick
        ? (e) => onClick(e, name)
        : null;

    return (
        <th className={classes} onClick={clickFn} {...otherProps}>
            {!!tooltip ? (
                <Tooltip label={tooltip}>{children}</Tooltip>
            ) : children}
        </th>
    );
};

TableHeader.propTypes = propTypes;

export default TableHeader;
