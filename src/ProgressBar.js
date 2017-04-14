import React from 'react';
import PropTypes from 'prop-types';
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
        this.setProgress(this.props.progress);
        this.setBuffer(this.props.buffer);
    }

    componentDidUpdate() {
        this.setProgress(this.props.progress);
        this.setBuffer(this.props.buffer);
    }

    setProgress(progress) {
        if (!this.props.indeterminate && progress !== undefined) {
            findDOMNode(this).MaterialProgress.setProgress(progress);
        }
    }

    setBuffer(buffer) {
        if (buffer !== undefined) {
            findDOMNode(this).MaterialProgress.setBuffer(buffer);
        }
    }

    render() {
        const {
            className, indeterminate,
            buffer, progress, // eslint-disable-line no-unused-vars
            ...otherProps
        } = this.props;

        const classes = classNames('mdl-progress mdl-js-progress', {
            'mdl-progress__indeterminate': indeterminate
        }, className);

        return <div className={classes} {...otherProps}></div>;
    }
}

ProgressBar.propTypes = propTypes;

export default mdlUpgrade(ProgressBar);
