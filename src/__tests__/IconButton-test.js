/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import IconButton from '../IconButton';
import Button from '../Button';
import Icon from '../Icon';

describe('IconButton', () => {
    it('should be a Button component', () => {
        var output = render(<IconButton name="add" />);

        expect(output.type).toBe(Button);
    });

    it('should have the btn icon css class', () => {
        var output = render(<IconButton name="add" />);

        expect(output.props.className)
            .toInclude('mdl-button--icon');
    });

    it('should allow custom css classes', () => {
        var output = render(<IconButton name="add" className="my-icon-button" />);

        expect(output.props.className)
            .toInclude('my-icon-button');
    });

    it('should have an icon as child', () => {
        var output = render(<IconButton name="add" />);

        expect(output.props.children.type).toBe(Icon);
        expect(output.props.children.props.name).toBe('add');
    });
});
