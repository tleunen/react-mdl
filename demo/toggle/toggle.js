import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../../src/Checkbox';
import RadioGroup from '../../src/RadioGroup';
import Radio from '../../src/Radio';
import IconToggle from '../../src/IconToggle';
import Switch from '../../src/Switch';

function linkValueToState(target, property) {
    return event => {
        target.setState({
            [property]: event.target.value
        });
    };
}
function linkCheckedToState(target, property) {
    return event => {
        target.setState({
            [property]: event.target.checked
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
            radio2: 'opt2',
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
                <Checkbox label="With ripple" ripple checked={this.state.checkbox1} onChange={linkCheckedToState(this, 'checkbox1')} />
                <Checkbox label="Without ripple" checked={this.state.checkbox2} onChange={linkCheckedToState(this, 'checkbox2')} />

                <p>Radio Button</p>
                <RadioGroup name="demo" value={this.state.radio} onChange={linkValueToState(this, 'radio')}>
                    <Radio value="opt1" ripple>Ripple option</Radio>
                    <Radio value="opt2">Other option</Radio>
                </RadioGroup>

                <p>Radio Button with custom containers</p>
                <RadioGroup container="ul" childContainer="li" name="demo2" value={this.state.radio2} onChange={linkValueToState(this, 'radio2')}>
                    <Radio value="opt1" ripple>Ripple option</Radio>
                    <Radio value="opt2">Other option</Radio>
                </RadioGroup>

                <p>Icon toggle</p>
                <IconToggle ripple id="bold" name="format_bold" checked={this.state.icon1} onChange={linkCheckedToState(this, 'icon1')} />
                <IconToggle id="italic" name="format_italic" checked={this.state.icon2} onChange={linkCheckedToState(this, 'icon2')} />

                <p>Switch</p>
                <Switch ripple id="switch1" checked={this.state.switch1} onChange={linkCheckedToState(this, 'switch1')}>Ripple switch</Switch>
                <Switch id="switch2" checked={this.state.switch2} onChange={linkCheckedToState(this, 'switch2')}>Switch</Switch>
            </div>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
