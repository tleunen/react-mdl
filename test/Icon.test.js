/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import render from './render';
import Icon from '../src/Icon';

describe('Icon', () => {
    it('should be a <i>', () => {
        var output = render(<Icon name="add" />);

        expect(output.type).toBe('i');
        expect(output.props.children).toBe('add');
    });

    it('should have material-icons css class', () => {
        var output = render(<Icon name="add" />);

        expect(output.props.className).toInclude('material-icons');
    });

    it('should allow custom css classes', () => {
        var output = render(<Icon name="mood" className="myCustomClass" />);

        expect(output.props.className)
            .toInclude('myCustomClass');
    });
});
