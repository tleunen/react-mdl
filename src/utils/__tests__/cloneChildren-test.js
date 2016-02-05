/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import cloneChildren from '../cloneChildren';

describe('utils', () => {
    describe('cloneChildren', () => {
        it('should take the children and the map of props in params', () => {
            const children = [
                <div>Child</div>,
                <div>Child</div>
            ];
            const clonedChildren = cloneChildren(children, {
                size: 'mega'
            });

            expect(clonedChildren[0].props.size).toEqual('mega');
            expect(clonedChildren[1].props.size).toEqual('mega');
        });

        it('should take the children and a fn(child) in params', () => {
            const children = [
                <div className="my-class">Child</div>,
                <div className="my-class">Child</div>
            ];

            const clonedChildren = cloneChildren(children, child => ({
                className: `${child.props.className} new-class`
            }));

            expect(clonedChildren[0].props.className)
                .toBe('my-class new-class');
            expect(clonedChildren[1].props.className)
                .toBe('my-class new-class');
        });
    });
});
