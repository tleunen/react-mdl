# Textfield

## Demo

```jsx
{/* Simple textfield */}
<Textfield
    onChange={() => {}}
    label="Text..."
    style={{width: '200px'}}
/>

{/* Numeric textfield */}
<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number..."
    style={{width: '200px'}}
/>
```

```jsx
{/* Textfield with floating label */}
<Textfield
    onChange={() => {}}
    label="Text..."
    floatingLabel
    style={{width: '200px'}}
/>

{/* Numeric Textfield with floating label */}
<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number..."
    floatingLabel
/>
```

```jsx
{/* Floating Multiline Textfield */}
<Textfield
    onChange={() => {}}
    label="Text lines..."
    rows={3}
    style={{width: '200px'}}
/>

{/* Expandable Textfield */}
<Textfield
    onChange={() => {}}
    label="Expandable Input"
    expandable
    expandableIcon="search"
/>
```

## Configuration

| Prop     | Type      | Effect       | Remarks      |
|:---------|:----------|:-------------|:-------------|
| disabled | Boolean   | Applies the disabled state | Optional |
| error    | String    | Specifies the error message | Optional |
| expandable | Boolean | Set the textfield as expandable | Optional |
| expandableIcon | String | Set the icon for the expandable textfield | Optional |
| floatingLabel | Boolean | Applies the floating label effect | Optional |
| inputClassName | String | Set CSS classes on the input | Optional |
| label | String | Defines the input label | Required |
| maxRows | Number | Defines the max rows (multilines) | Optional |
| onChange | Function | Defines the callback to receive the change event | Optional |
| pattern | String | Defines the pattern to validate the value | Optional |
| required | Boolean | Set the textfield as required | Optional |
| rows | Number | Defines the number of rows (multiline) | Optional |
| style | Object | Defines the custom styles for the container | Optional |
| defaultValue | String or Number | Defines the 'current' value | Optional |
