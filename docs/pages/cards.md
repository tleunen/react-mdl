# Cards

## Demo

```jsx
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
```

```jsx
<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card>
```

```jsx
<Card shadow={0} style={{width: '256px', height: '256px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
    <CardTitle expand />
    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            Image.jpg
        </span>
    </CardActions>
</Card>
```

```jsx
<Card shadow={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
    <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
        <h4 style={{marginTop: '0'}}>
            Featured event:<br />
            May 24, 2016<br />
            7-11pm
        </h4>
    </CardTitle>
    <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
        <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
        <div className="mdl-layout-spacer"></div>
        <Icon name="event" />
    </CardActions>
</Card>
```

## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| border       | Boolean   | Applies a border on top of the container  | Optional. Works only with "CardActions" |
| expand       | Boolean   | Expand the size to take the available space | Optional. Works only with "CardTitle" |
| shadow       | Number    | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |
