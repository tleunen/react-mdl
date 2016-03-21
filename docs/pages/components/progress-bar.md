---
title: Progress Bar
---

## Demo

```jsx_demo
{/* Simple Progress Bar */}
<ProgressBar progress={44} />
```
```jsx_demo
{/* Progress Bar with Indeterminate Progress */}
<ProgressBar indeterminate />
```
```jsx_demo
{/* Progress Bar with Buffering */}
<ProgressBar progress={33} buffer={87} />
```


#### Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| buffer       | Number    | Specify the buffer  | Optional |
| indeterminate| Boolean   | Set as indeterminate | Optional |
| progress     | Number    | Specify the progress value | Optional |
