---
title: Tabs
---

## Demo

```jsx_demo_class
// Simple header with scrollable tabs
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>    
        );
    }
}
```

#### Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| Tabs      | activeTab    | Number    | Set the active tab  | Optional, default 0 |
| Tabs      | onChange     | Function  | Set the change callback | Optional |
| Tabs      | ripple       | Boolean   | Applies ripples effect on tabs | Optional |
| Tabs      | tabBarProps  | Object    | Pass Props to the TabBar Element | Optional |
