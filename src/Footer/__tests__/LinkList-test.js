/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { FooterLinkList } from '../';

describe('Footer', () => {
    describe('FooterLinkList', () => {
        it('should render a ul with the specific css class', () => {
            const output = render(<FooterLinkList />);

            expect(output.type).toBe('ul');
            expect(output.props.className)
                .toInclude('mdl-mega-footer__link-list');
        });

        it('should allow custom css classes', () => {
            const output = render(<FooterLinkList className="my-list" />);

            expect(output.props.className)
                .toInclude('mdl-mega-footer__link-list')
                .toInclude('my-list');
        });

        it('should render with a mini size if specified', () => {
            const output = render(<FooterLinkList size="mini" />);

            expect(output.props.className)
                .toInclude('mdl-mini-footer__link-list');
        });

        it('should wrap the children inside <li>', () => {
            const element = (
                <FooterLinkList>
                    <a href="#">Link1</a>
                    <a href="#">Link2</a>
                </FooterLinkList>
            );
            const output = render(element);

            expect(output.props.children[0].type).toBe('li');
            expect(output.props.children[0].props.children)
                .toEqual(<a href="#">Link1</a>);
            expect(output.props.children[1].type).toBe('li');
            expect(output.props.children[1].props.children)
                .toEqual(<a href="#">Link2</a>);
        });
    });
});
