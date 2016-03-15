import React from 'react';

let customStyleId = 0;

export default (title, Component, css) => {
    class Template extends React.Component {
        styleId = customStyleId++;

        componentDidMount() {
            const styleNode = document.createElement('style');
            styleNode.type = 'text/css';
            styleNode.id = `template-style-${this.styleId}`;
            styleNode.innerHTML = css;
            document.getElementsByTagName('head')[0].appendChild(styleNode);
        }

        componentWillUnmount() {
            const styleNode = document.getElementById(`template-style-${this.styleId}`);
            styleNode.parentNode.removeChild(styleNode);
        }

        render() {
            return <Component {...this.props} />;
        }
    }

    Template.metadata = () => ({
        title
    });

    return Template;
};
