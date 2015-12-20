import React from 'react';
import { Link } from 'react-router';
import Pages from '../pages/html';
import {
    Layout, Header, Drawer, Content, Navigation,
    Icon, Grid, Cell
} from '../../src/';

class DocApp extends React.Component {
    render() {
        const componentSections = Object.keys(Pages).filter(e => e !== 'home').map(page => ({
            id: page,
            label: page[0].toUpperCase() + page.slice(1)
        }));

        return (
            <Layout fixedHeader fixedDrawer>
                <Header title="React-MDL">
                    <Navigation>
                        <a href="https://github.com/tleunen/react-mdl">
                            <Icon name="link" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            GitHub
                        </a>
                    </Navigation>
                </Header>
                <Drawer title="Components">
                    <Navigation>
                        {componentSections.map(e => <Link to={e.id} key={e.id}>{e.label}</Link>)}
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
