# Loading

- [Progress Bar](#progress-bar)
- [Spinner](#spinner)

## Demo

### Progress Bar

```jsx
{/* Simple Progress Bar */}
<ProgressBar progress={44} />
```
```jsx
{/* Progress Bar with Indeterminate Progress */}
<ProgressBar indeterminate />
```
```jsx
{/* Progress Bar with Buffering */}
<ProgressBar progress={33} buffer={87} />
```


#### Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| buffer       | Number    | Specify the buffer  | Optional |
| indeterminate| Boolean   | Set as indeterminate | Optional |
| progress     | Number    | Specify the progress value | Optional |


### Spinner

```jsx
{/* Simple spinner */}
<Spinner />

{/* Single color spinner */}
<Spinner singleColor />
```

#### Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| singleColor  | Boolean   | Use the primary color instead of a multi color spinner  | Optional |
