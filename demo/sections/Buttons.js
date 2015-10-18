import React from 'react';

import Example from './Example';
import Icon from '../../src/Icon';
import Button from '../../src/Button';
import IconButton from '../../src/IconButton';
import FABButton from '../../src/FABButton';

let Colored = () => (
    <Example>
        <FABButton colored>
            <Icon name="add" />
        </FABButton>
        <FABButton colored ripple={ false }>
            <Icon name="add" />
        </FABButton>
    </Example>
);
let FAB = () => (
    <Example>
        <FABButton>
            <Icon name="add" />
        </FABButton>
        <FABButton ripple={ false }>
            <Icon name="add" />
        </FABButton>
        <FABButton disabled>
            <Icon name="add" />
        </FABButton>
    </Example>
);

let Raised = () => (
    <Example>
        <Button raised>Button</Button>
        <Button raised ripple={ false }>Button</Button>
        <Button raised disabled>Button</Button>
    </Example>
);

let RaisedColors = () => (
    <Example>
        <Button raised colored>Button</Button>
        <Button raised accent>Button</Button>
        <Button raised accent ripple={ false }>Button</Button>
    </Example>
);

let Flat = () => (
    <Example>
        <Button>Button</Button>
        <Button ripple={ false }>Button</Button>
        <Button disabled>Button</Button>
    </Example>
);

let FlatColors = () => (
    <Example>
        <Button primary colored>Button</Button>
        <Button accent>Button</Button>
    </Example>
);

let Icons = () => (
    <Example>
        <IconButton name="mood" />
        <IconButton colored name="mood" />
    </Example>
);

let FABMini = () => (
    <Example>
        <FABButton mini>
            <Icon name="add" />
        </FABButton>
        <FABButton colored mini>
            <Icon name="add" />
        </FABButton>
    </Example>
);

export default ( props ) => (
    <section { ...props }>
        <h3>Buttons</h3>

        <Colored />
        <FAB />
        <Raised />
        <RaisedColors />
        <Flat />
        <FlatColors />
        <Icons />
        <FABMini />
    </section>
);
