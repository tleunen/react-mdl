import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';
import TableHeader from './TableHeader';

function initState(props) {
    return {
        rows: (props.rows || props.data).slice(),
        sortHeader: null,
        isAsc: true
    };
}

const propTypes = {
    columns: (props, propName, componentName) => (
        props[propName] && new Error(`${componentName}: \`${propName}\` is deprecated, please use the component \`TableHeader\` instead.`)
    ),
    data: (props, propName, componentName) => (
        props[propName] && new Error(`${componentName}: \`${propName}\` is deprecated, please use \`rows\` instead. \`${propName}\` will be removed in the next major release.`)
    ),
    rows: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    sortable: PropTypes.bool
};

export default Component => {
    class Sortable extends React.Component {
        // eslint-disable-next-line react/sort-comp
        constructor(props) {
            super(props);

            this.handleClickColumn = this.handleClickColumn.bind(this);

            if (props.sortable) {
                this.state = initState(props);
            } else {
                this.state = {
                    rows: undefined,
                    sortHeader: undefined,
                    isAsc: undefined,
                };
            }
        }

        // eslint-disable-next-line react/sort-comp
        static getDerivedStateFromProps(nextProps, state) {
            if (nextProps.sortable) {
                const realRows = nextProps.rows || nextProps.data;
                const rows = state.sortHeader
                    ? Sortable.getSortedRowsForColumn(nextProps, state.isAsc, state.sortHeader, realRows)
                    : realRows;

                if (!isEqual(rows, state.rows)) {
                    return { rows };
                }
            }
            return null;
        }

        getColumnClass(column) {
            const { sortHeader, isAsc } = this.state;

            return classNames(column.className, {
                'mdl-data-table__header--sorted-ascending': sortHeader === column.name && isAsc,
                'mdl-data-table__header--sorted-descending': sortHeader === column.name && !isAsc
            });
        }

        static getDefaultSortFn(a, b, isAsc) {
            return isAsc
                ? a.localeCompare(b)
                : b.localeCompare(a);
        }

        static getSortedRowsForColumn(props, isAsc, columnName, rows) {
            const columns = !!props.children
                ? React.Children.map(props.children, child => child.props)
                : props.columns;

            let sortFn = Sortable.getDefaultSortFn;
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
            const rows = Sortable.getSortedRowsForColumn(this.props, isAsc, columnName, this.state.rows);
            this.setState({
                sortHeader: columnName,
                isAsc,
                rows
            });
        }

        renderTableHeaders() {
            const { children, columns, sortable } = this.props;

            if (sortable) {
                return children
                    ? React.Children.map(children, child =>
                        React.cloneElement(child, {
                            className: this.getColumnClass(child.props),
                            onClick: this.handleClickColumn
                        })
                    )
                    : columns.map((column) =>
                        <TableHeader
                            key={column.name}
                            className={this.getColumnClass(column)}
                            name={column.name}
                            numeric={column.numeric}
                            tooltip={column.tooltip}
                            onClick={this.handleClickColumn}
                        >
                            {column.label}
                        </TableHeader>
                    );
            }
            return children;
        }

        render() {
            const { rows, data, ...otherProps } = this.props;
            const realRows = (this.state && this.state.rows) || rows || data;

            // remove unwanted props
            delete otherProps.sortable;

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
