/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-addons-test-utils';
import { render, renderDOM } from './render';
import Snackbar from '../Snackbar';

function noop() {}

describe('Snackbar', () => {
    it('should not be visible by default', () => {
        const output = render(<Snackbar active={false} onTimeout={noop} />);

        expect(output.type).toBe('div');
        expect(output.props.className).toBe('mdl-snackbar');
        expect(output.props['aria-hidden']).toBe(true);

        const [text, action] = output.props.children;
        expect(text.type).toBe('div');
        expect(text.props.className).toBe('mdl-snackbar__text');
        expect(text.props.children).toBe(false);

        expect(action).toBe(false);
    });

    it('should allow custom css classes', () => {
        const output = render(<Snackbar active={false} className="my-snackbar" onTimeout={noop} />);

        expect(output.props.className).toInclude('my-snackbar');
    });

    it('should show the snackbar', (done) => {
        const el = renderDOM(<Snackbar active={false} action="Undo" onTimeout={noop} />);
        expect(el.className).toExclude('mdl-snackbar--active');
        expect(el.getAttribute('aria-hidden')).toBe('true');
        expect(el.querySelector('.mdl-snackbar__action')).toBe(null);

        function hideSnackbar() {
            ReactDOM.render(<Snackbar active={false} action="Undo" onTimeout={hideSnackbar} />, el.parentNode);
            expect(el.className).toExclude('mdl-snackbar--active');
            expect(el.getAttribute('aria-hidden')).toBe('true');
            expect(el.querySelector('.mdl-snackbar__action')).toBe(null);
            done();
        }

        ReactDOM.render(<Snackbar active action="Undo" timeout={200} onTimeout={hideSnackbar} />, el.parentNode);
        expect(el.className).toInclude('mdl-snackbar--active');
        expect(el.getAttribute('aria-hidden')).toBe('false');
        expect(el.querySelector('.mdl-snackbar__action')).toNotBe(null);
    });

    it('should show the toast (snackbar without action)', (done) => {
        const el = renderDOM(<Snackbar active={false} onTimeout={noop} />);
        expect(el.className).toExclude('mdl-snackbar--active');
        expect(el.getAttribute('aria-hidden')).toBe('true');
        expect(el.querySelector('.mdl-snackbar__action')).toBe(null);

        function hideToast() {
            ReactDOM.render(<Snackbar active={false} onTimeout={hideToast} />, el.parentNode);
            expect(el.className).toExclude('mdl-snackbar--active');
            expect(el.getAttribute('aria-hidden')).toBe('true');
            expect(el.querySelector('.mdl-snackbar__action')).toBe(null);
            done();
        }

        ReactDOM.render(<Snackbar active timeout={200} onTimeout={hideToast} />, el.parentNode);
        expect(el.className).toInclude('mdl-snackbar--active');
        expect(el.getAttribute('aria-hidden')).toBe('false');
        expect(el.querySelector('.mdl-snackbar__action')).toBe(null);
    });

    it('should click on the action button', (done) => {
        function onActionClick() {
            done();
        }

        const el = renderDOM(<Snackbar active action="Undo" onTimeout={noop} onActionClick={onActionClick} />);
        expect(el.querySelector('.mdl-snackbar__action')).toNotBe(null);
        Simulate.click(el.querySelector('.mdl-snackbar__action'));
    });
});
