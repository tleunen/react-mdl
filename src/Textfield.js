import React, { PropTypes } from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';

class Textfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInvalid: false,
            isFocused: false
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleFocus = this._handleFocus.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
    }

    _handleChange(e) {
        this.setState({
            isInvalid: !React.findDOMNode(this.refs.input).validity.valid
        });
        this.props.onChange(e.target.value);
    }

    _handleFocus() {
        this.setState({
            isFocused: true
        });
    }

    _handleBlur() {
        this.setState({
            isFocused: false
        });
    }

    _handleKeyDown() {
        if(this.props.maxRows) {
            var currentRowCount = event.target.value.split('\n').length;
            if(event.keyCode === 13) {
                if(currentRowCount >= this.props.maxRows) {
                    event.preventDefault();
                }
            }
        }
    }

    _getField(id) {
        var type = this.props.type || 'text';
        var hasRows = !!this.props.rows;
        var rows = Math.abs(this.props.rows) || 1;

        var genericProps = {
            key: 'input',
            ref: 'input',
            className: 'mdl-textfield__input',
            id: id,
            value: this.props.value,
            disabled: this.props.disabled,
            onChange: this._handleChange,
            onFocus: this._handleFocus,
            onBlur: this._handleBlur
        };

        return (hasRows || this.props.maxRows > 1) ? (
            React.createElement('textarea', objectAssign(genericProps, {
                rows: rows,
                onKeyDown: this._handleKeyDown
            }))
        ) : (
            React.createElement('input', objectAssign(genericProps, {
                type: type
            }, this.props.pattern ? {
                pattern: this.props.pattern
            } : null))
        );
    }

    _getFullField(id) {
        return [
            this._getField(id),
            <label key="label" className="mdl-textfield__label" htmlFor={id}>{this.props.label}</label>,
            this.props.error ? (
                <span key="error" className="mdl-textfield__error">{this.props.error}</span>
            ) : null
        ];
    }

    render() {
        var id = 'textfield-' + this.props.label.replace(/\s+/g, '');
        var isExpandable = this.props.expandable;
        var elemClasses = classNames('mdl-textfield', 'is-upgraded', {
            'mdl-textfield--floating-label': this.props.floatingLabel,
            'mdl-textfield--expandable': isExpandable,
            'is-disabled': this.props.disabled,
            'is-invalid': this.state.isInvalid,
            'is-dirty': this.props.value && this.props.value.length > 0,
            'is-focused': this.state.isFocused
        });

        var labelExpandable;
        var field;
        if(isExpandable) {
            labelExpandable = (
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor={id}>
                    <i className="material-icons">{this.props.expandableIcon}</i>
                </label>
            );
            field = React.createElement('div', {className: 'mdl-textfield__expandable-holder'}, this._getFullField(id));
        }
        else {
            field = this._getFullField(id);
        }

        return (
            <div className={elemClasses}>
                {labelExpandable}
                {field}
            </div>
        );
    }
}

Textfield.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    expandable: PropTypes.bool,
    expandableIcon: PropTypes.string,
    floatingLabel: PropTypes.bool,
    label: PropTypes.string.isRequired,
    maxRows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    pattern: PropTypes.string,
    rows: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.string
};

export default Textfield;
