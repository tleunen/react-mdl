import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

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
        selectable: PropTypes.bool
    }

    _getCellClass(column) {
        return !column.numeric ? 'mdl-data-table__cell--non-numeric' : '';
    }

    render() {
        var { className, columns, data, selectable, ...otherProps } = this.props;

        var classes = classNames('mdl-data-table mdl-js-data-table', {
            'mdl-data-table--selectable': selectable
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
                    {data.map((e, i) => {
                        return (
                            <tr key={e.key ? e.key : i}>
                                {columns.map((column) => {
                                    return <td key={column.name} className={this._getCellClass(column)}>{e[column.name]}</td>;
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
