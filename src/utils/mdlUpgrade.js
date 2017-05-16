import React from 'react';
import MDLComponent from './MDLComponent';

function patchComponentClass(Component, recursive) {
    const oldRender = Component.prototype.render;

    Component.prototype.render = function render() { // eslint-disable-line no-param-reassign
        return (
            <MDLComponent recursive={recursive}>
                {oldRender.call(this)}
            </MDLComponent>
        );
    };

    return Component;
}

function patchSFC(component, recursive) {
    const patchedComponent = props =>
        <MDLComponent recursive={recursive}>
            {component(props)}
        </MDLComponent>;

    // Attempt to change the function name for easier debugging, but don't die
    // if the browser doesn't support it
    try {
        Object.defineProperty(patchedComponent, 'name', {
            value: component.name
        });
    } catch (e) {} // eslint-disable-line no-empty

    return patchedComponent;
}

export default (Component, recursive = false) => (
    (Component.prototype && Component.prototype.isReactComponent) ?
        patchComponentClass(Component, recursive) :
        patchSFC(Component, recursive)
);
