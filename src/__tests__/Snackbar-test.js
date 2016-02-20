/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate, renderIntoDocument } from 'react-addons-test-utils';
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

    it('should clear timeout timer when unmounted', (done) => {
        const el = renderDOM(<Snackbar active={false} onTimeout={noop} />);
        let pass = true;
        function timeoutHandler() {
            pass = false;
        }
        ReactDOM.render(<Snackbar active timeout={1} onTimeout={timeoutHandler} />, el.parentNode, () => {
            // Force unmount
            ReactDOM.unmountComponentAtNode(el.parentNode);
            // Call done if the handler wasn't called
            setTimeout(() => {
                if (pass) {
                    done();
                }
                else {
                    throw new Error('onTimeout handler should not have been called because component was unmounted');
                }
            }, 300);
        });
    });

    it('should clear the cleartimer timer when unmounted', (done) => {
        let pass = true;
        function timeoutHandler() {
            pass = false;
        }
        const component = renderIntoDocument(<Snackbar active={false} timeout={1} onTimeout={timeoutHandler} />);
        const el = ReactDOM.findDOMNode(component);
        // The clearTimer animation period is a very small window, so we invoke clearTimer here directly to start it
        component.clearTimer();
        // Force unmount
        ReactDOM.unmountComponentAtNode(el.parentNode);
        // Call done if the handler wasn't called
        setTimeout(() => {
            if (pass) {
                done();
            }
            else {
                throw new Error('onTimeout handler should not have been called because component was unmounted');
            }
        }, 300);
    });
});
