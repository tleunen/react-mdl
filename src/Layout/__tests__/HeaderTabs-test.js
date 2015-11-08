/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { render, renderDOM } from '../../__tests__/render';
import { HeaderTabs } from '../';
import { Tab, TabBar } from '../../Tabs/';

describe('Layout', () => {
    describe('HeaderTabs', () => {
        it('should render a TabBar', () => {
            const output = render(<HeaderTabs />);

            expect(output.type).toBe(TabBar);
        });

        it('should allow custom css classes', () => {
            const output = render(<HeaderTabs className="my-tabs" />);

            expect(output.props.className)
                .toInclude('my-tabs');
        });

        it('should not have a ripple by default', () => {
            const output = render(<HeaderTabs />);

            expect(output.props.className)
                .toExclude('mdl-js-ripple-effect');
        });

        it('should have a ripple if specified', () => {
            const output = render(<HeaderTabs ripple />);

            expect(output.props.className)
                .toInclude('mdl-js-ripple-effect');
        });

        it('should pass the active prop to the tab bar', () => {
            const output = render(<HeaderTabs activetab={1} />);

            expect(output.props.activetab).toBe(1);
        });

        it('should be notified when a tab is clicked', (done) => {
            const cb = (tabId) => {
                expect(tabId).toBe(1);
                done();
            };

            class MDLWrapper extends React.Component {
                render() {
                    return (
                        <HeaderTabs activeTab={0} onChange={cb}>
                            <Tab>Tab1</Tab>
                            <Tab>Tab2</Tab>
                            <Tab>Tab3</Tab>
                        </HeaderTabs>
                    );
                }
            }
            const el = renderDOM(<MDLWrapper />);
            TestUtils.Simulate.click(el.children[1]);
        });

        it('should display a console warning', () => {
            const element = (
                <HeaderTabs>
                    <div>Tab1</div>
                    <div>Tab1</div>
                </HeaderTabs>
            );

            render(element);
        });
    });
});
