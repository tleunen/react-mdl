/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { DropDownSection } from '../';

describe('Footer', () => {
    describe('DropDownSection', () => {
        it('should render a div with the dropdown section css class', () => {
            var output = render(<DropDownSection title="Section" />);

            expect(output.type).toBe('div');
            expect(output.props.className)
                .toInclude('mdl-mega-footer__drop-down-section');
        });

        it('should allow custom css classes', () => {
            var output = render(<DropDownSection className="my-dropdown" title="Section" />);

            expect(output.props.className)
                .toInclude('mdl-mega-footer__drop-down-section')
                .toInclude('my-dropdown');
        });

        it('should render with a mini size if specified', () => {
            var output = render(<DropDownSection size="mini" title="Section" />);

            expect(output.props.className)
                .toInclude('mdl-mini-footer__drop-down-section');
        });

        it('should pass the size to children', () => {
            var element = (
                <DropDownSection title="Section">
                    <div>Allo</div>
                </DropDownSection>
            );
            var output = render(element);

            expect(output.props.size)
                .toBe(output.props.children[0].props.size);
        });
    });
});
