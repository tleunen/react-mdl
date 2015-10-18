import React from 'react';
import render from '../render';
import test from 'tape';
import Badge from '../../src/Badge';

test('Badge with string children', ({ end, equal }) => {
    const { props, type } = render(<Badge text="4">Text</Badge>);

    equal(props.children, 'Text', 'children are rendered');
    equal(props.className, 'mdl-badge', 'class is set');
    equal(props['data-badge'], '4', 'text is rendered');
    equal(type, 'span', 'children are wrapped');
    end();
});

test('Badge with element children', ({ end, equal }) => {
    const children = <div className="child">Text</div>;
    const { props, type } = render(<Badge text="4">{children}</Badge>);

    equal(props.children, 'Text', 'children are rendered');
    equal(props.className, 'child mdl-badge', 'class is set');
    equal(props['data-badge'], '4', 'text is rendered');
    equal(type, 'div', 'no wrapper');
    end();
});

test('Badge without children', ({ end, equal }) => {
    const { props, type } = render(<Badge text="4" />);

    equal(props.className, 'mdl-badge', 'class is set');
    equal(props['data-badge'], '4', 'text is rendered');
    equal(type, 'span', 'empty children results in empty span rendered');
    end();
});
