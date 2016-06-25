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
            sortable: true
        };

        return (
            <Table {...pp}>
                <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                <TableHeader numeric name="price" cellFormatter={priceFormatter} tooltip="Price pet unit">Price</TableHeader>
            </Table>
        );
    }

    it('should add the ASC css class when clicked once', () => {
        const el = renderDOM(getSortableTable({}));

        const firstColumn = el.querySelectorAll('th')[0];
        Simulate.click(firstColumn);
        expect(firstColumn.className).toInclude('mdl-data-table__header--sorted-ascending');
    });

    it('should add the DESC css class when clicked twice', () => {
        const el = renderDOM(getSortableTable({}));

        const firstColumn = el.querySelectorAll('th')[0];
        Simulate.click(firstColumn);
        Simulate.click(firstColumn);
        expect(firstColumn.className).toInclude('mdl-data-table__header--sorted-descending');
    });

    it('should remove the order css class of the previous column', () => {
        const el = renderDOM(getSortableTable({}));

        const firstColumn = el.querySelectorAll('th')[0];
        const secondColumn = el.querySelectorAll('th')[1];
        Simulate.click(firstColumn);
        Simulate.click(secondColumn);
        expect(firstColumn.className).toExclude('mdl-data-table__header--sorted-ascending');
        expect(secondColumn.className).toInclude('mdl-data-table__header--sorted-ascending');
    });

    it('should not sort a "nosort" column', () => {
        const element = (
            <Table rows={rows} sortable>
                <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                <TableHeader nosort numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                <TableHeader numeric name="price" cellFormatter={priceFormatter} tooltip="Price pet unit">Price</TableHeader>
            </Table>
        );

        const el = renderDOM(element);

        const secondColumn = el.querySelectorAll('th')[1];
        Simulate.click(secondColumn);
        expect(secondColumn.className).toExclude('mdl-data-table__header--sorted-ascending');
    });

    it('should order the rows ASC', () => {
        const el = renderDOM(getSortableTable({}));

        const firstColumn = el.querySelectorAll('th')[0];
        Simulate.click(firstColumn);

        const content = [].slice.call(el.querySelectorAll('tbody tr'))
            .map(row => row.querySelectorAll('td')[0].textContent);

        const contentAsc = content.slice().sort();
        expect(content).toEqual(contentAsc);
    });

    it('should order the rows DESC', () => {
        const el = renderDOM(getSortableTable({}));

        const firstColumn = el.querySelectorAll('th')[0];
        Simulate.click(firstColumn);
        Simulate.click(firstColumn);

        const content = [].slice.call(el.querySelectorAll('tbody tr'))
            .map(row => row.querySelectorAll('td')[0].textContent);

        const contentAsc = content.slice().sort((a, b) => b.localeCompare(a));
        expect(content).toEqual(contentAsc);
    });

    it('should sort based on the custom sort function', () => {
        const sortFn = (a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1]);
        const element = (
            <Table rows={rows} sortable>
                <TableHeader name="material" sortFn={sortFn} tooltip="The amazing material name">Material</TableHeader>
                <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                <TableHeader numeric name="price" cellFormatter={priceFormatter} tooltip="Price pet unit">Price</TableHeader>
            </Table>
        );

        const el = renderDOM(element);

        const firstColumn = el.querySelectorAll('th')[0];
        Simulate.click(firstColumn);
        const content = [].slice.call(el.querySelectorAll('tbody tr'))
            .map(row => row.querySelectorAll('td')[0].textContent);

        const contentAsc = content.slice().sort((a, b) => a.match(/\((.*)\)/)[1].localeCompare(b.match(/\((.*)\)/)[1]));
        expect(content).toEqual(contentAsc);
    });

    it('should keep the sorting when new rows are added in the table', () => {
        const el = renderDOM(getSortableTable({}));

        const firstColumn = el.querySelectorAll('th')[0];
        Simulate.click(firstColumn);

        const nRows = [
            ...rows,
            { material: 'A new material (What its name again?)', quantity: 1, price: 254 }
        ];

        ReactDOM.render(getSortableTable({ rows: nRows }), el.parentNode);

        const content = [].slice.call(el.querySelectorAll('tbody tr'))
            .map(row => row.querySelectorAll('td')[0].textContent);

        const contentAsc = content.slice().sort();
        expect(content).toEqual(contentAsc);
    });
});
