import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory, useBasename } from 'history';

import DocApp from './DocApp';
import Pages from '../pages/html';
import pageComponentHelper from './PageComponentHelper';

import { Article, Text } from './templates';

// export all ReactMDL into global so we can generate demos
import * as ReactMDL from '../../src/';
for(const component in ReactMDL) {
    if(ReactMDL.hasOwnProperty(component)) {
        global[component] = ReactMDL[component];
    }
}

const home = !!Pages.home
    ? (
        <IndexRoute component={pageComponentHelper(Pages.home)} />
    )
    : null;

const routes = Object.keys(Pages).filter(e => e !== 'home').map(page => {
    return <Route key={page} path={page} component={pageComponentHelper(Pages[page])} />;
});

const history = useBasename(createHashHistory)({
    queryKey: false
});

render((
    <Router history={history}>
        <Route path="/" component={DocApp}>
            {home}
            {routes}
        </Route>
        <Route path="templates">
            <Route path="article" component={Article} />
            <Route path="text" component={Text} />
        </Route>
    </Router>
), document.getElementById('app'));
