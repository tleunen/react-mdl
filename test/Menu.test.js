/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Menu from '../src/Menu';

describe('Menu', () => {
    it('should render an ul list', () => {
        var output = render(<Menu target="none" />);

        expect(output.type).toBe('ul');
    });

    it('should be left bottom aligned by default', () => {
        var output = render(<Menu target="none" />);

        expect(output.props.className)
            .toInclude('mdl-menu--bottom-left');
    });

    it('should have alignment specific css', () => {
        ['left', 'right'].forEach(align => {
            ['bottom', 'top'].forEach(valign => {
                var output = render(<Menu target="none" align={align} valign={valign} />);

                expect(output.props.className)
                    .toInclude(`mdl-menu--${valign}-${align}`);
            });
        });
    });

    it('should have ripple if specified specific css', () => {
        var output = render(<Menu target="none" ripple />);

        expect(output.props.className)
            .toInclude('mdl-js-ripple-effect');
    });
});
