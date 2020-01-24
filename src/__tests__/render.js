import { createRenderer } from 'react-test-renderer/shallow';
import { renderIntoDocument } from 'react-dom/test-utils';
import { findDOMNode } from 'react-dom';
import MDLComponent from '../utils/MDLComponent';

export function render(element) {
    const renderer = createRenderer();
    renderer.render(element);

    const output = renderer.getRenderOutput();

    if (output && output.type === MDLComponent) {
        return output.props.children;
    }

    return output;
}

export function renderDOM(element) {
    return findDOMNode(renderIntoDocument(element));
}
