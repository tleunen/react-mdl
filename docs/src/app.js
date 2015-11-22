import React from 'react';
import { findDOMNode } from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import DocApp from './DocApp';
import Pages from '../pages/html';

const home = !!Pages.home
    ? (
        <IndexRoute component={() => (
            <section dangerouslySetInnerHTML={{__html: Pages.home}} />
        )} />
    )
    : null;

const routes = Object.keys(Pages).filter(e => e !== 'home').map(page => {
    class PageComponent extends React.Component {
        componentDidMount() {
            window.componentHandler.upgradeElements(findDOMNode(this));
        }

        componentWillUnmount() {
            window.componentHandler.downgradeElements(findDOMNode(this));
        }
        render() {
            return <section dangerouslySetInnerHTML={{__html: Pages[page]}} />;
        }
    }
    return <Route key={page} path={page} component={PageComponent} />;
});

render((
    <Router history={createHistory()}>
        <Route path="/" component={DocApp}>
            {home}
            {routes}
        </Route>
    </Router>
), document.getElementById('app'));
