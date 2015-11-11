import React from 'react';

export default (Component) => {
    return class PrismComponent extends React.Component {
        componentDidMount() {
            if(Prism) {
                Prism.highlightAll();
            }
        }

        render() {
            return <Component {...this.props} />;
        }
    };
};
