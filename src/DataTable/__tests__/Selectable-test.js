/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { mount } from 'enzyme';
import React from 'react';
import Table from '../Table';
import TableHeader from '../TableHeader';

chai.use(chaiEnzyme());

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

    function getElementByRowId(wrapper, id) {
        const elts = wrapper.find('[data-reactmdl]');
        for (let i = 0; i < elts.length; i++) {
            if (elts.at(i).prop('data-reactmdl') === JSON.stringify({ id })) {
                return elts.at(i);
            }
        }
        return null;
    }


    it('should add a checkbox column in the head', () => {
        const wrapper = mount(getSortableTable());

        const checkboxColumn = wrapper.find('thead').find('th').at(0);
        expect(checkboxColumn.find('.mdl-checkbox__input')).to.be.have.length(1);
    });

    it('should add a checkbox column in every data row', () => {
        const wrapper = mount(getSortableTable());

        const rowsRendered = wrapper.find('tbody').find('th');
        rowsRendered.forEach(row => {
            const checkboxColumn = row.find('td').at(0);
            expect(checkboxColumn.find('.mdl-checkbox__input')).to.have.length(1);
        });
    });

    it('should check the clicked checkbox', () => {
        const wrapper = mount(getSortableTable({}));

        const el = getElementByRowId(wrapper, 0);
        el.simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":0}' } } });
        expect(el).to.be.checked();
    });

    it('should uncheck the clicked checkbox', () => {
        const wrapper = mount(getSortableTable({}));

        const el = getElementByRowId(wrapper, 0);

        el.simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":0}' } } });
        el.simulate('change', { target: { checked: false, dataset: { reactmdl: '{"id":0}' } } });
        expect(el).to.not.be.checked();
    });

    it('should send the selected row in the onChange handler', () => {
        const onChange = sinon.spy();
        const wrapper = mount(getSortableTable({ onSelectionChanged: onChange }));

        const el = getElementByRowId(wrapper, 0);

        el.simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":0}' } } });
        expect(onChange.calledOnce).to.equal(true);
        expect(onChange.calledWith([0])).to.equal(true);
    });

    it('should send all the selected rows in the onChange handler', () => {
        const onChange = sinon.spy();
        const wrapper = mount(getSortableTable({ onSelectionChanged: onChange }));

        getElementByRowId(wrapper, 0).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":0}' } } });
        getElementByRowId(wrapper, 2).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":2}' } } });
        expect(onChange.callCount).to.equal(2);
        expect(onChange.calledWith([0, 2])).to.equal(true);
    });

    it('should not send a previously selected row in the onChange handler', () => {
        const onChange = sinon.spy();
        const wrapper = mount(getSortableTable({ onSelectionChanged: onChange }));

        getElementByRowId(wrapper, 0).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":0}' } } });
        getElementByRowId(wrapper, 1).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1}' } } });
        getElementByRowId(wrapper, 2).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":2}' } } });

        // uncheck
        getElementByRowId(wrapper, 1).simulate('change', { target: { checked: false, dataset: { reactmdl: '{"id":1}' } } });
        expect(onChange.callCount).to.equal(4);
        expect(onChange.calledWith([0, 2])).to.equal(true);
    });

    describe('when the checkbox in the header is clicked', () => {
        it('should check the header checkbox', () => {
            const wrapper = mount(getSortableTable({}));

            const headerCheckbox = wrapper.find('th').find('.mdl-checkbox__input');
            headerCheckbox.simulate('change', { target: { checked: true } });

            expect(headerCheckbox).to.be.checked();
        });

        it('should check all the rows', () => {
            const wrapper = mount(getSortableTable({}));

            const headerCheckbox = wrapper.find('th').find('.mdl-checkbox__input');
            headerCheckbox.simulate('change', { target: { checked: true } });

            expect(getElementByRowId(wrapper, 0)).to.be.checked();
            expect(getElementByRowId(wrapper, 1)).to.be.checked();
            expect(getElementByRowId(wrapper, 2)).to.be.checked();
        });

        it('should send all the selected rows in the onChange handler', () => {
            const onChange = sinon.spy();
            const wrapper = mount(getSortableTable({ onSelectionChanged: onChange }));

            const headerCheckbox = wrapper.find('th').find('.mdl-checkbox__input');
            headerCheckbox.simulate('change', { target: { checked: true } });
            expect(onChange.calledOnce).to.equal(true);
            expect(onChange.calledWith([0, 1, 2])).to.equal(true);
        });

        it('should not send the previously selected rows in the onChange handler', () => {
            const onChange = sinon.spy();
            const wrapper = mount(getSortableTable({ onSelectionChanged: onChange }));

            const headerCheckbox = wrapper.find('th').find('.mdl-checkbox__input');
            headerCheckbox.simulate('change', { target: { checked: true } });
            headerCheckbox.simulate('change', { target: { checked: false } });
            expect(onChange.callCount).to.equal(2);
            expect(onChange.calledWith([])).to.equal(true);
        });
    });

    describe('when the rows changes', () => {
        const oldRows = rows.map((e, i) => ({ ...e, id: 1000 + i }));
        const newRows = [
            ...oldRows,
            { id: 5432, material: 'New mat (yolo)', quantity: 2, price: 123 }
        ];

        it('should keep the existing selected rows selected after appending a new row', () => {
            const wrapper = mount(getSortableTable({ rows: oldRows, rowKeyColumn: 'id' }));

            const el = getElementByRowId(wrapper, 1001);
            el.simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1001}' } } });

            wrapper.setProps({ rows: newRows });
            expect(el).to.be.checked();
        });

        it('should removed the old selected row', () => {
            const onChange = sinon.spy();
            const wrapper = mount(getSortableTable({ onSelectionChanged: onChange, rows: oldRows, rowKeyColumn: 'id' }));

            getElementByRowId(wrapper, 1001).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1001}' } } });
            getElementByRowId(wrapper, 1002).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1002}' } } });

            const nRows = oldRows.slice();
            nRows.splice(2, 1);
            wrapper.setProps({ rows: nRows });
            expect(onChange.callCount).to.equal(2 + 1); // 2 events + new props
            expect(onChange.calledWith([1001])).to.equal(true);
        });

        it('should removed the checked marked on the heaer checkbox', () => {
            const wrapper = mount(getSortableTable({ rows: oldRows, rowKeyColumn: 'id' }));

            getElementByRowId(wrapper, 1000).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1000}' } } });
            getElementByRowId(wrapper, 1001).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1001}' } } });
            getElementByRowId(wrapper, 1002).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1002}' } } });

            const headerCheckbox = wrapper.find('th').find('.mdl-checkbox__input');
            expect(headerCheckbox).to.be.checked();

            wrapper.setProps({ rows: newRows });
            expect(headerCheckbox).to.not.be.checked();
        });

        it('should mark the header checkbox checked', () => {
            const wrapper = mount(getSortableTable({ rows: oldRows, rowKeyColumn: 'id' }));

            getElementByRowId(wrapper, 1000).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1000}' } } });
            getElementByRowId(wrapper, 1002).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":1002}' } } });

            const headerCheckbox = wrapper.find('th').find('.mdl-checkbox__input');
            expect(headerCheckbox).to.not.be.checked();

            const nRows = oldRows.slice();
            nRows.splice(1, 1);
            wrapper.setProps({ rows: nRows });
            expect(headerCheckbox).to.be.checked();
        });

        it('should keep the header checked, even without rowKeyColumn', () => {
            const wrapper = mount(getSortableTable({}));

            getElementByRowId(wrapper, 0).simulate('change', { target: { checked: true, dataset: { reactmdl: '{"id":0}' } } });

            const headerCheckbox = wrapper.find('th').find('.mdl-checkbox__input');
            expect(headerCheckbox).to.not.be.checked();

            const nRows = rows.slice(0, 1);
            wrapper.setProps({ rows: nRows });
            expect(headerCheckbox).to.be.checked();
        });
    });
});
