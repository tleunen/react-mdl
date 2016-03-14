/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { CardTitle } from '../';

chai.use(chaiEnzyme());

describe('CardTitle', () => {
    it('should render a div with the title css class', () => {
        const wrapper = shallow(<CardTitle />);

        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('mdl-card__title');
    });

    it('should allow custom css classes', () => {
        const wrapper = shallow(<CardTitle className="my-title" />);

        expect(wrapper).to.have.className('mdl-card__title');
        expect(wrapper).to.have.className('my-title');
    });

    it('should not expand by default', () => {
        const wrapper = shallow(<CardTitle />);

        expect(wrapper).to.not.have.className('mdl-card--expand');
    });

    it('should expand when specified', () => {
        const wrapper = shallow(<CardTitle expand />);

        expect(wrapper).to.have.className('mdl-card--expand');
    });

    it('should render the title in the default <h2>', () => {
        const wrapper = shallow(<CardTitle>My Title</CardTitle>);

        expect(wrapper).to.contain(
            <h2 className="mdl-card__title-text">My Title</h2>
        );
    });

    it('should render custom complex title', () => {
        const wrapper = shallow(<CardTitle><h4>My Title</h4></CardTitle>);

        expect(wrapper).to.contain(
            <h4>My Title</h4>
        );
    });
});
