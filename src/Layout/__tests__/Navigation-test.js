/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Navigation, Spacer } from '../';

describe('Layout', () => {
    describe('Navigation', () => {
        it('should render a nav with the specific css class', () => {
            const output = render(<Navigation />);

            expect(output.type).toBe('nav');
            expect(output.props.className)
                .toInclude('mdl-navigation');
        });

        it('should allow custom css classes', () => {
            const output = render(<Navigation className="my-nav" />);

            expect(output.props.className)
                .toInclude('mdl-navigation')
                .toInclude('my-nav');
        });

        it('should apply a specific css class on children but spacers', () => {
            const element = (
                <Navigation>
                    <a href="#"></a>
                    <Spacer />
                    <a href="#"></a>
                </Navigation>
            );
            const output = render(element);

            expect(output.props.children[0].props.className)
                .toInclude('mdl-navigation__link');
            expect(output.props.children[1].props.className)
                .toExclude('mdl-navigation__link');
            expect(output.props.children[2].props.className)
                .toInclude('mdl-navigation__link');
        });

        it('should work with false/null child', () => {
            const element = (
                <Navigation>
                    <a href="#"></a>
                    {false}
                    {null}
                </Navigation>
            );

            expect(() => render(element)).toNotThrow();
        });
    });
});
