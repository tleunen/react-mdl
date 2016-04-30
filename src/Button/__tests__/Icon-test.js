/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import IconButton from '../Icon';
import Button from '../Button';
import Icon from '../../Icon';

chai.use(chaiEnzyme());

describe('IconButton', () => {
    it('should be a Button component', () => {
        const wrapper = shallow(<IconButton name="add" />);

        expect(wrapper.type()).to.equal(Button);
    });

    it('should have the btn icon css class', () => {
        const wrapper = shallow(<IconButton name="add" />);

        expect(wrapper)
            .to.have.className('mdl-button--icon');
    });

    it('should allow custom css classes', () => {
        const wrapper = shallow(<IconButton name="add" className="my-icon-button" />);

        expect(wrapper)
            .to.have.className('mdl-button--icon')
            .to.have.className('my-icon-button');
    });

    it('should have an icon as child', () => {
        const wrapper = shallow(<IconButton name="add" />);

        expect(wrapper.find(Icon)).to.have.length(1);
    });
});
