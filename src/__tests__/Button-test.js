/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Button from '../Button';

describe('Button', () => {
    it('should be a <button>', () => {
        const output = render(<Button>Button</Button>);
        expect(output.type).toBe('button');
    });

    it('should be a <a> when "href" is provided', () => {
        const output = render(<Button href="#">Button</Button>);

        expect(output.type).toBe('a');
        expect(output.props.href).toBe('#');
    });

    it('should be a custom component when "component" is provided', () => {
        const MyCustomComponent = (props) => <button {...props} />;
        const output = render(<Button component={MyCustomComponent}>Button</Button>);

        expect(output.type).toBe(MyCustomComponent);
    });

    it('should be enabled', () => {
        const output = render(<Button>Button</Button>);

        expect(output.props.disabled).toNotExist();
    });

    it('should be disabled when specified', () => {
        const output = render(<Button disabled>Button</Button>);

        expect(output.props.disabled).toBe(true);
    });

    it('should have mdl css classes', () => {
        const output = render(<Button>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button')
            .toInclude('mdl-js-button');
    });

    it('should allow custom css classes', () => {
        const output = render(<Button className="my-button">Button</Button>);

        expect(output.props.className)
            .toInclude('my-button');
    });

    it('should not have ripple by default', () => {
        const output = render(<Button>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-js-ripple-effect');
    });

    it('should have ripple when specified', () => {
        const output = render(<Button ripple>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-js-ripple-effect');
    });

    it('should be flat', () => {
        const output = render(<Button>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be flat colored when specified', () => {
        const output = render(<Button colored>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-button--raised')
            .toInclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be flat primary when specified', () => {
        const output = render(<Button primary>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toInclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be flat accent-colored when specified', () => {
        const output = render(<Button accent>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toInclude('mdl-button--accent');
    });

    it('should be raised', () => {
        const output = render(<Button raised>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be raised colored when specified', () => {
        const output = render(<Button raised colored>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button--raised')
            .toInclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be raised primary when specified', () => {
        const output = render(<Button raised primary>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toInclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be raised accent-colored when specified', () => {
        const output = render(<Button raised accent>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toInclude('mdl-button--accent');
    });
});
