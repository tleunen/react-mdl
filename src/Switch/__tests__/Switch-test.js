/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiSpies from 'chai-spies';
import { mount } from 'enzyme';
import React from 'react';
import Switch from '../Switch';

chai.use(chaiEnzyme());
chai.use(chaiSpies);

describe('Switch', () => {
    it('should render an input checkbox inside a <label> ', () => {
        const wrapper = mount(<Switch />);

        expect(wrapper)
            .to.have.tagName('label')
            .to.have.className('mdl-switch')
            .to.have.descendants('input');
        expect(wrapper.find('input')).to.have.attr('type', 'checkbox');
    });

    it('should not render the checkbox label', () => {
        const wrapper = mount(<Switch />);

        expect(wrapper.childAt(1)).to.be.blank();
    });

    it('should render the label', () => {
        const wrapper = mount(<Switch label="My switch" />);

        const label = wrapper.childAt(1);
        expect(label)
            .to.have.tagName('span')
            .to.have.className('mdl-switch__label')
            .to.have.text('My switch');
    });

    it('should be disabled', () => {
        const wrapper = mount(<Switch disabled />);

        expect(wrapper).to.have.className('is-disabled');

        const input = wrapper.find('input');
        expect(input).to.be.disabled();
    });

    describe('"controlled" input', () => {
        it('should be checked', () => {
            const wrapper = mount(<Switch checked onChange={() => {}} />);

            expect(wrapper).to.have.className('is-checked');

            const input = wrapper.find('input');
            expect(input).to.be.checked();
        });

        it('should allow to be changed', () => {
            const onChange = chai.spy();
            const wrapper = mount(<Switch checked={false} onChange={onChange} />);
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
            const wrapper = mount(<Switch defaultChecked />);

            expect(wrapper).to.have.className('is-checked');

            const input = wrapper.find('input');
            expect(input).to.be.checked();
        });

        it('should change to checked', () => {
            const wrapper = mount(<Switch />);
            const input = wrapper.find('input');

            input.simulate('change');
            expect(input).to.be.checked();
        });

        it('should change to unchecked', () => {
            const wrapper = mount(<Switch defaultChecked />);
            const input = wrapper.find('input');

            input.simulate('change');
            expect(input).to.not.be.checked();
        });

        it('should stay checked after receiving a prop', () => {
            const wrapper = mount(<Switch defaultChecked />);
            const input = wrapper.find('input');

            wrapper.setProps('className', 'new-class');
            expect(input).to.be.checked();
        });
    });
});
