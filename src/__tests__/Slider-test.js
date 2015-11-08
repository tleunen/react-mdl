/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Slider from '../Slider';

describe('Slider', () => {
    it('should render an input with the slider css classes', () => {
        var output = render(<Slider value={1} />);

        expect(output.type).toBe('input');
        expect(output.props.className)
            .toInclude('mdl-slider')
            .toInclude('mdl-js-slider');
    });

    it('should allow custom css classes', () => {
        var output = render(<Slider className="my-slider" />);

        expect(output.props.className).toInclude('my-slider');
    });
});
