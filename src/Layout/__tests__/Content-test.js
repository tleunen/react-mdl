/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Content } from '../';

describe('Layout', () => {
    describe('Content', () => {
        it('should render a div with the specific css class', () => {
            const output = render(<Content />);

            expect(output.type).toBe('div');
            expect(output.props.className)
                .toInclude('mdl-layout__content');
        });

        it('should allow custom css classes', () => {
            const output = render(<Content className="my-content" />);

            expect(output.props.className)
                .toInclude('mdl-layout__content')
                .toInclude('my-content');
        });

        it('should have the hack element to fix tabs', () => {
            const output = render(<Content />);

            expect(output.props.children[1].props.className)
                .toBe('react-mdl-header-tabs-hack');
            expect(output.props.children[1].props.id)
                .toBe('undefined');
        });
    });
});
