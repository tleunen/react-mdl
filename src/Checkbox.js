import React, { PropTypes } from 'react';
import classNames from 'classnames';

import componentHandler from 'material-design-lite/lib/mdlComponentHandler';
import MaterialCheckbox from 'material-design-lite/lib/checkbox/checkbox';
import RippleEffect from 'material-design-lite/lib/ripple/ripple';
componentHandler.register(MaterialCheckbox);
componentHandler.register(RippleEffect);

class Checkbox extends React.Component {
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
        var id = 'checkbox-' + (this.props.label || this.props.id).replace(/\s+/g, '');

        return (
            <label className="mdl-checkbox mdl-js-checkbox" htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    className='mdl-checkbox__input'
                    checked={checked}
                    disabled={disabled}
                    onChange={this._handleChange}
                />
                {this.props.label ? <span className="mdl-checkbox__label">{this.props.label}</span> : null}
            </label>
        );
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
