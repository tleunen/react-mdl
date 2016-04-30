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

class Switch extends React.Component {
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
        const { children, className, disabled, label, ...otherProps } = this.props;
        const { checked } = this.state;

        const classes = classNames('mdl-switch is-upgraded', {
            'is-focused': false,
            'is-disabled': disabled,
            'is-checked': checked
        }, className);

        return (
            <label className={classes} {...otherProps}>
                <input
                    type="checkbox"
                    className="mdl-switch__input"
                    onChange={this.handleChange}
                    checked={checked}
                    disabled={disabled}
                />
                {label && <span className="mdl-switch__label">{label}</span>}
                <div className="mdl-switch__track" />
                <div className="mdl-switch__thumb">
                    <span className="mdl-switch__focus-helper" />
                </div>
                {children}
            </label>
        );
    }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default addRipple(Switch, { prefix: 'mdl-switch', center: true });
