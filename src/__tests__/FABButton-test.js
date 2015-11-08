/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Button from '../Button';
import FABButton from '../FABButton';
import Icon from '../Icon';

describe('FAB Button', () => {
    it('should render a Button component', () => {
        const output = render(<FABButton>A</FABButton>);

        expect(output.type).toBe(Button);
    });

    it('should have mdl fab css class', () => {
        const output = render(<FABButton>A</FABButton>);

        expect(output.props.className).toInclude('mdl-button--fab');
    });

    it('should allow text child', () => {
        const output = render(<FABButton>A</FABButton>);

        expect(output.props.children).toBe('A');
    });

    it('should allow complex child', () => {
        const output = render(<FABButton><Icon name="add" /></FABButton>);

        expect(output.props.children.type).toBe(Icon);
    });

    it('should be mini when specified', () => {
        const output = render(<FABButton mini>A</FABButton>);

        expect(output.props.className)
            .toInclude('mdl-button--mini-fab');
    });
});
