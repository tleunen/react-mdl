/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Cell from '../Cell';

chai.use(chaiEnzyme());

describe('Cell', () => {
    it('should render a mdl <div>', () => {
        const wrapper = shallow(<Cell col={1} />);

        expect(wrapper)
            .to.have.tagName('div')
            .to.have.className('mdl-cell');
    });

    it('should allow custom css class', () => {
        const wrapper = shallow(<Cell col={1} className="my-cell" />);

        expect(wrapper)
            .to.have.className('mdl-cell')
            .to.have.className('my-cell');
    });

    it('should have the specific column css class', () => {
        for (let i = 1; i < 13; i++) {
            const wrapper = shallow(<Cell col={i} />);

            expect(wrapper)
                .to.have.className('mdl-cell')
                .to.have.className(`mdl-cell--${i}-col`);
        }
    });

    it('should have the specific phone column css class when specified', () => {
        for (let i = 1; i < 4; i++) {
            const wrapper = shallow(<Cell col={1} phone={i} />);

            expect(wrapper)
                .to.have.className('mdl-cell')
                .to.have.className(`mdl-cell--${i}-col-phone`);
        }
    });

    it('should have the specific tablet column css class when specified', () => {
        for (let i = 1; i < 8; i++) {
            const wrapper = shallow(<Cell col={1} tablet={i} />);

            expect(wrapper)
                .to.have.className('mdl-cell')
                .to.have.className(`mdl-cell--${i}-col-tablet`);
        }
    });

    it('should have the specific alignment css class when specified', () => {
        ['top', 'middle', 'bottom', 'stretch'].forEach(align => {
            const wrapper = shallow(<Cell col={1} align={align} />);

            expect(wrapper)
                .to.have.className('mdl-cell')
                .to.have.className(`mdl-cell--${align}`);
        });
    });

    it('should allow a custom component', () => {
        const wrapper = shallow(<Cell component="section" col={1} />);

        expect(wrapper).to.have.tagName('section');
    });

    it('should allow a complex custom component', () => {
        const Comp = (p) => <article {...p} />;
        const wrapper = shallow(<Cell component={Comp} col={1} />);

        expect(wrapper.find(Comp)).to.have.length(1);
    });
});
