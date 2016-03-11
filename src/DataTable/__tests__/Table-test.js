/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
// import { Simulate } from 'react-addons-test-utils';
import { render } from '../../__tests__/render';
import { TableHeader } from '..';
import { UndecoratedTable as Table } from '../Table';
// import Checkbox from '../../Checkbox';

describe('Table', () => {
    const priceFormatter = price => `\$${price.toFixed(2)}`;
    const rows = [
        { material: 'Acrylic (Transparent)', quantity: 25, price: 2.90 },
        { material: 'Plywood (Birch)', quantity: 50, price: 1.25 },
        { material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35 }
    ];

    function getDataTable(props) {
        const pp = {
            rows,
            ...props
        };

        return (
                <Table {...pp}>
                    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                    <TableHeader numeric name="price" cellFormatter={priceFormatter} tooltip="Price pet unit">Price</TableHeader>
                </Table>
        );
    }

    it('should render a MDL <table>', () => {
        const output = render(getDataTable());

        expect(output.type).toBe('table');
        expect(output.props.className)
            .toInclude('mdl-data-table');
    });

    it('should allow custom css classes', () => {
        const output = render(getDataTable({ className: 'my-data-table' }));

        expect(output.props.className)
            .toInclude('my-data-table');
    });

    it('should contain the specific columns', () => {
        const output = render(getDataTable());

        const [thead] = output.props.children;
        const headTr = thead.props.children;
        const columns = headTr.props.children;
        expect(columns.length).toBe(3);

        columns.forEach(td => {
            expect(td.type).toBe(TableHeader);
        });
    });

    it('should transform the columns props into <TableHeader>', () => {
        const columns = [
            { name: 'material', label: 'Material' },
            { name: 'quantity', label: 'Quantity', numeric: true },
            { name: 'price', label: 'Unit Price', numeric: true }
        ];

        const output = render(<Table rows={rows} columns={columns} />);

        const [thead] = output.props.children;
        const headTr = thead.props.children;
        const columnsRendered = headTr.props.children;
        expect(columnsRendered.length).toBe(3);

        columnsRendered.forEach((td, i) => {
            expect(td.type).toBe(TableHeader);
            expect(td.props.children).toEqual(columns[i].label);
            expect(td.props.name).toEqual(columns[i].name);
        });
    });

    it('should contain the specific data', () => {
        const output = render(getDataTable());

        const [, tbody] = output.props.children;
        const rowsRendered = tbody.props.children;
        expect(rowsRendered.length).toBe(3);

        rowsRendered.forEach((row, i) => {
            const tds = row.props.children;
            expect(tds.length).toBe(3);

            const [td1, td2] = tds;
            expect(td1.props.children).toBe(rows[i].material);
            expect(td2.props.children).toBe(rows[i].quantity);
            // expect(td3.props.children).toBe(`\$${rows[i].price.toFixed(2)}`);
        });
    });

    it('should format the cell data with the formatter if specified', () => {
        const output = render(getDataTable());

        const [, tbody] = output.props.children;
        const rowsRendered = tbody.props.children;

        rowsRendered.forEach((row, i) => {
            const tds = row.props.children;
            expect(tds.length).toBe(3);

            const [,, td3] = tds;
            expect(td3.props.children).toBe(`\$${rows[i].price.toFixed(2)}`);
        });
    });

    it('should set the non numeric css class on non numeric data cells', () => {
        const output = render(getDataTable());

        const [, tbody] = output.props.children;
        const rowsRendered = tbody.props.children;

        rowsRendered.forEach(row => {
            const tds = row.props.children;

            const [td1, td2, td3] = tds;
            expect(td1.props.className).toInclude('mdl-data-table__cell--non-numeric');
            expect(td2.props.className).toExclude('mdl-data-table__cell--non-numeric');
            expect(td3.props.className).toExclude('mdl-data-table__cell--non-numeric');
        });
    });

    it('should set the key for each row data element if provided', () => {
        const newRows = rows.map((elt, idx) => ({
            ...elt,
            key: `elt${idx}`
        }));

        const output = render(getDataTable({ rows: newRows }));

        const [, tbody] = output.props.children;
        const rowsRendered = tbody.props.children;

        rowsRendered.forEach((row, i) => {
            expect(row.key).toBe(`elt${i}`);
        });
    });

    // describe('Selectable Table', () => {
    //     function getSortableTable(props) {
    //         return getDataTable({ ...props, selectable: true });
    //     }
    //
    //     it('should add a checkbox column in the head', () => {
    //         const output = render(getSortableTable());
    //
    //         const [thead] = output.props.children;
    //         const headTr = thead.props.children;
    //         const [checkboxColumn] = headTr.props.children;
    //         expect(checkboxColumn.type).toBe('th');
    //         expect(checkboxColumn.props.children.type).toBe(Checkbox);
    //     });
    //
    //     it('should add a checkbox column in every data row', () => {
    //         const output = render(getSortableTable());
    //
    //         const [, tbody] = output.props.children;
    //         const rowsRendered = tbody.props.children;
    //
    //         rowsRendered.forEach(row => {
    //             const [checkboxTd] = row.props.children;
    //             expect(checkboxTd.props.children.type).toBe(Checkbox);
    //         });
    //     });
    //
    //     it('should check the clicked checkbox', () => {
    //         const onChange = expect.createSpy();
    //         const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //         Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
    //         expect(el.querySelector('[data-row-id="0"]').checked).toBe(true);
    //     });
    //
    //     it('should uncheck the clicked checkbox', () => {
    //         const onChange = expect.createSpy();
    //         const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //         Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
    //         Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: false, dataset: { rowId: 0 } } });
    //         expect(el.querySelector('[data-row-id="0"]').checked).toBe(false);
    //     });
    //
    //     it('should send the selected row in the onChange handler', () => {
    //         const onChange = expect.createSpy();
    //         const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //         Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
    //         expect(onChange).toHaveBeenCalledWith([0]);
    //     });
    //
    //     it('should send all the selected rows in the onChange handler', () => {
    //         const onChange = expect.createSpy();
    //         const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //         Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
    //         Simulate.change(el.querySelector('[data-row-id="2"]'), { target: { checked: true, dataset: { rowId: 2 } } });
    //         expect(onChange).toHaveBeenCalledWith([0, 2]);
    //     });
    //
    //     it('should not send a previously selected row in the onChange handler', () => {
    //         const onChange = expect.createSpy();
    //         const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //         Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
    //         Simulate.change(el.querySelector('[data-row-id="1"]'), { target: { checked: true, dataset: { rowId: 1 } } });
    //         Simulate.change(el.querySelector('[data-row-id="2"]'), { target: { checked: true, dataset: { rowId: 2 } } });
    //
    //         // uncheck
    //         Simulate.change(el.querySelector('[data-row-id="1"]'), { target: { checked: false, dataset: { rowId: 1 } } });
    //
    //         expect(onChange).toHaveBeenCalledWith([0, 2]);
    //     });
    //
    //     describe('when the checkbox in the header is clicked', () => {
    //         it('should check the header checkbox', () => {
    //             const onChange = expect.createSpy();
    //             const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //             Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: true } });
    //             expect(el.querySelector('th .mdl-checkbox__input').checked).toBe(true);
    //         });
    //
    //         it('should check all the rows', () => {
    //             const onChange = expect.createSpy();
    //             const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //             Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: true } });
    //             expect(el.querySelector('[data-row-id="0"]').checked).toBe(true);
    //             expect(el.querySelector('[data-row-id="1"]').checked).toBe(true);
    //             expect(el.querySelector('[data-row-id="2"]').checked).toBe(true);
    //         });
    //
    //         it('should send all the selected rows in the onChange handler', () => {
    //             const onChange = expect.createSpy();
    //             const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //             Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: true } });
    //             expect(onChange).toHaveBeenCalledWith([0, 1, 2]);
    //         });
    //
    //         it('should not send the previously selected rows in the onChange handler', () => {
    //             const onChange = expect.createSpy();
    //             const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));
    //
    //             Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: true } });
    //             Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: false } });
    //             expect(onChange).toHaveBeenCalledWith([]);
    //         });
    //     });
    // });
});
