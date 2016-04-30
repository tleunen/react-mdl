/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Grid from '../Grid';

chai.use(chaiEnzyme());

describe('Grid', () => {
    it('should render a MDL grid <div>', () => {
        const wrapper = shallow(<Grid />);

        expect(wrapper)
            .to.have.tagName('div')
            .to.have.className('mdl-grid');
    });

    it('should allow custom css class', () => {
        const wrapper = shallow(<Grid className="my-grid" />);

        expect(wrapper)
            .to.have.className('mdl-grid')
            .to.have.className('my-grid');
    });

    it('should allow a custom component', () => {
        const wrapper = shallow(<Grid component="section" />);

        expect(wrapper).to.have.tagName('section');
    });

    it('should allow a complex custom component', () => {
        const Comp = (p) => <article {...p} />;
        const wrapper = shallow(<Grid component={Comp} />);

        expect(wrapper.find(Comp)).to.have.length(1);
    });
});
