/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render, renderDOM } from './render';
import Menu from '../Menu';

describe('Menu', () => {
    it('should render an ul list', () => {
        const output = render(<Menu target="none" />);

        expect(output.type).toBe('ul');
    });

    it('should be left bottom aligned by default', () => {
        const output = render(<Menu target="none" />);

        expect(output.props.className)
            .toInclude('mdl-menu--bottom-left');
    });

    it('should have alignment specific css', () => {
        ['left', 'right'].forEach(align => {
            ['bottom', 'top'].forEach(valign => {
                const output = render(<Menu target="none" align={align} valign={valign} />);

                expect(output.props.className)
                    .toInclude(`mdl-menu--${valign}-${align}`);
            });
        });
    });

    it('should have ripple if specified specific css', () => {
        const output = render(<Menu target="none" ripple />);

        expect(output.props.className)
            .toInclude('mdl-js-ripple-effect');
    });

    it('should unmount cleanly', () => {
        let removeMenuCallback;

        class Testbed extends React.Component {
            constructor(props, ctx) {
                super(props, ctx);

                this.state = {
                    showMenu: true
                };

                removeMenuCallback = () => this.setState({ showMenu: false });
            }

            render() {
                return (
                    <div>
                        {this.state.showMenu ? <Menu className="test-menu" /> : <span />}
                    </div>
                );
            }
        }

        const node = renderDOM(<Testbed />);

        expect(node.querySelectorAll('.test-menu').length).toBe(1);
        expect(removeMenuCallback).toBeTruthy();
        expect(removeMenuCallback).toNotThrow();
        expect(node.querySelectorAll('.test-menu').length).toBe(0);
    });
});
