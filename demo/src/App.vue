<script setup>
import { VueTable } from "../../dist/es.js";
import "../../dist/style.css";

const headers = ["name", "age"];
const keyValues = ["name", "age"];
const datas = [
    { name: "example 1", age: 19 },
    { name: "example 2", age: 22 },
    { name: "example 3", age: 40 },
];
</script>

<template>
    <div style="width: 90%">
        <VueTable :headers="headers" :keys="keyValues" :data="datas" />
    </div>
</template>
