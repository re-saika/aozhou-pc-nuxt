<template>
  <div class="subTitle">
    <div class="subTitle__text">
      {{ subTitle }}
    </div>
    <hr class="subTitle__hr">
    <div class="subTitle__en">
      {{ subTitleEn }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      default: ''
    },
    subTitleEn: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.subTitle {
  background-image: url('~static/images/img/head_title_bg.png');
  width:100%;
  height:400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .subTitle__text {
    font-size:38px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:52px;
    text-shadow:1px 2px 8px rgba(51,51,51,0.69);
    padding-bottom: 8px;
  }
  .subTitle__en {
    font-size:28px;
    font-family:Microsoft YaHei;
    font-weight:300;
    color:rgba(255,255,255,1);
    line-height:52px;
    text-shadow:1px 2px 8px rgba(51,51,51,0.69);
  }
  .subTitle__hr {
    width:200px;
    height:1px;
    background:rgba(255,255,255,1);
  }
}
</style>
