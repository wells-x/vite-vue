<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0);


// 获取当前时间
const getTime = () => {
  return new Date().toLocaleTimeString();
}
const currentTime = ref(getTime());

// const timer = setInterval(() => {
//   console.log('timer is running, timer:', timer);
//   currentTime.value = getTime();
// }, 1000);
</script>

<script lang="ts">
export default {
  mounted() {
  },
  beforeUnmount() {
    // clearInterval(this.timer);
    // console.log('timer is stopped:', this.timer);
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <span>{{ currentTime }}</span>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <el-button @click="count++">count is: {{ count }}</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
