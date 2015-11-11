import React from 'react';
import prismUpgrade from './prismUpgrade';
import { DataTable } from '../../../';

class DataTablesPage extends React.Component {
    render() {
        return (
            <section>
                <h1 className="mdl-typography--display-2">Data Tables</h1>

                <h5 className="mdl-typography--headline">Demo</h5>

                <DataTable
                    style={{margin: 'auto'}}
                    selectable
                    columns={[
                        {name: 'material', label: 'Material'},
                        {name: 'quantity', label: 'Quantity', numeric: true},
                        {name: 'price', label: 'Unit Price', numeric: true}
                    ]}
                    data={[
                        {material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90'},
                        {material: 'Plywood (Birch)', quantity: 50, price: '$1.25'},
                        {material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35'}
                    ]}
                />

                <pre><code className="language-jsx">
                {`
<DataTable
    selectable
    columns={[
        {name: 'material', label: 'Material'},
        {name: 'quantity', label: 'Quantity', numeric: true},
        {name: 'price', label: 'Unit Price', numeric: true}
    ]}
    data={[
        {material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90'},
        {material: 'Plywood (Birch)', quantity: 50, price: '$1.25'},
        {material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35'}
    ]}
/>
                `}
                </code></pre>


                <h5 className="mdl-typography--headline">Configuration</h5>
                <DataTable
                    style={{margin: 'auto'}}
                    columns={[
                        { name: 'prop', label: 'Prop' },
                        { name: 'type', label: 'Type' },
                        { name: 'effect', label: 'Effect' },
                        { name: 'remarks', label: 'Remarks' }
                    ]}
                    data={[
                        { prop: 'columns', type: 'Array of {label, name, numeric}', effect: 'Set the columns', remarks: 'Required' },
                        { prop: 'data', type: 'Array of object', effect: 'Set the rows data', remarks: 'Required. The properties of each object should be the "name" of each column' },
                        { prop: 'selected', type: 'Boolean', effect: 'Adds a checkbox in front of each row', remarks: 'Optional' }
                    ]}
                />
            </section>
        );
    }
}

export default prismUpgrade(DataTablesPage);
