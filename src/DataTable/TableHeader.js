import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from '../Tooltip';

const propTypes = {
    cellFormatter: PropTypes.func, // Used by the Table component to format the cell content for this "column"
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    numeric: PropTypes.bool,
    onClick: PropTypes.func,
    nosort: PropTypes.bool,
    sortFn: PropTypes.func, // Used by the Sortable component
    tooltip: PropTypes.node
};

const TableHeader = props => {
    const { className, name, numeric, onClick,
        nosort, tooltip, children, ...otherProps } = props;

    // remove unwanted props
    // see https://github.com/Hacker0x01/react-datepicker/issues/517#issuecomment-230171426
    delete otherProps.cellFormatter;
    delete otherProps.sortFn;

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
