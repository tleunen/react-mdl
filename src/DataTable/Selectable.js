import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableHeader from './TableHeader';
import Checkbox from '../Checkbox';

const propTypes = {
    onSelectionChanged: PropTypes.func,
    rowKeyColumn: PropTypes.string,
    rows: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    selectable: PropTypes.bool
};

const defaultProps = {
    onSelectionChanged: () => {}
};

export default Component => {
    class Selectable extends React.Component {
        constructor(props) {
            super(props);

            this.handleChangeHeaderCheckbox = this.handleChangeHeaderCheckbox.bind(this);
            this.handleChangeRowCheckbox = this.handleChangeRowCheckbox.bind(this);
            this.builRowCheckbox = this.builRowCheckbox.bind(this);

            if (props.selectable) {
                this.state = {
                    headerSelected: false,
                    selectedRows: []
                };
            }
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.selectable) {
                const { rows, rowKeyColumn } = nextProps;

                // keep only existing rows
                const selectedRows = this.state.selectedRows
                    .filter(k => rows
                        .map((row, i) => row[rowKeyColumn] || row.key || i)
                        .indexOf(k) > -1
                    );

                this.setState({
                    headerSelected: selectedRows.length === rows.length,
                    selectedRows
                });

                nextProps.onSelectionChanged(selectedRows);
            }
        }

        handleChangeHeaderCheckbox(e) {
            const { rowKeyColumn, rows } = this.props;
            const selected = e.target.checked;
            const selectedRows = selected
                ? rows.map((row, idx) => row[rowKeyColumn] || row.key || idx)
                : [];

            this.setState({
                headerSelected: selected,
                selectedRows
            });

            this.props.onSelectionChanged(selectedRows);
        }

        handleChangeRowCheckbox(e) {
            const { rows } = this.props;
            const rowId = JSON.parse(e.target.dataset.reactmdl).id;
            const rowChecked = e.target.checked;
            const selectedRows = this.state.selectedRows;

            if (rowChecked) {
                selectedRows.push(rowId);
            } else {
                const idx = selectedRows.indexOf(rowId);
                selectedRows.splice(idx, 1);
            }

            this.setState({
                headerSelected: rows.length === selectedRows.length,
                selectedRows
            });

            this.props.onSelectionChanged(selectedRows);
        }

        builRowCheckbox(content, row, idx) {
            const rowKey = row[this.props.rowKeyColumn] || row.key || idx;
            const isSelected = this.state.selectedRows.indexOf(rowKey) > -1;
            return (
                <Checkbox
                    className="mdl-data-table__select"
                    data-reactmdl={JSON.stringify({ id: rowKey })}
                    checked={isSelected}
                    onChange={this.handleChangeRowCheckbox}
                />
            );
        }

        render() {
            const { rows, selectable, children, rowKeyColumn, ...otherProps } = this.props;

            const realRows = selectable
                ? rows.map((row, idx) => {
                    const rowKey = row[rowKeyColumn] || row.key || idx;
                    return {
                        ...row,
                        className: classNames({
                            'is-selected': this.state.selectedRows.indexOf(rowKey) > -1
                        }, row.className)
                    };
                })
                : rows;

            return (
                <Component rows={realRows} {...otherProps}>
                    {selectable && (
                        <TableHeader name="mdl-header-select" cellFormatter={this.builRowCheckbox}>
                            <Checkbox className="mdl-data-table__select" checked={this.state.headerSelected} onChange={this.handleChangeHeaderCheckbox} />
                        </TableHeader>
                    )}
                    {children}
                </Component>
            );
        }
    }
    Selectable.propTypes = propTypes;
    Selectable.defaultProps = defaultProps;
    return Selectable;
};
