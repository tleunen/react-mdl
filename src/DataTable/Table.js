import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';
import shadows from '../utils/shadows';
import makeSelectable from './Selectable';
import makeSortable from './Sortable';

const propTypes = {
    className: PropTypes.string,
    rowKeyColumn: PropTypes.string,
    rows: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    shadow: PropTypes.number
};

class Table extends React.Component {
    renderCell(column, row, idx) {
        const className = !column.numeric ? 'mdl-data-table__cell--non-numeric' : '';
        return (
            <td key={column.name} className={className}>
                {column.cellFormatter ? column.cellFormatter(row[column.name], row, idx) : row[column.name]}
            </td>
        );
    }

    render() {
        const { className, shadow, children,
            rowKeyColumn, rows, ...otherProps } = this.props;

        const hasShadow = typeof shadow !== 'undefined';
        const shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

        const classes = classNames('mdl-data-table', {
            [shadows[shadowLevel]]: hasShadow
        }, className);

        return (
            <table className={classes} {...otherProps}>
                <thead>
                    <tr>
                        {children}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) =>
                        <tr key={row[rowKeyColumn] || row.key || idx} className={row.className}>
                            {React.Children.map(children, child => child && this.renderCell(child.props, row, idx))}
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = propTypes;

export default makeSortable(makeSelectable(Table));
