import { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

export default class MDLComponent extends Component {
    componentDidMount() {
        if (this.props.recursive) {
            window.componentHandler.upgradeElements(findDOMNode(this));
        } else {
            window.componentHandler.upgradeElement(findDOMNode(this));
        }
    }

    componentWillUnmount() {
        const node = findDOMNode(this);
        if (node) {
            // Not sure what causes this but sometimes there is no node here, which
            // causes componentHandler to throw up
            window.componentHandler.downgradeElements(node);
        }
    }

    render() {
        return Children.only(this.props.children);
    }

}

MDLComponent.propTypes = {
    recursive: PropTypes.bool
};
