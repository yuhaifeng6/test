<template>
  <div class="hello">
    用户名：<input type="text" placeholder="用户名" v-model="form.username">
    密码：<input type="text" placeholder="密码" v-model="form.pwd">
    <button @click="login">登录</button>
    <button @click="routeMsg">查看路由信息</button>
    <button @click="toSub">跳转到sub1</button>
  </div>
</template>

<script>
const path = require('path');
const files = require.context('@/assets/js', true, /\.js$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.js')
  modules[name] = files(key).default || files(key)
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        username: "",
        pwd: ""
      },
      x: 1,
      y: 2
    }
  },
  mounted() {
    modules.t1.t1();
    modules.t2.t2();
    modules.t3.t3();
    [this.x, this.y] = [this.y, this.x];
    console.log(this.x, this.y) // 2 1
  },
  methods: {
    login(){
      var that = this;
      that.$http.post("/api/login", that.form)
        .then(res => {
          if (res.data.code == 0) {
            that.$store.commit("login_in", res.data.data.token)
            alert("登录成功！")
            that.$router.push("/list")
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    routeMsg(){
      console.log(this.$route)
    },
    toSub(){
      this.$router.push("/subBox")
    }
  },
  updated () {
    console.log('触发了')
  }
}
</script>

<style scoped>

</style>
