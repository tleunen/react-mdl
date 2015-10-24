/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import render from './render';
import ProgressBar from '../src/ProgressBar';

describe('ProgressBar', () => {
    it('should render a div with the progress css classes', () => {
        var output = render(<ProgressBar />);
        expect(output.type).toBe('div');
        expect(output.props.className)
            .toInclude('mdl-progress')
            .toInclude('mdl-js-progress');
    });

    it('should allow custom css classes', () => {
        var output = render(<ProgressBar className="my-progress" />);

        expect(output.props.className).toInclude('my-progress');
    });

    it('should be indeterminate by default', () => {
        var output = render(<ProgressBar />);

        expect(output.props.className)
            .toExclude('mdl-progress__indeterminate');
    });

    it('should be indeterminate when specified', () => {
        var output = render(<ProgressBar indeterminate />);

        expect(output.props.className)
            .toInclude('mdl-progress__indeterminate');
    });
});
