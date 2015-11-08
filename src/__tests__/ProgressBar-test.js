/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render, renderDOM } from './render';
import ReactDOM from 'react-dom';
import ProgressBar from '../ProgressBar';

describe('ProgressBar', () => {
    it('should render a div with the progress css classes', () => {
        const output = render(<ProgressBar />);

        expect(output.type).toBe('div');
        expect(output.props.className)
            .toInclude('mdl-progress')
            .toInclude('mdl-js-progress');
    });

    it('should allow custom css classes', () => {
        const output = render(<ProgressBar className="my-progress" />);

        expect(output.props.className)
            .toInclude('my-progress');
    });

    it('should be indeterminate by default', () => {
        const output = render(<ProgressBar />);

        expect(output.props.className)
            .toExclude('mdl-progress__indeterminate');
    });

    it('should be indeterminate when specified', () => {
        const output = render(<ProgressBar indeterminate />);

        expect(output.props.className)
        .toInclude('mdl-progress__indeterminate');
    });

    it('should be set with the specified progress', () => {
        const el = renderDOM(<ProgressBar progress={37} />);

        expect(el.querySelector('.progressbar').style.width).toBe('37%');
    });

    it('should be set with the specified buffer', () => {
        const el = renderDOM(<ProgressBar buffer={87} />);

        expect(el.querySelector('.bufferbar').style.width).toBe('87%');
    });

    it('should be updated with the specified progress', () => {
        const el = renderDOM(<ProgressBar progress={0} />);

        ReactDOM.render(<ProgressBar progress={78} />, el.parentNode);

        expect(el.querySelector('.progressbar').style.width).toBe('78%');
    });

    it('should be updated with the specified buffer', () => {
        const el = renderDOM(<ProgressBar buffer={20} />);

        ReactDOM.render(<ProgressBar buffer={88} />, el.parentNode);

        expect(el.querySelector('.bufferbar').style.width).toBe('88%');
    });
});
