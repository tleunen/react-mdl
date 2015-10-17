import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../src/Icon';
import Badge from '../../src/Badge';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <p>Number badge on icon</p>
                <Badge text={1}>
                    <Icon name="account_box" />
                </Badge>
                <p>Icon badge on icon</p>
                <Badge text="♥">
                    <Icon name="account_box" />
                </Badge>

                <p>Number badge</p>
                <Badge text={4}>Inbox</Badge>
                <p>Icon badge</p>
                <Badge text="♥">Mood</Badge>
            </div>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
