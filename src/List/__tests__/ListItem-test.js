/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import ListItem from '../ListItem';

describe('ListItem', () => {
    it('should render a li element', () => {
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
