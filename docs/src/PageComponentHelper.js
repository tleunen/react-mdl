import React from 'react';
import { findDOMNode } from 'react-dom';

/* eslint no-eval: 0 */
export default (html) => {
    return class PageComponent extends React.Component {
        componentDidMount() {
            window.componentHandler.upgradeElements(findDOMNode(this));

            const demoJs = document.querySelectorAll('.demo-js');
            Array.from(demoJs).forEach(code => eval(code.innerHTML));
        }

        componentWillUnmount() {
            window.componentHandler.downgradeElements(findDOMNode(this));
        }

        render() {
            return <section dangerouslySetInnerHTML={{ __html: html }} />;
        }
    };
};
