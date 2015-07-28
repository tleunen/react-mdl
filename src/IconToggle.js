import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './Icon';

class IconToggle extends React.Component {
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

    _handleChange(event) {
        this.props.onChange(event.target.checked);
    }

    render() {
        var { className, checked, disabled, id, name, ripple, ...otherProps } = this.props;
        var inputId = 'icon-toggle-' + id;

        // enable ripple by default
        ripple = ripple !== false;

        var classes = classNames('mdl-icon-toggle mdl-js-icon-toggle', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes} htmlFor={inputId}>
                <input
                    type="checkbox"
                    id={inputId}
                    className="mdl-icon-toggle__input"
                    checked={checked}
                    disabled={disabled}
                    onChange={this._handleChange}
                />
                <Icon className="mdl-icon-toggle__label" name={name} />
            </label>
        );
    }
}

IconToggle.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    ripple: PropTypes.bool
};

export default IconToggle;
