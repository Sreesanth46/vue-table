<script setup>
import { VueTable, VuePaginator } from "../../dist/es.js";
import "../../dist/style.css";

const headers = ["name", "age"];
const keyValues = ["name", "age"];
const data = [
    { name: "example 1", age: 19 },
    { name: "example 2", age: 22 },
    { name: "example 3", age: 40 },
];
</script>

<template>
    <div
        style="
            width: 90%;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            margin-top: 6%;
        "
    >
        <VueTable :headers="headers" :keys="keyValues" :data="data" />
        <div style="display: flex; flex-direction: column; align-items: center; margin-top: 2rem;">
            <VuePaginator />
            <br>
            <VuePaginator large/>
        </div>
    </div>
</template>
