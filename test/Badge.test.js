/* eslint-env mocha */
var expect = require('expect');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');
var Badge = require('../src/Badge');
var Icon = require('../src/Icon');

describe('Badge', function() {
    var shallowRenderer = ReactTestUtils.createRenderer();

    it('render a span around text child', function() {
        shallowRenderer.render(<Badge text="4">Inbox</Badge>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('span');
        expect(output.props.className).toBe('mdl-badge');
        expect(output.props['data-badge']).toBe('4');
        expect(output.props.children).toBe('Inbox');
    });

    it('append badge data/class to existing complex child', function() {
        shallowRenderer.render(<Badge text="8"><Icon name="account_box" /></Badge>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe(Icon);
        expect(output.props.className).toBe('mdl-badge');
        expect(output.props['data-badge']).toBe('8');
    });

    it('render empty badge', function() {
        shallowRenderer.render(<Badge text="">Inbox</Badge>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('span');
        expect(output.props.className).toBe('mdl-badge');
        expect(output.props['data-badge']).toBe('');
        expect(output.props.children).toBe('Inbox');
    });

    it('allow number as badge text', function() {
        shallowRenderer.render(<Badge text={4}>Inbox</Badge>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('span');
        expect(output.props.className).toBe('mdl-badge');
        expect(output.props['data-badge']).toBe(4);
        expect(output.props.children).toBe('Inbox');
    });

    describe('does not render badge when', function() {
        it('no children', function() {
            shallowRenderer.render(<Badge text="4" />);
            var output = shallowRenderer.getRenderOutput();

            expect(output).toNotExist();
        });

        it('badge text is on text child', function() {
            shallowRenderer.render(<Badge text={null}>Inbox</Badge>);
            var output = shallowRenderer.getRenderOutput();

            expect(output).toBe('Inbox');
        });

        it('badge text is null on complex child', function() {
            shallowRenderer.render(<Badge text={null}><Icon name="account_box" /></Badge>);
            var output = shallowRenderer.getRenderOutput();

            expect(output.type).toBe(Icon);
            expect(output.props.className).toNotBe('mdl-badge');
            expect(output.props['data-badge']).toNotExist();
        });

        it('it does not have any text', function() {
            shallowRenderer.render(<Badge><Icon name="account_box" /></Badge>);
            var output = shallowRenderer.getRenderOutput();

            expect(output.type).toBe(Icon);
            expect(output.props.className).toNotBe('mdl-badge');
            expect(output.props['data-badge']).toNotExist();
        });
    });
});
