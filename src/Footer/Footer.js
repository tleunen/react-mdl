import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

class Footer extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        size: PropTypes.oneOf(['mini', 'mega'])
    }

    static defaultProps = {
        size: 'mega'
    }

    render() {
        var { className, size, ...otherProps } = this.props;

        var classes = classNames({
            [`mdl-${size}-footer`]: true
        }, className);

        return (
            <footer className={classes} {...otherProps}>
                {cloneChildren(this.props.children, { size: size })}
            </footer>
        );
    }
}

export default Footer;
export Section from './Section';
export DropDownSection from './DropDownSection';
export LinkList from './LinkList';

