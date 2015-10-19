import React from 'react';

import Example from './Example';
import Layout, { Content, Drawer, Header, Spacer, Navigation } from '../../src/Layout';

export default ( props ) => (
    <section { ...props }>
        <h3>Layout</h3>
        <code>// TODO</code>
        <Example description="Transparent header">
          <Layout style={{
            background: 'url(//getmdl.io/assets/demos/transparent.jpg) center / cover'
          }}>
            <Header transparent title="Title" style={{
              color: 'white'
            }}>
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </Example>
        <Example description="Fixed drawer, no header">
          <Layout fixedDrawer>
            <Drawer>
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </Example>

        <Example description="Fixed header">
          <Layout fixedHeader>
            <Header title="Title">
              <Spacer />
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Header>
            <Drawer>
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </Example>

        <Example description="Fixed header and drawer">
          <Layout fixedDrawer fixedHeader>
            <Header title="Title">
              <Spacer />
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Header>
            <Drawer>
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </Example>
    </section>
);
