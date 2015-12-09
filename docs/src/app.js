/* eslint no-eval: 0 */

import React from 'react';
import { findDOMNode } from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory, useBasename } from 'history';

import DocApp from './DocApp';
import Pages from '../pages/html';

// export all ReactMDL into global so we can generate demos
import * as ReactMDL from '../../';
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
    class PageComponent extends React.Component {
        componentDidMount() {
            window.componentHandler.upgradeElements(findDOMNode(this));

            const demoJs = document.querySelectorAll('.demo-js');
            Array.from(demoJs).forEach(code => eval(code.innerHTML));
        }

        componentWillUnmount() {
            window.componentHandler.downgradeElements(findDOMNode(this));
        }
        render() {
            return <section dangerouslySetInnerHTML={{ __html: Pages[page] }} />;
        }
    }
    return <Route key={page} path={page} component={PageComponent} />;
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
