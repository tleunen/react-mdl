import React from 'react';

let customStyleId = 0;

export default (Component, css) =>
    class Template extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                styleId: customStyleId++
            };
        }

        componentDidMount() {
            const styleNode = document.createElement('style');
            styleNode.type = 'text/css';
            styleNode.id = `template-style-${this.state.styleId}`;
            styleNode.innerHTML = css;
            document.getElementsByTagName('head')[0].appendChild(styleNode);
        }

        componentWillUnmount() {
            const styleNode = document.getElementById(`template-style-${this.state.styleId}`);
            styleNode.parentNode.removeChild(styleNode);
        }

        render() {
            return <Component />;
        }
    };
