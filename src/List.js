import React, { PropTypes } from 'react';
import classNames from 'classnames';
import basicClassCreator from './utils/basicClassCreator';

export default basicClassCreator('List', 'mdl-list', 'ul');

export class ListItem extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        twoLine: PropTypes.boolean,
        threeLine: PropTypes.boolean
    };

    static defaultProps = {
        twoLine: false,
        threeLine: false
    };

    render() {
        const { children, className, twoLine, threeLine, ...otherProps } = this.props;

        const classes = classNames('mdl-list__item', {
            'mdl-list__item--two-line': twoLine,
            'mdl-list__item--three-line': threeLine,
        }, className);

        return (
            <li className={classes} {...otherProps}>
                {children}
            </li>
        );
    }
}
