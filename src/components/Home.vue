<template>
  <div>
    <h1>Home</h1>
    <div>welcome, {{ name }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['name']),
  },
  created() {
    this.$store.dispatch('getName');
  },
  asyncData(store) {
    return store.dispatch('getName');
  },
};
</script>

<style>
</style>