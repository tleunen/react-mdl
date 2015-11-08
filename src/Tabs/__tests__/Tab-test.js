/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Tab } from '../';

describe('Tabs', () => {
    describe('Tab', () => {
        it('should render a link with the specific css classes', () => {
            var output = render(<Tab />);

            expect(output.type).toBe('a');
            expect(output.props.className)
                .toInclude('mdl-tabs__tab');
        });

        it('should allow custom css classes', () => {
            var output = render(<Tab className="my-tab" />);

            expect(output.props.className)
                .toInclude('mdl-tabs__tab')
                .toInclude('my-tab');
        });
    });
});
