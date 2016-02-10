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
