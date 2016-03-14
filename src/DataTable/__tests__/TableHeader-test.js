/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { Simulate } from 'react-addons-test-utils';
import { render, renderDOM } from '../../__tests__/render';
import { TableHeader } from '..';
import { Tooltip } from '../../';

describe('TableHeader', () => {
    function createTableHeader(props) {
        const pp = {
            name: 'test',
            ...props
        };

        return <TableHeader {...pp}>TestColumn</TableHeader>;
    }

    function createTableHeaderInTable(props) {
        return <table><thead><tr>{createTableHeader(props)}</tr></thead></table>;
    }

    it('should render a <th>', () => {
        const output = render(createTableHeader());

        expect(output.type).toBe('th');
    });

    it('should allow custom css classes', () => {
        const output = render(createTableHeader({ className: 'my-th' }));

        expect(output.props.className).toInclude('my-th');
    });

    it('should be a non numeric column', () => {
        const output = render(createTableHeader());

        expect(output.props.className)
            .toInclude('mdl-data-table__cell--non-numeric');
    });

    it('should be a numeric column', () => {
        const output = render(createTableHeader({ numeric: true }));

        expect(output.props.className)
            .toExclude('mdl-data-table__cell--non-numeric');
    });

    it('should render the content of the column', () => {
        const output = render(createTableHeader());

        expect(output.props.children).toBe('TestColumn');
    });

    it('should render a tooltip around the content', () => {
        const output = render(createTableHeader({ tooltip: 'my tooltip' }));

        const tooltip = output.props.children;
        expect(tooltip.type).toBe(Tooltip);
        expect(tooltip.props.children).toBe('TestColumn');
    });

    it('should do nothing when clicked', () => {
        const clicked = expect.createSpy();

        const el = renderDOM(createTableHeaderInTable());
        Simulate.click(el.querySelector('th'));
        expect(clicked).toNotHaveBeenCalled();
        expect.restoreSpies();
    });

    describe('when set as a sortable header', () => {
        it('should do nothing when clicked when explicitely set as "nosort"', () => {
            const clicked = expect.createSpy();

            const el = renderDOM(createTableHeaderInTable({ nosort: true, onClick: clicked }));
            Simulate.click(el.querySelector('th'));
            expect(clicked).toNotHaveBeenCalled();
            expect.restoreSpies();
        });

        it('should send the onClick event with the event and column name', () => {
            const clicked = expect.createSpy();

            const el = renderDOM(createTableHeaderInTable({ onClick: clicked }));
            Simulate.click(el.querySelector('th'));
            expect(clicked).toHaveBeenCalled();
            expect(clicked.calls[0].arguments[1]).toEqual('test');
            expect.restoreSpies();
        });
    });
});
