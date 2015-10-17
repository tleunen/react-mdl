import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Spacer from './Spacer';

class HeaderRow extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.any
    }

    render() {
        var { className, title, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__header-row', className);

        return (
            <div className={classes} {...otherProps}>
                {title && <span className="mdl-layout-title">{title}</span>}
                <Spacer />
                {this.props.children}
            </div>
        );
    }
}

export default HeaderRow;
