<template>
  <span>Home</span>
  <!-- <img src="../assets/logo.png" alt="vue logo" /> -->
  <HelloWorld msg="Hello World" />
</template>

<script setup lang="ts">
import { provide } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
provide("test", 'HelloWorld');
</script>