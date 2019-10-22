/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, renderDOM } from './render';
import Slider from '../Slider';

describe('Slider', () => {
    it('should render an input with the slider css classes', () => {
        const onChange = expect.createSpy();
        const output = render(<Slider min={0} max={100} value={1} onChange={onChange} />);

        expect(output.type).toBe('input');
        expect(output.props.className)
            .toInclude('mdl-slider')
            .toInclude('mdl-js-slider');
    });

    it('should allow custom css classes', () => {
        const onChange = expect.createSpy();
        const output = render(<Slider min={0} max={100} value={1} onChange={onChange} className="my-slider" />);

        expect(output.props.className).toInclude('my-slider');
    });

    it('should have the backgrund aligned with the thumb', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(<Slider min={0} max={100} value={25} onChange={onChange} />);

        expect(el.parentElement.querySelector('.mdl-slider__background-lower').style.flex).toMatch(/^0.25 .*/);
        expect(el.parentElement.querySelector('.mdl-slider__background-upper').style.flex).toMatch(/^0.75 .*/);
    });

    it('should update with the new value', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(<Slider min={0} max={100} value={25} onChange={onChange} />);
        const parent = el.parentNode;

        ReactDOM.render(<Slider min={0} max={100} value={50} onChange={onChange} />, parent);

        expect(parent.querySelector('.mdl-slider__background-lower').style.flex).toMatch(/^0.5 .*/);
        expect(parent.querySelector('.mdl-slider__background-upper').style.flex).toMatch(/^0.5 .*/);
    });
});
