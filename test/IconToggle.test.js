/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import render from './render';
import IconToggle from '../src/IconToggle';
import Icon from '../src/Icon';

describe('IconToggle', () => {
    it('should render an input checkbox inside a <label> ', () => {
        var output = render(<IconToggle name="add" />);

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-icon-toggle')
            .toInclude('mdl-js-icon-toggle');

        var input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.type).toBe('checkbox');
    });

    it('should render an Icon inside the <label> ', () => {
        var output = render(<IconToggle name="add" />);

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-icon-toggle')
            .toInclude('mdl-js-icon-toggle');

        var icon = output.props.children[1];
        expect(icon.type).toBe(Icon);
        expect(icon.props.name).toBe('add');
    });

    it('should be unchecked by default', () => {
        var output = render(<IconToggle name="add" />);

        var input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.checked).toNotExist();
    });

    it('should be checked when specified', () => {
        var output = render(<IconToggle name="add" checked />);

        var input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.checked).toBe(true);
    });

    it('should be disabled when specified', () => {
        var output = render(<IconToggle name="add" disabled />);

        var input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.disabled).toBe(true);
    });

    it('should add ripple when specified', () => {
        var output = render(<IconToggle name="add" ripple />);

        expect(output.type).toBe('label');
        expect(output.props.className).toInclude('mdl-js-ripple-effect');
    });
});
