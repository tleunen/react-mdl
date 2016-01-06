/* eslint-env mocha */
import { render, renderDOM } from './render';
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Textfield from '../Textfield';

describe('Textfield', () => {
    it('should render an div with the textfield css classes', () => {
        const output = render(<Textfield label="label" />);

        expect(output.type).toBe('div');
        expect(output.props.className)
            .toInclude('mdl-textfield')
            .toInclude('mdl-js-textfield');
    });

    it('should allow custom css classes', () => {
        const output = render(<Textfield className="my-textfield" label="label" />);

        expect(output.props.className).toInclude('my-textfield');
    });

    it('should render an input by default', () => {
        const output = render(<Textfield label="label" />);

        const input = output.props.children[1][0];
        expect(input.type).toBe('input');
    });

    describe('should render a textarea', () => {
        it('when rows is specified', () => {
            const output = render(<Textfield label="label" rows={3} />);

            const input = output.props.children[1][0];
            expect(input.type).toBe('textarea');
        });

        it('when maxRows is specified', () => {
            const output = render(<Textfield label="label" maxRows={5} />);

            const input = output.props.children[1][0];
            expect(input.type).toBe('textarea');
        });
    });

    it('should render with a floating label', () => {
        const output = render(<Textfield label="label" floatingLabel />);

        expect(output.props.className)
            .toInclude('mdl-textfield--floating-label');
    });

    it('should not render any error message by default', () => {
        const output = render(<Textfield label="label" />);

        expect(output.props.children[1][2]).toBe(null);
    });

    it('should render with an error message if specified', () => {
        const output = render(<Textfield label="label" error="error..." />);

        expect(output.props.children[1][2].props.className)
            .toInclude('mdl-textfield__error');
        expect(output.props.children[1][2].props.children).toBe('error...');
    });

    it('should render an expandable textfield if specified', () => {
        const output = render(<Textfield label="label" expandable expandableIcon="search" />);

        expect(output.props.className)
            .toInclude('mdl-textfield--expandable');

        const expandableLabel = output.props.children[0];
        expect(expandableLabel.props.className)
            .toInclude('mdl-button')
            .toInclude('mdl-js-button ')
            .toInclude('mdl-button--icon');
        const expandableIcon = expandableLabel.props.children;
        expect(expandableIcon.props.className).toInclude('material-icons');
        expect(expandableIcon.props.children).toBe('search');

        const inputContainer = output.props.children[1];
        expect(inputContainer.type).toBe('div');
        expect(inputContainer.props.className)
            .toInclude('mdl-textfield__expandable-holder');
        expect(inputContainer.props.children[0].type).toBe('input');
    });

    describe('should update the textfield after the first render', () => {
        it('when it receives an error', () => {
            const el = renderDOM(<Textfield label="label" />);

            ReactDOM.render(<Textfield label="label" error="is now invalid!" />, el.parentNode);

            expect(el.className).toInclude('is-invalid');
        });

        it('when it clears an error', () => {
            const el = renderDOM(<Textfield label="label"/>);

            ReactDOM.render(<Textfield label="label" error="is now invalid!" />, el.parentNode);
            expect(el.className).toInclude('is-invalid');

            ReactDOM.render(<Textfield label="label" error={null}/>, el.parentNode);
            expect(el.className).toExclude('is-invalid');
        });

        it('when it receives a new value', () => {
            const el = renderDOM(<Textfield label="label" />);

            ReactDOM.render(<Textfield label="label" value="my value" />, el.parentNode);

            expect(el.querySelector('.mdl-textfield__input').value).toBe('my value');
        });

        it('when it gets disabled', () => {
            const el = renderDOM(<Textfield label="label" />);

            ReactDOM.render(<Textfield label="label" disabled />, el.parentNode);

            expect(el.className).toInclude('is-disabled');
            expect(el.querySelector('.mdl-textfield__input').disabled).toBe(true);
        });

        it('when it gets required w/o value', () => {
            const el = renderDOM(<Textfield label="label" />);

            ReactDOM.render(<Textfield label="label" required />, el.parentNode);

            expect(el.className).toInclude('is-invalid');
            expect(el.querySelector('.mdl-textfield__input').required).toBe(true);
        });

        it('when it gets required with value', () => {
            const el = renderDOM(<Textfield label="label" value="my value" />);

            ReactDOM.render(<Textfield label="label" value="my value" required />, el.parentNode);

            expect(el.className).toExclude('is-invalid');
            expect(el.querySelector('.mdl-textfield__input').required).toBe(true);
        });

        it('when it receives a pattern with an incorrect value', () => {
            const el = renderDOM(<Textfield label="label" value="value" />);

            ReactDOM.render(<Textfield label="label" value="value" pattern="[0-9]+" />, el.parentNode);

            expect(el.className).toInclude('is-invalid');
        });

        it('when it receives a pattern with correct value', () => {
            const el = renderDOM(<Textfield label="label" value="17" />);

            ReactDOM.render(<Textfield label="label" value="17" pattern="[0-9]+" />, el.parentNode);

            expect(el.className).toExclude('is-invalid');
        });
    });
});
