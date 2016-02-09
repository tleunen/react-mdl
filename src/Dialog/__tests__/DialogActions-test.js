/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { DialogActions } from '../';

describe('Dialog', () => {
    describe('DialogActions', () => {
        it('should render a div with the actions css class', () => {
            const output = render(<DialogActions />);

            expect(output.type).toBe('div');
            expect(output.props.className).toInclude('mdl-dialog__actions');
        });

        it('should allow custom css classes', () => {
            const output = render(<DialogActions className="my-dialog-actions" />);

            expect(output.props.className)
                .toInclude('mdl-dialog__actions')
                .toInclude('my-dialog-actions');
        });

        it('shoud not be full-width by default', () => {
            const output = render(<DialogActions />);

            expect(output.props.className)
                .toExclude('mdl-dialog__actions--full-width');
        });

        it('shoud be full-width when specified', () => {
            const output = render(<DialogActions fullWidth />);

            expect(output.props.className)
                .toInclude('mdl-dialog__actions--full-width');
        });

        it('should render with the children', () => {
            const element = (
                <DialogActions>
                    <div>Inner Dialog Actions</div>
                </DialogActions>
            );
            const output = render(element);

            expect(output.props.children)
                .toEqual(<div>Inner Dialog Actions</div>);
        });
    });
});
