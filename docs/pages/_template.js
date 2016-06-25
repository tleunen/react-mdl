import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';

import {
    Layout, Header, Content, Navigation,
    Icon, Grid, Cell
} from '../../src/';

// Import styles.
import '../../extra/material.js';
import '../../extra/material.css';
import '../css/prism.css';

const Template = (props) => (
    <Layout fixedHeader style={{ zIndex: 100001 }}>
        <Header title={<Link to={prefixLink('/')} style={{ color: '#fff', textDecoration: 'none' }}>React-MDL</Link>}>
            <Navigation>
                <Link to={prefixLink('/components/')}>Components</Link>
                <Link to={prefixLink('/templates/')}>Templates</Link>
                <a href="https://github.com/tleunen/react-mdl">
                    <Icon name="link" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    GitHub
                </a>
            </Navigation>
        </Header>
        <Content className="mdl-color-text--grey-600 mdl-color--grey-50">
            <Grid noSpacing>
                <Cell col={12}>
                    {props.children}
                </Cell>
            </Grid>
        </Content>
    </Layout>
);

export default Template;
