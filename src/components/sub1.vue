<template>
  <div class="sub1">
    {{name}}是一个{{sex}}孩。
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  name:"sub1",
  data() {
    return {

    };
  },
  created() {},
  mounted() {
    this.showState("yhf666")
  },
  computed: {
    ...mapState({
      loadStatus: 'loadStatus',
      sum: 'sum',
      name: 'name',
      sex: 'sex'
    })
  },
  methods: {
    ...mapMutations(
      ['showState'] // this.$store.commit('showState)直接映射为this.showState()
    )
  },
};
</script>

<style lang="scss" scoped>

</style>
