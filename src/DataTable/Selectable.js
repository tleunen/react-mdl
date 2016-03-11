import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableHeader from './TableHeader';
import Checkbox from '../Checkbox';

export default Component =>
    class Selectable extends React.Component {
        static propTypes = {
            columns: (props, propName, componentName) => (
                props[propName] && new Error(`${componentName}: \`${propName}\` is deprecated, please use the component \`TableHeader\` instead.`)
            ),
            data: (props, propName, componentName) => (
                props[propName] && new Error(`${componentName}: \`${propName}\` is deprecated, please use \`rows\` instead. \`${propName}\` will be removed in the next major release.`)
            ),
            onSelectionChanged: PropTypes.func,
            rows: PropTypes.arrayOf(
                PropTypes.object
            ).isRequired,
            selectable: PropTypes.bool
        };

        static defaultProps = {
            onSelectionChanged: () => {
                // do nothing
            }
        };

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

        handleChangeHeaderCheckbox(e) {
            const { rows, data } = this.props;
            const selected = e.target.checked;
            const selectedRows = selected
                ? (rows || data).map((row, idx) => row.key || idx)
                : [];

            this.setState({
                headerSelected: selected,
                selectedRows
            });

            this.props.onSelectionChanged(selectedRows);
        }

        handleChangeRowCheckbox(e) {
            const { rows, data } = this.props;
            const rowId = parseInt(e.target.dataset.rowId, 10);
            const rowChecked = e.target.checked;
            const selectedRows = this.state.selectedRows;

            if (rowChecked) {
                selectedRows.push(rowId);
            }
            else {
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
            const rowKey = row.key || idx;
            const isSelected = this.state.selectedRows.indexOf(rowKey) > -1;
            return (
                <Checkbox
                    className="mdl-data-table__select"
                    data-row-id={rowKey}
                    checked={isSelected}
                    onChange={this.handleChangeRowCheckbox}
                />
            );
        }

        render() {
            const { rows, data, selectable, children, ...otherProps } = this.props;

            const realRows = selectable
                ? (rows || data).map((row, idx) => {
                    const rowKey = row.key ? row.key : idx;
                    return {
                        ...row,
                        className: classNames({
                            'is-selected': this.state.selectedRows.indexOf(rowKey) > -1
                        }, row.className)
                    };
                })
                : (rows || data);

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
;
