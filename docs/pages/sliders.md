# Sliders

## Demo

```jsx
{/* Default slider */}
<Slider min={0} max={100} defaultValue={0} />

{/* Slider with initial value */}
<Slider min={0} max={100} defaultValue={25} />
```

## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| max          | Number    | Set the maximum value  | Required |
| min          | Number    | Set the minimum value | Required |
| onChange     | Function  | Callback taking 1 parameter with the new value | Required when `value` is provided |
| value        | Number    | Set the initial/current value | Optional |
