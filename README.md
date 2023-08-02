# VueTable

This is a Table component for Vue.js

## Installation

```
npm i @harv46/vue-table
```

## Example

```js
<script>
import { VueTable  } from "@harv46/vue-table"
import "@harv46/vue-table/dist/style.css"

const header = ["Name", "Age"]
const keys=["name", "age"]

const data = [{
    name: "Example Name 1",
    age: 22
}, {
    name: "Example Name 2",
    age: 17
}]
</script>

<template>
    <div>
      <VueTable :headers="header" :data="data" :keys="keys" />
    </div>
</template>
```

### Props

| Prop             | Description                                                                  | Default |
| ---------------- | ---------------------------------------------------------------------------- | ------- |
| `data`           | Data to be rendered                                                          | `[]`    |
| `headers`        | heading of the table                                                         | `[]`    |
| `keys`           | Keys of the table data (can be nested)                                       | `[]`    |

