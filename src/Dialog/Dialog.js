import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

class Dialog extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        open: PropTypes.bool
    };

    componentDidMount() {
        if(this.props.open) {
            findDOMNode(this).showModal();
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.open !== prevProps.open) {
            if(this.props.open) {
                findDOMNode(this).showModal();

                // display the dialog at the right location
                // needed for the polyfill, otherwise it's not at the right position
                const bodyHeight = document.body.clientHeight;
                const dialogHeight = this.refs.dialog.clientHeight;
                this.refs.dialog.style.position = 'fixed';
                this.refs.dialog.style.top = `${(bodyHeight - dialogHeight) / 2}px`;
            }
            else {
                findDOMNode(this).close();
            }
        }
    }

    render() {
        const { className, children, open, ...otherProps } = this.props;

        const classes = classNames('mdl-dialog', className);

        return (
            <dialog ref="dialog" className={classes} {...otherProps}>
                {children}
            </dialog>
        );
    }
}

export default Dialog;
