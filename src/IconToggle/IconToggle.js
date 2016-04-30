import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import addRipple from '../Ripple';

const propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

const defaultProps = {
    onChange: () => {}
};

class IconToggle extends React.Component {
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
            disabled, name, ...otherProps } = this.props;
        const { checked } = this.state;

        const classes = classNames('mdl-icon-toggle is-upgraded', {
            'is-focused': false,
            'is-disabled': disabled,
            'is-checked': checked
        }, className);

        return (
            <label className={classes} {...otherProps}>
                <input
                    ref="input"
                    type="checkbox"
                    className="mdl-icon-toggle__input"
                    onChange={this.handleChange}
                    checked={checked}
                    disabled={disabled}
                />
                <Icon className="mdl-icon-toggle__label" name={name} />
                {children}
            </label>
        );
    }
}

IconToggle.propTypes = propTypes;
IconToggle.defaultProps = defaultProps;

export default addRipple(IconToggle, { prefix: 'mdl-icon-toggle', center: true });
