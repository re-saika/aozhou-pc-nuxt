<template>
  <div class="whitebg">
    <div class="vlist__nav">
      <nav class="navigation">
        <div class="navigation__item" @click="routeTo('index')">
          首页
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div class="navigation__item" @click="routeTo('estate')">
          澳洲利好
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div class="navigation__item font-blue">
          视频
        </div>
      </nav>
    </div>
    <!-- 直播 -->
    <div class="index__bg">
      <article class="swiper-box">
        <div class="swiper-box__box">
          <div class="infobox__title">
            <div>直播视频</div>
            <div class="swiper-box__nav">
              <div class="swiper-box__more" @click="toLive">
                更多<img class="more_icon" src="@/static/images/icon/right_gray.png">
              </div>
            </div>
          </div>
          <div class="lbanner">
            <div class="swiper-wrapper">
              <!-- <div v-for="v in videoList" :key="v.id" class="swiper-box__content swiper-slide"> -->
              <viewbox
                v-for="item in videoList[0].data"
                :key="item.id"
                class="viewbox_home"
                :is-video="true"
                :vid="item.id"
                :img="item.aid"
                :link="item.link"
                :title="item.name"
                :content="item.introduction"
              />
              <!-- </div> -->
            </div>
            <empty v-if="videoList.length === 0" />
          </div>
        </div>
      </article>
    </div>
    <!-- 项目 -->
    <div class="index__bg">
      <article class="swiper-box">
        <div class="swiper-box__box">
          <div class="infobox__title">
            <div>{{ videoList[1].name }}</div>
            <div class="swiper-box__nav">
              <div class="swiper-box__more" @click="routeTo('estate-videoList-projectVideo')">
                更多<img class="more_icon" src="@/static/images/icon/right_gray.png">
              </div>
            </div>
          </div>
          <div class="lbanner">
            <div class="swiper-wrapper">
              <!-- <div v-for="v in videoList" :key="v.id" class="swiper-box__content swiper-slide"> -->
              <viewbox
                v-for="item in videoList[1].data"
                :key="item.id"
                class="viewbox_home"
                :is-video="true"
                :vid="item.id"
                :img="item.aid"
                :link="item.link"
                :title="item.name"
                :content="item.introduction"
              />
              <!-- </div> -->
            </div>
            <empty v-if="videoList.length === 0" />
          </div>
        </div>
      </article>
    </div>
    <!-- 澳洲视频 -->
    <div class="index__bg">
      <article class="swiper-box">
        <div class="swiper-box__box">
          <div class="infobox__title">
            <div>{{ videoList[2].name }}</div>
            <!-- <div class="swiper-box__nav">
              <div class="swiper-box__more" @click="routeTo('estate-videoList-projectVideo')">
                更多<img class="more_icon" src="@/static/images/icon/right_gray.png">
              </div>
            </div> -->
          </div>
          <div class="lbanner">
            <div class="swiper-wrapper">
              <!-- <div v-for="v in videoList" :key="v.id" class="swiper-box__content swiper-slide"> -->
              <viewbox
                v-for="item in videoList[2].data"
                :key="item.id"
                class="viewbox_home"
                :is-video="true"
                :vid="item.id"
                :img="item.aid"
                :link="item.link"
                :title="item.name"
                :content="item.introduction"
              />
              <!-- </div> -->
            </div>
            <empty v-if="videoList.length === 0" />
          </div>
        </div>
      </article>
    </div>
    <!-- <mfooter ref=foot></mfooter> -->
  </div>
</template>

<script>
import viewbox from '@/components/Viewbox'
import empty from '@/components/Empty'
import tran from '@/mixins/tran'

export default {
  components: {
    viewbox,
    empty
  },
  mixins: [tran],
  async asyncData({ app }) {
    try {
    // 获得文章列表
      return await app.$api.estate.setHouseAus().then(({ data }) => {
        return {
          videoList: data[0].children || []
        }
      })
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      videoList: []
    }
  },
  methods: {
    toLive() {
      window.open('https://play.yunxi.tv/wechat/liveroom/67407?key=1d5fdb0bcd0510df2d1b183292b3edaf')
    },
    routeTo(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.whitebg {
  width: 100%;
  background: #F5F8FB;
}
.vlist__nav {
  width: 100%;
  margin-bottom: 50px;
  .navigation {
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    display: flex;
    height: 48px;
    align-items: center;
    width: 1200px;
    margin: auto;
    cursor: pointer;
    .navigation__icon {
      width:16px;
      height:9px;
      margin: 0 8px;
      transform:rotate(-90deg);
    }
  }
}
/* 直播视频 */
.index__bg {
  // background: #F5F8FB;
  width: 100%;
  padding-bottom: 50px;
}
.swiper-box {
  margin: auto;
  width: 1200px;
  // max-width: 1510px;
  .swiper-box__box {
    .infobox__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-left: 4px solid #123467;
      height: 40px;
      font-size:30px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(51,51,51,1);
      padding-left: 10px;
      margin-bottom: 25px;
      .swiper-box__nav {
        display: flex;
        .swiper-box__ul {
          display: flex;
          .swiper-box__li {
            cursor: pointer;
            margin-right: 46px;
            list-style: none;
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(102,102,102,1);
            position: relative;
            .swiper-box__lipoint {
              position: absolute;
              bottom: -12px;
              width:72px;
              height:7px;
              left: 0;
            }
          }
          .swiper-box__li_active {
            color:#062A5A;
          }
        }
      }
      .swiper-box__more {
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#999999;
        display: flex;
        align-items: center;
        cursor: pointer;
        .more__icon {
          width:18px;
          height:11px;
          // transform: rotate(30deg);
          transform: rotate(30deg);
        }
      }
    }
    .swiper-box__content {
      display: flex;
      // justify-content: space-between;
    }
    .viewbox_home {
      margin-right: 25px;
    }
  }
}
</style>
