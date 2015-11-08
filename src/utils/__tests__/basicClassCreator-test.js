/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import basicClassCreator from '../basicClassCreator';

describe('utils', () => {
    describe('basicClassCreator', () => {
        it('should create and render a simple div', () => {
            var EltDiv = basicClassCreator('EltDiv');

            var output = render(<EltDiv />);

            expect(output.type).toBe('div');
        });

        it('should create and render the specified element', () => {
            var EltUl = basicClassCreator('EltUl', null, 'ul');

            var output = render(<EltUl />);

            expect(output.type).toBe('ul');
        });

        it('should apply the default css class', () => {
            var EltDiv = basicClassCreator('EltDiv', 'my-default-class');

            var output = render(<EltDiv />);

            expect(output.props.className).toBe('my-default-class');
        });

        it('should allow custom css classes', () => {
            var EltDiv = basicClassCreator('EltDiv', 'my-default-class');

            var output = render(<EltDiv className="my-custom-class" />);

            expect(output.props.className)
                .toInclude('my-default-class')
                .toInclude('my-custom-class');
        });

        it('should render children', () => {
            var EltDiv = basicClassCreator('EltDiv', 'my-default-class');

            var output = render(<EltDiv>Allo</EltDiv>);

            expect(output.props.children).toBe('Allo');
        });
    });
});
