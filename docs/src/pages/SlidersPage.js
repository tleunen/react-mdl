import React from 'react';
import prismUpgrade from './prismUpgrade';
import { DataTable, Grid, Cell, Slider } from '../../../';

function linkToState(target, property) {
    return value => {
        target.setState({
            [property]: value
        });
    };
}

class SlidersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1: 0,
            slider2: 25
        };
    }

    render() {
        var gridStyle = {
            width: '40%',
            margin: 'auto',
            textAlign: 'center'
        };

        return (
            <section>
                <h1 className="mdl-typography--display-2">Sliders</h1>

                <h5 className="mdl-typography--headline">Demo</h5>

                <Grid style={gridStyle}>
                    <Cell col={6} phone={3}>
                        <p>Default slider</p>
                        <Slider min={0} max={100} value={this.state.slider1} onChange={linkToState(this, 'slider1')} />
                    </Cell>
                    <Cell col={6} phone={3}>
                        <p>with initial value</p>
                        <Slider min={0} max={100} value={this.state.slider2} onChange={linkToState(this, 'slider2')} />
                    </Cell>
                </Grid>

                <pre><code className="language-jsx">
                {`
{/* Default slider */}
<Slider min={0} max={100} value={0} onChange={this._handleSliderChange} />

{/* Slider with initial value */}
<Slider min={0} max={100} value={25} onChange={this._handleSliderChange} />
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
                        { prop: 'max', type: 'Number', effect: 'Set the maximum value', remarks: 'Required' },
                        { prop: 'min', type: 'Number', effect: 'Set the minimum value', remarks: 'Required' },
                        { prop: 'onChange', type: 'Function', effect: 'Callback taking 1 parameter with the new value', remarks: 'Required' },
                        { prop: 'value', type: 'Number', effect: 'Set the initial/current value', remarks: 'Required' }
                    ]}
                />
            </section>
        );
    }
}

export default prismUpgrade(SlidersPage);
