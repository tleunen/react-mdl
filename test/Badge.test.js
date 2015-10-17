/*eslint-env mocha */
var assert = require('assert');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');
var Badge = require('../src/Badge');
var Icon = require('../src/Icon');

describe('Badge', function() {
    var shallowRenderer = ReactTestUtils.createRenderer();

    it('render a span around text child', function() {
        shallowRenderer.render(<Badge text="4">Inbox</Badge>);
        var output = shallowRenderer.getRenderOutput();

        assert.equal('span', output.type);
        assert.equal('mdl-badge', output.props.className);
        assert.equal('4', output.props['data-badge']);
        assert.equal(output.props.children, 'Inbox');
    });

    it('append badge data/class to existing complex child', function() {
        shallowRenderer.render(<Badge text="8"><Icon name="account_box" /></Badge>);
        var output = shallowRenderer.getRenderOutput();

        assert.equal(Icon, output.type);
        assert.equal('mdl-badge', output.props.className);
        assert.equal('8', output.props['data-badge']);
    });

    it('render empty badge', function() {
        shallowRenderer.render(<Badge text="">Inbox</Badge>);
        var output = shallowRenderer.getRenderOutput();

        assert.equal('span', output.type);
        assert.equal('mdl-badge', output.props.className);
        assert.equal('', output.props['data-badge']);
        assert.equal(output.props.children, 'Inbox');
    });

    it('allow number as badge text', function() {
        shallowRenderer.render(<Badge text={4}>Inbox</Badge>);
        var output = shallowRenderer.getRenderOutput();

        assert.equal('span', output.type);
        assert.equal('mdl-badge', output.props.className);
        assert.equal(4, output.props['data-badge']);
        assert.equal(output.props.children, 'Inbox');
    });

    describe('does not render badge when', function() {
        it('no children', function() {
            shallowRenderer.render(<Badge text="4" />);
            var output = shallowRenderer.getRenderOutput();

            assert.equal(null, output);
        });

        it('badge text is on text child', function() {
            shallowRenderer.render(<Badge text={null}>Inbox</Badge>);
            var output = shallowRenderer.getRenderOutput();

            assert.equal('Inbox', output);
        });

        it('badge text is null on complex child', function() {
            shallowRenderer.render(<Badge text={null}><Icon name="account_box" /></Badge>);
            var output = shallowRenderer.getRenderOutput();

            assert.equal(Icon, output.type);
            assert.notEqual('mdl-badge', output.props.className);
            assert.equal(undefined, output.props['data-badge']);
        });

        it('it does not have any text', function() {
            shallowRenderer.render(<Badge><Icon name="account_box" /></Badge>);
            var output = shallowRenderer.getRenderOutput();

            assert.equal(Icon, output.type);
            assert.notEqual('mdl-badge', output.props.className);
            assert.equal(undefined, output.props['data-badge']);
        });
    });

});
