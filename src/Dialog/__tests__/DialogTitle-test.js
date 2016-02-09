/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { DialogTitle } from '../';

describe('Dialog', () => {
    describe('DialogTitle', () => {
        it('should render an h4 with the title css class by default', () => {
            const output = render(<DialogTitle />);

            expect(output.type).toBe('h4');
            expect(output.props.className).toInclude('mdl-dialog__title');
        });

        it('should allow custom component', () => {
            const output = render(<DialogTitle component="div" />);

            expect(output.type).toBe('div');
            expect(output.props.className).toInclude('mdl-dialog__title');
        });

        it('should allow custom css classes', () => {
            const output = render(<DialogTitle className="my-dialog-title" />);

            expect(output.props.className)
                .toInclude('mdl-dialog__title')
                .toInclude('my-dialog-title');
        });

        it('should render with the children', () => {
            const element = (
                <DialogTitle>
                    <span>Untitled</span>
                </DialogTitle>
            );
            const output = render(element);

            expect(output.props.children)
                .toEqual(<span>Untitled</span>);
        });
    });
});
