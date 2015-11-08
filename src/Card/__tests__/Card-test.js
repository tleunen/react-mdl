/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Card } from '../';

describe('Card', () => {
    it('should render a div with the card css class', () => {
        const output = render(<Card />);

        expect(output.type).toBe('div');
        expect(output.props.className).toInclude('mdl-card');
    });

    it('should allow custom css classes', () => {
        const output = render(<Card className="my-card" />);

        expect(output.props.className)
            .toInclude('mdl-card')
            .toInclude('my-card');
    });

    it('should render without shadows by default', () => {
        const output = render(<Card />);

        expect(output.props.className).toExclude('mdl-shadow--');
    });

    it('should render with a shadow when specified', () => {
        const output = render(<Card shadow={2} />);

        expect(output.props.className).toInclude('mdl-shadow--');
    });

    it('should render with the children', () => {
        const element = (
            <Card>
                <div className="inner">Inner text</div>
            </Card>
        );
        const output = render(element);

        expect(output.props.children)
            .toEqual(<div className="inner">Inner text</div>);
    });
});
