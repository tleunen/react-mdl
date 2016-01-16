# Toggles

- [Checkbox](#checkbox)
- [Radio Button](#radio-button)
- [Icon Toggle](#icon-toggle)
- [Switch](#switch)

## Demo

### Checkbox

```jsx
<Checkbox label="With ripple" ripple defaultChecked />

<Checkbox label="Without ripple" />
```

#### Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| checked      | Boolean   | Defines the checkbox as "checked"  | Optional |
| disabled     | Boolean   | Defines the checkbox as "disabled" | Optional |
| label        | String    | Defines the label | Optional |
| onChange     | Function  | Callback to receive the change event | Optional |
| ripple       | Boolean   | Applies the ripple effect | Optional |

### Radio Button

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


### Icon Toggle

```jsx
<IconToggle ripple id="bold" name="format_bold" defaultChecked />

<IconToggle id="italic" name="format_italic" />
```

#### Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| checked      | Boolean   | Defines the checkbox as "checked"  | Optional |
| disabled     | Boolean   | Defines the checkbox as "disabled" | Optional |
| name         | String    | Defines the name | Required |
| onChange     | Function  | Callback to receive the change event | Optional |
| ripple       | Boolean   | Applies the ripple effect | Optional |


### Switch

```jsx
<Switch ripple id="switch1" defaultChecked>Ripple switch</Switch>

<Switch id="switch2">Switch</Switch>
```

#### Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| checked      | Boolean   | Defines the checkbox as "checked"  | Optional |
| disabled     | Boolean   | Defines the checkbox as "disabled" | Optional |
| onChange     | Function  | Callback to receive the change event | Optional |
| ripple       | Boolean   | Applies the ripple effect | Optional |
