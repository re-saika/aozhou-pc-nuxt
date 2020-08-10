<template>
  <div>
    <my-header />
    <transition name="pointtwo">
      <nuxt />
    </transition>
    <my-float />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFloat from '@/components/MyFloat'
export default {
  components: {
    MyHeader,
    MyFloat
  },
  watch: {
    // 监听 route跳转时$route.fullPath'是否一样
    '$route.fullPath'(val) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
</style>
