# Loading

## Demo

```jsx
{/* Simple tooltip */}
<Tooltip label="Follow">
    <Icon name="add" />
</Tooltip>

{/* Large Tooltip */}
<Tooltip label="Print" large>
    <Icon name="print" />
</Tooltip>
```
```jsx
{/* Rich Tooltip */}
<Tooltip label={<span>Upload <strong>file.zip</strong></span>}>
    <Icon name="cloud_upload" />
</Tooltip>

{/* Multiline Tooltip */}
<Tooltip label={<span>Share your content<br />via social media</span>}>
    <Icon name="share" />
</Tooltip>
```

## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| label        | Element or String    | Specify the content of the tooltip  | Required |
| large        | Boolean   | Defines a large tooltip | Optional |
