import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TabBar from '../Tabs/TabBar';
import mdlUpgrade from '../utils/mdlUpgrade';

const HeaderTabs = props => {
    const { className, ripple, children, ...otherProps } = props;

    const classes = classNames({
        'mdl-js-ripple-effect': ripple,
        'mdl-js-ripple-effect--ignore-events': ripple
    }, className);

    return (
        <TabBar cssPrefix="mdl-layout" className={classes} {...otherProps}>
            {children}
        </TabBar>
    );
};
HeaderTabs.propTypes = {
    activeTab: PropTypes.number,
    className: PropTypes.string,
    onChange: PropTypes.func,
    ripple: PropTypes.bool
};

export default mdlUpgrade(HeaderTabs);
