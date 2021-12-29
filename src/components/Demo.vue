<template>
  <div>
    <input type="text" v-model="val" />
    <p>输入框中的内容为：{{ val }}</p>
    <div class="button" @click="handleClick">click me</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 'SS',
    };
  },
  methods: {
      handleClick(){
          alert(this.val)
      }
  },
};
</script>

<style>
.button {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>