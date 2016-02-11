/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render, renderDOM } from '../../__tests__/render';
import ListItem from '../ListItem';
import ListItemContent from '../ListItemContent';

describe('ListItemContent', () => {
    it('should render a span element', () => {
        const output = render(<ListItemContent />);

        expect(output.type).toBe('span');
    });

    it('should have a .mdl-list__item-subtitle CSS class if a subtitle is defined', () => {
        const output = renderDOM(<ListItemContent subtitle="Subtitle" />);

        expect(output.querySelector('.mdl-list__item-subtitle')).toExist();
    });

    it('should have a three line property if defined on ListItem', () => {
        const output = render((
            <ListItem threeLine>
                <ListItemContent />
            </ListItem>
        ));

        const firstChild = output.props.children[0];

        expect(firstChild.props.threeLine).toExist();
    });

    it('should have a .mdl-list__item-text-body CSS class if a subtitle and threeLine are defined', () => {
        const output = renderDOM(<ListItemContent threeLine subtitle="Text body" />);

        expect(output.querySelector('.mdl-list__item-text-body')).toExist();
    });

    it('should have an i element if an icon is defined', () => {
        const output = renderDOM(<ListItemContent icon="person" />);

        expect(output.firstChild.nodeName).toEqual('I');
    });
});
