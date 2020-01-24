/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { render, renderDOM } from '../../__tests__/render';
import { Tabs, Tab, TabBar } from '../';

describe('Tabs', () => {
    it('should render a div with the specific css classes', () => {
        const output = render(<Tabs />);

        expect(output.type).toBe('div');
        expect(output.props.className)
            .toInclude('mdl-tabs');
    });

    it('should allow custom css classes', () => {
        const output = render(<Tabs className="my-tabs" />);

        expect(output.props.className)
            .toInclude('mdl-tabs')
            .toInclude('my-tabs');
    });

    it('should define a child TabBar', () => {
        const output = render(<Tabs />);

        expect(output.props.children.type).toBe(TabBar);
    });

    it('should pass the active prop to the tab bar', () => {
        const output = render(<Tabs activetab={1} />);

        expect(output.props.activetab).toBe(1);
    });

    it('should be notified when a tab is clicked', (done) => {
        const cb = (tabId) => {
            expect(tabId).toBe(1);
            done();
        };

        const element = (
            <div>
                <Tabs onChange={cb}>
                    <Tab>Tab1</Tab>
                    <Tab>Tab2</Tab>
                    <Tab>Tab3</Tab>
                </Tabs>
            </div>
        );

        const el = renderDOM(element);
        TestUtils.Simulate.click(el.querySelector('.mdl-tabs__tab-bar').children[1]);
    });

    it('should be throw any error when clicking on a tab', () => {
        expect(() => {
            const element = (
                <div>
                    <Tabs>
                        <Tab>Tab1</Tab>
                        <Tab>Tab2</Tab>
                        <Tab>Tab3</Tab>
                    </Tabs>
                </div>
            );

            const el = renderDOM(element);
            TestUtils.Simulate.click(el.querySelector('.mdl-tabs__tab-bar').children[1]);
        }).toNotThrow();
    });

    it('should display a console warning', () => {
        const element = (
            <Tabs>
                <div>Tab1</div>
                <div>Tab1</div>
            </Tabs>
        );

        render(element);
    });
});
