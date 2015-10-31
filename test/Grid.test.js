/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import render from './render';
import Grid, { Cell } from '../src/Grid';

describe('Grid', () => {
    it('should render a <div>', () => {
        var output = render(<Grid />);

        expect(output.type).toBe('div');
    });

    it('should have mdl grid css class', () => {
        var output = render(<Grid />);

        expect(output.props.className).toInclude('mdl-grid');
    });

    it('should allow custom css class', () => {
        var output = render(<Grid className="my-grid" />);

        expect(output.props.className).toInclude('my-grid');
    });


    describe('Cell', () => {
        it('should render a <div>', () => {
            var output = render(<Cell col={1} />);

            expect(output.type).toBe('div');
        });

        it('should have mdl grid css class', () => {
            var output = render(<Cell col={1} />);

            expect(output.props.className).toInclude('mdl-cell');
        });

        it('should allow custom css class', () => {
            var output = render(<Cell col={1} className="my-cell" />);

            expect(output.props.className).toInclude('my-cell');
        });

        it('should have the specicic column css class', () => {
            for(let i=1; i<13; i++) {
                var output = render(<Cell col={i} />);

                expect(output.props.className)
                    .toInclude(`mdl-cell--${i}-col`);
            }
        });

        it('should have the specicic phone column css class when specified', () => {
            for(let i=1; i<4; i++) {
                var output = render(<Cell col={1} phone={i} />);

                expect(output.props.className)
                    .toInclude(`mdl-cell--${i}-col-phone`);
            }
        });

        it('should have the specicic tablet column css class when specified', () => {
            for(let i=1; i<8; i++) {
                var output = render(<Cell col={1} tablet={i} />);

                expect(output.props.className)
                    .toInclude(`mdl-cell--${i}-col-tablet`);
            }
        });

        it('should have the specicic alignment css class when specified', () => {
            ['top', 'middle', 'bottom', 'stretch'].forEach(align => {
                var output = render(<Cell col={1} align={align} />);

                expect(output.props.className)
                    .toInclude(`mdl-cell--${align}`);
            });

        });
    });
});
