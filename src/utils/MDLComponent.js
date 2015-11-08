import { Children, Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class MDLComponent extends Component {
    componentDidMount() {
        window.componentHandler.upgradeElement(findDOMNode(this));
    }

    componentWillUnmount() {
        window.componentHandler.downgradeElements(findDOMNode(this));
    }

    render() {
        return Children.only(this.props.children);
    }
}
