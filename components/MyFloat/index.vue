<template>
  <transition name="pointtwo">
    <div v-show="isShow" class="floatbox" @mouseleave="boxhover(0)">
      <div class="floatbox__item" @mouseover="boxhover(1)">
        <img src="@/static/images/icon/Applet.png" class="floatbox__icon1">
        <transition name="pointtwo">
          <div v-show="boxActive == 1" class="floatbox__hover">
            小程序
          </div>
        </transition>
      </div>
      <div class="floatbox__item" @mouseover="boxhover(2)">
        <img src="@/static/images/icon/weixin.png" class="floatbox__icon2">
        <transition name="pointtwo">
          <div v-show="boxActive == 2" class="floatbox__hover">
            公众号
          </div>
        </transition>
      </div>
      <div class="floatbox__item" @mouseover="boxhover(3)">
        <img src="@/static/images/icon/service.png" class="floatbox__icon3">
        <transition name="pointtwo">
          <div v-show="boxActive == 3" class="floatbox__hover">
            客服
          </div>
        </transition>
      </div>
      <div class="floatbox__item floatbox__item_last" @mouseover="boxhover(4)" @click="backTop">
        <img src="@/static/images/icon/top.png" class="floatbox__icon4">
        <transition name="pointtwo">
          <div v-show="boxActive == 4" class="floatbox__hover">
            顶部
          </div>
        </transition>
      </div>

      <transition name="pointtwo">
        <div v-show="boxActive == 1" class="floatbox__msg">
          <img class="floatbox__img" src="@/static/images/icon/Applet_code.jpg">
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-show="boxActive == 2" class="floatbox__msg">
          <img class="floatbox__img" src="@/static/images/icon/gzh.jpg">
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-show="boxActive == 3" class="floatbox__msg2">
          020-38882777
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      boxActive: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showMenu)
  },
  methods: {
    showMenu() {
      if (!!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 500) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    backTop() {
      // document.documentElement.scrollTop = 0
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    },
    boxhover(index) {
      this.boxActive = index
    }
  }
}
</script>

<style lang="scss" scoped>
.floatbox {
  position: fixed;
  right: -25px;
  top: 50%;
  z-index: 999; // 绝对最高
  transform: translate(-50%, -50%);
  width:55px;
  height:223px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(217,217,217,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  .floatbox__item {
    border-bottom: 1px solid #C9C9C9;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .floatbox__hover {
      position: absolute;
      top: 0;
      width: 55px;
      height: 55px;
      background: #062A5A;
      color: white;
      font-size: 14px;
      line-height: 55px;
      text-align: center;
      cursor: pointer;
    }
    .floatbox__icon1 {
      width: 30px;
      height: 30px;
    }
    .floatbox__icon3 {
      width: 28px;
      height: 22px;
    }
    .floatbox__icon4 {
      width: 22px;
      height: 24px;
    }
  }
  .floatbox__item_last {
    border: none;
  }
  .floatbox__msg {
    width: 224px;
    height: 224px;
    background: #062A5A;
    position: fixed;
    right: -54px;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .floatbox__img {
      width: 120px;
      height: 120px;
    }
  }
  .floatbox__msg2 {
    width: 224px;
    height: 56px;
    background: #062A5A;
    position: fixed;
    right:-54px;
    top: 50%;
    transform: translate(-50%, -2%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    line-height: 55px;
    text-align: center;
}
}
</style>
