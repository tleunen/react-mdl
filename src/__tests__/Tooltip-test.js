/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Tooltip from '../Tooltip';
import Icon from '../Icon';

describe('Tooltip', () => {
    it('should render the child and label inside a div', () => {
        const element = (
            <Tooltip label="my tooltip">
                text
            </Tooltip>
        );
        const output = render(element);

        expect(output.type).toBe('div');
        expect(output.props.children.length).toBe(2);
    });

    it('should render the tooltip with the tooltip css', () => {
        const element = (
            <Tooltip label="my tooltip">
                text
            </Tooltip>
        );
        const output = render(element);

        const label = output.props.children[1].props.children;
        expect(label.props.className).toInclude('mdl-tooltip');
    });

    it('should link the child and the label', () => {
        const element = (
            <Tooltip label="my tooltip">
                text
            </Tooltip>
        );
        const output = render(element);

        const child = output.props.children[0];
        const label = output.props.children[1].props.children;


        expect(child.props.id).toBe(label.props.htmlFor);
    });

    it('should work with a complex child', () => {
        const element = (
            <Tooltip label="my tooltip">
                <Icon name="add" />
            </Tooltip>
        );
        const output = render(element);

        const child = output.props.children[0];
        const label = output.props.children[1].props.children;

        expect(child.props.id).toBe(label.props.htmlFor);
    });

    it('should render a small tooltip by default', () => {
        const element = (
            <Tooltip label="my tooltip">
                <Icon name="add" />
            </Tooltip>
        );
        const output = render(element);

        const label = output.props.children[1].props.children;

        expect(label.props.className)
            .toExclude('mdl-tooltip--large');
    });

    it('should render a large tooltip if specified', () => {
        const element = (
            <Tooltip label="my tooltip">
                <Icon name="add" />
            </Tooltip>
        );
        const output = render(element);

        const label = output.props.children[1].props.children;

        expect(label.props.className)
            .toExclude('mdl-tooltip--large');
    });
});
