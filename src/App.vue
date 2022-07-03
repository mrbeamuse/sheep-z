<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
const onClick = value => {
  console.log('clicked', value)
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Test @click="onClick">
    <template #default></template>
    <template #title> title </template>
  </Test>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
