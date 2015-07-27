import React from 'react';
import Button from '../../src/Button';
import FABButton from '../../src/FABButton';
import IconButton from '../../src/IconButton';
import Icon from '../../src/Icon';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <h1>Colored FAB Button</h1>
                <p>Colored FAB button</p>
                <FABButton colored={true} ripple={false}>
                    <Icon name="add" />
                </FABButton>
                <p>Colored FAB button with ripple</p>
                <FABButton colored={true}>
                    <Icon name="add" />
                </FABButton>

                <h1>FAB Button</h1>
                <p>FAB Button</p>
                <FABButton ripple={false}>
                    <Icon name="add" />
                </FABButton>
                <p>FAB Button with ripple</p>
                <FABButton>
                    <Icon name="add" />
                </FABButton>
                <p>Disabled FAB Button</p>
                <FABButton disabled={true}>
                    <Icon name="add" />
                </FABButton>


                <h1>Raised Button</h1>
                <p>Raised button</p>
                <Button raised={true} ripple={false}>Button</Button>
                <p>Raised button with ripple</p>
                <Button raised={true}>Button</Button>
                <p>Raised disabled button</p>
                <Button raised={true} disabled={true}>Button</Button>

                <h1>Colored Raised Button</h1>
                <p>Raised button</p>
                <Button raised={true} colored={true} ripple={false}>Button</Button>
                <p>Accent-colored raised button</p>
                <Button raised={true} accent={true} ripple={false}>Button</Button>
                <p>Accent-colored raised button with ripple</p>
                <Button raised={true} accent={true}>Button</Button>

                <h1>Flat button</h1>
                <p>Flat button</p>
                <Button ripple={false}>Button</Button>
                <p>Flat button with ripple</p>
                <Button>Button</Button>
                <p>Disabled Flat button</p>
                <Button disabled={true}>Button</Button>

                <h1>Colored Flat button</h1>
                <p>Primary-colored Flat button</p>
                <Button primary={true} ripple={false}>Button</Button>
                <p>Accent-colored flat button</p>
                <Button accent={true} ripple={false}>Button</Button>

                <h1>Icon Button</h1>
                <p>Icon button</p>
                <IconButton name="mood" ripple={false} />
                <p>Colored Icon button</p>
                <IconButton name="mood" colored={true} ripple={false} />

                <h1>Mini FAB Button</h1>
                <p>Mini FAB Button</p>
                <FABButton mini={true}>
                    <Icon name="add" />
                </FABButton>
                <p>Colored Mini FAB Button</p>
                <FABButton mini={true} colored={true}>
                    <Icon name="add" />
                </FABButton>
            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));
