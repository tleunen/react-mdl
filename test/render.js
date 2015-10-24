import { createRenderer } from 'react-addons-test-utils';
import MDLComponent from '../src/utils/MDLComponent';

export default element => {
    const renderer = createRenderer();
    renderer.render(element);

    var output = renderer.getRenderOutput();

    if(output && output.type === MDLComponent) {
        return output.props.children;
    }

    return output;
};
