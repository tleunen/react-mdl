/*eslint-env mocha */
var expect = require('expect');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');
var Button = require('../src/Button');

describe('Button', function() {
    var shallowRenderer = ReactTestUtils.createRenderer();

    it('enabled', function() {
        shallowRenderer.render(<Button>Button</Button>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('button');
        expect(output.props.disabled).toNotExist();
    });

    it('disabled', function() {
        shallowRenderer.render(<Button disabled={true}>Button</Button>);
        var output = shallowRenderer.getRenderOutput();

        expect(output.type).toBe('button');
        expect(output.props.disabled).toBe(true);
    });

    describe('flat button', function() {
        afterEach(function() {
            var output = shallowRenderer.getRenderOutput();

            expect(output.type).toBe('button');
            expect(output.props.className)
                .toInclude('mdl-button')
                .toInclude('mdl-js-button')
                .toExclude('mdl-button--raised');
        });

        describe('normal', function() {
            afterEach(function() {
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-button--colored')
                    .toExclude('mdl-button--primary')
                    .toExclude('mdl-button--accent');
            });

            it('with ripple', function() {
                shallowRenderer.render(<Button>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button ripple={false}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-js-ripple-effect');
            });
        });

        describe('colored', function() {
            afterEach(function() {
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-button--colored')
                    .toExclude('mdl-button--primary')
                    .toExclude('mdl-button--accent');
            });

            it('with ripple', function() {
                shallowRenderer.render(<Button colored={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button ripple={false} colored={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-js-ripple-effect');
            });
        });

        describe('primary', function() {
            afterEach(function() {
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-button--colored')
                    .toInclude('mdl-button--primary')
                    .toExclude('mdl-button--accent');
            });

            it('with ripple', function() {
                shallowRenderer.render(<Button primary={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button ripple={false} primary={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-js-ripple-effect');
            });
        });

        describe('accent-colored', function() {
            afterEach(function() {
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-button--colored')
                    .toExclude('mdl-button--primary')
                    .toInclude('mdl-button--accent');
            });

            it('with ripple', function() {
                shallowRenderer.render(<Button accent={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button ripple={false} accent={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-js-ripple-effect');
            });
        });
    });

    describe('raised button', function() {
        afterEach(function() {
            var output = shallowRenderer.getRenderOutput();

            expect(output.type).toBe('button');
            expect(output.props.className)
                .toInclude('mdl-button')
                .toInclude('mdl-js-button')
                .toInclude('mdl-button--raised');
        });

        describe('normal', function() {
            afterEach(function() {
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-button--colored')
                    .toExclude('mdl-button--primary')
                    .toExclude('mdl-button--accent');
            });

            it('with ripple', function() {
                shallowRenderer.render(<Button raised={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button raised={true} ripple={false}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-js-ripple-effect');
            });
        });

        describe('colored', function() {
            afterEach(function() {
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-button--colored')
                    .toExclude('mdl-button--primary')
                    .toExclude('mdl-button--accent');
            });

            it('with ripple', function() {
                shallowRenderer.render(<Button raised={true} colored={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button raised={true} ripple={false} colored={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-js-ripple-effect');
            });
        });

        describe('primary', function() {
            afterEach(function() {
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-button--colored')
                    .toInclude('mdl-button--primary')
                    .toExclude('mdl-button--accent');
            });

            it('with ripple', function() {
                shallowRenderer.render(<Button raised={true} primary={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button raised={true} ripple={false} primary={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-js-ripple-effect');
            });
        });

        describe('accent-colored', function() {
            afterEach(function() {
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-button--colored')
                    .toExclude('mdl-button--primary')
                    .toInclude('mdl-button--accent');
            });

            it('with ripple', function() {
                shallowRenderer.render(<Button raised={true} accent={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button raised={true} ripple={false} accent={true}>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toExclude('mdl-js-ripple-effect');
            });
        });
    });

    describe('custom types', function() {
        it('<a> using href', function() {
            shallowRenderer.render(<Button href="#">Button</Button>);
            var output = shallowRenderer.getRenderOutput();

            expect(output.type).toBe('a');
            expect(output.props.className)
                .toInclude('mdl-button')
                .toInclude('mdl-js-button');
            expect(output.props.href).toBe('#');
        });

        it('custom component', function() {
            var MyCustomComponent = (props) => {
                return <button {...props} />;
            };

            shallowRenderer.render(<Button component={MyCustomComponent}>Button</Button>);
            var output = shallowRenderer.getRenderOutput();

            expect(output.type).toBe(MyCustomComponent);
            expect(output.props.className)
                .toInclude('mdl-button')
                .toInclude('mdl-js-button');
        });
    });
});
