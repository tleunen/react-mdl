import React from 'react';
import ReactDOM from 'react-dom';

import Layout, { Drawer, Header, Navigation, Content } from '../lib/Layout';

import Badges from './sections/Badges';
import Buttons from './sections/Buttons';
import Cards from './sections/Cards';
import Layouts from './sections/Layouts';
import Loading from './sections/Loading';
import Menus from './sections/Menus';
import Sliders from './sections/Sliders';
import Toggles from './sections/Toggles';
import Tables from './sections/Tables';
import Textfields from './sections/Textfields';
import Tooltips from './sections/Tooltips';

const App = ( props ) => (
    <Layout fixedHeader fixedDrawer>
        <Header title="react-mdl">
        </Header>
        <Drawer>
            <Navigation>
                <a href="#badges">Badges</a>
                <a href="#buttons">Buttons</a>
                <a href="#cards">Cards</a>
                <a href="#layouts">Layout</a>
                <a href="#loading">Loading</a>
                <a href="#menus">Menus</a>
                <a href="#sliders">Sliders</a>
                <a href="#toggles">Toggles</a>
                <a href="#tables">Tables</a>
                <a href="#text-fields">Text Fields</a>
                <a href="#tooltips">Tooltips</a>
            </Navigation>
        </Drawer>

        <Content style={{ padding: '0 16px' }}>
            <Badges id="badges" />
            <Buttons id="buttons" />
            <Cards id="cards" />
            <Layouts id="layouts" />
            <Loading id="loading" />
            <Menus id="menus" />
            <Sliders id="sliders" />
            <Toggles id="toggles" />
            <Tables id="tables" />
            <Textfields id="textfields" />
            <Tooltips id="tooltips" />
        </Content>
    </Layout>
);

ReactDOM.render(
    <App />,
    document.querySelector( '#app' )
);
