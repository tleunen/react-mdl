# Data Tables

## Demo

### Simple table

```jsx
<DataTable
    shadow={0}
    columns={[
        {name: 'material', label: 'Material', tooltip: 'The amazing material name'},
        {name: 'quantity', label: 'Quantity', tooltip: 'Number of materials', numeric: true},
        {name: 'price', label: 'Unit Price', tooltip: 'Price pet unit', numeric: true}
    ]}
    rows={[
        {material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90'},
        {material: 'Plywood (Birch)', quantity: 50, price: '$1.25'},
        {material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35'}
    ]}
/>
```

### Selectable Table with checkboxes

```jsx_demo_class
class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeHeaderCheckbox = this.onChangeHeaderCheckbox.bind(this);
        this.onChangeDataCheckbox = this.onChangeDataCheckbox.bind(this);

        // imagine we get this data from the server
        const dataFromServer = [
            {material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90'},
            {material: 'Plywood (Birch)', quantity: 50, price: '$1.25'},
            {material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35'}
        ];

        // we add a "checked" state in our data (the name could be anything you want)
        this.state = {
            rows: dataFromServer.map(row => ({
                ...row,
                checked: false
            })),
            headerChecked: false
        };
    }

    onChangeHeaderCheckbox() {
        // update the state by checking or unchecking everything
        this.setState(previousState => ({
            headerChecked: !previousState.headerChecked,
            rows: previousState.rows.map(row => ({
                ...row,
                checked: !previousState.headerChecked
            }))
        }));
    }

    onChangeDataCheckbox(e) {
        this.setState(previousState => ({
            rows: previousState.rows.map((row, i) => ({
                ...row,
                checked: i === parseInt(e.target.dataset.rowId, 10) ? !row.checked : row.checked
            }))
        }));
    }

    render() {
        // we need to render a checkbox based on the state
        const rows = this.state.rows.map((row, i) => ({
            checkbox: <Checkbox data-row-id={i} checked={row.checked} onChange={this.onChangeDataCheckbox} />,
            selected: row.checked,
            ...row
        }));

        return <DataTable
            shadow={0}
            columns={[
                {name: 'checkbox', label: <Checkbox checked={this.state.headerChecked} onChange={this.onChangeHeaderCheckbox} />},
                {name: 'material', label: 'Material'},
                {name: 'quantity', label: 'Quantity', numeric: true},
                {name: 'price', label: 'Unit Price', numeric: true}
            ]}
            rows={rows}
        />;
    }
}
```



## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| columns       | Array of {label, name, numeric, tooltip}   | Set the columns  | Required |
| rows       | Array of object   | Set the rows data | Required. The properties of each object should be the "name" of each column |
| shadow       | Number    | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |
