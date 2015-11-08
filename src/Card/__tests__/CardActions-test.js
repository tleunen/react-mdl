/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { CardActions } from '../';

describe('Card', () => {
    describe('CardActions', () => {
        it('should render a div with the action css class', () => {
            var output = render(<CardActions />);

            expect(output.type).toBe('div');
            expect(output.props.className).toInclude('mdl-card__actions');
        });

        it('should allow custom css classes', () => {
            var output = render(<CardActions className="my-actions" />);

            expect(output.props.className)
                .toInclude('mdl-card__actions')
                .toInclude('my-actions');
        });

        it('should not have a border by default', () => {
            var output = render(<CardActions />);

            expect(output.props.className)
                .toExclude('mdl-card--border');
        });

        it('should have a border when specified', () => {
            var output = render(<CardActions border />);

            expect(output.props.className)
                .toInclude('mdl-card--border');
        });

        it('should render with the children', () => {
            var element = (
                <CardActions>
                    <div className="inner">Inner text</div>
                </CardActions>
            );
            var output = render(element);

            expect(output.props.children)
                .toEqual(<div className="inner">Inner text</div>);
        });
    });
});
