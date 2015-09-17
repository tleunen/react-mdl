import React from 'react';
import Textfield from '../../src/Textfield';

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
            textfield1: '',
            textfield2: '',
            textfield3: '',
            textfield4: '',
            textfield5: '',
            textfield6: '',
            textfield7a: '',
            textfield7b: ''
        };
    }

    checkPasswordConfirmation() {
        return this.state.textfield7b != this.state.textfield7a;
    }

    render() {
        return (
            <form action='#'>
                <p>Simple textfield</p>
                <Textfield
                    value={this.state.textfield1}
                    onChange={linkToState(this, 'textfield1')}
                    label="Text..."
                    style={{width: '200px'}}
                />

                <p>Numeric textfield</p>
                <Textfield
                    value={this.state.textfield2}
                    onChange={linkToState(this, 'textfield2')}
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    error="Input is not a number!"
                    label="Number..."
                    style={{width: '200px'}}
                />

                <p>Textfield with floating label</p>
                <Textfield
                    value={this.state.textfield3}
                    onChange={linkToState(this, 'textfield3')}
                    label="Text..."
                    floatingLabel={true}
                    style={{width: '200px'}}
                />

                <p>Numeric Textfield with floating label</p>
                <Textfield
                    value={this.state.textfield4}
                    onChange={linkToState(this, 'textfield4')}
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    error="Input is not a number!"
                    label="Number..."
                    floatingLabel={true}
                />

                <p>Floating Multiline Textfield</p>
                <Textfield
                    value={this.state.textfield5}
                    onChange={linkToState(this, 'textfield5')}
                    label="Text lines..."
                    rows={3}
                    style={{width: '200px'}}
                />

                <p>Expandable Textfield</p>
                <Textfield
                    value={this.state.textfield6}
                    onChange={linkToState(this, 'textfield6')}
                    label="Expandable Input"
                    expandable={true}
                    expandableIcon="search"
                />

                <p>Password confirmation textfields</p>
                <Textfield
                    value={this.state.textfield7a}
                    onChange={linkToState(this, 'textfield7a')}
                    label="Enter password"
                />
                <Textfield
                    value={this.state.textfield7b}
                    onChange={linkToState(this, 'textfield7b')}
                    label="Enter password again"
                    error="Passwords don't match!"
                    invalid={this.checkPasswordConfirmation()}
                />


            </form>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));
