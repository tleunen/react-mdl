/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import basicClassCreator from '../basicClassCreator';

describe('utils', () => {
    describe('basicClassCreator', () => {
        it('should create and render a simple div', () => {
            const EltDiv = basicClassCreator('EltDiv');

            const output = render(<EltDiv />);

            expect(output.type).toBe('div');
        });

        it('should create and render the specified element', () => {
            const EltUl = basicClassCreator('EltUl', null, 'ul');

            const output = render(<EltUl />);

            expect(output.type).toBe('ul');
        });

        it('should apply the default css class', () => {
            const EltDiv = basicClassCreator('EltDiv', 'my-default-class');

            const output = render(<EltDiv />);

            expect(output.props.className).toBe('my-default-class');
        });

        it('should allow custom css classes', () => {
            const EltDiv = basicClassCreator('EltDiv', 'my-default-class');

            const output = render(<EltDiv className="my-custom-class" />);

            expect(output.props.className)
                .toInclude('my-default-class')
                .toInclude('my-custom-class');
        });

        it('should render children', () => {
            const EltDiv = basicClassCreator('EltDiv', 'my-default-class');

            const output = render(<EltDiv>Allo</EltDiv>);

            expect(output.props.children).toBe('Allo');
        });
    });
});
