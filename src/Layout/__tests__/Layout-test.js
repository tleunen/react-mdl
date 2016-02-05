/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Layout } from '../';

describe('Layout', () => {
    it('should render a div with the specific css class', () => {
        const output = render(<Layout />);

        expect(output.type).toBe('div');
        expect(output.props.className)
            .toInclude('mdl-layout')
            .toInclude('mdl-js-layout');
    });

    it('should allow custom css classes', () => {
        const output = render(<Layout className="my-layout" />);

        expect(output.props.className)
            .toInclude('mdl-layout')
            .toInclude('mdl-js-layout')
            .toInclude('my-layout');
    });

    it('should have the specific css layout modifier', () => {
        ['fixedDrawer', 'fixedHeader', 'fixedTabs'].forEach(prop => {
            const output = render(React.createElement(Layout, { [prop]: true }));

            const css = prop.replace(/[A-Z]/g, ($1) => `-${$1.toLowerCase()}`);
            expect(output.props.className)
                .toInclude(`mdl-layout--${css}`);
        });
    });
});
