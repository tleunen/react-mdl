import React, { PropTypes } from 'react';
import classNames from 'classnames';

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

    render() {
        var id = 'textfield-' + this.props.label.replace(/\s+/g, '');
        var type = this.props.type || 'text';

        var elemClasses = classNames('mdl-textfield', 'is-upgraded', {
            'mdl-textfield--floating-label': !!this.props.floatingLabel,
            'is-disabled': this.props.disabled,
            'is-invalid': this.state.isInvalid,
            'is-dirty': this.props.value && this.props.value.length > 0,
            'is-focused': this.state.isFocused
        });

        var pattern = this.props.pattern || '*';

        return (
            <div className={elemClasses}>
                <input
                    ref="input"
                    className="mdl-textfield__input"
                    type={type}
                    id={id}
                    pattern={pattern}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this._handleChange}
                    onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                />
                <label className="mdl-textfield__label" htmlFor={id}>{this.props.label}</label>

                {this.props.error ? (
                    <span className="mdl-textfield__error">{this.props.error}</span>
                ) : null}
            </div>
        );
    }
}

Textfield.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    floatingLabel: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    pattern: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};

export default Textfield;
