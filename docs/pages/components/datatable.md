---
title: DataTable
---

## Demo

### Simple table

```jsx_demo
<Table
    shadow={0}
    rows={[
        {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
        {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
        {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
    ]}
>
    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
    <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</Table>
```

### Selectable Table with checkboxes
```jsx_demo
<Table
    selectable
    shadow={0}
    rowKeyColumn="id"
    rows={[
        {id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
        {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
        {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
    ]}
>
    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
    <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</Table>
```

### Sortable table
```jsx_demo
<Table
    sortable
    shadow={0}
    rows={[
        {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
        {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
        {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
    ]}
>
    <TableHeader
        name="material"
        sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
        tooltip="The amazing material name"
    >
        Material
    </TableHeader>
    <TableHeader
        numeric
        name="quantity"
        tooltip="Number of materials"
    >
        Quantity
    </TableHeader>
    <TableHeader
        numeric
        name="price"
        cellFormatter={(price) => `\$${price.toFixed(2)}`}
        tooltip="Price pet unit"
    >
        Price
    </TableHeader>
</Table>
```

## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| columns       | Array of {label, name, numeric, tooltip}   | Set the columns  | Required |
| onSelectionChanged | Function | Handler to get the selected rows | Optional. Required when `selectable` is set |
| rowKeyColumn | String    | Will define the `key` for each row based on the content of the column specified (will often be `id` or `uid`) | Optional, but recommended |
| rows       | Array of object   | Set the rows data | Required. The properties of each object should be the "name" of each column |
| selectable | Boolean | Adds checkboxes in front of each rows to select it | Optional. |
| shadow       | Number    | Defines the shadow depth | Optional. If provided, must be between 0 and 6 inclusive. If omitted, table will not have any shadow. |
