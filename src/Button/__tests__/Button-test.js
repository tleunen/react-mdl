/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Button from '../Button';

chai.use(chaiEnzyme());

describe('Button', () => {
    it('should be a <button>', () => {
        const wrapper = shallow(<Button>Button</Button>);

        expect(wrapper).to.have.tagName('button');
    });

    it('should be a <a> when "href" is provided', () => {
        const wrapper = shallow(<Button href="#">Button</Button>);

        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.prop('href', '#');
    });

    it('should be a custom component when "component" is provided', () => {
        const MyCustomComponent = (props) => <custom-element {...props} />;
        const wrapper = shallow(<Button component={MyCustomComponent}>Button</Button>);

        expect(wrapper).to.have.tagName('custom-element');
    });

    it('should be enabled', () => {
        const wrapper = shallow(<Button>Button</Button>);

        expect(wrapper).to.not.be.disabled();
    });

    it('should be disabled when specified', () => {
        const wrapper = shallow(<Button disabled>Button</Button>);

        expect(wrapper).to.be.disabled();
    });

    it('should have mdl css classes', () => {
        const wrapper = mount(<Button>Button</Button>);

        expect(wrapper).to.have.className('mdl-button');
    });

    it('should allow custom css classes', () => {
        const wrapper = mount(<Button className="my-button">Button</Button>);

        expect(wrapper).to.have.className('mdl-button');
        expect(wrapper).to.have.className('my-button');
    });

    // it('should have ripple when specified', () => {
    //     const wrapper = mount(<Button ripple>Button</Button>);
    //
    //     expect(wrapper)
    //         .to.have.className('mdl-js-ripple-effect');
    // });

    it('should be flat', () => {
        const wrapper = mount(<Button>Button</Button>);

        expect(wrapper).to.not.have.className('mdl-button--raised');
        expect(wrapper).to.not.have.className('mdl-button--colored');
        expect(wrapper).to.not.have.className('mdl-button--primary');
        expect(wrapper).to.not.have.className('mdl-button--accent');
    });

    it('should be flat colored when specified', () => {
        const wrapper = mount(<Button colored>Button</Button>);

        expect(wrapper).to.not.have.className('mdl-button--raised');
        expect(wrapper).to.have.className('mdl-button--colored');
        expect(wrapper).to.not.have.className('mdl-button--primary');
        expect(wrapper).to.not.have.className('mdl-button--accent');
    });

    it('should be flat primary when specified', () => {
        const wrapper = mount(<Button primary>Button</Button>);

        expect(wrapper).to.not.have.className('mdl-button--raised');
        expect(wrapper).to.not.have.className('mdl-button--colored');
        expect(wrapper).to.have.className('mdl-button--primary');
        expect(wrapper).to.not.have.className('mdl-button--accent');
    });

    it('should be flat accent-colored when specified', () => {
        const wrapper = mount(<Button accent>Button</Button>);

        expect(wrapper).to.not.have.className('mdl-button--raised');
        expect(wrapper).to.not.have.className('mdl-button--colored');
        expect(wrapper).to.not.have.className('mdl-button--primary');
        expect(wrapper).to.have.className('mdl-button--accent');
    });

    it('should be raised', () => {
        const wrapper = mount(<Button raised>Button</Button>);

        expect(wrapper).to.have.className('mdl-button--raised');
        expect(wrapper).to.not.have.className('mdl-button--colored');
        expect(wrapper).to.not.have.className('mdl-button--primary');
        expect(wrapper).to.not.have.className('mdl-button--accent');
    });

    it('should be raised colored when specified', () => {
        const wrapper = mount(<Button raised colored>Button</Button>);

        expect(wrapper).to.have.className('mdl-button--raised');
        expect(wrapper).to.have.className('mdl-button--colored');
        expect(wrapper).to.not.have.className('mdl-button--primary');
        expect(wrapper).to.not.have.className('mdl-button--accent');
    });

    it('should be raised primary when specified', () => {
        const wrapper = mount(<Button raised primary>Button</Button>);

        expect(wrapper).to.have.className('mdl-button--raised');
        expect(wrapper).to.not.have.className('mdl-button--colored');
        expect(wrapper).to.have.className('mdl-button--primary');
        expect(wrapper).to.not.have.className('mdl-button--accent');
    });

    it('should be raised accent-colored when specified', () => {
        const wrapper = mount(<Button raised accent>Button</Button>);

        expect(wrapper).to.have.className('mdl-button--raised');
        expect(wrapper).to.not.have.className('mdl-button--colored');
        expect(wrapper).to.not.have.className('mdl-button--primary');
        expect(wrapper).to.have.className('mdl-button--accent');
    });
});
