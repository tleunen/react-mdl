/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import List from '../List';

describe('List', () => {
    it('should render an ul list', () => {
        const output = render(<List />);

        expect(output.type).toBe('ul');
    });
});
