import React from 'react';
import prismUpgrade from './prismUpgrade';
import {
    Card, CardTitle, CardText, CardActions,
    CardMenu, Button, IconButton, Icon,
    DataTable
} from '../../../';

class CardsPage extends React.Component {
    render() {
        return (
            <section>
                <h1 className="mdl-typography--display-2">Cards</h1>

                <h5 className="mdl-typography--headline">Demo</h5>

                <Card shadowLevel={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border={true}>
                        <Button colored={true}>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>


                <pre><code className="language-jsx">
                    {`
<Card shadowLevel={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border={true}>
        <Button colored={true}>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
                    `}
                </code></pre>


                <Card shadowLevel={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand={true} style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border={true}>
                        <Button colored={true}>View Updates</Button>
                    </CardActions>
                </Card>

                <pre><code className="language-jsx">
                    {`
<Card shadowLevel={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand={true} style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border={true}>
        <Button colored={true}>View Updates</Button>
    </CardActions>
</Card>
                    `}
                </code></pre>


                <Card shadowLevel={0} style={{width: '256px', height: '256px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
                    <CardTitle expand={true} />
                    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                            Image.jpg
                        </span>
                    </CardActions>
                </Card>

                <pre><code className="language-jsx">
                    {`
<Card shadowLevel={0} style={{width: '256px', height: '256px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
    <CardTitle expand={true} />
    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            Image.jpg
        </span>
    </CardActions>
</Card>
                    `}
                </code></pre>

                <Card shadowLevel={0} style={{width: '256px', height: '256px', background: '#3E4EB8', margin: 'auto'}}>
                    <CardTitle expand={true} style={{alignItems: 'flex-start', color: '#fff'}}>
                        <h4 style={{marginTop: '0'}}>
                            Featured event:<br />
                            May 24, 2016<br />
                            7-11pm
                        </h4>
                    </CardTitle>
                    <CardActions border={true} style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                        <Button colored={true} style={{color: '#fff'}}>Add to Calendar</Button>
                        <div className="mdl-layout-spacer"></div>
                        <Icon name="event" />
                    </CardActions>
                </Card>

                <pre><code className="language-jsx">
                {`
<Card shadowLevel={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
    <CardTitle expand={true} style={{alignItems: 'flex-start', color: '#fff'}}>
        <h4 style={{marginTop: '0'}}>
            Featured event:<br />
            May 24, 2016<br />
            7-11pm
        </h4>
    </CardTitle>
    <CardActions border={true} style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
        <Button colored={true} style={{color: '#fff'}}>Add to Calendar</Button>
        <div className="mdl-layout-spacer"></div>
        <Icon name="event" />
    </CardActions>
</Card>
                `}
                </code></pre>

                <h5 className="mdl-typography--headline">Configuration</h5>
                <DataTable
                    style={{margin: 'auto'}}
                    columns={[
                        { name: 'prop',  label: 'Prop' },
                        { name: 'type',  label: 'Type' },
                        { name: 'effect',  label: 'Effect' },
                        { name: 'remarks',  label: 'Remarks' }
                    ]}
                    data={[
                        { prop: 'border', type: 'Boolean', effect: 'Applies a border on top of the container', remarks: 'Optional. Works only with "CardActions"' },
                        { prop: 'expand', type: 'Boolean', effect: 'Expand the size to take the available space', remarks: 'Optional. Works only with "CardTitle"' },
                        { prop: 'shadowLevel', type: 'Number', effect: 'Defines the shadow depth', remarks: 'Optional, Default 0. Must be between 0 and 4' }
                    ]}
                />
            </section>
        );
    }
}

export default prismUpgrade(CardsPage);
