import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

const propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.node,
    expandable: PropTypes.bool,
    expandableIcon: PropTypes.string,
    floatingLabel: PropTypes.bool,
    id: (props, propName, componentName) => {
        const { id } = props;
        if (id && typeof id !== 'string') {
            return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. \`${propName}\` should be a string. Validation failed.`);
        }
        if (!id && typeof props.label !== 'string') {
            return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. \`${propName}\` is required when label is an element. Validation failed.`);
        }
        return null;
    },
    inputClassName: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    maxRows: PropTypes.number,
    onChange: PropTypes.func,
    pattern: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.number,
    style: PropTypes.object,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

class Textfield extends React.Component {
    componentDidMount() {
        if (this.props.error && !this.props.pattern) {
            this.setAsInvalid();
        }
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.required !== prevProps.required ||
            this.props.pattern !== prevProps.pattern ||
            this.props.error !== prevProps.error
        ) {
            findDOMNode(this).MaterialTextfield.checkValidity();
        }
        if (this.props.disabled !== prevProps.disabled) {
            findDOMNode(this).MaterialTextfield.checkDisabled();
        }
        if (this.props.value !== prevProps.value && this.refs.input !== document.activeElement) {
            findDOMNode(this).MaterialTextfield.change(this.props.value);
        }
        if (this.props.error && !this.props.pattern) {
            // Every time the input gets updated by MDL (checkValidity() or change())
            // its invalid class gets reset. We have to put it again if the input is specifically set as "invalid"
            this.setAsInvalid();
        }
    }

    setAsInvalid() {
        const elt = findDOMNode(this);
        if (elt.className.indexOf('is-invalid') < 0) {
            elt.className = classNames(elt.className, 'is-invalid');
        }
    }

    formatLabel(label, customId) {
        if (typeof label === 'string') {
            return (
                <label className="mdl-textfield__label" htmlFor={customId}>
                    {label}
                </label>
            );
        }

        return label;
    }

    render() {
        const { className, inputClassName, id,
              error, expandable, expandableIcon,
              floatingLabel, label, maxRows,
              rows, style, ...otherProps } = this.props;

        const hasRows = !!rows;
        const customId = id || `textfield-${label.replace(/[^a-z0-9]/gi, '')}`;
        const inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';

        const inputProps = {
            className: classNames('mdl-textfield__input', inputClassName),
            id: customId,
            rows,
            ref: 'input',
            ...otherProps
        };

        const input = React.createElement(inputTag, inputProps);
        const labelContainer = this.formatLabel(label, customId);
        const errorContainer = !!error && <span className="mdl-textfield__error">{error}</span>;

        const containerClasses = classNames('mdl-textfield mdl-js-textfield', {
            'mdl-textfield--floating-label': floatingLabel,
            'mdl-textfield--expandable': expandable
        }, className);

        return expandable ? (
            <div className={containerClasses} style={style}>
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor={customId}>
                    <i className="material-icons">{expandableIcon}</i>
                </label>
                <div className="mdl-textfield__expandable-holder">
                    {input}
                    {labelContainer}
                    {errorContainer}
                </div>
            </div>
        ) : (
            <div className={containerClasses} style={style}>
                {input}
                {labelContainer}
                {errorContainer}
            </div>
        );
    }
}

Textfield.propTypes = propTypes;

export default mdlUpgrade(Textfield);
