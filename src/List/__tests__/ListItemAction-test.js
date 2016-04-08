/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render, renderDOM } from '../../__tests__/render';
import ListItemAction from '../ListItemAction';
import Icon from '../../Icon';

describe('ListItemAction', () => {
    it('should render a span element', () => {
        const output = render((
            <ListItemAction>
                <a href="#"><Icon name="avatar" /></a>
            </ListItemAction>
        ));

        expect(output.type).toBe('span');
    });

    it('should have a child with .mdl-list__item-secondary-action CSS class', () => {
        const output = render((
            <ListItemAction>
                <a href="#"><Icon name="avatar" /></a>
            </ListItemAction>
        ));

        const [, action] = output.props.children;

        expect(action.props.className).toInclude('mdl-list__item-secondary-action');
    });

    it('should have an info span if info is defined', () => {
        const output = renderDOM((
            <div>
                <ListItemAction info="Avatar">
                    <a href="#"><Icon name="avatar" /></a>
                </ListItemAction>
            </div>
        ));

        expect(output.querySelector('.mdl-list__item-secondary-info')).toExist();
    });
});
