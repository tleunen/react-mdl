/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiSpies from 'chai-spies';
import { shallow } from 'enzyme';
import React from 'react';
import TableHeader from '../TableHeader';
import Tooltip from '../../Tooltip';

chai.use(chaiEnzyme());
chai.use(chaiSpies);

describe('TableHeader', () => {
    function createTableHeader(props) {
        const pp = {
            name: 'test',
            ...props
        };

        return <TableHeader {...pp}>TestColumn</TableHeader>;
    }

    it('should render a <th>', () => {
        const wrapper = shallow(createTableHeader());

        expect(wrapper).to.have.tagName('th');
    });

    it('should allow custom css classes', () => {
        const wrapper = shallow(createTableHeader({ className: 'my-th' }));

        expect(wrapper).to.have.className('my-th');
    });

    it('should be a non numeric column', () => {
        const wrapper = shallow(createTableHeader());

        expect(wrapper)
            .to.have.className('mdl-data-table__cell--non-numeric');
    });

    it('should be a numeric column', () => {
        const wrapper = shallow(createTableHeader({ numeric: true }));

        expect(wrapper)
            .to.not.have.className('mdl-data-table__cell--non-numeric');
    });

    it('should render the content of the column', () => {
        const wrapper = shallow(createTableHeader());

        expect(wrapper).to.have.text('TestColumn');
    });

    it('should render a tooltip around the content', () => {
        const wrapper = shallow(createTableHeader({ tooltip: 'my tooltip' }));

        expect(wrapper.find(Tooltip)).to.have.length(1);
        expect(wrapper.find(Tooltip)).to.contain('TestColumn');
    });

    describe('when set as a sortable header', () => {
        it('should do nothing when clicked when explicitely set as "nosort"', () => {
            const clicked = chai.spy();

            const wrapper = shallow(createTableHeader({ nosort: true, onClick: clicked }));
            wrapper.simulate('click');
            expect(clicked).to.not.have.been.called();
        });

        it('should send the onClick event with the event and column name', () => {
            const clicked = chai.spy();

            const wrapper = shallow(createTableHeader({ onClick: clicked }));
            wrapper.simulate('click');
            expect(clicked).to.have.been.called.with('test');
        });
    });
});
