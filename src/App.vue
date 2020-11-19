<template>
  <div id="app">
    <keep-alive>
      <!-- 需要缓存的组件 -->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <!-- 不需要缓存的组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
