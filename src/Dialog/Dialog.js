import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    onCancel: PropTypes.func,
    open: PropTypes.bool
};

const defaultProps = {
    onCancel: e => e.preventDefault()
};

class Dialog extends React.Component {
    componentDidMount() {
        this.dialogRef.addEventListener('cancel', this.props.onCancel);
        if (this.props.open) {
            findDOMNode(this).showModal();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open) {
            if (this.props.open) {
                findDOMNode(this).showModal();

                // display the dialog at the right location
                // needed for the polyfill, otherwise it's not at the right position
                const windowHeight = window.innerHeight;
                if (this.dialogRef) {
                    const dialogHeight = this.dialogRef.clientHeight;
                    this.dialogRef.style.position = 'fixed';
                    this.dialogRef.style.top = `${(windowHeight - dialogHeight) / 2}px`;
                }
            } else {
                findDOMNode(this).close();
            }
        }
    }

    componentWillUnmount() {
        this.dialogRef.removeEventListener('cancel', this.props.onCancel);
    }

    render() {
        // We cannot set the `open` prop on the Dialog if we manage its state manually with `showModal`,
        // this the disabled eslint rule
        // eslint-disable-next-line no-unused-vars
        const { className, open, onCancel, children, ...otherProps } = this.props;

        const classes = classNames('mdl-dialog', className);

        return (
            <dialog ref={(c) => (this.dialogRef = c)} className={classes} {...otherProps}>
                {children}
            </dialog>
        );
    }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
