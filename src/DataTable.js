import React, { PropTypes } from 'react';
import classNames from 'classnames';
import clamp from 'clamp';
import mdlUpgrade from './utils/mdlUpgrade';
import shadows from './utils/shadows';

class DataTable extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        columns: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                name: PropTypes.string,
                numeric: PropTypes.bool
            })
        ).isRequired,
        data: PropTypes.arrayOf(
            PropTypes.object
        ).isRequired,
        selectable: PropTypes.bool,
        shadow: PropTypes.number
    };

    _getCellClass(column) {
        return !column.numeric ? 'mdl-data-table__cell--non-numeric' : '';
    }

    render() {
        const { className, columns, data,
            selectable, shadow, ...otherProps } = this.props;

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
                            return <th key={column.name} className={this._getCellClass(column)}>{column.label}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((elt, idx) => {
                        return (
                            <tr key={elt.key ? elt.key : idx}>
                                {columns.map((column) => {
                                    return <td key={column.name} className={this._getCellClass(column)}>{elt[column.name]}</td>;
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
