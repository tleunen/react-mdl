import React from 'react';
import Example from '../Example';

import Checkbox from '../../../lib/Checkbox';
import Radio from '../../../lib/Radio';
import Switch from '../../../lib/Switch';
import IconToggle from '../../../lib/IconToggle';

import RadioGroupExample from './RadioGroupExample';

export default( props ) => (
    <section { ...props }>
        <h3>Toggles</h3>
        <Example>
            <Checkbox label="Checkbox" />
            <Checkbox label="Checkbox with ripple" ripple />
        </Example>

        <p>Radio Button</p>
        <RadioGroupExample
            name="radio-group-demo"
            defaultValue="opt1"
        >
            <Radio value="opt1">Option</Radio>
            <br />
            <Radio value="opt2" ripple>Option with ripple</Radio>
        </RadioGroupExample>

        <p>Radio Button with custom containers</p>
        <RadioGroupExample
            container="ul"
            childContainer="li"
            name="radio-group-demo2"
            defaultValue="opt1"
        >
            <Radio value="opt1">Option</Radio>
            <Radio value="opt2" ripple>Option with ripple</Radio>
        </RadioGroupExample>

        <p>Icon toggle</p>
        <Example>
            <IconToggle id="bold" name="format_bold" />
            <IconToggle id="italic" name="format_italic" ripple />
        </Example>

        <p>Switch</p>
        <Example>
            <Switch id="switch1">Switch</Switch>
            <Switch id="switch2" ripple>Ripple switch</Switch>
        </Example>

    </section>
);
