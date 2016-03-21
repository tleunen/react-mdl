---
title: Buttons
---

## Demo

```jsx_demo
{/* Colored FAB button */}
<FABButton colored>
    <Icon name="add" />
</FABButton>

{/* Colored FAB button with ripple */}
<FABButton colored ripple>
    <Icon name="add" />
</FABButton>
```

```jsx_demo
{/* FAB button */}
<FABButton>
    <Icon name="add" />
</FABButton>

{/* FAB button with ripple */}
<FABButton ripple>
    <Icon name="add" />
</FABButton>

{/* Disabled FAB button */}
<FABButton disabled>
    <Icon name="add" />
</FABButton>
```

```jsx_demo
{/* Mini FAB button */}
<FABButton mini>
    <Icon name="add" />
</FABButton>

{/* Colored Mini FAB button */}
<FABButton mini colored>
    <Icon name="add" />
</FABButton>
```

```jsx_demo
{/* Raised button */}
<Button raised>Button</Button>

{/* Raised button with ripple */}
<Button raised ripple>Button</Button>

{/* Disabled Raised button */}
<Button raised disabled>Button</Button>
```

```jsx_demo
{/* Colored Raised button */}
<Button raised colored>Button</Button>

{/* Accent-colored button without ripple */}
<Button raised accent>Button</Button>

{/* Accent-colored button with ripple */}
<Button raised accent ripple>Button</Button>
```

```jsx_demo
{/* Flat button */}
<Button>Button</Button>

{/* Flat button with ripple */}
<Button ripple>Button</Button>

{/* Disabled flat button */}
<Button disabled>Button</Button>
```

```jsx_demo
{/* Primary colored flat button */}
<Button primary>Button</Button>

{/* Accent-colored flat button */}
<Button accent>Button</Button>
```

```jsx_demo
{/* Icon button */}
<IconButton name="mood" />

{/* Colored Icon button */}
<IconButton name="mood" colored />
```

## Configuration

| Prop     | Type      | Effect       | Remarks      |
|:---------|:----------|:-------------|:-------------|
| accent   | Boolean   | Applies "accent" colors  | Optional |
| colored  | Boolean   | Applies "colored" colors | Optional |
| component| String, Element, Function   | Specify the custom component to use to render the element | Optional. Default 'div' |
| mini     | Boolean   | Set the button as "mini" | Optional, works only with "FABButton" |
| name     | String    | Set the icon name" | Optional, works only with "IconButton" |
| primary  | Boolean   | Applies "primary" colors | Optional |
| raised   | Boolean   | Applies "raised" button style | Optional, doesn\'t work with "FABButton" |
| ripple   | Boolean   | Applies "ripple" click effect | Optional |
