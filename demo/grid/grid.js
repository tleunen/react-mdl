import React from 'react';
import ReactDOM from 'react-dom';
import Grid, { Cell } from '../../src/Grid';

class Demo extends React.Component {
    render() {
        return (
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
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
