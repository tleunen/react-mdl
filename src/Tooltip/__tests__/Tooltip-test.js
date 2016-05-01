/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Tooltip from '../Tooltip';
import Icon from '../../Icon';

chai.use(chaiEnzyme());

describe('Tooltip', () => {
    it('should render the child and label inside a div', () => {
        const wrapper = shallow(
            <Tooltip label="my tooltip">text</Tooltip>
        );

        expect(wrapper).to.have.tagName('div');
        expect(wrapper.children()).to.have.length(2);
    });

    it('should render the tooltip with the tooltip css', () => {
        const wrapper = shallow(
            <Tooltip label="my tooltip">text</Tooltip>
        );

        expect(wrapper.find('.mdl-tooltip')).to.have.length(1);
    });

    it('should work with a complex child', () => {
        const wrapper = shallow(
            <Tooltip label="my tooltip">
                <Icon name="add" />
            </Tooltip>
        );

        expect(wrapper.find(Icon)).to.have.length(1);
    });

    it('should work with a complex label', () => {
        const wrapper = shallow(
            <Tooltip label={<div>my tooltip</div>}>text</Tooltip>
        );

        expect(wrapper.find('.mdl-tooltip')).to.contain(
            <div>my tooltip</div>
        );
    });

    it('should render a small tooltip by default', () => {
        const wrapper = shallow(
            <Tooltip label="my tooltip">
                <Icon name="add" />
            </Tooltip>
        );

        expect(wrapper.find('.mdl-tooltip'))
            .to.not.have.className('mdl-tooltip--large');
    });

    it('should render a large tooltip if specified', () => {
        const wrapper = shallow(
            <Tooltip label="my tooltip" large>
                <Icon name="add" />
            </Tooltip>
        );

        expect(wrapper.find('.mdl-tooltip'))
            .to.have.className('mdl-tooltip--large');
    });

    it('should be invisible', () => {
        const wrapper = shallow(
            <Tooltip label="my tooltip">text</Tooltip>
        );

        expect(wrapper.find('.mdl-tooltip'))
            .to.not.have.className('is-active');
    });

    // describe('should render the tooltip at the right location', () => {
    //     const fakeEvent = { target: { getBoundingClientRect: () => ({
    //         left: 0, top: 0, width: 100, height: 50
    //     }) } };
    //
    //     it('when the position is not set (default "bottom")', () => {
    //         const wrapper = shallow(
    //             <Tooltip label="my tooltip">text</Tooltip>
    //         );
    //
    //         const element = wrapper.childAt(0);
    //         element.simulate('mouseenter', fakeEvent);
    //
    //         expect(wrapper.find('.mdl-tooltip'))
    //             .to.have.className('is-active');
    //     });
    // });
});
