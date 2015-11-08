/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Header, HeaderRow, HeaderTabs } from '../';

describe('Layout', () => {
    describe('Header', () => {
        it('should render a header with the specific css class', () => {
            const output = render(<Header />);

            expect(output.type).toBe('header');
            expect(output.props.className)
                .toInclude('mdl-layout__header');
        });

        it('should allow custom css classes', () => {
            const output = render(<Header className="my-header" />);

            expect(output.props.className)
                .toInclude('mdl-layout__header')
                .toInclude('my-header');
        });

        it('should have the specific css header modifier', () => {
            ['scroll', 'seamed', 'transparent', 'waterfall'].forEach(prop => {
                const output = render(React.createElement(Header, { [prop]: true }));

                expect(output.props.className)
                    .toInclude(`mdl-layout__header--${prop}`);
            });
        });

        it('should wrap non Row/Tabs child in a HeaderRow', () => {
            const output = render(<Header>React-MDL</Header>);

            expect(output.props.children.type).toBe(HeaderRow);
        });

        it('should render Row without wrapping it', () => {
            const output = render(<Header><HeaderRow title="React-MDL" /></Header>);

            expect(output.props.children)
                .toEqual(<HeaderRow title="React-MDL" />);
        });

        it('should render Tabs without wrapping it', () => {
            const output = render(<Header><HeaderTabs><a href="#" /></HeaderTabs></Header>);

            expect(output.props.children)
                .toEqual(<HeaderTabs><a href="#" /></HeaderTabs>);
        });
    });
});
