import React from 'react';

import Example from './Example';

import Checkbox from '../../src/Checkbox';
import RadioGroup from '../../src/RadioGroup';
import Radio from '../../src/Radio';
import Switch from '../../src/Switch';
import IconToggle from '../../src/IconToggle';

export default ( props ) => (
    <section { ...props }>
        <h3>Toggles</h3>
        <Example>
            <Checkbox label="Checkbox" />
            <Checkbox label="Checkbox with ripple" ripple />
        </Example>

        <p>Radio Button</p>
        <Example>
            <RadioGroup name="radio-group-demo">
                <Radio value="opt1">Option</Radio>
                <Radio value="opt2" ripple>Option with ripple</Radio>
            </RadioGroup>
        </Example>

        <p>Radio Button with custom containers</p>
        <Example>
            <RadioGroup
                container="ul"
                childContainer="li"
                name="radio-group-demo2"
            >
                <Radio value="opt1">Option</Radio>
                <Radio value="opt2">Option with ripple</Radio>
            </RadioGroup>
        </Example>

        <p>Icon toggle</p>
        <Example>
            <IconToggle id="bold" name="format_bold" />
            <IconToggle id="italic" name="format_italic" />
        </Example>

        <p>Switch</p>
        <Example>
            <Switch id="switch1">Enable this</Switch>
            <Switch id="switch2">Enable that</Switch>
        </Example>

    </section>
);
