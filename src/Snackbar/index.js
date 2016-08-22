import React, { PropTypes } from 'react';
import classNames from 'classnames';

// This component doesn't use the javascript from MDL.
// This is the expected behavior and the reason is because it's not written in
// a way to make it easy to use with React.
const ANIMATION_LENGTH = 250;

const propTypes = {
    action: PropTypes.string,
    active: PropTypes.bool.isRequired,
    className: PropTypes.string,
    onActionClick: PropTypes.func,
    onTimeout: PropTypes.func.isRequired,
    timeout: PropTypes.number
};

const defaultProps = {
    timeout: 2750
};

class Snackbar extends React.Component {
    constructor(props) {
        super(props);
        this.clearTimer = this.clearTimer.bind(this);
        this.timeoutId = null;
        this.clearTimeoutId = null;
        this.state = {
            open: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.active
        });
    }

    componentDidUpdate() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        if (this.props.active) {
            this.timeoutId = setTimeout(this.clearTimer, this.props.timeout);
        }
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        if (this.clearTimeoutId) {
            clearTimeout(this.clearTimeoutId);
            this.clearTimeoutId = null;
        }
    }

    clearTimer() {
        this.timeoutId = null;
        this.setState({ open: false });

        this.clearTimeoutId = setTimeout(() => {
            this.clearTimeoutId = null;
            this.props.onTimeout();
        }, ANIMATION_LENGTH);
    }

    render() {
        const { action, active, className, children,
            onActionClick, ...otherProps } = this.props;
        const { open } = this.state;

        const classes = classNames('mdl-snackbar', {
            'mdl-snackbar--active': open
        }, className);

        delete otherProps.onTimeout;
        delete otherProps.timeout;

        return (
            <div className={classes} aria-hidden={!open} {...otherProps}>
                <div className="mdl-snackbar__text">{active && children}</div>
                {active && action && <button className="mdl-snackbar__action" type="button" onClick={onActionClick}>{action}</button>}
            </div>
        );
    }
}

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;

export default Snackbar;
