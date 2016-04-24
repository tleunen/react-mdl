import React, { PropTypes } from 'react';
import classNames from 'classnames';
import addRipple from '../Ripple';

const propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func
};

const defaultProps = {
    onChange: () => {}
};

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            checked: typeof this.props.checked === 'boolean'
                ? props.checked
                : !!props.defaultChecked
        };
    }

    componentWillReceiveProps(nextProps) {
        // controlled component
        if (typeof this.props.checked === 'boolean') {
            this.setState({
                checked: nextProps.checked
            });
        }
    }

    handleChange(e) {
        // uncontrolled component
        if (typeof this.props.checked !== 'boolean') {
            this.setState(prev => ({ checked: !prev.checked }));
        }

        this.props.onChange(e);
    }

    render() {
        const { children, className,
            disabled, label, ...otherProps } = this.props;
        const { checked } = this.state;

        const classes = classNames('mdl-checkbox is-upgraded', {
            'is-focused': false,
            'is-disabled': disabled,
            'is-checked': checked
        }, className);

        return (
            <label className={classes} {...otherProps}>
                <input
                    ref="input"
                    type="checkbox"
                    className="mdl-checkbox__input"
                    onChange={this.handleChange}
                    checked={checked}
                    disabled={disabled}
                />
                {label && <span className="mdl-checkbox__label">{label}</span>}
                <span className="mdl-checkbox__focus-helper" />
                <span className="mdl-checkbox__box-outline">
                    <span className="mdl-checkbox__tick-outline" />
                </span>
                {children}
            </label>
        );
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default addRipple(Checkbox, { prefix: 'mdl-checkbox', center: true });
