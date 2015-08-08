import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Textfield extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
    }

    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
    }

    _handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        var { className, disabled, error, expandable, expandableIcon,
              floatingLabel, label, maxRows, onChange, pattern, rows,
              type, value, ...otherProps } = this.props;

        var hasRows = !!rows;
        var inputId = 'textfield-' + label.replace(/[^a-z0-9]/gi, '');
        var inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';

        var input = React.createElement(inputTag, {
            className: 'mdl-textfield__input',
            id: inputId,
            key: inputId,
            value: value,
            disabled: disabled,
            onChange: this._handleChange,
            rows: rows,
            type: type,
            pattern: pattern
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

        var classes = classNames('mdl-textfield mdl-js-textfield', {
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
            <div className={classes} {...otherProps}>
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

Textfield.propTypes = {
    className: PropTypes.string,
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
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Textfield;
