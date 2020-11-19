<template>
  <div>
    <div v-for="(item, index) in arr" :key="index">
      <div v-for="(aitem, aindex) in item" :key="aindex">
        {{aitem.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"list",
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$nextTick(() => {
      let arr = 
      [
        [
          {
            name: '张三'
          },
          {
            name: '李四'
          }
        ],
        [
          {
            name: '王五'
          },
          {
            name: '王八'
          }
        ]
      ]
      this.arr = arr
    })
  },
  mounted() {},
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
