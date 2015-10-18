import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

class DropDownSection extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        size: PropTypes.oneOf(['mini', 'mega']),
        title: PropTypes.string
    }

    render() {
        var { className, size, title, ...otherProps } = this.props;

        var classes = classNames({
            [`mdl-${size}-footer__drop-down-section`]: true
        }, className);

        return (
            <div className={classes} {...otherProps}>
                <input className={`mdl-${size}-footer__heading-checkbox`} type="checkbox" defaultChecked />
                <h1 className={`mdl-${size}-footer__heading`}>{title}</h1>
                {cloneChildren(this.props.children, { size: size })}
            </div>
        );
    }
}

export default DropDownSection;
