/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Fab from '../Fab';
import Button from '../Button';
import Icon from '../../Icon';

chai.use(chaiEnzyme());

describe('Fab Button', () => {
    it('should shallow a Button component', () => {
        const wrapper = shallow(<Fab>A</Fab>);

        expect(wrapper.type()).to.equal(Button);
    });

    it('should have mdl fab css class', () => {
        const wrapper = shallow(<Fab>A</Fab>);

        expect(wrapper).to.have.className('mdl-button--fab');
    });

    it('should allow text child', () => {
        const wrapper = shallow(<Fab>A</Fab>);

        expect(wrapper).to.contain('A');
    });

    it('should allow complex child', () => {
        const wrapper = shallow(<Fab><Icon name="add" /></Fab>);

        expect(wrapper.find(Icon)).to.have.length(1);
    });

    it('should be mini when specified', () => {
        const wrapper = shallow(<Fab mini>A</Fab>);

        expect(wrapper)
            .to.have.className('mdl-button--fab')
            .to.have.className('mdl-button--mini-fab');
    });
});
