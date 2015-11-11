import React from 'react';
import prismUpgrade from './prismUpgrade';
import {
    Icon, Button, FABButton, IconButton,
    DataTable, Grid, Cell
} from '../../../';

class ButtonsPage extends React.Component {
    render() {
        const gridStyle = {
            width: '40%',
            margin: 'auto',
            textAlign: 'center'
        };

        return (
            <section>
                <h1 className="mdl-typography--display-2">Buttons</h1>

                <h5 className="mdl-typography--headline">Demo</h5>

                <Grid style={gridStyle}>
                    <Cell col={6} phone={3}>
                        <p>Colored FAB</p>
                        <FABButton colored>
                            <Icon name="add" />
                        </FABButton>
                    </Cell>
                    <Cell col={6} phone={3}>
                        <p>with ripple</p>
                        <FABButton colored ripple>
                            <Icon name="add" />
                        </FABButton>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* Colored FAB button */}
<FABButton colored>
    <Icon name="add" />
</FABButton>

{/* Colored FAB button with ripple */}
<FABButton colored ripple>
    <Icon name="add" />
</FABButton>
                    `}
                </code></pre>

                <Grid style={gridStyle}>
                    <Cell col={4} phone={3}>
                        <p>Plain FAB</p>
                        <FABButton>
                            <Icon name="add" />
                        </FABButton>
                    </Cell>
                    <Cell col={4} phone={3}>
                        <p>with ripple</p>
                        <FABButton ripple>
                            <Icon name="add" />
                        </FABButton>
                    </Cell>
                    <Cell col={4} phone={3}>
                        <p>disabled</p>
                        <FABButton disabled>
                            <Icon name="add" />
                        </FABButton>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* FAB button */}
<FABButton>
    <Icon name="add" />
</FABButton>

{/* FAB button with ripple */}
<FABButton ripple>
    <Icon name="add" />
</FABButton>

{/* Disabled FAB button */}
<FABButton disabled>
    <Icon name="add" />
</FABButton>
                    `}
                </code></pre>


                <Grid style={gridStyle}>
                    <Cell col={6} phone={3}>
                        <p>Mini FAB</p>
                        <FABButton mini>
                            <Icon name="add" />
                        </FABButton>
                    </Cell>
                    <Cell col={6} phone={3}>
                        <p>Colored mini fab</p>
                        <FABButton mini colored>
                            <Icon name="add" />
                        </FABButton>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* Mini FAB button */}
<FABButton mini>
    <Icon name="add" />
</FABButton>

{/* Colored Mini FAB button */}
<FABButton mini colored>
    <Icon name="add" />
</FABButton>
                    `}
                </code></pre>


                <Grid style={gridStyle}>
                    <Cell col={4} phone={3}>
                        <p>Raised Button</p>
                        <Button raised>Button</Button>
                    </Cell>
                    <Cell col={4} phone={3}>
                        <p>with ripple</p>
                        <Button raised ripple>Button</Button>
                    </Cell>
                    <Cell col={4} phone={3}>
                        <p>disabled</p>
                        <Button raised disabled>Button</Button>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* Raised button */}
<Button raised>Button</Button>

{/* Raised button with ripple */}
<Button raised ripple>Button</Button>

{/* Disabled Raised button */}
<Button raised disabled>Button</Button>
                    `}
                </code></pre>

                <Grid style={gridStyle}>
                    <Cell col={4} phone={3}>
                        <p>Colored Button</p>
                        <Button raised colored>Button</Button>
                    </Cell>
                    <Cell col={4} phone={3}>
                        <p>Accent colored</p>
                        <Button raised accent>Button</Button>
                    </Cell>
                    <Cell col={4} phone={3}>
                        <p>with ripple</p>
                        <Button raised accent ripple>Button</Button>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* Colored Raised button */}
<Button raised colored>Button</Button>

{/* Accent-colored button without ripple */}
<Button raised accent>Button</Button>

{/* Accent-colored button with ripple */}
<Button raised accent ripple>Button</Button>
                    `}
                </code></pre>


                <Grid style={gridStyle}>
                    <Cell col={4} phone={3}>
                        <p>Flat Button</p>
                        <Button>Button</Button>
                    </Cell>
                    <Cell col={4} phone={3}>
                        <p>with ripple</p>
                        <Button ripple>Button</Button>
                    </Cell>
                    <Cell col={4} phone={3}>
                        <p>disabled</p>
                        <Button disabled>Button</Button>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* Flat button */}
<Button>Button</Button>

{/* Flat button with ripple */}
<Button ripple>Button</Button>

{/* Disabled flat button */}
<Button disabled>Button</Button>
                    `}
                </code></pre>


                <Grid style={gridStyle}>
                    <Cell col={6} phone={3}>
                        <p>Primary colored flat button</p>
                        <Button primary>Button</Button>
                    </Cell>
                    <Cell col={6} phone={3}>
                        <p>Accent-colored flat button</p>
                        <Button accent>Button</Button>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* Primary colored flat button */}
<Button primary>Button</Button>

{/* Accent-colored flat button */}
<Button accent>Button</Button>
                    `}
                </code></pre>

                <Grid style={gridStyle}>
                    <Cell col={6} phone={3}>
                        <p>Icon button</p>
                        <IconButton name="mood" />
                    </Cell>
                    <Cell col={6} phone={3}>
                        <p>Colored</p>
                        <IconButton name="mood" colored />
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* Icon button */}
<IconButton name="mood" />

{/* Colored Icon button */}
<IconButton name="mood" colored />
                    `}
                </code></pre>


                <h5 className="mdl-typography--headline">Configuration</h5>
                <DataTable
                    style={{margin: 'auto'}}
                    columns={[
                        { name: 'prop', label: 'Prop' },
                        { name: 'type', label: 'Type' },
                        { name: 'effect', label: 'Effect' },
                        { name: 'remarks', label: 'Remarks' }
                    ]}
                    data={[
                        { prop: 'accent', type: 'Boolean', effect: 'Applies "accent" colors', remarks: 'Optional' },
                        { prop: 'colored', type: 'Boolean', effect: 'Applies "colored" colors', remarks: 'Optional' },
                        { prop: 'mini', type: 'Boolean', effect: 'Set the button as "mini"', remarks: 'Optional, works only with "FABButton"' },
                        { prop: 'name', type: 'String', effect: 'Set the icon name"', remarks: 'Optional, works only with "IconButton"' },
                        { prop: 'primary', type: 'Boolean', effect: 'Applies "primary" colors', remarks: 'Optional' },
                        { prop: 'raised', type: 'Boolean', effect: 'Applies "raised" button style', remarks: 'Optional, doesn\'t work with "FABButton"' },
                        { prop: 'ripple', type: 'Boolean', effect: 'Applies "ripple" click effect', remarks: 'Optional, "true" by default' }
                    ]}
                />
            </section>
        );
    }
}

export default prismUpgrade(ButtonsPage);
