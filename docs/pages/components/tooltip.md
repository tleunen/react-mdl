---
title: Tooltip
---

## Demo

```jsx_demo
{/* Simple tooltip */}
<Tooltip label="Follow">
    <Icon name="add" />
</Tooltip>

{/* Large Tooltip */}
<Tooltip label="Print" large>
    <Icon name="print" />
</Tooltip>
```
```jsx_demo
{/* Rich Tooltip */}
<Tooltip label={<span>Upload <strong>file.zip</strong></span>}>
    <Icon name="cloud_upload" />
</Tooltip>

{/* Multiline Tooltip */}
<Tooltip label={<span>Share your content<br />via social media</span>}>
    <Icon name="share" />
</Tooltip>
```
```jsx_demo
{/* Right Tooltip */}
<Tooltip label="Follow" position="right">
    <Icon name="arrow_forward" />
</Tooltip>

{/* Left Tooltip */}
<Tooltip label="Follow" position="left">
    <Icon name="arrow_back" />
</Tooltip>

{/* Top Tooltip */}
<Tooltip label="Follow" position="top">
    <Icon name="arrow_upward" />
</Tooltip>

{/* Bottom Tooltip */}
<Tooltip label="Follow" position="bottom">
    <Icon name="arrow_downward" />
</Tooltip>
```

## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| label        | Element or String    | Specify the content of the tooltip  | Required |
| large        | Boolean   | Defines a large tooltip | Optional |
| position     | String[left, right, top, bottom] | Specify the position of the tooltip | Optional |
