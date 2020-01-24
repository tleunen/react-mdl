import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';
import TableHeader from './TableHeader';
import Checkbox from '../Checkbox';

const propTypes = {
    columns: (props, propName, componentName) => (
        props[propName] && new Error(`${componentName}: \`${propName}\` is deprecated, please use the component \`TableHeader\` instead.`)
    ),
    data: (props, propName, componentName) => (
        props[propName] && new Error(`${componentName}: \`${propName}\` is deprecated, please use \`rows\` instead. \`${propName}\` will be removed in the next major release.`)
    ),
    onSelectionChanged: PropTypes.func,
    rowKeyColumn: PropTypes.string,
    rows: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    selectable: PropTypes.bool,
    selectedRows: PropTypes.array
};

const defaultProps = {
    onSelectionChanged: () => {
        // do nothing
    }
};

export default Component => {
    class Selectable extends React.Component {
        // eslint-disable-next-line react/sort-comp
        constructor(props) {
            super(props);

            this.handleChangeHeaderCheckbox = this.handleChangeHeaderCheckbox.bind(this);
            this.handleChangeRowCheckbox = this.handleChangeRowCheckbox.bind(this);
            this.builRowCheckbox = this.builRowCheckbox.bind(this);

            this.state = {
                headerSelected: false,
                selectedRows: props.selectedRows || []
            };
        }

        static getDerivedStateFromProps(nextProps, state) {
            const { rows, data, rowKeyColumn } = nextProps;
            const rrows = rows || data;
            if (nextProps.selectable) {
                const selectedRows = (nextProps.selectedRows || state.selectedRows)
                        .filter(k => rrows
                            .map((row, i) => row[rowKeyColumn] || row.key || i)
                            .indexOf(k) > -1
                        );
                const headerSelected = selectedRows.length === rrows.length;
                const update = { };
                if (headerSelected !== state.headerSelected) {
                    update.headerSelected = headerSelected;
                }
                if (!nextProps.selectedRows) {
                    if (!isEqual(state.selectedRows, selectedRows)) {
                        update.selectedRows = selectedRows;
                        nextProps.onSelectionChanged(selectedRows);
                    }
                }
                if (Object.keys(update).length) {
                    return update;
                }
            }
            return null;
        }

        handleChangeHeaderCheckbox(e) {
            const { rowKeyColumn, rows, data } = this.props;
            const selected = e.target.checked;
            const selectedRows = selected
                ? (rows || data).map((row, idx) => row[rowKeyColumn] || row.key || idx)
                : [];

            this.setState({
                headerSelected: selected,
                selectedRows
            });

            this.props.onSelectionChanged(selectedRows);
        }

        handleChangeRowCheckbox(e) {
            const { rows, data } = this.props;
            const rowId = JSON.parse(e.target.dataset
                ? e.target.dataset.reactmdl
                : e.target.getAttribute('data-reactmdl')
            ).id;
            const rowChecked = e.target.checked;
            const selectedRows = this.props.selectedRows || this.state.selectedRows;

            if (rowChecked) {
                selectedRows.push(rowId);
            } else {
                const idx = selectedRows.indexOf(rowId);
                selectedRows.splice(idx, 1);
            }

            this.setState({
                headerSelected: (rows || data).length === selectedRows.length,
                selectedRows
            });

            this.props.onSelectionChanged(selectedRows);
        }

        builRowCheckbox(content, row, idx) {
            const rowKey = row[this.props.rowKeyColumn] || row.key || idx;
            const isSelected = (this.props.selectedRows || this.state.selectedRows).indexOf(rowKey) > -1;
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
            const { rows, data, selectable, children, rowKeyColumn, ...otherProps } = this.props;

            // remove unwatned props
            // see https://github.com/Hacker0x01/react-datepicker/issues/517#issuecomment-230171426
            delete otherProps.onSelectionChanged;
            delete otherProps.selectedRows;

            const realRows = selectable
                ? (rows || data).map((row, idx) => {
                    const rowKey = row[rowKeyColumn] || row.key || idx;
                    return {
                        ...row,
                        className: classNames({
                            'is-selected': (this.props.selectedRows || this.state.selectedRows).indexOf(rowKey) > -1
                        }, row.className)
                    };
                })
                : (rows || data);

            return (
                <Component rows={realRows} {...otherProps}>
                    {selectable && (
                        <TableHeader name="mdl-header-select" cellFormatter={this.builRowCheckbox}>
                            <Checkbox
                                className="mdl-data-table__select"
                                checked={this.state.headerSelected}
                                onChange={this.handleChangeHeaderCheckbox}
                            />
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
