/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Button from '../src/Button';
import FABButton from '../src/FABButton';
import Icon from '../src/Icon';

describe('FAB Button', () => {
    it('should render a Button component', () => {
        var output = render(<FABButton>A</FABButton>);

        expect(output.type).toBe(Button);
    });

    it('should have mdl fab css class', () => {
        var output = render(<FABButton>A</FABButton>);

        expect(output.props.className).toInclude('mdl-button--fab');
    });

    it('should allow text child', () => {
        var output = render(<FABButton>A</FABButton>);

        expect(output.props.children).toBe('A');
    });

    it('should allow complex child', () => {
        var output = render(<FABButton><Icon name="add" /></FABButton>);

        expect(output.props.children.type).toBe(Icon);
    });

    it('should be mini when specified', () => {
        var output = render(<FABButton mini>A</FABButton>);

        expect(output.props.className)
            .toInclude('mdl-button--mini-fab');
    });
});
