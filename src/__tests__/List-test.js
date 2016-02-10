/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import List, { ListItem } from '../List';

describe('List', () => {
    it('should render an ul list', () => {
        const output = render(<List />);

        expect(output.type).toBe('ul');
    });

    // it('should render an ul list', () => {
    //     const output = render(<Menu target="none" />);

    //     expect(output.type).toBe('ul');
    // });

    // it('should be left bottom aligned by default', () => {
    //     const output = render(<Menu target="none" />);

    //     expect(output.props.className)
    //         .toInclude('mdl-menu--bottom-left');
    // });

    // it('should have alignment specific css', () => {
    //     ['left', 'right'].forEach(align => {
    //         ['bottom', 'top'].forEach(valign => {
    //             const output = render(<Menu target="none" align={align} valign={valign} />);

    //             expect(output.props.className)
    //                 .toInclude(`mdl-menu--${valign}-${align}`);
    //         });
    //     });
    // });

    // it('should have ripple if specified specific css', () => {
    //     const output = render(<Menu target="none" ripple />);

    //     expect(output.props.className)
    //         .toInclude('mdl-js-ripple-effect');
    // });
});

describe('ListItem', () => {
    it('should render a li', () => {
        const output = render(<ListItem />);

        expect(output.type).toBe('li');
    });

    it('should have two line specific css', () => {
        const output = render(<ListItem twoLine />);

        expect(output.props.className).toInclude('mdl-list__item--two-line');
    });

    it('should have three line specific css', () => {
        const output = render(<ListItem threeLine />);

        expect(output.props.className).toInclude('mdl-list__item--three-line');
    });
});
