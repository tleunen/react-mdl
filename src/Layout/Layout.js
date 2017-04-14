import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mdlUpgrade from '../utils/mdlUpgrade';

const propTypes = {
    className: PropTypes.string,
    fixedDrawer: PropTypes.bool,
    fixedHeader: PropTypes.bool,
    fixedTabs: PropTypes.bool
};

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
    render() {
        const { className, fixedDrawer, fixedHeader, fixedTabs, ...otherProps } = this.props;

        const classes = classNames('mdl-layout mdl-js-layout', {
            'mdl-layout--fixed-drawer': fixedDrawer,
            'mdl-layout--fixed-header': fixedHeader,
            'mdl-layout--fixed-tabs': fixedTabs
        }, className);

        return (
            <div className={classes} {...otherProps}>
                <div className="mdl-layout__inner-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Layout.propTypes = propTypes;

export default mdlUpgrade(Layout, true);
