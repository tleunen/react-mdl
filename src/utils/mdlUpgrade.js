import * as React from 'react';
import MDLComponent from './MDLComponent';

function patchComponentClass(Component) {
    const render = Component.prototype.render;

    Component.prototype.render = function rendr() { // eslint-disable-line no-param-reassign
        const renderBound = render.bind(this);
        return <MDLComponent>{renderBound()}</MDLComponent>;
    };

    return Component;
}

function patchSFC(component) {
    const patchedComponent = props => <MDLComponent>{component(props)}</MDLComponent>;

    Object.defineProperty(patchedComponent, 'name', {
        value: component.name
    });

    return patchedComponent;
}

export default Component => (
    (Component.prototype && Component.prototype.isReactComponent) ?
        patchComponentClass(Component) :
        patchSFC(Component)
);
