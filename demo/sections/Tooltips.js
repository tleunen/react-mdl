import React from 'react';

import Example from './Example';
import Tooltip from '../../src/Tooltip';
import Icon from '../../src/Icon';

export default ( props ) => (
    <section { ...props }>
        <h3>Tooltips</h3>
        <Example>
            <Tooltip label="Follow">
                <Icon name="add" />
            </Tooltip>
            <Tooltip large label="Print">
                <Icon name="print" />
            </Tooltip>
        </Example>

        <Example>
            <Tooltip
                label={
                    <span>
                        Upload <strong>file.zip</strong>
                    </span>
                }
            >
                <Icon name="cloud_upload" />
            </Tooltip>
            <Tooltip label={
                <span>
                    Share your content<br />
                    via social media
                </span>
            }>
                <Icon name="share" />
            </Tooltip>
        </Example>
    </section>
);
