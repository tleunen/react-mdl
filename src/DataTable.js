import React, { PropTypes } from 'react';
import Checkbox from './Checkbox';

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allRowsSelected: false,
            checkedRows: this.props.content.map(e => {
                return false;
            })
        };

        this._handleSelectAll = this._handleSelectAll.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allRowsSelected: false,
            checkedRows: this.props.content.map(e => {
                return false;
            })
        });
    }

    _handleSelectAll(checked) {
        var checkedRows = this.state.checkedRows.map(e => {
            return checked;
        });

        this.setState({
            allRowsSelected: checked,
            checkedRows: checkedRows
        });
    }

    _handleSelect(idx) {
        return (checked) => {
            var checkedRows = this.state.checkedRows;
            checkedRows[idx] = checked;
            var allSelected = checkedRows.every(e => e);

            this.setState({
                allRowsSelected: allSelected,
                checkedRows: checkedRows
            });
        };
    }

    render() {
        var isSelectable = !!this.props.selectable;

        var headers = this.props.headers.map((e, i) => {
            var className = !e.numeric ? 'mdl-data-table__cell--non-numeric' : '';
            return <th key={i} className={className}>{e.label}</th>;
        });

        if(isSelectable) {
            headers.unshift(
                <th key="header_selectable">
                    <Checkbox id='select_all' checked={this.state.allRowsSelected} onChange={this._handleSelectAll} />
                </th>
            );
        }

        var content = this.props.content.map((e, i) => {
            var isSelected = isSelectable && this.state.checkedRows[i] ? 'is-selected' : '';
            return (
                <tr key={i} className={isSelected}>
                    {isSelectable ? <td><Checkbox id={'select_'+i} checked={this.state.checkedRows[i]} onChange={this._handleSelect(i)} /></td> : null}
                    {e.map((a, j) => {
                        var className = !this.props.headers[j].numeric ? 'mdl-data-table__cell--non-numeric' : '';
                        return <td key={j} className={className}>{a}</td>;
                    })}
                </tr>
            );
        });

        return (
            <table className="mdl-data-table">
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        );
    }
}

DataTable.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.array
    ).isRequired,
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            numeric: PropTypes.bool
        })
    ).isRequired,
    selectable: PropTypes.bool
};

export default DataTable;
