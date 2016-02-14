import React from 'react';
import { Link } from 'react-router';
import * as Pages from '../pages/html';
import * as Templates from './templates';
import {
    Layout, Header, Drawer, Content, Navigation,
    Icon, Grid, Cell, Spacer
} from '../../src/';

const componentSections = Object.keys(Pages).filter(e => e !== 'home').map(page => ({
    id: page,
    label: page[0].toUpperCase() + page.slice(1)
}));

const templateSections = Object.keys(Templates).map(template => ({
    id: `templates/${template.toLowerCase()}`,
    label: template
}));

class DocApp extends React.Component {
    render() {
        return (
            <Layout fixedHeader fixedDrawer style={{ zIndex: 100001 }}>
                <Header title="React-MDL">
                    <Navigation>
                        <a href="https://github.com/tleunen/react-mdl">
                            <Icon name="link" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            GitHub
                        </a>
                    </Navigation>
                </Header>
                <Drawer>
                    <Navigation>
                        <span>Components</span>
                        {componentSections.map(e => <Link to={e.id} activeClassName="active" key={e.id}>{e.label}</Link>)}
                        <Spacer className="drawer-separator" />
                        <span>Templates</span>
                        {templateSections.map(e => <Link to={e.id} key={e.id}>{e.label}</Link>)}
                    </Navigation>
                </Drawer>
                <Content className="mdl-color-text--grey-600">
                    <Grid>
                        <Cell col={12}>
                            {this.props.children}
                        </Cell>
                    </Grid>
                </Content>
            </Layout>
        );
    }
}

export default DocApp;
