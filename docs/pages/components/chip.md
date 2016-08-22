---
title: Chip
---

## Demo

### Chip

```jsx_demo
<Chip>Basic chip</Chip>

<Chip onClose={e => { alert('Close icon clicked!'); }}>Deletable Chip</Chip>

<Chip onClick={e => { alert('Clicked!'); }}>Button Chip</Chip>
```

```jsx_demo
{/* Contact Chip */}
<Chip>
    <ChipContact className="mdl-color--teal mdl-color-text--white">A</ChipContact>
    Contact chip
</Chip>

{/* User Contact Chip */}
<Chip onClose={e => { alert('Close icon clicked!'); }}>
    <ChipContact
        style={{ background: 'url("https://placekitten.com/150/150") 0 0 / cover' }}
    />
    Deletable user contact chip
</Chip>
```

#### Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| onClick      | Function   | Defines the Chip as a `button` and add the onClick handler  | Optional |
| onClose      | Function   | Add a close button  | Optional |
