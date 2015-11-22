import React from 'react';
import Example from './Example';
import TextField from '../../src/TextField';

export default ( props ) => (
    <section { ...props }>
        <h3>Text Fields</h3>

        <Example>
            <TextField
                label="Text..."
            />
            <TextField
                label="Number..."
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
            />
        </Example>

        <p>Floating labels</p>
        <Example>
            <TextField
                floatingLabel
                label="Text..."
            />
            <TextField
                floatingLabel
                label="Number..."
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
            />
        </Example>

        <p>Multiline</p>
        <Example>
            <TextField
                label="Text..."
                rows={ 3 }
            />
        </Example>

        <p>Expandable</p>
        <Example>
            <TextField
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Example>
    </section>
);
