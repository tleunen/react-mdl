import React, { PropTypes } from 'react';
import classNames from 'classnames';

class FABButton extends React.Component {
    constructor(props) {
        super(props);

        this._handleBlur = this._handleBlur.bind(this);
    }

    _handleBlur(e) {
        React.findDOMNode(this.refs.button).blur();
    }

    render() {
        var classes = classNames('mdl-button', 'mdl-button--fab', {
            'mdl-button--colored': this.props.colored,
            'mdl-button--mini-fab': this.props.mini
        });

        return (
            <button
                ref="button"
                className={classes}
                disabled={this.props.disabled}
                onMouseUp={this._handleBlur}
                onMouseLeave={this._handleBlur}
            >
              <i className="material-icons">{this.props.icon}</i>
            </button>
        );
    }
}

FABButton.propTypes = {
    colored: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    mini: PropTypes.bool
};

export default FABButton;
