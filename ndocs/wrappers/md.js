import React, { PropTypes } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
import * as ReactMDL from 'react-mdl';

if (typeof window !== 'undefined') {
    window.React = React;
    window.ReactDOM = ReactDOM;
    // export all ReactMDL into global so we can generate demos
    for (const component in ReactMDL) {
        if (ReactMDL.hasOwnProperty(component)) {
            window[component] = ReactMDL[component];
        }
    }
}

/* eslint-disable no-eval */
class MarkdownWrapper extends React.Component {
    static propTypes = {
        route: PropTypes.object,
        location: PropTypes.object
    };

    componentDidMount() {
        this.initDemos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.initDemos();
        }
    }

    componentWillUnmount() {
        window.componentHandler.downgradeElements(findDOMNode(this));
    }

    initDemos() {
        const demoJs = document.querySelectorAll('.demo-js');
        Array.from(demoJs).forEach(code => eval(code.innerHTML));

        window.componentHandler.upgradeElements(findDOMNode(this));
    }

    render() {
        const post = this.props.route.page.data;

        const title = post.title === config.siteTitle || !post.title
            ? config.siteTitle
            : `${post.title} | ${config.siteTitle}`;

        return (
            <DocumentTitle title={title}>
                <div className="markdown">
                    {post.title && <h1>{post.title}</h1>}
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
            </DocumentTitle>
        );
    }
}

export default MarkdownWrapper;
