import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../src/Icon';
import Badge from '../../src/Badge';
import Textfield from '../../src/Textfield';

class Demo extends React.Component {
    state = {
        messages: '0'
    }

    getChangeHandler(prop) {
        return value => this.setState({ [prop]: value });
    }

    render() {
        const { messages } = this.state;

        return (
            <div>
                <p>Number badge on icon</p>
                <Badge text="1">
                    <Icon name="account_box" />
                </Badge>
                <p>Icon badge on icon</p>
                <Badge text="♥">
                    <Icon name="account_box" />
                </Badge>

                <p>Number badge</p>
                <Badge text="4">Inbox</Badge>
                <p>Icon badge</p>
                <Badge text="♥">Mood</Badge>

                <p>Change badge text dynamically:</p>
                <Textfield
                    label="Message count"
                    value={messages}
                    floatingLabel={true}
                    onChange={this.getChangeHandler('messages')}
                />
                <Badge text={messages}>
                    <Icon name="message" />
                </Badge>
            </div>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
