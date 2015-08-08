import React from 'react';
import Tabs, { Tab } from '../../src/Tabs';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(tabId) {
        this.setState({
            activeTab: tabId
        });
    }

    _getTabContent() {
        var list = [];
        switch(this.state.activeTab) {
            case 1:
                list.push('Tywin', 'Cersei', 'Jamie', 'Tyrion');
                break;
            case 2:
                list.push('Viserys', 'Daenerys');
                break;
            default:
                list.push('Eddard', 'Catelyn', 'Robb', 'Sansa', 'Brandon', 'Arya', 'Rickon');
                break;
        }

        return (
            <ul>
                {list.map(e => <li key={e}>{e}</li>)}
            </ul>
        );
    }

    render() {
        return (
            <div style={{display: 'inline-block', paddingLeft: '30%'}}>
                <Tabs activeTab={this.state.activeTab} onChange={this._handleChange}>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section>
                    {this._getTabContent()}
                </section>
            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));
