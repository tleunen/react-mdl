import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from '../utils/mdlUpgrade';

class Layout extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        fixedDrawer: PropTypes.bool,
        fixedHeader: PropTypes.bool,
        fixedTabs: PropTypes.bool
    }

    render() {
        const { className, fixedDrawer, fixedHeader, fixedTabs, ...otherProps } = this.props;

        const classes = classNames('mdl-layout mdl-js-layout', {
            'mdl-layout--fixed-drawer': fixedDrawer,
            'mdl-layout--fixed-header': fixedHeader,
            'mdl-layout--fixed-tabs': fixedTabs
        }, className);

        return (
            <div className={classes} {...otherProps}>
                {this.props.children}
            </div>
        );
    }
}

export default mdlUpgrade(Layout);
