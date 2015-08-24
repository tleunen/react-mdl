import React, { PropTypes } from 'react';
import classNames from 'classnames';

class HeaderRow extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string
    }

    render() {
        var { className, title, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__header-row', className);

        return (
            <div className={classes} {...otherProps}>
                {title ? <span className="mdl-layout-title">{title}</span> : null}
                <div className="mdl-layout-spacer"></div>
                {this.props.children}
            </div>
        );
    }
}

export default HeaderRow;
