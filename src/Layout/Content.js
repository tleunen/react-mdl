import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Content = props => {
    const { children, className, element, ...otherProps } = props;

    const classes = classNames('mdl-layout__content', className);

    return React.createElement(element || 'div', {
        className: classes,
        ...otherProps
    }, [
        children,
        <div key="hack" className="react-mdl-header-tabs-hack" id="undefined" />
    ]);
};

Content.propTypes = {
    className: PropTypes.string,
    element: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ])
};

export default Content;
