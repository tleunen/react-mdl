import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import DocApp from './DocApp';
import * as Pages from '../pages/html';
import pageComponentHelper from './PageComponentHelper';
import * as Templates from './templates';

// export all ReactMDL into global so we can generate demos
import * as ReactMDL from '../../src/';
for(const component in ReactMDL) {
    if(ReactMDL.hasOwnProperty(component)) {
        global[component] = ReactMDL[component];
    }
}

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

render((
    <Router history={appHistory}>
        <Route path="/" component={DocApp}>
            {Pages.home && <IndexRoute component={pageComponentHelper(Pages.home)} />}
            {Object.keys(Pages).filter(e => e !== 'home').map(page =>
                <Route key={page} path={page} component={pageComponentHelper(Pages[page])} />
            )}
        </Route>
        <Route path="templates">
            {Object.keys(Templates).map(template =>
                <Route key={template} path={template.toLowerCase()} component={Templates[template]} />
            )}
        </Route>
    </Router>
), document.getElementById('app'));
