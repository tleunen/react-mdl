/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { LinkList } from '../';

describe('Footer', () => {
    describe('LinkList', () => {
        it('should render a ul with the specific css class', () => {
            var output = render(<LinkList />);

            expect(output.type).toBe('ul');
            expect(output.props.className)
                .toInclude('mdl-mega-footer__link-list');
        });

        it('should allow custom css classes', () => {
            var output = render(<LinkList className="my-list" />);

            expect(output.props.className)
                .toInclude('mdl-mega-footer__link-list')
                .toInclude('my-list');
        });

        it('should render with a mini size if specified', () => {
            var output = render(<LinkList size="mini" />);

            expect(output.props.className)
                .toInclude('mdl-mini-footer__link-list');
        });

        it('should wrap the children inside <li>', () => {
            var element = (
                <LinkList>
                    <a href="#">Link1</a>
                    <a href="#">Link2</a>
                </LinkList>
            );
            var output = render(element);

            expect(output.props.children[0].type).toBe('li');
            expect(output.props.children[0].props.children)
                .toEqual(<a href="#">Link1</a>);
            expect(output.props.children[1].type).toBe('li');
            expect(output.props.children[1].props.children)
                .toEqual(<a href="#">Link2</a>);
        });
    });
});
