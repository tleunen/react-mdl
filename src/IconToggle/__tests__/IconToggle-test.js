/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiSpies from 'chai-spies';
import { mount } from 'enzyme';
import React from 'react';
import IconToggle from '../';
import Icon from '../../Icon';

chai.use(chaiEnzyme());
chai.use(chaiSpies);

describe('IconToggle', () => {
    it('should render an input checkbox inside a <label> ', () => {
        const wrapper = mount(<IconToggle name="add" />);

        expect(wrapper)
            .to.have.tagName('label')
            .that.have.className('mdl-icon-toggle')
            .that.have.descendants('input');
        expect(wrapper.find('input')).to.have.attr('type', 'checkbox');
    });

    it('should render an Icon inside the <label> ', () => {
        const wrapper = mount(<IconToggle name="add" />);

        expect(wrapper)
            .to.have.tagName('label')
            .that.have.className('mdl-icon-toggle');

        expect(wrapper.find(Icon))
            .to.have.length(1)
            .that.have.prop('name', 'add');
    });

    it('should be disabled', () => {
        const wrapper = mount(<IconToggle name="add" disabled />);

        expect(wrapper).to.have.className('is-disabled');
        expect(wrapper.find('input')).to.be.disabled();
    });

    describe('"controlled" input', () => {
        it('should be checked', () => {
            const wrapper = mount(<IconToggle name="add" checked onChange={() => {}} />);

            expect(wrapper).to.have.className('is-checked');
            expect(wrapper.find('input')).to.be.checked();
        });

        it('should allow to be changed', () => {
            const onChange = chai.spy();
            const wrapper = mount(<IconToggle name="add" checked={false} onChange={onChange} />);
            const input = wrapper.find('input');

            expect(input).to.not.be.checked();
            input.simulate('change');

            expect(onChange).to.have.been.called();
            wrapper.setProps('checked', true);
            expect(input).to.have.prop('checked');
        });
    });

    describe('"uncontrolled" input', () => {
        it('should be checked', () => {
            const wrapper = mount(<IconToggle name="add" defaultChecked />);

            expect(wrapper).to.have.className('is-checked');
            expect(wrapper.find('input')).to.be.checked();
        });

        it('should change to checked', () => {
            const wrapper = mount(<IconToggle name="add" />);
            const input = wrapper.find('input');

            input.simulate('change');
            expect(input).to.be.checked();
        });

        it('should change to unchecked', () => {
            const wrapper = mount(<IconToggle name="add" defaultChecked />);
            const input = wrapper.find('input');

            input.simulate('change');
            expect(input).to.not.be.checked();
        });

        it('should stay checked after receiving a prop', () => {
            const wrapper = mount(<IconToggle name="add" defaultChecked />);
            const input = wrapper.find('input');

            wrapper.setProps('className', 'new-class');
            expect(input).to.be.checked();
        });
    });
});
