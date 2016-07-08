/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import React from 'react';
import Table from '../Table';
import TableHeader from '../TableHeader';

chai.use(chaiEnzyme());

describe('Sortable Table', () => {
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
        const wrapper = mount(getSortableTable({}));

        const firstColumn = wrapper.find('th').at(0);
        firstColumn.simulate('click');
        expect(firstColumn).to.have.className('mdl-data-table__header--sorted-ascending');
    });

    it('should add the DESC css class when clicked twice', () => {
        const wrapper = mount(getSortableTable({}));

        const firstColumn = wrapper.find('th').at(0);
        firstColumn.simulate('click');
        firstColumn.simulate('click');
        expect(firstColumn).to.have.className('mdl-data-table__header--sorted-descending');
    });

    it('should remove the order css class of the previous column', () => {
        const wrapper = mount(getSortableTable({}));

        const firstColumn = wrapper.find('th').at(0);
        const secondColumn = wrapper.find('th').at(1);
        firstColumn.simulate('click');
        secondColumn.simulate('click');
        expect(firstColumn).to.not.have.className('mdl-data-table__header--sorted-ascending');
        expect(secondColumn).to.have.className('mdl-data-table__header--sorted-ascending');
    });

    it('should not sort a "nosort" column', () => {
        const wrapper = mount(
            <Table rows={rows} sortable>
                <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                <TableHeader nosort numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                <TableHeader numeric name="price" cellFormatter={priceFormatter} tooltip="Price pet unit">Price</TableHeader>
            </Table>
        );

        const secondColumn = wrapper.find('th').at(1);
        secondColumn.simulate('click');
        expect(secondColumn).to.not.have.className('mdl-data-table__header--sorted-ascending');
    });

    it('should sort the rows ASC', () => {
        const wrapper = mount(getSortableTable({}));

        const firstColumn = wrapper.find('th').at(0);
        firstColumn.simulate('click');

        const content = wrapper.find('tbody').find('tr').map(row =>
            row.childAt(0).text()
        );

        const contentAsc = content.slice().sort();
        expect(content).to.eql(contentAsc);
    });

    it('should sort the rows DESC', () => {
        const wrapper = mount(getSortableTable({}));

        const firstColumn = wrapper.find('th').at(0);
        firstColumn.simulate('click');
        firstColumn.simulate('click');

        const content = wrapper.find('tbody').find('tr').map(row =>
            row.childAt(0).text()
        );

        const contentAsc = content.slice().sort((a, b) => b.localeCompare(a));
        expect(content).to.eql(contentAsc);
    });

    it('should sort based on the custom sort function', () => {
        const sortFn = (a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1]);
        const wrapper = mount(
            <Table rows={rows} sortable>
                <TableHeader name="material" sortFn={sortFn} tooltip="The amazing material name">Material</TableHeader>
                <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                <TableHeader numeric name="price" cellFormatter={priceFormatter} tooltip="Price pet unit">Price</TableHeader>
            </Table>
        );

        const firstColumn = wrapper.find('th').at(0);
        firstColumn.simulate('click');

        const content = wrapper.find('tbody').find('tr').map(row =>
            row.childAt(0).text()
        );

        const contentAsc = content.slice().sort((a, b) => a.match(/\((.*)\)/)[1].localeCompare(b.match(/\((.*)\)/)[1]));
        expect(content).to.eql(contentAsc);
    });

    it('should keep the sorting when new rows are added in the table', () => {
        const wrapper = mount(getSortableTable({}));

        const firstColumn = wrapper.find('th').at(0);
        firstColumn.simulate('click');

        wrapper.setProps({
            rows: [
                ...rows,
                { material: 'A new material (What its name again?)', quantity: 1, price: 254 }
            ]
        });

        const content = wrapper.find('tbody').find('tr').map(row =>
            row.childAt(0).text()
        );

        const contentAsc = content.slice().sort();
        expect(content).to.eql(contentAsc);
    });

    it('should not sort the table after receiving new props if not previously sorted', () => {
        const wrapper = mount(getSortableTable({}));

        const contentBefore = wrapper.find('tbody').find('tr').map(row =>
            row.text()
        );

        wrapper.setProps({ rows: [...rows] });

        const contentAfter = wrapper.find('tbody').find('tr').map(row =>
            row.text()
        );

        expect(contentBefore).to.eql(contentAfter);
    });
});
