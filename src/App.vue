<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <base1 mac="my first demo" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import base1 from './components/base1'

export default {
  name: 'App',
  components: {
    HelloWorld,
    base1
  }
}
</script>

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
