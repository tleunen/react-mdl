import React, { PropTypes } from 'react';
import classNames from 'classnames';

class DataTable extends React.Component {
    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
    }

    render() {
        var isSelectable = this.props.selectable;

        var headers = this.props.headers.map((e, i) => {
            var className = !e.numeric ? 'mdl-data-table__cell--non-numeric' : '';
            return <th key={i} className={className}>{e.label}</th>;
        });

        var content = this.props.content.map((e, i) => {
            return (
                <tr key={i}>
                    {e.map((a, j) => {
                        var className = !this.props.headers[j].numeric ? 'mdl-data-table__cell--non-numeric' : '';
                        return <td key={j} className={className}>{a}</td>;
                    })}
                </tr>
            );
        });

        var classes = classNames('mdl-data-table mdl-js-data-table', {
            'mdl-data-table--selectable': isSelectable
        });

        return (
            <table className={classes}>
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
