/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { HeaderRow, Spacer } from '../';

describe('Layout', () => {
    describe('HeaderRow', () => {
        it('should render a div with the specific css class', () => {
            const output = render(<HeaderRow />);

            expect(output.type).toBe('div');
            expect(output.props.className)
                .toInclude('mdl-layout__header-row');
        });

        it('should allow custom css classes', () => {
            const output = render(<HeaderRow className="my-row" />);

            expect(output.props.className)
                .toInclude('mdl-layout__header-row')
                .toInclude('my-row');
        });

        it('should wrap the title inside its span', () => {
            const output = render(<HeaderRow title="React-MDL" />);

            expect(output.props.children[0].type).toBe('span');
            expect(output.props.children[0].props.className)
                .toBe('mdl-layout-title');
            expect(output.props.children[0].props.children)
                .toBe('React-MDL');
        });

        it('should render children after a Spacer', () => {
            const output = render(<HeaderRow><div>React-MDL</div></HeaderRow>);

            expect(output.props.children[1].type).toBe(Spacer);
            expect(output.props.children[2]).toEqual(<div>React-MDL</div>);
        });
    });
});
