/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM, { findDOMNode as find } from 'react-dom';
import { renderIntoDocument as render } from 'react-addons-test-utils';

import ProgressBar from '../src/ProgressBar';

describe('ProgressBar', () => {
    it('should render a div with the progress css classes', () => {
        var node = render(<ProgressBar />);
        var el = find(node);

        expect(el.tagName).toBe('DIV');
        expect(el.className)
            .toInclude('mdl-progress')
            .toInclude('mdl-js-progress');
    });

    it('should allow custom css classes', () => {
        var node = render(<ProgressBar className="my-progress" />);
        var el = find(node);

        expect(el.className).toInclude('my-progress');
    });

    it('should be indeterminate by default', () => {
        var node = render(<ProgressBar />);
        var el = find(node);

        expect(el.className).toExclude('mdl-progress__indeterminate');
    });

    it('should be indeterminate when specified', () => {
        var node = render(<ProgressBar indeterminate />);
        var el = find(node);

        expect(el.className).toInclude('mdl-progress__indeterminate');
    });

    it('should be set with the specified progress', () => {
        var node = render(<ProgressBar progress={37} />);
        var el = find(node);

        expect(el.querySelector('.progressbar').style.width).toBe('37%');
    });

    it('should be set with the specified buffer', () => {
        var node = render(<ProgressBar buffer={87} />);
        var el = find(node);

        expect(el.querySelector('.bufferbar').style.width).toBe('87%');
    });

    it('should be updated with the specified progress', () => {
        var node = render(<ProgressBar progress={0} />);
        var el = find(node);

        ReactDOM.render(<ProgressBar progress={78} />, el.parentNode);

        expect(el.querySelector('.progressbar').style.width).toBe('78%');
    });

    it('should be updated with the specified buffer', () => {
        var node = render(<ProgressBar buffer={20} />);
        var el = find(node);

        ReactDOM.render(<ProgressBar buffer={88} />, el.parentNode);

        expect(el.querySelector('.bufferbar').style.width).toBe('88%');
    });
});
