/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Tab } from '../';

describe('Tabs', () => {
    describe('Tab', () => {
        it('should render a link with the specific css classes', () => {
            const output = render(<Tab cssPrefix="mdl-tabs" />);

            expect(output.type).toBe('a');
            expect(output.props.className)
                .toInclude('mdl-tabs__tab');
        });

        it('should allow custom css classes', () => {
            const output = render(<Tab cssPrefix="mdl-tabs" className="my-tab" />);

            expect(output.props.className)
                .toInclude('mdl-tabs__tab')
                .toInclude('my-tab');
        });

        it('should render the custom component', () => {
            const MyCustomComponent = (props) => <button {...props} />;
            const output = render(<Tab component={MyCustomComponent} cssPrefix="mdl-tabs">Tabs</Tab>);

            expect(output.type).toBe(MyCustomComponent);
        });
    });
});
