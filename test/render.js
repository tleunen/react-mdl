import { createRenderer } from 'react-addons-test-utils';

export default element => {
    const renderer = createRenderer();
    renderer.render(element);
    return renderer.getRenderOutput();
};
