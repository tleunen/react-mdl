# Sliders

## Demo

```jsx
{/* Default slider */}
<Slider min={0} max={100} value={0} onChange={() => {}} />

{/* Slider with initial value */}
<Slider min={0} max={100} value={25} onChange={() => {}} />
```

## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| max          | Number    | Set the maximum value  | Required |
| min          | Number    | Set the minimum value | Required |
| onChange     | Function  | Callback taking 1 parameter with the new value | Required |
| value        | Number    | Set the initial/current value | Required |
