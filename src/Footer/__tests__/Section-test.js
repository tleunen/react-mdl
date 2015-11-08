/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Section } from '../';

describe('Footer', () => {
    describe('Section', () => {
        it('should render a div with the specific css class', () => {
            var output = render(<Section />);

            expect(output.type).toBe('div');
            expect(output.props.className)
                .toInclude('mdl-mega-footer__left-section');
        });

        it('should allow custom css classes', () => {
            var output = render(<Section className="my-list" />);

            expect(output.props.className)
                .toInclude('mdl-mega-footer__left-section')
                .toInclude('my-list');
        });

        it('should render with a mini size if specified', () => {
            var output = render(<Section size="mini" />);

            expect(output.props.className)
                .toInclude('mdl-mini-footer__left-section');
        });

        it('should apply the specified section type', () => {
            ['top', 'middle', 'bottom', 'left', 'right'].forEach(type => {
                var output = render(<Section type={type} />);

                expect(output.props.className)
                    .toInclude(`mdl-mega-footer__${type}-section`);
            });
        });

        it('should pass the size to children', () => {
            var element = (
                <Section size="mega">
                    <div>Allo</div>
                </Section>
            );
            var output = render(element);

            expect(output.props.children[1][0].props.size)
                .toBe('mega');
        });

        it('should render a logo if specified', () => {
            var output = render(<Section logo="React-MDL" />);

            expect(output.props.children[0]).toExist();
            expect(output.props.children[0].props.className)
                .toBe('mdl-logo');
            expect(output.props.children[0].props.children).toBe('React-MDL');
        });
    });
});
