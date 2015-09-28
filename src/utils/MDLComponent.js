import { Children, Component, findDOMNode } from 'react';

export default class MDLComponent extends Component {
    componentDidMount() {
        componentHandler.upgradeElement(findDOMNode(this));
    }

    componentWillUnmount() {
        componentHandler.downgradeElements(findDOMNode(this));
    }

    render() {
        return Children.only(this.props.children);
    }
}
