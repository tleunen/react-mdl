import React, { PropTypes } from 'react';
import classNames from 'classnames';

class DataTable extends React.Component {
    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
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
                        {columns.map((column, i) => {
                            return <th key={i} className={this._getCellClass(column)}>{column.label}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, i) => {
                        return (
                            <tr key={i}>
                                {columns.map((column, j) => {
                                    return <td key={j} className={this._getCellClass(column)}>{e[column.name]}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

DataTable.propTypes = {
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
};

export default DataTable;
