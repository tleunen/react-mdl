import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import clamp from 'clamp';
import shadows from '../utils/shadows';
import TableHeader from './TableHeader';
import makeSelectable from './Selectable';
import makeSortable from './Sortable';

const propTypes = {
    className: PropTypes.string,
    columns: (props, propName, componentName) => (
        props[propName] && new Error(`${componentName}: \`${propName}\` is deprecated, please use the component \`TableHeader\` instead.`)
    ),
    data: (props, propName, componentName) => (
        props[propName] && new Error(`${componentName}: \`${propName}\` is deprecated, please use \`rows\` instead. \`${propName}\` will be removed in the next major release.`)
    ),
    rowKeyColumn: PropTypes.string,
    rows: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    shadow: PropTypes.number
};

class Table extends React.Component {
    renderCell(column, row, idx) {
        const className = !column.numeric ? 'mdl-data-table__cell--non-numeric' : '';
        const field = column.field || column.name;
        return (
            <td key={column.name} className={className}>
                {column.cellFormatter ? column.cellFormatter(row[field], row, idx) : row[field]}
            </td>
        );
    }

    render() {
        const { className, columns, shadow, children,
            rowKeyColumn, rows, data, ...otherProps } = this.props;
        const realRows = rows || data;

        const hasShadow = typeof shadow !== 'undefined';
        const shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

        const classes = classNames('mdl-data-table', {
            [shadows[shadowLevel]]: hasShadow
        }, className);

        const columnChildren = !!children
            ? React.Children.toArray(children).filter(Boolean)
            : columns.map(column =>
                <TableHeader
                    key={column.name}
                    className={column.className}
                    name={column.name}
                    numeric={column.numeric}
                    tooltip={column.tooltip}
                >
                    {column.label}
                </TableHeader>
            );
        return (
            <table className={classes} {...otherProps}>
                <thead>
                    <tr>
                        {columnChildren}
                    </tr>
                </thead>
                <tbody>
                    {realRows.map((row, idx) => {
                        const { className: mdlRowPropsClassName, ...remainingMdlRowProps } = row.mdlRowProps || {};

                        return (
                            <tr
                                key={row[rowKeyColumn] || row.key || idx}
                                className={classNames(row.className, mdlRowPropsClassName)}
                                {...remainingMdlRowProps}
                            >
                                {columnChildren.map((child) => this.renderCell(child.props, row, idx))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = propTypes;

export default makeSortable(makeSelectable(Table));
export const UndecoratedTable = Table;
