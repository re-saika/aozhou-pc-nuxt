<template>
  <div>
    <transition name="pointtwo">
      <nuxt />
    </transition>
    <my-footer />
    <my-float />
  </div>
</template>

<script>
import MyFooter from '@/components/MyFooter'
import MyFloat from '@/components/MyFloat'
export default {
  components: {
    MyFloat,
    MyFooter
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
