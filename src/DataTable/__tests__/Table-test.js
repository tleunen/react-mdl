/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import React from 'react';
import Table from '../Table';
import TableHeader from '../TableHeader';

chai.use(chaiEnzyme());

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
        const wrapper = mount(getDataTable());

        expect(wrapper).to.have.tagName('table');
        expect(wrapper)
            .to.have.className('mdl-data-table');
    });

    it('should allow custom css classes', () => {
        const wrapper = mount(getDataTable({ className: 'my-data-table' }));

        expect(wrapper)
            .to.have.className('mdl-data-table')
            .to.have.className('my-data-table');
    });

    it('should contain the specific columns', () => {
        const wrapper = mount(getDataTable());

        expect(wrapper.find(TableHeader)).to.have.length(3);
    });

    it('should contain the specific data', () => {
        const wrapper = mount(getDataTable());

        const bodyTr = wrapper.find('tbody').find('tr');
        expect(bodyTr).to.have.length(3);

        bodyTr.forEach((row, i) => {
            const tds = row.find('td');
            expect(tds).to.have.length(3);

            expect(tds.at(0)).to.have.text(rows[i].material);
            expect(tds.at(1)).to.have.text(rows[i].quantity);
            expect(tds.at(2)).to.have.text(`\$${rows[i].price.toFixed(2)}`);
        });
    });

    it('should set the non numeric css class on non numeric data cells', () => {
        const wrapper = mount(getDataTable());

        const bodyTr = wrapper.find('tbody').find('tr');
        bodyTr.forEach(row => {
            const tds = row.find('td');

            expect(tds.at(0)).to.have.className('mdl-data-table__cell--non-numeric');
            expect(tds.at(1)).to.not.have.className('mdl-data-table__cell--non-numeric');
            expect(tds.at(2)).to.not.have.className('mdl-data-table__cell--non-numeric');
        });
    });

    it('should set the key for each row data element if provided', () => {
        const newRows = rows.map((elt, idx) => ({
            ...elt,
            key: `elt${idx}`
        }));

        const wrapper = mount(getDataTable({ rows: newRows }));

        const bodyTr = wrapper.find('tbody').find('tr');
        bodyTr.forEach((row, i) => {
            expect(row.key()).to.equal(`elt${i}`);
        });
    });

    // TODO write test for rowKeyColumn

    describe('The optional mdlRowProps attribute', () => {
        it('should be optional', () => {
            const newRows = rows.map(({ ...elt, mdlRowProps }, idx) => ({
                ...elt,
                key: `elt${idx}`,
            }));

            const wrapper = mount(getDataTable({ rows: newRows }));

            const bodyTr = wrapper.find('tbody').find('tr');
            bodyTr.forEach((row, i) => {
                expect(row.key()).to.equal(`elt${i}`);
            });
        });

        it('should set the style for each row data element if provided', () => {
            const newRows = rows.map(elt => ({
                ...elt,
                mdlRowProps: {
                    style: {
                        fontWeight: 'bold',
                    },
                },
            }));

            const wrapper = mount(getDataTable({ rows: newRows }));

            const bodyTr = wrapper.find('tbody').find('tr');
            bodyTr.forEach(row => {
                expect(row).to.have.style('font-weight', 'bold');
            });
        });

        it('should set the className for each row data element if provided', () => {
            const newRows = rows.map(elt => ({
                ...elt,
                mdlRowProps: {
                    className: 'mdlRowProps',
                },
            }));

            const wrapper = mount(getDataTable({ rows: newRows }));

            const bodyTr = wrapper.find('tbody').find('tr');
            bodyTr.forEach(row => {
                expect(row).to.have.className('mdlRowProps');
            });
        });

        it('should add a className to the previous className for each row data element when provided', () => {
            const newRows = rows.map(elt => ({
                ...elt,
                className: 'previous',
                mdlRowProps: {
                    className: 'mdlRowProps',
                },
            }));

            const wrapper = mount(getDataTable({ rows: newRows }));

            const bodyTr = wrapper.find('tbody').find('tr');
            bodyTr.forEach(row => {
                expect(row).to.have.className('previous');
                expect(row).to.have.className('mdlRowProps');
            });
        });

        it('should keep the previous className for each row data element if not provided', () => {
            const newRows = rows.map(elt => ({
                ...elt,
                className: 'previous',
            }));

            const wrapper = mount(getDataTable({ rows: newRows }));

            const bodyTr = wrapper.find('tbody').find('tr');
            bodyTr.forEach(row => {
                expect(row).to.have.className('previous');
            });
        });

        it('should set the onClick for each row data element if provided', () => {
            let testControl = 0;
            const onClickHandler = () => testControl++;
            const newRows = rows.map((elt, id) => ({
                ...elt,
                id,
                mdlRowProps: {
                    onClick: onClickHandler,
                },
            }));

            const wrapper = mount(getDataTable({ rows: newRows }));

            const bodyTr = wrapper.find('tbody').find('tr');
            bodyTr.forEach((row, index) => {
                expect(row).to.have.prop('onClick');
                row.simulate('click');
                expect(testControl).to.equal(index + 1);
            });
        });
    });
});
