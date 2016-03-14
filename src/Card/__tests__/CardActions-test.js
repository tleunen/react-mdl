/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { CardActions } from '../';

chai.use(chaiEnzyme());

describe('CardActions', () => {
    it('should render a div with the action css class', () => {
        const wrapper = shallow(<CardActions />);

        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('mdl-card__actions');
    });

    it('should allow custom css classes', () => {
        const wrapper = shallow(<CardActions className="my-actions" />);

        expect(wrapper).to.have.className('mdl-card__actions');
        expect(wrapper).to.have.className('my-actions');
    });

    it('should not have a border by default', () => {
        const wrapper = shallow(<CardActions />);

        expect(wrapper).to.not.have.className('mdl-card--border');
    });

    it('should have a border when specified', () => {
        const wrapper = shallow(<CardActions border />);

        expect(wrapper).to.have.className('mdl-card--border');
    });

    it('should render with the children', () => {
        const element = (
            <CardActions>
                <div className="inner">Inner text</div>
            </CardActions>
        );
        const wrapper = shallow(element);

        expect(wrapper).to.contain(
            <div className="inner">Inner text</div>
        );
    });
});
