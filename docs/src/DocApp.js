import React from 'react';
import { Link } from 'react-router';

import {
    Layout, Header, Drawer, Content, Navigation,
    Icon, Grid, Cell
} from '../../';

class DocApp extends React.Component {
    render() {
        const componentSections = [
            { id: 'badges', label: 'Badges'},
            { id: 'buttons', label: 'Buttons'},
            { id: 'cards', label: 'Cards'},
            { id: 'Layout', label: 'Layout'},
            { id: 'loading', label: 'Loading'},
            { id: 'menus', label: 'Menus'},
            { id: 'sliders', label: 'Sliders'},
            { id: 'toggles', label: 'Toggles'},
            { id: 'tables', label: 'Tables'},
            { id: 'textfields', label: 'Textfields'},
            { id: 'tooltips', label: 'Tooltips'}
        ];

        return (
            <Layout fixedHeader fixedDrawer>
                <Header title="React-MDL">
                    <Navigation>
                        <a href="https://github.com/tleunen/react-mdl">
                            <Icon name="link" style={{marginRight: '8px', verticalAlign: 'middle'}} />
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
