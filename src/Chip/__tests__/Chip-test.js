/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import { Chip, ChipContact } from '../';

chai.use(chaiEnzyme());

describe('Chip', () => {
    it('should render the chip as a span', () => {
        const wrapper = shallow(<Chip />);

        expect(wrapper).to.have.tagName('span');
        expect(wrapper).to.have.className('mdl-chip');
    });

    it('should render the chip as a button', () => {
        const clickSpy = spy();
        const wrapper = shallow(<Chip onClick={clickSpy} />);

        expect(wrapper).to.have.tagName('button');
        wrapper.simulate('click');
        expect(clickSpy.calledOnce).to.equal(true);
    });

    it('should not render the close button', () => {
        const wrapper = shallow(<Chip />);
        const closeBtn = wrapper.find('.mdl-chip__action');

        expect(closeBtn).to.not.be.present();
    });

    it('should render the close button', () => {
        const clickSpy = spy();
        const wrapper = shallow(<Chip onClose={clickSpy} />);
        const closeBtn = wrapper.find('.mdl-chip__action');

        expect(closeBtn).to.be.present();
        closeBtn.simulate('click');
        expect(clickSpy.calledOnce).to.equal(true);
    });

    it('should render the contact before the text', () => {
        const wrapper = shallow(
            <Chip>
                <ChipContact>A</ChipContact>
                Contact Chip
            </Chip>
        );

        expect(wrapper.children()).to.have.length(2);
        expect(wrapper.childAt(0).type()).to.equal(ChipContact);
        expect(wrapper.childAt(1)).to.contain('Contact Chip');
    });
});
