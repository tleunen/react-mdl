import classnames from 'classnames';
import React, { Component } from 'react';
import Button from '../../../lib/Button';
import Icon from '../../../lib/Icon';

import Code from './Code';

class Example extends Component {
    static propTypes = {
        description: React.PropTypes.string
    }
    constructor( ...args ) {
        super( ...args );
    }

    state = { collapsed: true };
    toggle = ( e ) => {
        this.setState( {
            collapsed: !this.state.collapsed
        } );
        e.preventDefault();
    }
    render() {
        const { children, description, ...other } = this.props;
        const { collapsed } = this.state;
        return (
            <article className="example" { ...other }>
                <section className="components">
                    { children }
                </section>
                <p className="description">
                    { description }
                </p>
                <section
                    className={ classnames( {
                        collapsed
                    }, 'code' ) }
                >
                    <Button
                        className="code-collapse"
                        onClick={ this.toggle }
                    >
                        <Icon
                            name="add"
                            className="collapse-icon"
                        />
                        Code
                    </Button>

                    <article className="code-samples">
                    { React.Children.map( children, ( child, i ) =>
                        <Code
                            className="code-sample"
                            el={ child }
                            key={ i }
                        />
                    ) }
                    </article>
                </section>
            </article>
        );
    }
}
export default Example;
