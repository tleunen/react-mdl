import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';
import mdlUpgrade from './utils/mdlUpgrade';
import shadows from './utils/shadows';
import Tooltip from './Tooltip';

class DataTable extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        columns: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.node,
                name: PropTypes.string,
                numeric: PropTypes.bool,
                tooltip: PropTypes.node
            })
        ).isRequired,
        data: (props, propName, componentName) => {
            if(props[propName]) {
                return new Error(`${componentName}: \`${propName}\` is deprecated, please use \`rows\` instead. \`${propName}\` will be removed in the next major release.`);
            }
        },
        rows: PropTypes.arrayOf(
            PropTypes.object
        ).isRequired,
        selectable: (props, propName, componentName) => {
            if(props[propName]) {
                return new Error(`${componentName}: \`${propName}\` is deprecated. Please manage the checkboxes yourself. An example is available here: http://tleunen.github.io/react-mdl/#/datatables \`${propName}\` will be removed in the next major release.`);
            }
        },
        shadow: PropTypes.number
    };

    _getCellClass(column) {
        return !column.numeric ? 'mdl-data-table__cell--non-numeric' : '';
    }

    render() {
        const { className, columns, data,
            selectable, shadow, ...otherProps } = this.props;

        const rows = this.props.rows || data;

        const hasShadow = typeof shadow !== 'undefined';
        const shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

        const classes = classNames('mdl-data-table mdl-js-data-table', {
            'mdl-data-table--selectable': selectable,
            [shadows[shadowLevel]]: hasShadow
        }, className);

        return (
            <table className={classes} {...otherProps}>
                <thead>
                    <tr>
                        {columns.map((column) => {
                            const columnClasses = classNames(this._getCellClass(column), column.className);

                            const label = (!!column.tooltip)
                                ? <Tooltip label={column.tooltip}>{column.label}</Tooltip>
                                : column.label;

                            return <th key={column.name} className={columnClasses}>{label}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => {
                        const rowClasses = classNames({
                            'is-selected': row.selected
                        }, row.className);
                        return (
                            <tr key={row.key ? row.key : idx} className={rowClasses}>
                                {columns.map((column) => {
                                    return <td key={column.name} className={this._getCellClass(column)}>{row[column.name]}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default mdlUpgrade(DataTable);
