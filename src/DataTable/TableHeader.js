import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tooltip from '../Tooltip';

class TableHeader extends React.Component {
    static propTypes = {
        cellFormatter: PropTypes.func,
        className: PropTypes.string,
        name: PropTypes.string.isRequired,
        numeric: PropTypes.bool,
        onClick: PropTypes.func,
        nosort: PropTypes.bool,
        sortFn: PropTypes.func,
        tooltip: PropTypes.node
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e, this.props.name);
    }

    render() {
        const { cellFormatter, className, name, numeric, onClick,
            nosort, sortFn, tooltip, children, ...otherProps } = this.props;

        const classes = classNames({
            'mdl-data-table__cell--non-numeric': !numeric
        }, className);

        const clickFn = !nosort && onClick ? this.handleClick : null;

        return (
            <th className={classes} onClick={clickFn} {...otherProps}>
                {!!tooltip ? (
                    <Tooltip label={tooltip}>{children}</Tooltip>
                ) : children}
            </th>
        );
    }
}

export default TableHeader;
