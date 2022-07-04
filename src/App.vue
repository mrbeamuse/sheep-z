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
  <s-button type="primary" size="large">确定</s-button>
  <s-button type="primary" size="medium">确定</s-button>
  <s-button type="primary" disabled>Disabled</s-button>
  <s-button block>Cancel</s-button>
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
