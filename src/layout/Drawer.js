import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Navigation from './Navigation';

class Drawer extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string
    }

    render() {
        var { className, title, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__drawer', className);

        return (
            <div className={classes} {...otherProps}>
                {title ? <span className="mdl-layout-title">{title}</span> : null}
                <Navigation>
                    {this.props.children}
                </Navigation>
            </div>
        );
    }
}

export default Drawer;
