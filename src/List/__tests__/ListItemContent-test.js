/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { ListItemContent } from '../';
import { Icon } from '../../';

describe('ListItemContent', () => {
    it('should render a span element', () => {
        const output = render(<ListItemContent />);

        expect(output.type).toBe('span');
    });

    it('should have a subtitle', () => {
        const output = render(<ListItemContent subtitle="Subtitle" />);

        const [,, action] = output.props.children;
        expect(action.type).toBe('span');
        expect(action.props.className).toBe('mdl-list__item-sub-title');
        expect(action.props.children).toBe('Subtitle');
    });

    it('should have a body subtitle', () => {
        const output = render(<ListItemContent useBodyClass subtitle="body text" />);

        const [,, action] = output.props.children;
        expect(action.type).toBe('span');
        expect(action.props.className).toBe('mdl-list__item-text-body');
        expect(action.props.children).toBe('body text');
    });

    it('should have a icon', () => {
        const output = render(<ListItemContent icon="person" />);

        const [icon] = output.props.children;
        expect(icon.type).toBe(Icon);
        expect(icon.props.className).toInclude('mdl-list__item-icon');
        expect(icon.props.name).toBe('person');
    });

    it('should have a "complex" icon', () => {
        const iconElement = <img src="something" alt="" />;
        const output = render(<ListItemContent icon={iconElement} />);

        const [icon] = output.props.children;
        expect(icon.type).toBe('img');
        expect(icon.props.className).toInclude('mdl-list__item-icon');
    });

    it('should have an avatar', () => {
        const output = render(<ListItemContent avatar="person" />);

        const [icon] = output.props.children;
        expect(icon.type).toBe(Icon);
        expect(icon.props.className).toInclude('mdl-list__item-avatar');
        expect(icon.props.name).toBe('person');
    });

    it('should have a "complex" avatar', () => {
        const iconElement = <img src="something" alt="" />;
        const output = render(<ListItemContent avatar={iconElement} />);

        const [icon] = output.props.children;
        expect(icon.type).toBe('img');
        expect(icon.props.className).toInclude('mdl-list__item-avatar');
    });
});
