/* eslint-env mocha */
var expect = require('expect');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');
var Icon = require('../src/Icon');

describe('Icon', function() {
    var shallowRenderer = ReactTestUtils.createRenderer();

    it('should render an icon', function() {
        shallowRenderer.render(<Icon name="add" />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('i');
        expect(output.props.className).toInclude('material-icons');
        expect(output.props.children).toBe('add');
    });

    it('should render an icon with custom css classes', function() {
        shallowRenderer.render(<Icon name="mood" className="myCustomClass" />);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('i');
        expect(output.props.className)
            .toInclude('material-icons')
            .toInclude('myCustomClass');
        expect(output.props.children).toBe('mood');
    });
});
