<template>
  <article class="article-html" v-html="info" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '没有内容'
    }
  },
  computed: {
    info() {
      return `${this.content.replace(/<div style="max-width: 100%; white-space: nowrap;/g, '<div style="max-width: 100%; white-space: nowrap;display: flex;')}`
    }
  }
}
</script>

<style scoped>
.article-html {
  height: auto;
  padding-bottom: 50px;
}
.article-html>>> img {
  display: block;
  margin: 0 auto;
  max-width: 100% !important;
  height: auto !important;
}
.article-html>>> iframe {
  width: 100%;
  height: 476px;
}
.article-html>>> p {
  max-width: 100%;
  word-break: break-all;
  line-height: 18px;
  /* font-size: 18px !important; */
}
.article-html>>> section {
  max-width: 100%;
  word-break: break-all;
  line-height: 18px;
  /* font-size: 18px !important; */
}
.article-html>>> span {
  max-width: 100%;
  word-break: break-all;
}
.article-html>>> table {
  width: 100%;
}
</style>
