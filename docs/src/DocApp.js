import React from 'react';
import { Link } from 'react-router';

import {
    Layout, Header, Drawer, Content,
    Icon, Grid, Cell
} from '../../';

class DocApp extends React.Component {
    render() {
        var componentSections = [
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
            <Layout fixedHeader={true} fixedDrawer={true}>
                <Header title="React-MDL">
                    <a href="https://github.com/tleunen/react-mdl">
                        <Icon name="link" style={{marginRight: '8px', verticalAlign: 'middle'}} />
                        GitHub
                    </a>
                </Header>
                <Drawer title="Components">
                    {componentSections.map(e => <Link to={e.id} key={e.id}>{e.label}</Link>)}
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
