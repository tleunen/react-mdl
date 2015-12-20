import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory, useBasename } from 'history';

import DocApp from './DocApp';
import Pages from '../pages/html';
import pageComponentHelper from './PageComponentHelper';

// export all ReactMDL into global so we can generate demos
import * as ReactMDL from '../../src/';
for(const component in ReactMDL) {
    if(ReactMDL.hasOwnProperty(component)) {
        global[component] = ReactMDL[component];
    }
}

const home = !!Pages.home
    ? (
        <IndexRoute component={() => (
            <section dangerouslySetInnerHTML={{ __html: Pages.home }} />
        )} />
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
    </Router>
), document.getElementById('app'));
