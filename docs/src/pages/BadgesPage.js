import React from 'react';
import prismUpgrade from './prismUpgrade';
import { Icon, Badge, DataTable, Grid, Cell } from '../../../';

class BadgesPage extends React.Component {
    render() {
        var gridStyle = {
            width: '40%',
            margin: 'auto',
            textAlign: 'center'
        };

        return (
            <section>
                <h1 className="mdl-typography--display-2">Badges</h1>

                <h5 className="mdl-typography--headline">Demo</h5>

                <Grid style={gridStyle}>
                    <Cell col={6} phone={3}>
                        <Badge text="1">
                            <Icon name="account_box" />
                        </Badge>
                    </Cell>
                    <Cell col={6} phone={3}>
                        <Badge text="♥">
                            <Icon name="account_box" />
                        </Badge>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                    {`
{/* Number badge on icon */}
<Badge text="1">
    <Icon name="account_box" />
</Badge>

{/* Icon badge on icon */}
<Badge text="♥">
    <Icon name="account_box" />
</Badge>
                    `}
                </code></pre>

                <Grid style={gridStyle}>
                    <Cell col={6} phone={3}>
                        <Badge text="4">Inbox</Badge>
                </Cell>
                    <Cell col={6} phone={3}>
                        <Badge text="♥">Mood</Badge>
                    </Cell>
                </Grid>
                <pre><code className="language-jsx">
                {`
{/* Number badge on text */}
<Badge text="4">Inbox</Badge>

{/* Icon badge on text */}
<Badge text="♥">Mood</Badge>
                `}
                </code></pre>

                <h5 className="mdl-typography--headline">Configuration</h5>
                <DataTable
                    style={{margin: 'auto'}}
                    columns={[
                        { name: 'prop',  label: 'Prop' },
                        { name: 'effect',  label: 'Effect' },
                        { name: 'remarks',  label: 'Remarks' }
                    ]}
                    data={[
                        { prop: 'text', effect: 'Assign string value to badge', remarks: 'Required' }
                    ]}
                />
            </section>
        );
    }
}

export default prismUpgrade(BadgesPage);
