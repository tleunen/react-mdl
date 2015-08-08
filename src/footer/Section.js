import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

class Section extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        logo: PropTypes.string,
        size: PropTypes.oneOf(['mini', 'mega']),
        type: PropTypes.oneOf(['top', 'middle', 'bottom', 'left', 'right'])
    }

    render() {
        var { className, logo, size, type, ...otherProps } = this.props;

        type = type || 'mega';

        var classes = classNames({
            [`mdl-${size}-footer__${type}-section`]: true
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {logo ? <div className="mdl-logo">{logo}</div> : null}
                {cloneChildren(this.props.children, { size: size })}
            </div>
        );
    }
}

export default Section;
