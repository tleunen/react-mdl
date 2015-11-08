/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Radio from '../Radio';

describe('Radio', () => {
    it('should render a label with the radio css classes', () => {
        var output = render(<Radio value="1" />);

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-radio')
            .toInclude('mdl-js-radio');
    });

    it('should allow custom css classes', () => {
        var output = render(<Radio className="my-radio" value="1" />);

        expect(output.props.className).toInclude('my-radio');
    });

    it('should not have ripple by default', () => {
        var output = render(<Radio value="1" />);

        expect(output.props.className)
            .toExclude('mdl-js-ripple-effect');
    });

    it('should have ripple when specified', () => {
        var output = render(<Radio value="1" ripple />);

        expect(output.props.className)
            .toInclude('mdl-js-ripple-effect');
    });

    it('should define the children as label', () => {
        var output = render(<Radio value="1">My label</Radio>);

        var label = output.props.children[1];

        expect(label.props.className).toBe('mdl-radio__label');
        expect(label.props.children).toBe('My label');
    });
});
