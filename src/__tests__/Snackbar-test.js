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

        ReactDOM.render(<Snackbar active action="Undo" timeout={200} onTimeout={done} />, el.parentNode);
        expect(el.className).toInclude('mdl-snackbar--active');
        expect(el.getAttribute('aria-hidden')).toBe('false');
        expect(el.querySelector('.mdl-snackbar__action')).toNotBe(null);
    });

    it('should show the toast (snackbar without action)', (done) => {
        const el = renderDOM(<Snackbar active={false} onTimeout={noop} />);
        expect(el.className).toExclude('mdl-snackbar--active');
        expect(el.getAttribute('aria-hidden')).toBe('true');
        expect(el.querySelector('.mdl-snackbar__action')).toBe(null);

        ReactDOM.render(<Snackbar active timeout={200} onTimeout={done} />, el.parentNode);
        expect(el.className).toInclude('mdl-snackbar--active');
        expect(el.getAttribute('aria-hidden')).toBe('false');
        expect(el.querySelector('.mdl-snackbar__action')).toBe(null);
    });

    it('should click on the action button', () => {
        const onClick = expect.createSpy();

        const el = renderDOM(<Snackbar active action="Undo" onTimeout={noop} onActionClick={onClick} />);
        expect(el.querySelector('.mdl-snackbar__action')).toNotBe(null);
        Simulate.click(el.querySelector('.mdl-snackbar__action'));
        expect(onClick).toHaveBeenCalled();
    });

    it('should clear the timer when receiving new props', (done) => {
        const timeoutHandler1 = expect.createSpy();
        const timeoutHandler2 = () => {
            expect(timeoutHandler1).toNotHaveBeenCalled();
            done();
        };
        const el = renderDOM(<Snackbar active={false} onTimeout={timeoutHandler1} />);
        ReactDOM.render(<Snackbar active timeout={1000} onTimeout={timeoutHandler1} />, el.parentNode);
        ReactDOM.render(<Snackbar active timeout={100} onTimeout={timeoutHandler2} />, el.parentNode);
    });

    it('should clear timeout timer when unmounted', (done) => {
        const el = renderDOM(<Snackbar active={false} onTimeout={noop} />);
        const timeoutHandler = expect.createSpy();

        ReactDOM.render(<Snackbar active timeout={100} onTimeout={timeoutHandler} />, el.parentNode);
        ReactDOM.unmountComponentAtNode(el.parentNode);
        setTimeout(() => {
            expect(timeoutHandler).toNotHaveBeenCalled();
            done();
        }, 300);
    });

    it('should clear the cleartimer timer when unmounted', (done) => {
        const el = renderDOM(<Snackbar active={false} onTimeout={noop} />);
        const timeoutHandler = expect.createSpy();

        ReactDOM.render(<Snackbar active timeout={100} onTimeout={timeoutHandler} />, el.parentNode);
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(el.parentNode);
            setTimeout(() => {
                expect(timeoutHandler).toNotHaveBeenCalled();
                done();
            }, 200);
        }, 101);
    });
});
