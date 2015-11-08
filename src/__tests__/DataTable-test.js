/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import DataTable from '../DataTable';

describe('DataTable', () => {
    const columns = [
        {name: 'material', label: 'Material'},
        {name: 'quantity', label: 'Quantity', numeric: true},
        {name: 'price', label: 'Unit Price', numeric: true}
    ];

    const data = [
        {material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90'},
        {material: 'Plywood (Birch)', quantity: 50, price: '$1.25'},
        {material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35'}
    ];

    it('should render a <table>', () => {
        const output = render(<DataTable columns={columns} data={data} />);

        expect(output.type).toBe('table');
    });

    it('should contain mdl css classes', () => {
        const output = render(<DataTable columns={columns} data={data} />);

        expect(output.props.className)
            .toInclude('mdl-data-table')
            .toInclude('mdl-js-data-table');
    });

    it('should allow custom css classes', () => {
        const output = render(<DataTable className="my-data-table" columns={columns} data={data} />);

        expect(output.props.className)
            .toInclude('my-data-table');
    });

    it('should contain the specific columns', () => {
        const output = render(<DataTable columns={columns} data={data} />);

        const thead = output.props.children[0];
        const headTr = thead.props.children;
        const columnsTd = headTr.props.children;

        expect(columnsTd.length).toBe(columns.length);

        columnsTd.forEach((td, i) => {
            expect(td.key).toBe(columns[i].name);
            expect(td.props.children).toBe(columns[i].label);
        });
    });

    it('should set the non numeric css class on non numeric columns', () => {
        const output = render(<DataTable columns={columns} data={data} />);

        const thead = output.props.children[0];
        const headTr = thead.props.children;
        const tds = headTr.props.children;

        tds.forEach((td, i) => {
            if(!columns[i].numeric) {
                expect(td.props.className).toInclude('mdl-data-table__cell--non-numeric');
            }
            else {
                expect(td.props.className).toExclude('mdl-data-table__cell--non-numeric');
            }
        });
    });

    it('should contain the specific data', () => {
        const output = render(<DataTable columns={columns} data={data} />);

        const tbody = output.props.children[1];
        const rows = tbody.props.children;

        expect(rows.length).toBe(data.length);

        rows.forEach((row, i) => {
            const tds = row.props.children;
            expect(tds.length).toBe(columns.length);

            tds.forEach((td, j) => {
                expect(td.key).toBe(columns[j].name);
                expect(td.props.children).toBe( data[i][columns[j].name] );
            });
        });
    });

    it('should set the non numeric css class on non numeric data cells', () => {
        const output = render(<DataTable columns={columns} data={data} />);

        const tbody = output.props.children[1];
        const rows = tbody.props.children;

        rows.forEach(row => {
            const tds = row.props.children;

            tds.forEach((td, j) => {
                if(!columns[j].numeric) {
                    expect(td.props.className).toInclude('mdl-data-table__cell--non-numeric');
                }
                else {
                    expect(td.props.className).toExclude('mdl-data-table__cell--non-numeric');
                }
            });
        });
    });
});
