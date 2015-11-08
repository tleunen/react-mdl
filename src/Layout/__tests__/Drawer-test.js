/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Drawer } from '../';

describe('Layout', () => {
    describe('Drawer', () => {
        it('should render a div with the specific css class', () => {
            const output = render(<Drawer />);

            expect(output.type).toBe('div');
            expect(output.props.className)
                .toInclude('mdl-layout__drawer');
        });

        it('should allow custom css classes', () => {
            const output = render(<Drawer className="my-drawer" />);

            expect(output.props.className)
                .toInclude('mdl-layout__drawer')
                .toInclude('my-drawer');
        });

        it('should not render any title if not specified', () => {
            const output = render(<Drawer />);

            expect(output.props.children[0]).toNotExist();
        });

        it('should render a title if specified', () => {
            const output = render(<Drawer title="React-MDL" />);

            expect(output.props.children[0]).toExist();
            expect(output.props.children[0].props.className)
                .toBe('mdl-layout-title');
            expect(output.props.children[0].props.children)
                .toBe('React-MDL');
        });
    });
});
