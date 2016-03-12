/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-addons-test-utils';
import { renderDOM } from '../../__tests__/render';
import { TableHeader } from '..';
import Table from '../Table';

describe('Selectable Table', () => {
    const priceFormatter = price => `\$${price.toFixed(2)}`;
    const rows = [
        { material: 'Acrylic (Transparent)', quantity: 25, price: 2.90 },
        { material: 'Plywood (Birch)', quantity: 50, price: 1.25 },
        { material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35 }
    ];

    function getSortableTable(props) {
        const pp = {
            rows,
            ...props,
            selectable: true
        };

        return (
                <Table {...pp}>
                    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                    <TableHeader numeric name="price" cellFormatter={priceFormatter} tooltip="Price pet unit">Price</TableHeader>
                </Table>
        );
    }


    it('should add a checkbox column in the head', () => {
        const el = renderDOM(getSortableTable());


        const checkboxColumn = el.querySelectorAll('thead th')[0];
        expect(checkboxColumn.querySelector('.mdl-checkbox__input')).toExist();
    });

    it('should add a checkbox column in every data row', () => {
        const el = renderDOM(getSortableTable());

        const rowsRendered = el.querySelectorAll('tbody tr');
        [].slice.call(rowsRendered).forEach(row => {
            const checkboxColumn = row.querySelectorAll('td')[0];
            expect(checkboxColumn.querySelector('.mdl-checkbox__input')).toExist();
        });
    });

    it('should check the clicked checkbox', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

        Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
        expect(el.querySelector('[data-row-id="0"]').checked).toBe(true);
    });

    it('should uncheck the clicked checkbox', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

        Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
        Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: false, dataset: { rowId: 0 } } });
        expect(el.querySelector('[data-row-id="0"]').checked).toBe(false);
    });

    it('should send the selected row in the onChange handler', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

        Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
        expect(onChange).toHaveBeenCalledWith([0]);
    });

    it('should send all the selected rows in the onChange handler', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

        Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
        Simulate.change(el.querySelector('[data-row-id="2"]'), { target: { checked: true, dataset: { rowId: 2 } } });
        expect(onChange).toHaveBeenCalledWith([0, 2]);
    });

    it('should not send a previously selected row in the onChange handler', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

        Simulate.change(el.querySelector('[data-row-id="0"]'), { target: { checked: true, dataset: { rowId: 0 } } });
        Simulate.change(el.querySelector('[data-row-id="1"]'), { target: { checked: true, dataset: { rowId: 1 } } });
        Simulate.change(el.querySelector('[data-row-id="2"]'), { target: { checked: true, dataset: { rowId: 2 } } });

        // uncheck
        Simulate.change(el.querySelector('[data-row-id="1"]'), { target: { checked: false, dataset: { rowId: 1 } } });

        expect(onChange).toHaveBeenCalledWith([0, 2]);
    });

    describe('when the checkbox in the header is clicked', () => {
        it('should check the header checkbox', () => {
            const onChange = expect.createSpy();
            const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

            Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: true } });
            expect(el.querySelector('th .mdl-checkbox__input').checked).toBe(true);
        });

        it('should check all the rows', () => {
            const onChange = expect.createSpy();
            const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

            Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: true } });
            expect(el.querySelector('[data-row-id="0"]').checked).toBe(true);
            expect(el.querySelector('[data-row-id="1"]').checked).toBe(true);
            expect(el.querySelector('[data-row-id="2"]').checked).toBe(true);
        });

        it('should send all the selected rows in the onChange handler', () => {
            const onChange = expect.createSpy();
            const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

            Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: true } });
            expect(onChange).toHaveBeenCalledWith([0, 1, 2]);
        });

        it('should not send the previously selected rows in the onChange handler', () => {
            const onChange = expect.createSpy();
            const el = renderDOM(getSortableTable({ onSelectionChanged: onChange }));

            Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: true } });
            Simulate.change(el.querySelector('th .mdl-checkbox__input'), { target: { checked: false } });
            expect(onChange).toHaveBeenCalledWith([]);
        });
    });

    describe('when the rows changes', () => {
        const oldRows = rows.map((e, i) => ({ ...e, key: `e${i}` }));
        const newRows = [
            ...oldRows,
            { key: 'n1', material: 'New mat (yolo)', quantity: 2, price: 123 }
        ];

        it('should keep the existing selected rows selected after appending a new row', () => {
            const onChange = expect.createSpy();
            const el = renderDOM(getSortableTable({ onSelectionChanged: onChange, rows: oldRows }));

            Simulate.change(el.querySelector('[data-row-id="e1"]'), { target: { checked: true, dataset: { rowId: 'e1' } } });

            ReactDOM.render(getSortableTable({ onSelectionChanged: onChange, rows: newRows }), el.parentNode);
            expect(el.querySelector('[data-row-id="e1"]').checked).toBe(true);
        });

        it('should removed the old selected row', () => {
            const onChange = expect.createSpy();
            const el = renderDOM(getSortableTable({ onSelectionChanged: onChange, rows: oldRows }));

            Simulate.change(el.querySelector('[data-row-id="e1"]'), { target: { checked: true, dataset: { rowId: 'e1' } } });
            Simulate.change(el.querySelector('[data-row-id="e2"]'), { target: { checked: true, dataset: { rowId: 'e2' } } });

            const nRows = oldRows.slice();
            nRows.splice(2, 1);
            ReactDOM.render(getSortableTable({ onSelectionChanged: onChange, rows: nRows }), el.parentNode);
            expect(onChange).toHaveBeenCalledWith(['e1']);
        });

        it('should removed the checked marked on the heaer checkbox', () => {
            const onChange = expect.createSpy();
            const el = renderDOM(getSortableTable({ onSelectionChanged: onChange, rows: oldRows }));

            Simulate.change(el.querySelector('[data-row-id="e0"]'), { target: { checked: true, dataset: { rowId: 'e0' } } });
            Simulate.change(el.querySelector('[data-row-id="e1"]'), { target: { checked: true, dataset: { rowId: 'e1' } } });
            Simulate.change(el.querySelector('[data-row-id="e2"]'), { target: { checked: true, dataset: { rowId: 'e2' } } });

            const checkbox = el.querySelector('thead .mdl-checkbox__input');
            expect(checkbox.checked).toExist();

            ReactDOM.render(getSortableTable({ onSelectionChanged: onChange, rows: newRows }), el.parentNode);
            expect(checkbox.checked).toNotExist();
        });

        it('should mark the header checkbox checked', () => {
            const onChange = expect.createSpy();
            const el = renderDOM(getSortableTable({ onSelectionChanged: onChange, rows: oldRows }));

            Simulate.change(el.querySelector('[data-row-id="e0"]'), { target: { checked: true, dataset: { rowId: 'e0' } } });
            Simulate.change(el.querySelector('[data-row-id="e2"]'), { target: { checked: true, dataset: { rowId: 'e2' } } });

            const checkbox = el.querySelector('thead .mdl-checkbox__input');
            expect(checkbox.checked).toNotExist();

            const nRows = oldRows.slice();
            nRows.splice(1, 1);
            ReactDOM.render(getSortableTable({ onSelectionChanged: onChange, rows: nRows }), el.parentNode);
            expect(checkbox.checked).toExist();
        });
    });
});
