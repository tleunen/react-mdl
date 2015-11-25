/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { FooterSection } from '../';

describe('Footer', () => {
    describe('FooterSection', () => {
        it('should render a div with the specific css class', () => {
            const output = render(<FooterSection />);

            expect(output.type).toBe('div');
            expect(output.props.className)
                .toInclude('mdl-mega-footer__left-section');
        });

        it('should allow custom css classes', () => {
            const output = render(<FooterSection className="my-list" />);

            expect(output.props.className)
                .toInclude('mdl-mega-footer__left-section')
                .toInclude('my-list');
        });

        it('should render with a mini size if specified', () => {
            const output = render(<FooterSection size="mini" />);

            expect(output.props.className)
                .toInclude('mdl-mini-footer__left-section');
        });

        it('should apply the specified section type', () => {
            ['top', 'middle', 'bottom', 'left', 'right'].forEach(type => {
                const output = render(<FooterSection type={type} />);

                expect(output.props.className)
                    .toInclude(`mdl-mega-footer__${type}-section`);
            });
        });

        it('should pass the size to children', () => {
            const element = (
                <FooterSection size="mega">
                    <div>Allo</div>
                </FooterSection>
            );
            const output = render(element);

            expect(output.props.children[1][0].props.size)
                .toBe('mega');
        });

        it('should render a logo if specified', () => {
            const output = render(<FooterSection logo="React-MDL" />);

            expect(output.props.children[0]).toExist();
            expect(output.props.children[0].props.className)
                .toBe('mdl-logo');
            expect(output.props.children[0].props.children).toBe('React-MDL');
        });
    });
});
