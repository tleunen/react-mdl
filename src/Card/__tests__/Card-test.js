/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { Card } from '../';

chai.use(chaiEnzyme());

describe('Card', () => {
    it('should render a div with the card css class', () => {
        const wrapper = shallow(<Card />);

        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('mdl-card');
    });

    it('should allow custom css classes', () => {
        const wrapper = shallow(<Card className="my-card" />);

        expect(wrapper).to.have.className('mdl-card');
        expect(wrapper).to.have.className('my-card');
    });

    it('should render without shadows by default', () => {
        const wrapper = shallow(<Card />);

        expect(wrapper).to.not.have.className('mdl-shadow--4dp');
    });

    it('should render with a shadow when specified', () => {
        const wrapper = shallow(<Card shadow={2} />);

        expect(wrapper).to.have.className('mdl-shadow--4dp');
    });

    it('should render with the children', () => {
        const element = (
            <Card>
                <div className="inner">Inner text</div>
            </Card>
        );
        const wrapper = shallow(element);
        expect(wrapper).to.contain(
            <div className="inner">Inner text</div>
        );
    });
});
