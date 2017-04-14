import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import basicClassCreator from '../utils/basicClassCreator';
import Icon from '../Icon';

const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

export const ChipContact = basicClassCreator('ChipContact', 'mdl-chip__contact', 'span');
export const ChipText = basicClassCreator('ChipText', 'mdl-chip__text', 'span');

export const Chip = (props) => {
    const { className, onClick, onClose, children, ...otherProps } = props;

    const childrenArray = React.Children.toArray(children);
    const contactIndex = childrenArray.findIndex(c => c.type === ChipContact);

    const chipContent = [];

    if (contactIndex >= 0) {
        chipContent.push(
            childrenArray[contactIndex],
            <ChipText key="text">
                {childrenArray
                    .slice(0, contactIndex)
                    .concat(childrenArray.slice(contactIndex + 1))
                }
            </ChipText>
        );
    } else {
        chipContent.push(
            <ChipText key="text">
                {children}
            </ChipText>
        );
    }

    if (onClose) {
        chipContent.push(
            <button key="btn" type="button" className="mdl-chip__action" onClick={onClose}>
                <Icon name="cancel" />
            </button>
        );
    }

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
