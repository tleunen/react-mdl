---
title: Menu
---

## Demo

```jsx_demo
{/* Lower left */}
<div style={{position: 'relative'}}>
    <IconButton name="more_vert" id="demo-menu-lower-left" />
    <Menu target="demo-menu-lower-left">
        <MenuItem>Some Action</MenuItem>
        <MenuItem>Another Action</MenuItem>
        <MenuItem disabled>Disabled Action</MenuItem>
        <MenuItem>Yet Another Action</MenuItem>
    </Menu>
</div>

{/* Lower right */}
<div style={{position: 'relative'}}>
    <IconButton name="more_vert" id="demo-menu-lower-right" />
    <Menu target="demo-menu-lower-right" align="right">
        <MenuItem>Some Action</MenuItem>
        <MenuItem>Another Action</MenuItem>
        <MenuItem disabled>Disabled Action</MenuItem>
        <MenuItem>Yet Another Action</MenuItem>
    </Menu>
</div>
```

```jsx_demo
{/* Top left */}
<div style={{position: 'relative'}}>
    <IconButton name="more_vert" id="demo-menu-top-left" />
    <Menu target="demo-menu-top-left" valign="top" ripple>
        <MenuItem>Some Action</MenuItem>
        <MenuItem>Another Action</MenuItem>
        <MenuItem disabled>Disabled Action</MenuItem>
        <MenuItem>Yet Another Action</MenuItem>
    </Menu>
</div>

{/* Top right */}
<div style={{position: 'relative'}}>
    <IconButton name="more_vert" id="demo-menu-top-right" />
    <Menu target="demo-menu-top-right" valign="top" align="right" ripple>
        <MenuItem>Some Action</MenuItem>
        <MenuItem>Another Action</MenuItem>
        <MenuItem disabled>Disabled Action</MenuItem>
        <MenuItem>Yet Another Action</MenuItem>
    </Menu>
</div>
```

## Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| Menu      | align        | String (left, right)    | Set the horizontal alignment  | Optional, default "left" |
| Menu      | ripple       | Boolean   | Apply the ripple effect  | Optional |
| Menu      | target       | String    | ID of the targeted element. A click on the targeted element will open the menu  | Required |
| Menu      | valign       | String (top, bottom)    | Set the vertical alignment  | Optional, default "bottom" |
