import React, { PropTypes } from 'react';
import classNames from 'classnames';
import HeaderRow from './HeaderRow';
import HeaderTabs from './HeaderTabs';

class Header extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        scroll: PropTypes.bool,
        seamed: PropTypes.bool,
        title: PropTypes.any,
        transparent: PropTypes.bool,
        waterfall: PropTypes.bool
    }

    render() {
        var { className, scroll, seamed, title, transparent, waterfall, ...otherProps } = this.props;

        var classes = classNames('mdl-layout__header', {
            'mdl-layout__header--scroll': scroll,
            'mdl-layout__header--seamed': seamed,
            'mdl-layout__header--transparent': transparent,
            'mdl-layout__header--waterfall': waterfall
        }, className);

        var isRowOrTab = false;
        React.Children.forEach(this.props.children, child => {
            if(child && (child.type === HeaderRow || child.type === HeaderTabs)) {
                isRowOrTab = true;
            }
        });

        return (
            <header className={classes} {...otherProps}>
                {isRowOrTab ? this.props.children : (
                    <HeaderRow title={title}>{this.props.children}</HeaderRow>
                )}
            </header>
        );
    }
}

export default Header;
