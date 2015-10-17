import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from '../utils/mdlUpgrade';
import basicClassCreator from '../utils/basicClassCreator';

class Layout extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        fixedDrawer: PropTypes.bool,
        fixedHeader: PropTypes.bool,
        fixedTabs: PropTypes.bool
    }

    render() {
        var { className, fixedDrawer, fixedHeader, fixedTabs, ...otherProps } = this.props;

        var classes = classNames('mdl-layout mdl-js-layout', {
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
export Header from './Header';
export Drawer from './Drawer';
export HeaderRow from './HeaderRow';
export Navigation from './Navigation';
export HeaderTabs from './HeaderTabs';
export Spacer from './Spacer';
export var Content = basicClassCreator('Content', 'mdl-layout__content', 'main');
