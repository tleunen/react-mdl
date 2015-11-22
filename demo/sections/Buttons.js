import React from 'react';

import Example from './Example';
import Icon from '../../src/Icon';
import Button from '../../src/Button';
import IconButton from '../../src/IconButton';
import FABButton from '../../src/FABButton';

export default ( props ) => (
    <section { ...props }>
        <h3>Buttons</h3>

        <Example>
            <FABButton colored>
                <Icon name="add" />
            </FABButton>
            <FABButton colored ripple>
                <Icon name="add" />
            </FABButton>
        </Example>
        <Example>
            <FABButton>
                <Icon name="add" />
            </FABButton>
            <FABButton ripple>
                <Icon name="add" />
            </FABButton>
            <FABButton disabled>
                <Icon name="add" />
            </FABButton>
        </Example>
        <Example>
            <Button raised>Button</Button>
            <Button raised ripple>Button</Button>
            <Button raised disabled>Button</Button>
        </Example>
        <Example>
            <Button raised colored>Button</Button>
            <Button raised accent>Button</Button>
            <Button raised accent ripple>Button</Button>
        </Example>
        <Example>
            <Button>Button</Button>
            <Button ripple>Button</Button>
            <Button disabled>Button</Button>
        </Example>
        <Example>
            <Button primary colored>Button</Button>
            <Button accent>Button</Button>
        </Example>
        <Example>
            <IconButton name="mood" />
            <IconButton colored name="mood" />
        </Example>
        <Example>
            <FABButton mini>
                <Icon name="add" />
            </FABButton>
            <FABButton colored mini>
                <Icon name="add" />
            </FABButton>
        </Example>
    </section>
);
