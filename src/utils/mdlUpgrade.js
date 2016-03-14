import React from 'react';
import MDLComponent from './MDLComponent';

export default Component => {
    const render = Component.prototype.render;

    Component.prototype.render = function rendr() { // eslint-disable-line no-param-reassign
        const renderBound = render.bind(this);
        return <MDLComponent>{renderBound()}</MDLComponent>;
    };

    return Component;
};
