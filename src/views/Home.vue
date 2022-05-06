<template>
  <span>Home</span>
  <HelloWorld msg="Hello World" />
</template>

<script setup lang="ts">
import { provide } from "vue";
provide("test", 'HelloWorld');
</script>
