/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Spinner from '../Spinner';

describe('Spinner', () => {
    it('should render a div with the spinner css classes', () => {
        var output = render(<Spinner value="1" />);

        expect(output.type).toBe('div');
        expect(output.props.className)
            .toInclude('mdl-spinner')
            .toInclude('mdl-js-spinner')
            .toInclude('is-active');
    });

    it('should allow custom css classes', () => {
        var output = render(<Spinner className="my-spinner" />);

        expect(output.props.className).toInclude('my-spinner');
    });

    it('should be multi color by default', () => {
        var output = render(<Spinner />);

        expect(output.props.className)
            .toExclude('mdl-spinner--single-color');
    });

    it('should be single color if specified', () => {
        var output = render(<Spinner singleColor />);

        expect(output.props.className)
            .toInclude('mdl-spinner--single-color');
    });
});
