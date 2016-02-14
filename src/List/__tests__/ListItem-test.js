/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { ListItem, ListItemContent, ListItemAction } from '../';

describe('ListItem', () => {
    it('should render a li element', () => {
        const output = render(<ListItem />);

        expect(output.type).toBe('li');
    });

    it('should have two line specific css', () => {
        const output = render(<ListItem twoLine />);

        expect(output.props.className)
            .toInclude('mdl-list__item--two-line')
            .toExclude('mdl-list__item--three-line');
    });

    it('should have three line specific css', () => {
        const output = render(<ListItem threeLine />);

        expect(output.props.className)
            .toInclude('mdl-list__item--three-line')
            .toExclude('mdl-list__item--two-line');
    });

    it('should attach "useBodyClass" only on ListItemContent', () => {
        const element = (
            <ListItem>
                <ListItemContent />
                <ListItemAction />
            </ListItem>
        );
        const output = render(element);

        const [content, action] = output.props.children;
        expect(content.props.useBodyClass).toBe(false);
        expect(action.props.useBodyClass).toBe(undefined);
    });

    it('should allow receiving text as child and create a <ListItemContent>', () => {
        const output = render(<ListItem>Content...</ListItem>);

        const [content] = output.props.children;
        expect(content.type).toBe(ListItemContent);
        expect(content.props.children).toBe('Content...');
    });
});
