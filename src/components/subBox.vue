<template>
  <div class="sub_box">
      <button @click="go(1)">点击sub1</button>
      <button @click="go(2)">点击sub2</button>
      <button @click="go(3)">点击sub3</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"sub_box",
  data() {
    return {

    };
  },
  created() {},
  mounted() {},
  methods: {
      go(val){
        this.$router.push("/subBox/sub" + val);
      }
  },
};
</script>

<style lang="scss" scoped>

</style>
