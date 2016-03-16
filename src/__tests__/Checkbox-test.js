/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import React from 'react';
import Checkbox from '../Checkbox';

chai.use(chaiEnzyme());

describe('Checkbox', () => {
    it('should render an input checkbox inside a <label> ', () => {
        const wrapper = mount(<Checkbox />);

        expect(wrapper).to.have.tagName('label');
        expect(wrapper).to.have.className('mdl-checkbox');

        expect(wrapper).to.have.descendants('input');
        expect(wrapper.find('input')).to.have.prop('type', 'checkbox');
    });

    it('should not render the checkbox label', () => {
        const wrapper = mount(<Checkbox />);

        expect(wrapper.childAt(1)).to.be.blank();
    });

    it('should render the label', () => {
        const wrapper = mount(<Checkbox label="My checkbox" />);

        const label = wrapper.childAt(1);
        expect(label).to.have.tagName('span');
        expect(label).to.have.className('mdl-checkbox__label');
        expect(label).to.have.text('My checkbox');
    });

    it('should be checked', () => {
        const wrapper = mount(<Checkbox checked />);

        expect(wrapper).to.have.className('is-checked');

        const input = wrapper.find('input');
        expect(input).to.have.prop('checked');
    });

    it('should be disabled', () => {
        const wrapper = mount(<Checkbox disabled />);

        expect(wrapper).to.have.className('is-disabled');

        const input = wrapper.find('input');
        expect(input).to.have.prop('disabled');
    });
});
