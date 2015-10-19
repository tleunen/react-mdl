import React from 'react';
import ReactDOM from 'react-dom';
import Textfield from '../../src/Textfield';

function linkToState(target, property) {
    return event => {
        target.setState({
            [property]: event.target.value
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
        return this.state.textfield7b != this.state.textfield7a ? 'Passwords don\'t match!' : null;
    }

    render() {
        return (
            <form action="#">
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
                    floatingLabel
                    style={{width: '200px'}}
                />

                <p>Numeric Textfield with floating label</p>
                <Textfield
                    value={this.state.textfield4}
                    onChange={linkToState(this, 'textfield4')}
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    error="Input is not a number!"
                    label="Number..."
                    floatingLabel
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
                    expandable
                    expandableIcon="search"
                />

                {/* Note: this is a naive implementation of checking passwords, solely for demo purpose.
                  * A more robust implementation would maybe store the error check result in the state
                  * and share it with both textfields */}
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
                    error={this.checkPasswordConfirmation()}
                />


            </form>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
