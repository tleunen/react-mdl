import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class ProgressBar extends React.Component {
    static propTypes = {
        buffer: PropTypes.number,
        className: PropTypes.string,
        indeterminate: PropTypes.bool,
        progress: PropTypes.number
    }

    componentDidMount() {
        this._setProgress(this.props.progress);
        this._setBuffer(this.props.buffer);
    }

    componentDidUpdate() {
        this._setProgress(this.props.progress);
        this._setBuffer(this.props.buffer);
    }

    _setProgress(progress) {
        if(!this.props.indeterminate && progress !== undefined) {
            findDOMNode(this).MaterialProgress.setProgress(progress);
        }
    }

    _setBuffer(buffer) {
        if(buffer !== undefined) {
            findDOMNode(this).MaterialProgress.setBuffer(buffer);
        }
    }

    render() {
        const { buffer, className, indeterminate,
            progress, ...otherProps } = this.props;

        const classes = classNames('mdl-progress mdl-js-progress', {
            'mdl-progress__indeterminate': indeterminate
        }, className);

        return <div className={classes} {...otherProps}></div>;
    }
}

export default mdlUpgrade(ProgressBar);
