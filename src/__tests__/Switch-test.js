/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Switch from '../Switch';

describe('Switch', () => {
    it('should render a label with the switch css classes', () => {
        const output = render(<Switch />);

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-switch')
            .toInclude('mdl-js-switch');
    });

    it('should allow custom css classes', () => {
        const output = render(<Switch className="my-switch" />);

        expect(output.props.className).toInclude('my-switch');
    });

    it('should not have ripple by default', () => {
        const output = render(<Switch />);

        expect(output.props.className)
            .toExclude('mdl-js-ripple-effect');
    });

    it('should have ripple when specified', () => {
        const output = render(<Switch ripple />);

        expect(output.props.className)
            .toInclude('mdl-js-ripple-effect');
    });

    it('should define the children as label', () => {
        const output = render(<Switch>My label</Switch>);

        const label = output.props.children[1];

        expect(label.props.className).toBe('mdl-switch__label');
        expect(label.props.children).toBe('My label');
    });
});
