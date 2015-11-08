import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Radio extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        name: PropTypes.string,
        onChange: PropTypes.func,
        ripple: PropTypes.bool,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired
    };

    render() {
        const { children, className, name, ripple, value, ...inputProps } = this.props;

        const classes = classNames('mdl-radio mdl-js-radio', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}>
                <input
                    type="radio"
                    className="mdl-radio__button"
                    value={value}
                    name={name}
                    { ...inputProps }
                />
                <span className="mdl-radio__label">{children}</span>
            </label>
        );
    }
}

export default mdlUpgrade(Radio);
