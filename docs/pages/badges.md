# Badges

## Demo

```jsx
{/* Number badge on icon */}
<Badge text="1" overlap>
    <Icon name="account_box" />
</Badge>

{/* Icon badge on icon */}
<Badge text="♥" overlap>
    <Icon name="account_box" />
</Badge>
```

```jsx
{/* Number badge on text */}
<Badge text="4">Inbox</Badge>

{/* Icon badge without background on text */}
<Badge text="♥" noBackground>Mood</Badge>
```

## Configuration

| Prop     | Effect       | Remarks  |
|:---------|:-------------|:---------|
| text     | Assign string value to badge | Required |
| overlap  | Makes the badge overlaps its container | Optional |
| noBackground  | Removes the background of the badge | Optional |
