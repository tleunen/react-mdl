import React from 'react';
import Checkbox from '../../src/Checkbox';
import RadioGroup from '../../src/RadioGroup';
import Radio from '../../src/Radio';
import IconToggle from '../../src/IconToggle';
import Switch from '../../src/Switch';

function linkToState(target, property) {
    return value => {
        target.setState({
            [property]: value
        });
    };
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox1: true,
            checkbox2: false,
            radio: 'opt1',
            icon1: true,
            icon2: false,
            switch1: true,
            switch2: false
        };
    }

    render() {
        return (
            <div>
                <p>Checkbox</p>
                <Checkbox label="Checkbox" checked={this.state.checkbox1} onChange={linkToState(this, 'checkbox1')} />
                <Checkbox label="Checkbox" checked={this.state.checkbox2} onChange={linkToState(this, 'checkbox2')} />

                <p>Radio Button</p>
                <RadioGroup name="demo" value={this.state.radio} onChange={linkToState(this, 'radio')}>
                    <Radio value="opt1">Option 1</Radio>
                    <Radio value="opt2">Option 2</Radio>
                </RadioGroup>

                <p>Radio Button with custom containers</p>
                <RadioGroup container="ul" childContainer="li" name="demo2" value={this.state.radio} onChange={linkToState(this, 'radio')}>
                    <Radio value="opt1">Option 1</Radio>
                    <Radio value="opt2">Option 2</Radio>
                </RadioGroup>

                <p>Icon toggle</p>
                <IconToggle id="bold" name="format_bold" checked={this.state.icon1} onChange={linkToState(this, 'icon1')} />
                <IconToggle id="italic" name="format_italic" checked={this.state.icon2} onChange={linkToState(this, 'icon2')} />

                <p>Switch</p>
                <Switch id="switch1" checked={this.state.switch1} onChange={linkToState(this, 'switch1')}>Enable this</Switch>
                <Switch id="switch2" checked={this.state.switch2} onChange={linkToState(this, 'switch2')}>Enable that</Switch>
            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));
