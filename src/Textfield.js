import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Textfield extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        disabled: PropTypes.bool,
        error: PropTypes.string,
        expandable: PropTypes.bool,
        expandableIcon: PropTypes.string,
        floatingLabel: PropTypes.bool,
        inputClassName: PropTypes.string,
        label: PropTypes.string.isRequired,
        maxRows: PropTypes.number,
        onChange: PropTypes.func.isRequired,
        pattern: PropTypes.string,
        required: PropTypes.bool,
        rows: PropTypes.number,
        style: PropTypes.object,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    componentDidUpdate(prevProps) {
        if(
            this.props.required !== prevProps.required ||
            this.props.pattern !== prevProps.pattern
        ) {
            React.findDOMNode(this).MaterialTextfield.checkValidity();
        }
        if(this.props.disabled !== prevProps.disabled) {
            React.findDOMNode(this).MaterialTextfield.checkDisabled();
        }
    }

    _handleChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        var { className, inputClassName,
              error, expandable, expandableIcon,
              floatingLabel, label, maxRows, onChange,
              rows, style, value, ...otherProps } = this.props;

        var hasRows = !!rows;
        var inputId = 'textfield-' + label.replace(/[^a-z0-9]/gi, '');
        var inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';

        var input = React.createElement(inputTag, {
            className: classNames('mdl-textfield__input', inputClassName),
            id: inputId,
            key: inputId,
            value: value,
            onChange: this._handleChange,
            rows: rows,
            ...otherProps
        });

        var inputAndLabelError = [
            input,
            !expandable ? (
                <label key="label" className="mdl-textfield__label" htmlFor={inputId}>{label}</label>
            ) : null,
            error ? (
                <span key="error" className="mdl-textfield__error">{error}</span>
            ) : null
        ];

        var containerClasses = classNames('mdl-textfield mdl-js-textfield', {
            'mdl-textfield--floating-label': floatingLabel,
            'mdl-textfield--expandable': expandable
        }, className);

        var field;
        if(expandable) {
            field = React.createElement('div', {className: 'mdl-textfield__expandable-holder'}, inputAndLabelError);
        }
        else {
            field = inputAndLabelError;
        }

        return (
            <div className={containerClasses} style={style}>
                {expandable ? (
                    <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor={inputId}>
                        <i className="material-icons">{expandableIcon}</i>
                    </label>
                ) : null}
                {field}
            </div>
        );
    }
}

export default mdlUpgrade(Textfield);
