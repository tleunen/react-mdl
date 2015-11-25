# Data Tables

## Demo

```jsx
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
```

## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| columns       | Array of {label, name, numeric}   | Set the columns  | Required |
| data       | Array of object   | Set the rows data | Required. The properties of each object should be the "name" of each column |
| selected  | Boolean    | Adds a checkbox in front of each row | Optional |
