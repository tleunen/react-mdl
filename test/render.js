import { createRenderer, renderIntoDocument } from 'react-addons-test-utils';
import MDLComponent from '../src/utils/MDLComponent';

export default (element, needDom) => {
    if(needDom) {
        return renderIntoDocument(element);
    }

    const renderer = createRenderer();
    renderer.render(element);

    var output = renderer.getRenderOutput();

    if(output && output.type === MDLComponent) {
        return output.props.children;
    }

    return output;
};
