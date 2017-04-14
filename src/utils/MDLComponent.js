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
        window.componentHandler.downgradeElements(findDOMNode(this));
    }

    render() {
        return Children.only(this.props.children);
    }

}

MDLComponent.propTypes = {
    recursive: PropTypes.bool
};
