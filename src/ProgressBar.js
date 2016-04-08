import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

const propTypes = {
    buffer: PropTypes.number,
    className: PropTypes.string,
    indeterminate: PropTypes.bool,
    progress: PropTypes.number
};

class ProgressBar extends React.Component {
    componentDidMount() {
        this._setProgress(this.props.progress);
        this._setBuffer(this.props.buffer);
    }

    componentDidUpdate() {
        this._setProgress(this.props.progress);
        this._setBuffer(this.props.buffer);
    }

    _setProgress(progress) {
        if (!this.props.indeterminate && progress !== undefined) {
            findDOMNode(this).MaterialProgress.setProgress(progress);
        }
    }

    _setBuffer(buffer) {
        if (buffer !== undefined) {
            findDOMNode(this).MaterialProgress.setBuffer(buffer);
        }
    }

    render() {
        const { className, indeterminate, ...otherProps } = this.props;

        const classes = classNames('mdl-progress mdl-js-progress', {
            'mdl-progress__indeterminate': indeterminate
        }, className);

        return <div className={classes} {...otherProps}></div>;
    }
}

ProgressBar.propTypes = propTypes;

export default mdlUpgrade(ProgressBar);
