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

      <div class="floatbox__item" @mouseover="boxhover(4)">
        <img src="@/static/images/icon/beijng.png" class="floatbox__icon1">
        <transition name="pointtwo">
          <div v-show="boxActive == 4" class="floatbox__hover">
            北京
          </div>
        </transition>
      </div>
      <div class="floatbox__item" @mouseover="boxhover(5)">
        <img src="@/static/images/icon/shanghai.png" class="floatbox__icon1">
        <transition name="pointtwo">
          <div v-show="boxActive == 5" class="floatbox__hover">
            上海
          </div>
        </transition>
      </div>
      <div class="floatbox__item" @mouseover="boxhover(6)">
        <img src="@/static/images/icon/guangzhou.png" class="floatbox__icon1">
        <transition name="pointtwo">
          <div v-show="boxActive == 6" class="floatbox__hover">
            广州
          </div>
        </transition>
      </div>

      <div class="floatbox__item floatbox__item_last" @mouseover="boxhover(-1)" @click="backTop">
        <img src="@/static/images/icon/top.png" class="floatbox__icon4">
        <transition name="pointtwo">
          <div v-show="boxActive == -1" class="floatbox__hover">
            顶部
          </div>
        </transition>
      </div>

      <transition name="pointtwo">
        <div v-show="boxActive == 1" class="floatbox__msg">
          <img class="floatbox__img" src="@/static/images/img/xcx.png">
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-show="boxActive == 2" class="floatbox__msg">
          <img class="floatbox__img" src="@/static/images/img/gzh.png">
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-show="boxActive == 3" class="floatbox__msg2">
          400-3888-2777
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-show="boxActive == 4" class="floatbox__msg3 kf bg1">
          <div class="kf__msg">
            <div>姓名：李珊珊</div>
            <div class="kf__line">电话:16601271144</div>
          </div>
          <div class="kf__code">
            <img src="@/static/images/img/float_code1.png">
            <div>北京销售咨询</div>
          </div>
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-show="boxActive == 5" class="floatbox__msg3 kf bg2">
          <div class="kf__msg">
            <div>姓名:贾燕飞</div>
            <div class="kf__line">电话:18964603231</div>
          </div>
          <div class="kf__code">
            <img src="@/static/images/img/float_code2.png">
            <div>北京销售咨询</div>
          </div>
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-show="boxActive == 6" class="floatbox__msg3 kf bg3">
          <div class="kf__msg">
            <div>姓名:李秋莹</div>
            <div class="kf__line">电话:13580394899</div>
          </div>
          <div class="kf__code">
            <img src="@/static/images/img/float_code3.png">
            <div>北京销售咨询</div>
          </div>
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
  // height:223px;
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
    .floatbox__icon2 {
      width: 31px;
      height: 25px;
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
      width: 150px;
      height: 150px;
      background-color: #FFFFFF;
      padding: 10px;
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
  .floatbox__msg3 {
    width: 388px;
    height: 224px;
    position: fixed;
    right:-140px;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 30px 40px 30px;
  }
}
.kf {
  &__msg {
    font-size: 20px;
    font-family: PingFang SC;
    color: #F9F9F9;
  }
  &__line {
    margin-top: 20px;
  }
  &__code {
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
    }
    font-size: 16px;
    font-family: PingFang SC;
    color: #F9F9F9;
  }
}
.bg1 {
  background-image: url("~@/static/images/icon/float_bg1.png");
  background-size: 100% 100%;
}
.bg2 {
  background-image: url("~@/static/images/icon/float_bg2.png");
  background-size: 100% 100%;
}
.bg3 {
  background-image: url("~@/static/images/icon/float_bg3.png");
  background-size: 100% 100%;
}
</style>
