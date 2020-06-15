<template>
  <nav class="navigation">
    <div class="navigation__item" @click="routeTo('index')">
      首页
    </div>
    <img src="@/static/images/icon/down.png" class="navigation__icon">
    <div class="navigation__item" @click="routeTo('about')">
      联系我们
    </div>
    <img src="@/static/images/icon/down.png" class="navigation__icon">
    <div class="navigation__item font-blue">
      <span>关于我们</span>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    routeTo(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(153,153,153,1);
  display: flex;
  height: 16px;
  align-items: center;
  .navigation__icon {
    width:16px;
    height:9px;
    margin: 0 8px;
    transform:rotate(-90deg);
  }
}
</style>
