/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { CardMedia } from '../';

describe('Card', () => {
    describe('CardMedia', () => {
        it('should render a div with the card media css class', () => {
            const output = render(<CardMedia />);

            expect(output.type).toBe('div');
            expect(output.props.className).toInclude('mdl-card__media');
        });

        it('should allow custom css classes', () => {
            const output = render(<CardMedia className="my-media" />);

            expect(output.props.className)
                .toInclude('mdl-card__media')
                .toInclude('my-media');
        });

        it('should render with the children', () => {
            const element = (
                <CardMedia>
                    <img src="test.png" alt="" />
                </CardMedia>
            );

            const output = render(element);

            expect(output.props.children)
                .toEqual(<img src="test.png" alt="" />);
        });
    });
});
