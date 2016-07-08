/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { CardMedia } from '../';

chai.use(chaiEnzyme());

describe('CardMedia', () => {
    it('should render a div with the card media css class', () => {
        const wrapper = shallow(<CardMedia />);

        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('mdl-card__media');
    });

    it('should allow custom css classes', () => {
        const wrapper = shallow(<CardMedia className="my-media" />);

        expect(wrapper).to.have.className('mdl-card__media');
        expect(wrapper).to.have.className('my-media');
    });

    it('should render with the children', () => {
        const element = (
            <CardMedia>
                <img src="test.png" alt="" />
            </CardMedia>
        );

        const wrapper = shallow(element);

        expect(wrapper).to.contain(
            <img src="test.png" alt="" />
        );
    });
});
