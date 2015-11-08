/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
    it('should render an input checkbox inside a <label> ', () => {
        const output = render(<Checkbox />);

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-checkbox')
            .toInclude('mdl-js-checkbox');

        const input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.type).toBe('checkbox');
    });

    it('should not render the checkbox label when not provided', () => {
        const output = render(<Checkbox />);

        expect(output.props.children[1]).toNotExist();
    });

    it('should render the label when provided', () => {
        const output = render(<Checkbox label="My checkbox" />);

        expect(output.props.children.length).toBe(2);

        const checkboxLabel = output.props.children[1];
        expect(checkboxLabel.type).toBe('span');
        expect(checkboxLabel.props.className).toBe('mdl-checkbox__label');
        expect(checkboxLabel.props.children).toBe('My checkbox');
    });

    it('should be unchecked by default', () => {
        const output = render(<Checkbox />);

        const input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.checked).toNotExist();
    });

    it('should be checked when specified', () => {
        const output = render(<Checkbox checked />);

        const input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.checked).toBe(true);
    });

    it('should be disabled when specified', () => {
        const output = render(<Checkbox disabled />);

        const input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.disabled).toBe(true);
    });

    it('should add ripple when specified', () => {
        const output = render(<Checkbox ripple />);

        expect(output.type).toBe('label');
        expect(output.props.className).toInclude('mdl-js-ripple-effect');
    });
});
