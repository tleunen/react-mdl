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
            <dialog className={classes} {...otherProps}>
                {children}
            </dialog>
        );
    }
}

export default Dialog;
