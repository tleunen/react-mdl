import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

class HeaderTabs extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        ripple: PropTypes.string
    }

    render() {
        var { className, ripple, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__tab-bar', {
            'mdl-js-ripple-effect': ripple !== false
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {cloneChildren(this.props.children, child => ({
                    className: classNames('mdl-layout__tab', child.props.className)
                }))}
            </div>
        );
    }
}

export default HeaderTabs;
