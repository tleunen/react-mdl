import React from 'react';

import Example from './Example';
import Badge from '../../src/Badge';
import Icon from '../../src/Icon';

export default ( props ) => (
    <section { ...props }>
        <h3>Badges</h3>
        <Example>
            <Badge text="1">
                <Icon name="account_box" />
            </Badge>
            <Badge text="♥">
                <Icon name="account_box" />
            </Badge>
        </Example>

        <Example>
            <Badge text="4">
                Inbox
            </Badge>
            <Badge text="♥">
                Mood
            </Badge>
        </Example>
    </section>
);
