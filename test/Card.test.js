/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Card, { CardActions, CardTitle } from '../src/Card';

describe('Card', () => {
    it('should render a div with the card css class', () => {
        var output = render(<Card />);

        expect(output.type).toBe('div');
        expect(output.props.className).toInclude('mdl-card');
    });

    it('should allow custom css classes', () => {
        var output = render(<Card className="my-card" />);

        expect(output.props.className)
            .toInclude('mdl-card')
            .toInclude('my-card');
    });

    it('should render without shadows by default', () => {
        var output = render(<Card />);

        expect(output.props.className).toExclude('mdl-shadow--');
    });

    it('should render with a shadow when specified', () => {
        var output = render(<Card shadow={2} />);

        expect(output.props.className).toInclude('mdl-shadow--');
    });

    it('should render with the children', () => {
        var element = (
            <Card>
                <div className="inner">Inner text</div>
            </Card>
        );
        var output = render(element);

        expect(output.props.children)
            .toEqual(<div className="inner">Inner text</div>);
    });

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

    describe('CardTitle', () => {
        it('should render a div with the title css class', () => {
            var output = render(<CardTitle />);

            expect(output.type).toBe('div');
            expect(output.props.className).toInclude('mdl-card__title');
        });

        it('should allow custom css classes', () => {
            var output = render(<CardTitle className="my-title" />);

            expect(output.props.className)
                .toInclude('mdl-card__title')
                .toInclude('my-title');
        });

        it('should not expand by default', () => {
            var output = render(<CardTitle />);

            expect(output.props.className)
                .toExclude('mdl-card--expand');
        });

        it('should expand when specified', () => {
            var output = render(<CardTitle expand />);

            expect(output.props.className)
                .toInclude('mdl-card--expand');
        });

        it('should render the title in the specific container by default', () => {
            var output = render(<CardTitle>My Title</CardTitle>);

            var titleContainer = output.props.children;
            expect(titleContainer.type).toBe('h2');
            expect(titleContainer.props.className).toBe('mdl-card__title-text');
            expect(titleContainer.props.children).toBe('My Title');
        });

        it('should render custom complex title', () => {
            var output = render(<CardTitle><h4>My Title</h4></CardTitle>);

            var titleContainer = output.props.children;
            expect(titleContainer).toEqual(<h4>My Title</h4>);
        });
    });
});
