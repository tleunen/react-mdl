import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../src/Icon';
import Tooltip from '../../src/Tooltip';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <p>Simple tooltip</p>
                <Tooltip label="Follow">
                    <Icon name="add" />
                </Tooltip>

                <p>Large Tooltip</p>
                <Tooltip label="Print" large={true}>
                    <Icon name="print" />
                </Tooltip>


                <p>Rich Tooltip</p>
                <Tooltip label={<span>Upload <strong>file.zip</strong></span>}>
                    <Icon name="cloud_upload" />
                </Tooltip>

                <p>Multiline Tooltip</p>
                <Tooltip label={<span>Share your content<br />via social media</span>}>
                    <Icon name="share" />
                </Tooltip>
            </div>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
