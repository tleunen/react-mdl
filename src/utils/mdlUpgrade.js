import React from 'react';

export default (Component) => {
    class MDLUpgradedComponent extends React.Component {
        componentDidMount() {
            componentHandler.upgradeElement(React.findDOMNode(this));
        }

        componentWillUnmount() {
            componentHandler.downgradeElements(React.findDOMNode(this));
        }

        render() {
            return <Component {...this.props} />;
        }
    }

    return MDLUpgradedComponent;
};
