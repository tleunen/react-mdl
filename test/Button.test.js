/* eslint-env mocha */
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
        shallowRenderer.render(<Button disabled>Button</Button>);
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
                shallowRenderer.render(<Button ripple>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button>Button</Button>);
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
                shallowRenderer.render(<Button colored ripple>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button colored>Button</Button>);
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
                shallowRenderer.render(<Button primary ripple>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button primary>Button</Button>);
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
                shallowRenderer.render(<Button accent ripple>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button accent>Button</Button>);
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
                shallowRenderer.render(<Button raised ripple>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button raised>Button</Button>);
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
                shallowRenderer.render(<Button raised colored ripple>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button raised colored>Button</Button>);
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
                shallowRenderer.render(<Button raised primary ripple>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button raised primary>Button</Button>);
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
                shallowRenderer.render(<Button raised accent ripple>Button</Button>);
                var output = shallowRenderer.getRenderOutput();

                expect(output.props.className)
                    .toInclude('mdl-js-ripple-effect');
            });

            it('without ripple', function() {
                shallowRenderer.render(<Button raised accent>Button</Button>);
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
