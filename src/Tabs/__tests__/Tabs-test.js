/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { render, renderDOM } from '../../__tests__/render';
import { Tabs, Tab } from '../';

describe('Tabs', () => {
    it('should render a div with the specific css classes', () => {
        var output = render(<Tabs />);

        expect(output.type).toBe('div');
        expect(output.props.className)
            .toInclude('mdl-tabs')
            .toInclude('mdl-js-tabs');
    });

    it('should allow custom css classes', () => {
        var output = render(<Tabs className="my-tabs" />);

        expect(output.props.className)
            .toInclude('mdl-tabs')
            .toInclude('my-tabs');
    });

    it('should define a child .mdl-tabs__tab-bar', () => {
        var output = render(<Tabs />);

        expect(output.props.children[0].props.className)
            .toInclude('mdl-tabs__tab-bar');
    });

    it('should not have a ripple by default', () => {
        var output = render(<Tabs />);

        expect(output.props.className)
            .toExclude('mdl-js-ripple-effect');
    });

    it('should have a ripple if specified', () => {
        var output = render(<Tabs ripple />);

        expect(output.props.className)
            .toInclude('mdl-js-ripple-effect');
    });

    it('should pass the active prop on the activa tab', () => {
        var element = (
            <Tabs activetab={1}>
                <Tab>Tab1</Tab>
                <Tab>Tab2</Tab>
                <Tab>Tab3</Tab>
            </Tabs>
        );

        var el = renderDOM(element);
        var tabBar = el.querySelector('.mdl-tabs__tab');
        Array.prototype.slice.call(tabBar.children).forEach( (tab, i) => {
            if(i===1) {
                expect(tab.className).toInclude('is-active');
            }
            else {
                expect(tab.className).toExclude('is-active');
            }
        });
    });

    it('should be notified when a tab is clicked', () => {
        var cb = (tabId) => {
            expect(tabId).toBe(1);
        };

        var element = (
            <Tabs onChange={cb}>
                <Tab>Tab1</Tab>
                <Tab>Tab2</Tab>
                <Tab>Tab3</Tab>
            </Tabs>
        );

        var el = renderDOM(element);
        TestUtils.Simulate.click(el.querySelector('.mdl-tabs__tab-bar').children[1]);
    });

    it('should display a console warning', () => {
        var element = (
            <Tabs>
                <div>Tab1</div>
                <div>Tab1</div>
            </Tabs>
        );

        render(element);
    });
});
