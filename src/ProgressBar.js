import React, { PropTypes } from 'react';
import classNames from 'classnames';

class ProgressBar extends React.Component {

    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
        this.setProgress(this.props.progress);
        this.setBuffer(this.props.buffer);
    }

    componentDidUpdate() {
        this.setProgress(this.props.progress);
        this.setBuffer(this.props.buffer);
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
    }

    setProgress(progress) {
        if(!this.props.indeterminate && progress !== undefined) {
            React.findDOMNode(this).MaterialProgress.setProgress(progress);
        }
    }

    setBuffer(buffer) {
        if(buffer !== undefined) {
            React.findDOMNode(this).MaterialProgress.setBuffer(buffer);
        }
    }

    render() {
        var { buffer, className, indeterminate, progress, ...otherProps } = this.props;

        var classes = classNames('mdl-progress mdl-js-progress', {
            'mdl-progress__indeterminate': indeterminate
        }, className);

        return <div className={classes} {...otherProps}></div>;
    }
}

ProgressBar.propTypes = {
    buffer: PropTypes.number,
    className: PropTypes.string,
    indeterminate: PropTypes.bool,
    progress: PropTypes.number
};

export default ProgressBar;
