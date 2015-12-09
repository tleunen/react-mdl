/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { renderDOM } from '../../__tests__/render';
import { Tab, TabBar } from '../';

describe('Tabs', () => {
    describe('TabBar', () => {
        it('should pass the active prop on the activa tab', () => {
            const element = (
                <TabBar cssPrefix="mdl-tabs" activetab={1}>
                    <Tab>Tab1</Tab>
                    <Tab>Tab2</Tab>
                    <Tab>Tab3</Tab>
                </TabBar>
            );

            const el = renderDOM(element);
            const tabBar = el.querySelector('.mdl-tabs__tab');
            Array.prototype.slice.call(tabBar.children).forEach((tab, i) => {
                if(i === 1) {
                    expect(tab.className).toInclude('is-active');
                }
                else {
                    expect(tab.className).toExclude('is-active');
                }
            });
        });
    });
});
