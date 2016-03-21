---
title: Radio Button
---

## Demo

```jsx
<RadioGroup name="demo" value="opt1">
    <Radio value="opt1" ripple>Ripple option</Radio>
    <Radio value="opt2">Other option</Radio>
</RadioGroup>

<RadioGroup container="ul" childContainer="li" name="demo2" value="opt2">
    <Radio value="opt1" ripple>Ripple option</Radio>
    <Radio value="opt2">Other option</Radio>
</RadioGroup>
```

#### Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| RadioGroup| childContainer | String    | Wrap every child in the specified container  | Optional |
| RadioGroup| name         | String    | Defines the name of the radio group  | Required |
| RadioGroup| onChange     | Function  | Defines the callback to receive the change event  | Optional |
| RadioGroup| value        | String or Number  | Defines the selected value  | Required |
| Radio     | disabled     | Boolean  | Set as disabled  | Optional |
| Radio     | ripple       | Boolean  | Applies the ripple effect  | Optional |
| Radio     | value        | String or Number  | Defines the selected value  | Required |
