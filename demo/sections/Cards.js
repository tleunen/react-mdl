import React from 'react';

import Example from './Example';
import Card, { CardMenu, CardText } from '../../src/Card';
import CardActions from '../../src/Card/CardActions';
import CardTitle from '../../src/Card/CardTitle';
import Button from '../../src/Button';
import Icon from '../../src/Icon';
import IconButton from '../../src/IconButton';
import { Spacer } from '../../src/Layout';

export default ( props ) => (
    <section { ...props }>
        <h3>Cards</h3>
        <Example>
            <Card shadowLevel={ 0 } style={{
                margin: '0 auto',
                width: 512
            }}>
                <CardTitle style={{
                    color: '#fff',
                    background: '#3E4EB8',
                    height: 176
                }}>Welcome</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>
                        Get Started
                    </Button>
                </CardActions>
                <CardMenu style={{
                    color: '#fff'
                }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </Example>

        <Example>
            <Card shadowLevel={ 0 } style={{ width: 320, height: 320 }}>
                <CardTitle expand style={{ background: '#46B6AC', color: '#fff' }}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>
                        View Updates
                    </Button>
                </CardActions>
            </Card>
        </Example>


        <Example>
            <Card shadowLevel={ 0 } style={{
                height: 256,
                width: 256,
                background: `url('assets/images/jump.jpg') center / cover`,
            }}>
                <CardTitle expand />
                <CardActions style={{ color: '#fff', background: 'rgba(0, 0, 0, 0.2)' }}>
                    Image.jpg
                </CardActions>
            </Card>
        </Example>


        <Example>
            <Card shadowLevel={ 0 } style={{
                background: '#3E4EB8',
                color: '#fff',
                height: 256,
                width: 256
            }}>
                <CardTitle expand style={{
                    alignItems: 'flex-start',
                    color: '#fff'
                }}>
                <h4 style={{
                    margin: 0
                }}>
                    Featured event:<br />
                    May 24, 2016<br />
                    7-11pm
                </h4>
                </CardTitle>
                <CardActions border style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    boxSizing: 'border-box',
                    alignItems: 'center',
                }}>
                    <Button colored style={{
                    color: '#fff'
                    }}>
                       Add to Calendar
                    </Button>
                    <Spacer />
                    <Icon name="event" />
                </CardActions>
            </Card>
        </Example>
    </section>
);
