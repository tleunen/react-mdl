/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Icon from '../';

chai.use(chaiEnzyme());

describe('Icon', () => {
    it('should be a <i>', () => {
        const wrapper = shallow(<Icon name="add" />);

        expect(wrapper)
            .to.have.tagName('i')
            .to.have.text('add');
    });

    it('should have material-icons css class', () => {
        const wrapper = shallow(<Icon name="add" />);

        expect(wrapper).to.have.className('material-icons');
    });

    it('should allow custom css classes', () => {
        const wrapper = shallow(<Icon name="mood" className="my-custom-class" />);

        expect(wrapper)
            .to.have.className('material-icons')
            .to.have.className('my-custom-class');
    });
});
