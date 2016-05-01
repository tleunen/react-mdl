import React, { PropTypes } from 'react';
import classNames from 'classnames';

function initState(props) {
    return {
        rows: props.rows.slice(),
        sortHeader: null,
        isAsc: true
    };
}

const propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    sortable: PropTypes.bool
};

export default Component => {
    class Sortable extends React.Component {
        constructor(props) {
            super(props);

            this.handleClickColumn = this.handleClickColumn.bind(this);

            if (props.sortable) {
                this.state = initState(props);
            }
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.sortable) {
                const realRows = nextProps.rows;
                const rows = this.state.sortHeader
                    ? this.getSortedRowsForColumn(this.state.isAsc, this.state.sortHeader, realRows)
                    : realRows;

                this.setState({
                    rows
                });
            }
        }

        getColumnClass(column) {
            const { sortHeader, isAsc } = this.state;

            return classNames(column.className, {
                'mdl-data-table__header--sorted-ascending': sortHeader === column.name && isAsc,
                'mdl-data-table__header--sorted-descending': sortHeader === column.name && !isAsc
            });
        }

        getDefaultSortFn(a, b, isAsc) {
            return isAsc
                ? a.localeCompare(b)
                : b.localeCompare(a);
        }

        getSortedRowsForColumn(isAsc, columnName, rows) {
            const columns = React.Children.map(this.props.children, child => child.props);

            let sortFn = this.getDefaultSortFn;
            for (let i = 0; i < columns.length; i++) {
                if (columns[i].name === columnName && columns[i].sortFn) {
                    sortFn = columns[i].sortFn;
                    break;
                }
            }

            return rows.sort((a, b) =>
                sortFn(
                    String(a[columnName]),
                    String(b[columnName]),
                    isAsc
                )
            );
        }

        handleClickColumn(e, columnName) {
            const isAsc = this.state.sortHeader === columnName ? !this.state.isAsc : true;
            const rows = this.getSortedRowsForColumn(isAsc, columnName, this.state.rows);
            this.setState({
                sortHeader: columnName,
                isAsc,
                rows
            });
        }

        renderTableHeaders() {
            const { children, sortable } = this.props;

            if (sortable) {
                return React.Children.map(children, child =>
                    React.cloneElement(child, {
                        className: this.getColumnClass(child.props),
                        onClick: this.handleClickColumn
                    })
                );
            }
            return children;
        }

        render() {
            const { rows, ...otherProps } = this.props;
            const realRows = (this.state && this.state.rows) || rows;

            return (
                <Component rows={realRows} {...otherProps}>
                    {this.renderTableHeaders()}
                </Component>
            );
        }
    }
    Sortable.propTypes = propTypes;
    return Sortable;
};
