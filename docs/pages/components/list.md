---
title: List
---

## Demo

### Simple list

```jsx_demo
<List>
  <ListItem>Bryan Cranston</ListItem>
  <ListItem>Aaron Paul</ListItem>
  <ListItem>Bob Odenkirk</ListItem>
</List>
```

### Simple list with icon

```jsx_demo
<List>
  <ListItem>
    <ListItemContent icon="person">Bryan Cranston</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="person">Aaron Paul</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
  </ListItem>
</List>
```

### List with avatar and simple action

```jsx_demo
<List style={{width: '300px'}}>
  <ListItem>
    <ListItemContent avatar="person">Bryan Cranston</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="person">Aaron Paul</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="person">Bob Odenkirk</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
</List>
```

### List with avatar and complex action

```jsx_demo
<List style={{width: '300px'}}>
  <ListItem>
    <ListItemContent avatar="person">Bryan Cranston</ListItemContent>
    <ListItemAction>
      <Checkbox defaultChecked />
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="person">Aaron Paul</ListItemContent>
    <ListItemAction>
      <Radio value={1} />
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="person">Bob Odenkirk</ListItemContent>
    <ListItemAction>
      <Switch defaultChecked />
    </ListItemAction>
  </ListItem>
</List>
```

### Two line list

```jsx_demo
<List style={{width: '300px'}}>
  <ListItem twoLine>
    <ListItemContent avatar="person" subtitle="62 episodes">Bryan Cranston</ListItemContent>
    <ListItemAction info="Actor">
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem twoLine>
    <ListItemContent avatar="person" subtitle="62 episodes">Aaron Paul</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem twoLine>
    <ListItemContent avatar="person" subtitle="62 episodes">Bob Odenkirk</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
</List>
```

### Three line list

```jsx_demo
<List style={{width: '650px'}}>
  <ListItem threeLine>
    <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem threeLine>
    <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem threeLine>
    <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
</List>
```

## Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| ListItem  | twoLine    | Boolean   | Set item to have 2 lines  | Optional. Cannot be set alongside `threeline` |
| ListItem  | threeLine  | Boolean   | Set item to have 3 lines  | Optional. Cannot be set alongside `twoLine` |
| ListItemContent  | avatar    | string, Element   | Set the item left avatar  | Optional |
| ListItemContent  | icon    | string, Element   | Set the item left icon  | Optional |
| ListItemContent  | subtitle    | string   | Set the item subtitle  | Optional |
| ListItemAction  | info    | string   | Set a small header above the action | Optional |
