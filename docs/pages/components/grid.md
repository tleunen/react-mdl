---
title: Grid
---

## Demo

```jsx_demo
<div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
    </Grid>
    <Grid className="demo-grid-1">
        <Cell col={4}>4</Cell>
        <Cell col={4}>4</Cell>
        <Cell col={4}>4</Cell>
    </Grid>
    <Grid className="demo-grid-2">
        <Cell col={6}>6</Cell>
        <Cell col={4}>4</Cell>
        <Cell col={2}>2</Cell>
    </Grid>
    <Grid className="demo-grid-3">
        <Cell col={6} tablet={8}>6 (8 tablet)</Cell>
        <Cell col={4} tablet={6}>4 (6 tablet)</Cell>
        <Cell col={2} phone={4}>2 (4 phone)</Cell>
    </Grid>
</div>
```

#### Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| Grid      | component    | String,  Element,  Function   | Specify the custom component to use to render the grid | Optional. Default 'div' |
| Grid      | noSpacing    | Boolean    | Removes the margins between the cells. | Optional |
| Grid      | shadow       | Number    | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |
| Cell      | align        | String[top, middle, bottom, stretch]    | Set the cell alignment | Optional |
| Cell      | col          | Number[1..12]    | Set the column size | Required |
| Cell      | component    | String,  Element,  Function   | Specify the custom component to use to render the cell | Optional. Default 'div' |
| Cell      | hideDesktop  | Boolean    | Hide the cell in desktop mode | Optional |
| Cell      | hidePhone    | Boolean    | Hide the cell in phone mode | Optional |
| Cell      | hideTablet   | Boolean    | Hide the cell in tablet mode | Optional |
| Cell      | offset       | Number[1..7]    | Adds N columns of whitespace before the cell | Optional |
| Cell      | offsetDesktop| Number[1..7]    | Adds N columns of whitespace before the cell in desktop mode | Optional |
| Cell      | offsetPhone  | Number[1..7]    | Adds N columns of whitespace before the cell in phone mode | Optional |
| Cell      | offsetTablet | Number[1..7]    | Adds N columns of whitespace before the cell in tablet mode | Optional |
| Cell      | phone        | Number[1..12]    | Set the column size in phone mode | Optional |
| Cell      | tablet       | Number[1..12]    | Set the column size in tablet mode | Optional |
| Cell      | shadow       | Number    | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |
