/* eslint-env mocha */
var expect = require('expect');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');
var Checkbox = require('../src/Checkbox');

describe('Checkbox', function() {
    var shallowRenderer = ReactTestUtils.createRenderer();
    var onChange = () => {};

    it('should render an input checkbox inside a <label> ', function() {
        shallowRenderer.render(<Checkbox onChange={onChange} />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-checkbox')
            .toInclude('mdl-js-checkbox');

        var input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.type).toBe('checkbox');
    });

    it('should not render the checkbox label if none is provided', function() {
        shallowRenderer.render(<Checkbox onChange={onChange} />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.props.children[1]).toNotExist();
    });

    it('should render the label beside the checkbox', function() {
        shallowRenderer.render(<Checkbox label="My checkbox" onChange={onChange} />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.props.children.length).toBe(2);

        var checkboxLabel = output.props.children[1];
        expect(checkboxLabel.type).toBe('span');
        expect(checkboxLabel.props.className).toBe('mdl-checkbox__label');
        expect(checkboxLabel.props.children).toBe('My checkbox');
    });

    it('should render a checked checkbox', function() {
        shallowRenderer.render(<Checkbox checked onChange={onChange} />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('label');

        var input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.checked).toBe(true);
    });

    it('should render an unchecked checkbox', function() {
        shallowRenderer.render(<Checkbox onChange={onChange} />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('label');

        var input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.checked).toNotExist();
    });

    it('should render a disabled checkbox', function() {
        shallowRenderer.render(<Checkbox disabled onChange={onChange} />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('label');

        var input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.disabled).toBe(true);
    });

    it('should render a checkbox with ripple', function() {
        shallowRenderer.render(<Checkbox ripple onChange={onChange} />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('label');
        expect(output.props.className).toInclude('mdl-js-ripple-effect');
    });
});


