import React from 'react';
import Layout, { Header, HeaderRow, HeaderTabs, Drawer, Content } from '../../src/layout/Layout';
import Textfield from '../../src/Textfield';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <p>Uses a transparent header that draws on top of the layout's background</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                        <Header transparent={true} title="Title" style={{color: 'white'}}>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Header>
                        <Drawer title="Title">
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                <p>No header, and the drawer stays open on larger screens (fixed drawer).</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedDrawer={true}>
                        <Drawer title="Title">
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                <p>Always shows a header, even in smaller screens.</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader={true}>
                        <Header title="Title">
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Header>
                        <Drawer title="Title">
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                <p>The drawer is always open in large screens. The header is always shown,
  even in small screens.</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader={true} fixedDrawer={true}>
                        <Header title="Title">
                            <Textfield
                                value=''
                                onChange={() => {}}
                                label="Search"
                                expandable={true}
                                expandableIcon="search"
                            />
                        </Header>
                        <Drawer title="Title">
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

                <p>Uses a header that scrolls with the text, rather than staying
  locked at the top</p>
                <div className="big-content" style={{height: '300px', position: 'relative'}}>
                    <Layout>
                        <Header title="Title" scroll={true}>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Header>
                        <Drawer title="Title">
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                        </Content>
                    </Layout>
                </div>

                <p>Uses a header that contracts as the page scrolls down.</p>
                <div className="big-content" style={{height: '300px', position: 'relative'}}>
                    <Layout>
                        <Header waterfall={true}>
                            <HeaderRow title="Title">
                                <Textfield
                                    value=''
                                    onChange={() => {}}
                                    label="Search"
                                    expandable={true}
                                    expandableIcon="search"
                                />
                            </HeaderRow>
                            <HeaderRow>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                                <a href="">Link</a>
                            </HeaderRow>
                        </Header>
                        <Drawer title="Title">
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                        </Content>
                    </Layout>
                </div>

                <p>Simple header with scrollable tabs.</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader={true}>
                        <Header>
                            <HeaderRow title="Title" />
                            <HeaderTabs>
                                <a href="#scroll-tab-1" className="is-active">Tab1</a>
                                <a href="#scroll-tab-2">Tab2</a>
                                <a href="#scroll-tab-3">Tab3</a>
                                <a href="#scroll-tab-4">Tab4</a>
                                <a href="#scroll-tab-5">Tab5</a>
                                <a href="#scroll-tab-6">Tab6</a>
                            </HeaderTabs>
                        </Header>
                        <Drawer title="Title" />
                        <Content>
                            <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
                              <div className="page-content">Your content goes here 1</div>
                            </section>
                            <section className="mdl-layout__tab-panel" id="scroll-tab-2">
                              <div className="page-content">Your content goes here 2</div>
                            </section>
                            <section className="mdl-layout__tab-panel" id="scroll-tab-3">
                              <div className="page-content">Your content goes here 3</div>
                            </section>
                            <section className="mdl-layout__tab-panel" id="scroll-tab-4">
                              <div className="page-content">Your content goes here 4</div>
                            </section>
                            <section className="mdl-layout__tab-panel" id="scroll-tab-5">
                              <div className="page-content">Your content goes here 5</div>
                            </section>
                            <section className="mdl-layout__tab-panel" id="scroll-tab-6">
                              <div className="page-content">Your content goes here 6</div>
                            </section>
                        </Content>
                    </Layout>
                </div>

                <p>Simple header with fixed tabs.</p>
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader={true} fixedTabs={true}>
                        <Header>
                            <HeaderRow title="Title" />
                            <HeaderTabs>
                                <a href="#fixed-tab-1" className="is-active">Tab1</a>
                                <a href="#fixed-tab-2">Tab2</a>
                                <a href="#fixed-tab-3">Tab3</a>
                            </HeaderTabs>
                        </Header>
                        <Drawer title="Title" />
                        <Content>
                            <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
                              <div className="page-content">Your content goes here 1</div>
                            </section>
                            <section className="mdl-layout__tab-panel" id="fixed-tab-2">
                              <div className="page-content">Your content goes here 2</div>
                            </section>
                            <section className="mdl-layout__tab-panel" id="fixed-tab-3">
                              <div className="page-content">Your content goes here 3</div>
                            </section>
                        </Content>
                    </Layout>
                </div>

            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));
