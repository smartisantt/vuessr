<template>
  <div id="app">
    <h1>app</h1>
    <router-link to="/">首页</router-link>
    <router-link to="/demo">demo</router-link>
    <router-view />
  </div>
</template>

<script>
import Demo from './components/Demo.vue';
export default {
  components: {
    Demo,
  },
};
</script>

<style>
</style>