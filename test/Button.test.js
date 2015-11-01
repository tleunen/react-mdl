/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Button from '../src/Button';

describe('Button', () => {
    it('should be a <button>', () => {
        var output = render(<Button>Button</Button>);
        expect(output.type).toBe('button');
    });

    it('should be a <a> when "href" is provided', () => {
        var output = render(<Button href="#">Button</Button>);

        expect(output.type).toBe('a');
        expect(output.props.href).toBe('#');
    });

    it('should be a custom component when "component" is provided', () => {
        var MyCustomComponent = (props) => <button {...props} />;
        var output = render(<Button component={MyCustomComponent}>Button</Button>);

        expect(output.type).toBe(MyCustomComponent);
    });

    it('should be enabled', () => {
        var output = render(<Button>Button</Button>);

        expect(output.props.disabled).toNotExist();
    });

    it('should be disabled when specified', () => {
        var output = render(<Button disabled>Button</Button>);

        expect(output.props.disabled).toBe(true);
    });

    it('should have mdl css classes', () => {
        var output = render(<Button>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button')
            .toInclude('mdl-js-button');
    });

    it('should allow custom css classes', () => {
        var output = render(<Button className="my-button">Button</Button>);

        expect(output.props.className)
            .toInclude('my-button');
    });

    it('should not have ripple by default', () => {
        var output = render(<Button>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-js-ripple-effect');
    });

    it('should have ripple when specified', () => {
        var output = render(<Button ripple>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-js-ripple-effect');
    });

    it('should be flat', () => {
        var output = render(<Button>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be flat colored when specified', () => {
        var output = render(<Button colored>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-button--raised')
            .toInclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be flat primary when specified', () => {
        var output = render(<Button primary>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toInclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be flat accent-colored when specified', () => {
        var output = render(<Button accent>Button</Button>);

        expect(output.props.className)
            .toExclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toInclude('mdl-button--accent');
    });

    it('should be raised', () => {
        var output = render(<Button raised>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be raised colored when specified', () => {
        var output = render(<Button raised colored>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button--raised')
            .toInclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be raised primary when specified', () => {
        var output = render(<Button raised primary>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toInclude('mdl-button--primary')
            .toExclude('mdl-button--accent');
    });

    it('should be raised accent-colored when specified', () => {
        var output = render(<Button raised accent>Button</Button>);

        expect(output.props.className)
            .toInclude('mdl-button--raised')
            .toExclude('mdl-button--colored')
            .toExclude('mdl-button--primary')
            .toInclude('mdl-button--accent');
    });
});
