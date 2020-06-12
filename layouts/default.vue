<template>
  <div>
    <my-header />
    <transition name="pointtwo">
      <nuxt />
    </transition>
    <my-footer />
    <my-float />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
import MyFloat from '@/components/MyFloat'
export default {
  components: {
    MyHeader,
    MyFloat,
    MyFooter
  },
  mounted() {
    // console.log(this.$route)
  }
}
</script>

<style>
</style>
