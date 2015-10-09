import { Children, Component } from 'react';
import { findDOMNode } from 'react-dom';

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
