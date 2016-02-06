/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Badge from '../Badge';
import Icon from '../Icon';

describe('Badge', () => {
    it('should render span with data-badge on text child', () => {
        const output = render(<Badge text="4">Inbox</Badge>);

        expect(output.type).toBe('span');
        expect(output.props.className).toBe('mdl-badge');
        expect(output.props['data-badge']).toBe('4');
        expect(output.props.children).toBe('Inbox');
    });

    it('should append badge data/class to existing complex child', () => {
        const output = render(<Badge text="8"><Icon name="account_box" /></Badge>);

        expect(output.type).toBe(Icon);
        expect(output.props.className).toBe('mdl-badge');
        expect(output.props['data-badge']).toBe('8');
    });

    it('should render empty badge when text is empty', () => {
        const output = render(<Badge text="">Inbox</Badge>);

        expect(output.type).toBe('span');
        expect(output.props.className).toBe('mdl-badge');
        expect(output.props['data-badge']).toBe('');
        expect(output.props.children).toBe('Inbox');
    });

    it('should allow number as badge text', () => {
        const output = render(<Badge text={4}>Inbox</Badge>);

        expect(output.type).toBe('span');
        expect(output.props.className).toBe('mdl-badge');
        expect(output.props['data-badge']).toBe(4);
        expect(output.props.children).toBe('Inbox');
    });

    describe('should not render badge', () => {
        it('when no children', () => {
            const output = render(<Badge text="4" />);

            expect(output).toNotExist();
        });

        describe('when badge text is null', () => {
            it('and the child is text', () => {
                const output = render(<Badge text={null}>Inbox</Badge>);

                expect(output.type).toBe('span');
                expect(output.props.className).toNotBe('mdl-badge');
                expect(output.props['data-badge']).toNotExist();
                expect(output.props.children).toBe('Inbox');
            });

            it('and the child is a complex object', () => {
                const output = render(<Badge text={null}><Icon name="account_box" /></Badge>);

                expect(output.type).toBe(Icon);
                expect(output.props.className).toNotBe('mdl-badge');
                expect(output.props['data-badge']).toNotExist();
            });
        });

        describe('when badge text is undefined', () => {
            it('and the child is text', () => {
                const output = render(<Badge text={null}>Inbox</Badge>);

                expect(output.type).toBe('span');
                expect(output.props.className).toNotBe('mdl-badge');
                expect(output.props['data-badge']).toNotExist();
                expect(output.props.children).toBe('Inbox');
            });

            it('and the child is a complex object', () => {
                const output = render(<Badge text={null}><Icon name="account_box" /></Badge>);

                expect(output.type).toBe(Icon);
                expect(output.props.className).toNotBe('mdl-badge');
                expect(output.props['data-badge']).toNotExist();
            });
        });
    });

    it('should make the badge overlap the container', () => {
        const output = render(<Badge text={2} overlap><Icon name="account_box" /></Badge>);

        expect(output.type).toBe(Icon);
        expect(output.props.className).toBe('mdl-badge mdl-badge--overlap');
        expect(output.props['data-badge']).toBe(2);
    });

    it('should remove the badge background', () => {
        const output = render(<Badge text="♥" noBackground>Mood</Badge>);

        expect(output.type).toBe('span');
        expect(output.props.className).toBe('mdl-badge mdl-badge--no-background');
        expect(output.props['data-badge']).toBe('♥');
    });
});
