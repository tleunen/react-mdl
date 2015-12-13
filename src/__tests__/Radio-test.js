/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, renderDOM } from './render';
import Radio from '../Radio';

describe('Radio', () => {
    it('should render a label with the radio css classes', () => {
        const output = render(<Radio value="1" />);

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-radio')
            .toInclude('mdl-js-radio');
    });

    it('should allow custom css classes', () => {
        const output = render(<Radio className="my-radio" value="1" />);

        expect(output.props.className).toInclude('my-radio');
    });

    it('should not have ripple by default', () => {
        const output = render(<Radio value="1" />);

        expect(output.props.className)
            .toExclude('mdl-js-ripple-effect');
    });

    it('should have ripple when specified', () => {
        const output = render(<Radio value="1" ripple />);

        expect(output.props.className)
            .toInclude('mdl-js-ripple-effect');
    });

    it('should define the children as label', () => {
        const output = render(<Radio value="1">My label</Radio>);

        const label = output.props.children[1];

        expect(label.props.className).toBe('mdl-radio__label');
        expect(label.props.children).toBe('My label');
    });

    describe('should update the Radio after the first render', () => {
        it('when `checked` has changed', () => {
            const el = renderDOM(<Radio />);

            expect(el.className).toExclude('is-checked');

            ReactDOM.render(<Radio checked />, el.parentNode);
            expect(el.className).toInclude('is-checked');
            ReactDOM.render(<Radio />, el.parentNode);
            expect(el.className).toExclude('is-checked');
        });

        it('when `disable` has changed', () => {
            const el = renderDOM(<Radio />);

            expect(el.className).toExclude('is-disabled');
            ReactDOM.render(<Radio disabled />, el.parentNode);
            expect(el.className).toInclude('is-disabled');
            ReactDOM.render(<Radio />, el.parentNode);
            expect(el.className).toExclude('is-disabled');
        });
    });
});
