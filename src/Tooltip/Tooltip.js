import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.node.isRequired,
    large: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};

class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);

        this.state = {
            active: false,
            tooltipStyles: {}
        };
    }

     // istanbul ignore next
     // ignoring since I'm not sure yet to know how to test this because
     // it uses `this.refs`
    handleMouseEnter(e) {
        // from https://github.com/google/material-design-lite/blob/master/src/tooltip/tooltip.js
        const tooltip = this.refs.tooltip;
        const rect = e.target.getBoundingClientRect();

        let left = rect.left + (rect.width / 2);
        const top = rect.top + (rect.height / 2);
        const marginLeft = -1 * (tooltip.offsetWidth / 2);
        const marginTop = -1 * (tooltip.offsetHeight / 2);

        const tooltipStyles = {};

        if (this.props.position === 'left' || this.props.position === 'right') {
            left = rect.width / 2;
            if (top + marginTop < 0) {
                tooltipStyles.top = 0;
                tooltipStyles.marginTop = 0;
            } else {
                tooltipStyles.top = `${top}px`;
                tooltipStyles.marginTop = `${marginTop}px`;
            }
        } else if (left + marginLeft < 0) {
            tooltipStyles.left = 0;
            tooltipStyles.marginLeft = 0;
        } else {
            tooltipStyles.left = `${left}px`;
            tooltipStyles.marginLeft = `${marginLeft}px`;
        }

        if (this.props.position === 'top') {
            tooltipStyles.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        } else if (this.props.position === 'right') {
            tooltipStyles.left = `${rect.left + rect.width + 10}px`;
        } else if (this.props.position === 'left') {
            tooltipStyles.left = `${rect.left - tooltip.offsetWidth - 10}px`;
        } else {
            tooltipStyles.top = `${rect.top + rect.height + 10}px`;
        }

        this.setState({
            active: true,
            tooltipStyles
        });
    }

    render() {
        const { label, large, children, ...otherProps } = this.props;
        const { active, tooltipStyles } = this.state;

        const tooltipClasses = classNames('mdl-tooltip', {
            'mdl-tooltip--large': large,
            'is-active': active
        });

        const child = (typeof children === 'string')
            ? <span>{children}</span>
            : React.Children.only(children);

        return (
            <div style={{ display: 'inline-block' }} {...otherProps}>
                {React.cloneElement(child, {
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: () => this.setState({ active: false })
                })}
                <div
                    ref="tooltip"
                    className={tooltipClasses}
                    style={tooltipStyles}
                >
                    {label}
                </div>
            </div>
        );
    }
}

Tooltip.propTypes = propTypes;

export default Tooltip;
