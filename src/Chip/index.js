import React, { PropTypes } from 'react';
import cx from 'classnames';
import basicClassCreator from '../utils/basicClassCreator';
import Icon from '../Icon';

const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

export const ChipContact = basicClassCreator('ChipContact', 'mdl-chip__contact', 'span');

export const Chip = (props) => {
    const { className, onClick, onClose, children, ...otherProps } = props;

    const childrenArray = React.Children.toArray(children);
    const contactIndex = childrenArray.findIndex(c => c.type === ChipContact);

    const chipContent = [
        childrenArray[contactIndex],
        <span key="text" className="mdl-chip__text">
            {childrenArray
                .slice(0, contactIndex)
                .concat(childrenArray.slice(contactIndex + 1))
            }
        </span>,
        onClose && (
            <button key="btn" type="button" className="mdl-chip__action" onClick={onClose}>
                <Icon name="cancel" />
            </button>
        )
    ];

    const elt = onClick ? 'button' : 'span';

    return React.createElement(elt, {
        className: cx('mdl-chip', {
            'mdl-chip--contact': contactIndex > -1,
            'mdl-chip--deletable': !!onClose,
        }, className),
        type: onClick ? 'button' : null,
        onClick,
        ...otherProps
    }, chipContent);
};

Chip.propTypes = propTypes;
