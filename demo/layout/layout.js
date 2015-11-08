import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Header, Navigation, HeaderRow, HeaderTabs, Drawer, Content } from '../../src/Layout';
import { Tab } from '../../src/Tabs';
import Textfield from '../../src/Textfield';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabDemo1: 3,
            activeTabDemo2: 0
        };
        this._handleChangeDemo1 = this._handleChangeDemo1.bind(this);
        this._handleChangeDemo2 = this._handleChangeDemo2.bind(this);
    }

    _handleChangeDemo1(tabId) {
        this.setState({
            activeTabDemo1: tabId
        });
    }

    _handleChangeDemo2(tabId) {
        this.setState({
            activeTabDemo2: tabId
        });
    }

    _getTabContentDemo1() {
        const text = 'Your content goes here ' + (this.state.activeTabDemo1 + 1);
        return <div className="page-content">{text}</div>;
    }

    _getTabContentDemo2() {
        const text = 'Your content goes here ' + (this.state.activeTabDemo2 + 1);
        return <div className="page-content">{text}</div>;
    }

    render() {
        return (
            <div>
                <p>Uses a transparent header that draws on top of the layout's background</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                        <Header transparent title="Title" style={{color: 'white'}}>
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                <p>No header, and the drawer stays open on larger screens (fixed drawer).</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedDrawer>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                <p>Always shows a header, even in smaller screens.</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader>
                        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                <p>The drawer is always open in large screens. The header is always shown,
  even in small screens.</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader fixedDrawer>
                        <Header title="Title">
                            <Textfield
                                value=""
                                onChange={() => {}}
                                label="Search"
                                expandable
                                expandableIcon="search"
                            />
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                <p>Uses a header that scrolls with the text, rather than staying
  locked at the top</p>
                <div className="big-content" style={{height: '300px', position: 'relative'}}>
                    <Layout>
                        <Header title="Title" scroll>
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                        </Content>
                    </Layout>
                </div>

                <p>Uses a header that contracts as the page scrolls down.</p>
                <div className="big-content" style={{height: '300px', position: 'relative'}}>
                    <Layout>
                        <Header waterfall>
                            <HeaderRow title="Title">
                                <Textfield
                                    value=""
                                    onChange={() => {}}
                                    label="Search"
                                    expandable
                                    expandableIcon="search"
                                />
                            </HeaderRow>
                            <HeaderRow>
                                <Navigation>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                    <a href="">Link</a>
                                </Navigation>
                            </HeaderRow>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                        </Content>
                    </Layout>
                </div>

                <p>Simple header with scrollable tabs.</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader>
                        <Header>
                            <HeaderRow title="Title" />
                            <HeaderTabs activeTab={this.state.activeTabDemo1} onChange={this._handleChangeDemo1}>
                                <Tab>Tab1</Tab>
                                <Tab>Tab2</Tab>
                                <Tab>Tab3</Tab>
                                <Tab>Tab4</Tab>
                                <Tab>Tab5</Tab>
                                <Tab>Tab6</Tab>
                            </HeaderTabs>
                        </Header>
                        <Drawer title="Title" />
                        <Content>
                            {this._getTabContentDemo1()}
                        </Content>
                    </Layout>
                </div>

                <p>Simple header with fixed tabs.</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader fixedTabs>
                        <Header>
                            <HeaderRow title="Title" />
                            <HeaderTabs activeTab={this.state.activeTabDemo2} onChange={this._handleChangeDemo2}>
                                <Tab>Tab1</Tab>
                                <Tab>Tab2</Tab>
                                <Tab>Tab3</Tab>
                            </HeaderTabs>
                        </Header>
                        <Drawer title="Title" />
                        <Content>
                            {this._getTabContentDemo2()}
                        </Content>
                    </Layout>
                </div>

            </div>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
