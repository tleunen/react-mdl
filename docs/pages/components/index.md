---
title: Components
---

React-MDL is a set of React Components for [Material Design Lite](http://www.getmdl.io), often called "MDL", a library of vanilla components maintained by Google.

The current implementation of React-MDL (v1.x) uses the entire MDL library provided by Google. This includes both the MDL css and the MDL javascript. Therefore, for you to use the library, you have to also require the original MDL files. And we suggest you to use the files we provide in the `/extra` directory of the repository.

```html
<link rel="stylesheet" href="material.css">
<script src="material.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

The next major version (2.x) will remove the MDL css and js dependency.
