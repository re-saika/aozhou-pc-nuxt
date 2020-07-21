<template>
  <div class="viewbox" :class="big?'viewbox_big':''" @click="toDetail()">
    <div class="viewbox__vbox" :class="big?'viewbox__vbox_big':''">
      <img :src="img+'?imageMogr2/thumbnail/!40p' || require('@/static/images/icon/default.png')" class="viewbox__view">
      <img v-if="isVideo" src="@/static/images/icon/bigplay_icon.png" class="viewbox__play">
    </div>
    <div class="view__content">
      <div class="view__title">
        <!-- <img class="view__playicon" src="@/static/images/icon/play_icon.png"> -->
        <div class="text-overs text-overs_viewbox">
          {{ title }}
        </div>
      </div>
      <div class="view__msg text-over">
        {{ content }}
        <!-- <div>2020-05-15 12:20</div>
        <div>
          <img src="@/static/images/icon/see_icon.png" class="view__seeicon"> -->
        <!-- 88888 -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVideo: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    vid: {
      type: Number,
      default: null
    },
    link: {
      type: String,
      default: ''
    },
    big: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    toDetail() {
      if (this.link !== '') {
        window.open(this.link)
      } else {
        let name = ''
        if (this.isVideo) {
          name = 'estate-video'
        } else {
          name = 'estate-article'
        }
        this.$router.push({
          name,
          query: {
            id: this.vid
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.viewbox {
  width:382px;
  // height:325px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(227,227,227,1);
  border-radius:4px;
  transition: all .2s;
  .viewbox__vbox {
    position: relative;
    width:380px;
    height:240px;
    .viewbox__play {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 73px;
      height: 73px;
      transform: translate(-50%, -50%);
    }
  }
  .viewbox__vbox_big {
    width: 477px;
    height: 301px;
  }
  .viewbox__view {
    width: 100%;
    height: 100%;
    border-radius:4px 4px 0px 0px;
    object-fit: cover;
    object-position: center;
  }
  .view__content {
    padding: 20px;
    .view__title {
      display: flex;
      margin-bottom: 13px;
      font-size:18px;
      font: 18px "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
      font-weight:400;
      color:rgba(51,51,51,1);
      .view__playicon {
        width: 16px;
        height: 16px;
        margin-right: 15px;
      }
    }
    .text-overs_viewbox {
      height: 46px;
      line-height: 24px;
    }
    .view__msg {
      font-size:16px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
  }
}
.viewbox_big {
  width:479px;
}
.viewbox:hover {
  border: 1px solid #062A5A;
  transition: all .2s;
}
.text-overs {
  height: 36px;
}
</style>
