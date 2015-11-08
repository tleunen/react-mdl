import React from 'react';
import MDLComponent from './MDLComponent';

export default Component => {
    const render = Component.prototype.render;

    Component.prototype.render = function rendr() {
        return <MDLComponent>{this::render()}</MDLComponent>;
    };

    return Component;
};
