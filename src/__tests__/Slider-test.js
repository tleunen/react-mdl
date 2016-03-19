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

    describe('should have the backgrund aligned with the thumb', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(<Slider min={0} max={100} value={25} onChange={onChange} />);

        expect(el.parentElement.querySelector('.mdl-slider__background-lower').style.flex).toBe('0.25 1 0%');
        expect(el.parentElement.querySelector('.mdl-slider__background-upper').style.flex).toBe('0.75 1 0%');
    });

    describe('should update with the new value', () => {
        const onChange = expect.createSpy();
        const el = renderDOM(<Slider min={0} max={100} value={25} onChange={onChange} />);

        ReactDOM.render(<Slider min={0} max={100} value={50} onChange={onChange} />, el.parentNode);

        expect(el.parentElement.querySelector('.mdl-slider__background-lower').style.flex).toBe('0.5 1 0%');
        expect(el.parentElement.querySelector('.mdl-slider__background-upper').style.flex).toBe('0.5 1 0%');
    });
});
