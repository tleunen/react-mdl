/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, renderDOM } from '../../__tests__/render';
import { Dialog } from '../';

describe('Dialog', () => {
    it('should render a dialog with the mdl-dialog css class', () => {
        const output = render(<Dialog />);

        expect(output.type).toBe('dialog');
        expect(output.props.className).toInclude('mdl-dialog');
    });

    it('should allow custom css classes', () => {
        const output = render(<Dialog className="my-dialog" />);

        expect(output.props.className)
            .toInclude('mdl-dialog')
            .toInclude('my-dialog');
    });

    it('should not open by default', () => {
        const spy = {
            showModal: expect.createSpy()
        };
        expect.spyOn(ReactDOM, 'findDOMNode').andReturn(spy);
        renderDOM(<Dialog />);

        expect(spy.showModal).toNotHaveBeenCalled();
        expect.restoreSpies();
    });

    it('should open when specified on initial render', () => {
        const spy = {
            showModal: expect.createSpy()
        };
        expect.spyOn(ReactDOM, 'findDOMNode').andReturn(spy);
        renderDOM(<Dialog open />);

        expect(spy.showModal).toHaveBeenCalled();
        expect.restoreSpies();
    });

    it('should open when open props is changed from false to true', () => {
        const el = renderDOM(<Dialog />);
        const spy = expect.spyOn(el, 'showModal');

        ReactDOM.render(<Dialog open />, el.parentNode);
        expect(spy).toHaveBeenCalled();
        expect.restoreSpies();
    });

    it('should not open when open props is unchanged from its previous false value', () => {
        const el = renderDOM(<Dialog />);
        const spy = expect.spyOn(el, 'showModal');

        ReactDOM.render(<Dialog />, el.parentNode);
        expect(spy).toNotHaveBeenCalled();
        expect.restoreSpies();
    });

    it('should close when open props is changed from true to false', () => {
        expect.spyOn(Dialog.prototype, 'componentDidMount');
        const el = renderDOM(<Dialog open />);
        const spy = expect.spyOn(el, 'close');

        ReactDOM.render(<Dialog />, el.parentNode);
        expect(spy).toHaveBeenCalled();
        expect.restoreSpies();
    });

    it('should not close when open props is unchanged from its previous true value', () => {
        expect.spyOn(Dialog.prototype, 'componentDidMount');
        const el = renderDOM(<Dialog open />);
        const spy = expect.spyOn(el, 'close');

        ReactDOM.render(<Dialog open />, el.parentNode);
        expect(spy).toNotHaveBeenCalled();
        expect.restoreSpies();
    });

    it('should prevent default cancel handler', () => {
        const spy = expect.spyOn(Event.prototype, 'preventDefault').andCallThrough();
        const el = renderDOM(<Dialog />);

        el.dispatchEvent(new Event('cancel'));
        expect(spy).toHaveBeenCalled();
        expect.restoreSpies();
    });

    it('should call provided cancel handler when specified on initial render', () => {
        const spy = expect.createSpy();
        const el = renderDOM(<Dialog onCancel={spy}/>);

        el.dispatchEvent(new Event('cancel'));
        expect(spy).toHaveBeenCalled();
        expect.restoreSpies();
    });

    it('should remove any cancel handler when unmounted', () => {
        const cancelHandler = expect.createSpy();
        const el = renderDOM(<Dialog onCancel={cancelHandler} />);
        const spy = expect.spyOn(el, 'removeEventListener');
        ReactDOM.unmountComponentAtNode(el.parentNode);

        expect(spy).toHaveBeenCalledWith('cancel', cancelHandler);
        expect.restoreSpies();
    });

    it('should render with the children', () => {
        const element = (
            <Dialog>
                <div>Inner Dialog</div>
            </Dialog>
        );
        const output = render(element);

        expect(output.props.children)
            .toEqual(<div>Inner Dialog</div>);
    });
});
