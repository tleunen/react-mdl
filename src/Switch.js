import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Switch extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        ripple: PropTypes.bool
    }

    render() {
        const { className, ripple, children, ...inputProps } = this.props;

        const classes = classNames('mdl-switch mdl-js-switch', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}>
                <input
                    type="checkbox"
                    className="mdl-switch__input"
                    { ...inputProps }
                />
                <span className="mdl-switch__label">{children}</span>
            </label>
        );
    }
}

export default mdlUpgrade(Switch);
