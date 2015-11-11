import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import DocApp from './DocApp';
import {
    HomePage, BadgesPage, ButtonsPage, CardsPage,
    DataTablesPage, SlidersPage
} from './pages/';

render((
    <Router history={createHistory()}>
        <Route path="/" component={DocApp}>
            <IndexRoute component={HomePage} />
            <Route path="badges" component={BadgesPage} />
            <Route path="buttons" component={ButtonsPage} />
            <Route path="cards" component={CardsPage} />
            <Route path="layout" component={BadgesPage} />
            <Route path="loading" component={BadgesPage} />
            <Route path="menus" component={BadgesPage} />
            <Route path="sliders" component={SlidersPage} />
            <Route path="toggles" component={BadgesPage} />
            <Route path="tables" component={DataTablesPage} />
            <Route path="textfields" component={BadgesPage} />
            <Route path="tooltips" component={BadgesPage} />
        </Route>
    </Router>
), document.getElementById('app'));
