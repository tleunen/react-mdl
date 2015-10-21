/* eslint-env mocha */
var expect = require('expect');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');
var FABButton = require('../src/FABButton');
var Button = require('../src/Button');
var Icon = require('../src/Icon');

describe('FAB Button', function() {
    var shallowRenderer = ReactTestUtils.createRenderer();

    it('should render a fab button with a text', function() {
        shallowRenderer.render(<FABButton>A</FABButton>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe(Button);
        expect(output.props.className).toInclude('mdl-button--fab');
        expect(output.props.children).toBe('A');
    });

    it('should render a fab button with an icon', function() {
        shallowRenderer.render(<FABButton><Icon name="add" /></FABButton>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe(Button);
        expect(output.props.className).toInclude('mdl-button--fab');
        expect(output.props.children.type).toBe(Icon);
    });

    it('should render a disabled fab button', function() {
        shallowRenderer.render(<FABButton disabled>A</FABButton>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe(Button);
        expect(output.props.className).toInclude('mdl-button--fab');
        expect(output.props.disabled).toBe(true);
    });

    it('should render a fab button with ripple', function() {
        shallowRenderer.render(<FABButton ripple>A</FABButton>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe(Button);
        expect(output.props.className).toInclude('mdl-button--fab');
        expect(output.props.ripple).toBe(true);
    });

    it('should render a fab button without ripple', function() {
        shallowRenderer.render(<FABButton>A</FABButton>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe(Button);
        expect(output.props.className).toInclude('mdl-button--fab');
        expect(output.props.ripple).toNotExist();
    });

    it('should render a colored fab button', function() {
        shallowRenderer.render(<FABButton colored>A</FABButton>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe(Button);
        expect(output.props.className).toInclude('mdl-button--fab');
        expect(output.props.colored).toBe(true);
    });

    it('should render a mini fab button', function() {
        shallowRenderer.render(<FABButton mini>A</FABButton>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe(Button);
        expect(output.props.className)
            .toInclude('mdl-button--fab')
            .toInclude('mdl-button--mini-fab');
    });
});
