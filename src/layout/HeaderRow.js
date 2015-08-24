import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Navigation from './Navigation';
import Spacer from './Spacer';

class HeaderRow extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string
    }

    _renderNav() {
        var hasChildren = React.Children.count(this.props.children);
        if(!hasChildren) return;

        return (
            <Navigation>
                {this.props.children}
            </Navigation>
        );
    }

    render() {
        var { className, title, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__header-row', className);

        return (
            <div className={classes} {...otherProps}>
                {title ? <span className="mdl-layout-title">{title}</span> : null}
                <Spacer />
                {this._renderNav()}
            </div>
        );
    }
}

export default HeaderRow;
