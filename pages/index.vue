<template>
  <div class="container gray">
    <!-- 轮播 -->
    <div ref="banner" class="banner-warp">
      <div class="banner__menu-warp">
        <div class="banner__menu">
          <ul class="menu">
            <li
              v-for="(item, index) in menuData"
              :key="index"
              :class="bannerActive === index && index === 0?'menu__item_activef':bannerActive === index && index === 3?'menu__item_activel':bannerActive === index?'menu__item_active':''"
              class="menu__item"
              @click="clickFun(index)"
            >
              <a>{{ item }}</a>
              <!-- <a :class="index === 0?'menu__item_firsta':index === 3?'menu__item_lasta':''">{{item}}</a> -->
              <img src="@/static/images/icon/r_w_arrow.png" alt>
            </li>
          </ul>
          <div class="menu__btns">
            <div class="menu__bannerbtn" @click="toDetail()" />
            <div class="rotation__prev swiper-button-prev" />
            <div class="rotation__next swiper-button-next" />
          </div>
        </div>
      </div>
      <div
        v-swiper:mySwiper="swiperOption"
        class="banner"
        :auto-update="true"
        @slideChangeTransitionStart="bannerStart"
      >
        <div class="swiper-wrapper">
          <div class="swiper__item swiper-slide">
            <img class="swiper__img" src="@/static/images/img/banner/lc.png">
            <div class="rotation__mask" />
            <div class="w1200 swiper__flexbox">
              <div class="swiper__content">
                <h3>墨尔本CBD西综合体现房</h3>
                <h3>房源托管服务 3年15%高收益</h3>
                <div class="swiper__row">
                  <button @click="toDetail(6)">
                    查看详情
                  </button>
                  <div class="swiper__position">
                    <img class="swiper__position-img" src="@/static/images/icon/position.png" alt>
                    <span>澳洲·墨尔本</span>
                  </div>
                </div>
                <div class="swiper__label">
                  <ul class="swiper__list">
                    <li>城央综合体</li>
                    <li>维多利亚大学旁</li>
                    <li>网红古建</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper__item swiper-slide">
            <img class="swiper__img" src="@/static/images/img/banner/wl.png">
            <div class="rotation__mask" />
            <div class="w1200 swiper__flexbox">
              <div class="swiper__content">
                <h3>布里斯班新地标 CBD水景学位房</h3>
                <h3>southbank地铁旁</h3>
                <div class="swiper__row">
                  <button @click="toDetail(1)">
                    查看详情
                  </button>
                  <div class="swiper__position">
                    <img class="swiper__position-img" src="@/static/images/icon/position.png" alt>
                    <span>澳洲·布里斯班</span>
                  </div>
                </div>
                <div class="swiper__label">
                  <ul class="swiper__list">
                    <li>南布里斯班最高地标</li>
                    <li>CBD10分钟生活圈</li>
                    <li>昆士兰州南布里斯班</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper__item swiper-slide">
            <img class="swiper__img" src="@/static/images/img/banner/ms.png">
            <div class="rotation__mask" />
            <div class="w1200 swiper__flexbox">
              <div class="swiper__content">
                <h3>澳洲永久产权土地</h3>
                <h3>世世代代做地主</h3>
                <div class="swiper__row">
                  <button @click="toDetail(7)">
                    查看详情
                  </button>
                  <div class="swiper__position">
                    <img class="swiper__position-img" src="@/static/images/icon/position.png" alt>
                    <span>澳洲·布里斯班</span>
                  </div>
                </div>
                <div class="swiper__label">
                  <ul class="swiper__list">
                    <li>永久产权土地</li>
                    <li>澳洲布里斯班南</li>
                    <li>昆士兰大学旁</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper__item swiper-slide">
            <img class="swiper__img" src="@/static/images/img/banner/ps.png">
            <div class="rotation__mask" />
            <div class="w1200 swiper__flexbox">
              <div class="swiper__content">
                <h3>墨尔本Box Hill</h3>
                <h3>华人新贵之居</h3>
                <div class="swiper__row">
                  <button @click="toDetail(8)">
                    查看详情
                  </button>
                  <div class="swiper__position">
                    <img class="swiper__position-img" src="@/static/images/icon/position.png" alt>
                    <span>澳洲·墨尔本</span>
                  </div>
                </div>
                <div class="swiper__label">
                  <ul class="swiper__list">
                    <li>墨尔本富人区</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 数据栏 -->
    <div class="index__bg_white">
      <section class="statistics">
        <div class="w1200">
          <ul class="statistics_list">
            <li>
              <div class="list_img">
                <!-- <img src="@/static/images/s/house.png" alt=""> -->
              </div>
              <div class="list_content">
                <div class="content_number">
                  {{ num1 }}+
                </div>
                <p>澳洲好房</p>
                <p>现在售房源总数</p>
              </div>
            </li>
            <li>
              <div class="list_img">
                <!-- <img src="@/static/images/s/business.png" alt=""> -->
              </div>
              <div class="list_content">
                <div class="content_number">
                  {{ num2 }}+
                </div>
                <p>澳洲好房</p>
                <p>现业主总数</p>
              </div>
            </li>
            <li>
              <div class="list_img">
                <!-- <img src="@/static/images/s/year.png" alt=""> -->
              </div>
              <div class="list_content">
                <div class="content_number">
                  {{ num3 }}年+
                </div>
                <p>澳洲好房</p>
                <p>在澳深耕年数</p>
              </div>
            </li>
            <li>
              <div class="list_img">
                <!-- <img src="@/static/images/s/city.png" alt=""> -->
              </div>
              <div class="list_content">
                <div class="content_number">
                  {{ num4 }}+
                </div>
                <p>澳洲好房</p>
                <p>已开发澳洲城市总数</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <!-- 直播 -->
    <div class="index__bg">
      <article class="swiper-box">
        <div class="swiper-box__box">
          <div class="infobox__title">
            <div>直播|视频</div>
            <div class="swiper-box__nav">
              <ul class="swiper-box__ul">
                <li v-for="(item,index) in videoList" :key="'2' + index" class="swiper-box__li" :class="liveActive == index?'swiper-box__li_active':''" @click="changeLive(index)">
                  {{ item.name }}
                  <img v-if="liveActive == index" class="swiper-box__lipoint" src="@/static/images/icon/index_point_icon.png">
                </li>
              </ul>
              <div class="swiper-box__more" @click="routeTo('estate-videoList')">
                更多<img class="more_icon" src="@/static/images/icon/right_gray.png">
              </div>
            </div>
          </div>
          <div
            v-swiper:liveSwiper="swiperOption2"
            :auto-update="true"
            @slideChangeTransitionStart="liveStart"
          >
            <div class="swiper-wrapper">
              <div v-for="v in videoList" :key="v.id" class="swiper-box__content swiper-slide">
                <!-- {{v}} -->
                <viewbox
                  v-for="item in v.data"
                  :key="item.id"
                  class="viewbox_home"
                  :is-video="true"
                  :vid="item.id"
                  :img="item.aid"
                  :link="item.link"
                  :title="item.name"
                  :content="item.introduction"
                />
              </div>
            </div>
            <empty v-if="videoList.length === 0" />
          </div>
        </div>
      </article>
    </div>
    <!-- 文章 -->
    <div class="index__bg">
      <article class="swiper-box">
        <div class="swiper-box__box">
          <div class="infobox__title">
            <div>置业澳洲</div>
            <div class="swiper-box__nav">
              <ul class="swiper-box__ul">
                <li v-for="(item,index) in pageMenu" :key="'3' + index" class="swiper-box__li" :class="pageActive == index?'swiper-box__li_active':''" @click="changePage(index)">
                  {{ item }}
                  <img v-if="pageActive == index" class="swiper-box__lipoint" src="@/static/images/icon/index_point_icon.png">
                </li>
              </ul>
              <div class="swiper-box__more" @click="routeTo('estate')">
                更多<img class="more_icon" src="@/static/images/icon/right_gray.png">
              </div>
            </div>
          </div>
          <div
            v-swiper:pageSwiper="swiperOption2"
            :auto-update="true"
            @slideChangeTransitionStart="pageStart"
          >
            <div class="swiper-wrapper">
              <div class="swiper-box__content swiper-slide">
                <viewbox
                  v-for="item in articleList1"
                  :key="item.id"
                  class="viewbox_home"
                  :vid="item.id"
                  :img="item.aid"
                  :title="item.name"
                  :content="item.introduction"
                />
                <empty v-if="articleList1.length === 0" />
              </div>
              <div class="swiper-box__content swiper-slide">
                <viewbox
                  v-for="item in articleList2"
                  :key="item.id"
                  class="viewbox_home"
                  :vid="item.id"
                  :img="item.aid"
                  :title="item.name"
                  :content="item.introduction"
                />
                <empty v-if="articleList2.length === 0" />
              </div>
              <div class="swiper-box__content swiper-slide">
                <viewbox
                  v-for="item in articleList3"
                  :key="item.id"
                  class="viewbox_home"
                  :vid="item.id"
                  :img="item.aid"
                  :title="item.name"
                  :content="item.introduction"
                />
                <empty v-if="articleList3.length === 0" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import empty from '@/components/Empty'
import viewbox from '@/components/Viewbox'

export default {
  components: {
    empty,
    viewbox
  },
  async asyncData({ app }) {
    try {
    // 获得文章列表
      return await app.$api.estate.setHouseAus().then(({ data }) => {
        return {
          videoList: data[0].children,
          articleList1: data[1].children[0].data,
          articleList2: data[2].children[0].data,
          articleList3: data[3].children[0].data
        }
      })
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      isNum: false, // 为了性能，只执行一次数字增加的定时器
      swiperOption: {
        autoplay: true,
        // loop: true,
        speed: 1000,
        noSwiper: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
          disabledClass: 'my-button-disabled',
          hiddenClass: 'my-button-hidden'
        }
      },
      swiperOption2: {
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
          disabledClass: 'my-button-disabled',
          hiddenClass: 'my-button-hidden'
        }
      },
      // 首页轮播
      menuData: ['Live City', '布里斯本1号', '美墅', '博士山'],
      bannerActive: 0, // 当前banner
      // 直播
      // liveMenu: ['直播视频', '项目视频'],
      liveActive: 0,
      // 文章
      pageMenu: ['澳洲生活', '购房攻略', '澳洲资讯'],
      pageActive: 0,
      // 列表
      videoList: [],
      articleList1: [],
      articleList2: [],
      articleList3: []
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 监听滚动并执行数字增加
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0 && !this.isNum) {
        this.addNum()
      }
    },
    // 数字增加效果
    addNum() {
      this.isNum = true // 已执行，不再执行
      const num = [188, 500, 6, 2]
      const timer1 = window.setInterval(() => {
        if (num[0] > 0) {
          this.num1++
          num[0]--
        } else {
          window.clearInterval(timer1)
        }
      }, 1000 / num[0])
      const timer2 = window.setInterval(() => {
        if (num[1] > 0) {
          this.num2++
          num[1]--
        } else {
          window.clearInterval(timer2)
        }
      }, 1000 / num[1])
      const timer3 = window.setInterval(() => {
        if (num[2] > 0) {
          this.num3++
          num[2]--
        } else {
          window.clearInterval(timer3)
        }
      }, 1000 / num[2])
      const timer4 = window.setInterval(() => {
        if (num[3] > 0) {
          this.num4++
          num[3]--
        } else {
          window.clearInterval(timer4)
        }
      }, 1000 / num[3])
    },
    toDetail() {
      // 写死的，需要知道id多少才能跳转 6 1 7 8
      let id = 1
      if (this.mySwiper.realIndex === 0) {
        id = 6
      } else if (this.mySwiper.realIndex === 1) {
        id = 1
      } else if (this.mySwiper.realIndex === 2) {
        id = 7
      } else if (this.mySwiper.realIndex === 3) {
        id = 8
      }
      this.$router.push({
        name: 'project-detail',
        query: {
          id
        }
      })
    },
    clickFun(index) {
      this.mySwiper.slideTo(index, 1000, false)
      this.bannerActive = this.mySwiper.realIndex
    },
    changeLive(index) {
      if (index === 0) {
        window.open('https://play.yunxi.tv/wechat/liveroom/67407?key=1d5fdb0bcd0510df2d1b183292b3edaf')
      }
      this.liveActive = index
      this.liveSwiper.slideTo(index, 1000, false)
    },
    liveStart() {
      this.liveActive = this.liveSwiper.realIndex
    },
    changePage(index) {
      this.pageActive = index
      this.pageSwiper.slideTo(index, 1000, false)
    },
    pageStart() {
      this.pageActive = this.pageSwiper.realIndex
    },
    bannerStart() {
      this.bannerActive = this.mySwiper.realIndex
    },
    routeTo(name) {
      if (name === this.$route.name) {
        history.go(0)
      }
      this.$router.push({ name })
    }
  },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { hid: 'keywords', name: 'keywords', content: '富力,富力集团,富力地产,房地产开发,商业运营,物业服务' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-warp {
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
  .banner__menu-warp {
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 56%;
    // transform: translateX(-50%);
    transform: translateY(-50%);
    .banner__menu {
      display: flex;
      width: 1200px;
      margin: auto;
      // height: 100%;
      .menu__btns {
        width: 100%;
        position: relative;
        .menu__bannerbtn {
          position: absolute;
          top: 49px;
          left: 127px;
          width: 130px;
          height: 40px;
          cursor: pointer;
        }
        .rotation__prev {
          top: 0;
          color: #fff;
        }
        .rotation__next {
          top: 0;
          transform: translateY(-50%);
          color: #fff;
        }
      }
      /* banner菜单 */
      .menu {
        width: 241px;
        // position: absolute;
        // left: 360px;
        // left: 18.75%;
        // top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        .menu__item {
          width: 100%;
          text-align: center;
          height: 50px;
          line-height: 50px;
          position: relative;
          list-style: none;
        }
        .menu__item a {
          display: flex;
          padding-left: 27px;
          width: 100%;
          height: 100%;
          justify-content: left;
          align-items: center;
          cursor: pointer;
          color: white;
          transition: all .2s;
        }
        .menu__item:first-child a {
          border-radius: 10px 10px 0 0;
        }
        .menu__item:last-child a {
          border-radius: 0 0 10px 10px;
        }
        .menu__item img {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
        .menu__item:hover a {
          background-color: #2e6cb1;
          // border-radius: 10px;
          transition: all .2s;
        }
        .menu__item_active {
          background-color: #2e6cb1;
          transition: all .2s;
        }
        .menu__item_activef {
          background-color: #2e6cb1;
          border-radius: 10px 10px 0 0;
          transition: all .2s;
        }
        .menu__item_activel {
          background-color: #2e6cb1;
          border-radius: 0 0 10px 10px;
          transition: all .2s;
        }
      }
    }
  }
}
.banner {
  // height: 500px;
  height: calc(100vh - 100px);
  position: relative;
  color: white;
  .rotation__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
  .w1200 {
    z-index: 10;
    width: 1200px;
    margin: 0 auto;
  }
  .swiper__img {
    width: 1920px;
    height: auto;
    position: absolute;
    z-index: -1;
  }
  .swiper__flexbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .swiper__content {
    // margin: auto;
    margin-top: -100px;
    position: relative;
  }
  .swiper__content h3 {
    font-size: 38px;
    margin-bottom: 15px;
    text-shadow:0px 0px 3px rgba(51,51,51,0.69);
  }
  .swiper__content .swiper__row {
    display: flex;
  }
  .swiper__content .swiper__row button {
    background: none;
    outline: none;
    border: solid 1px #2e6cb1;
    background-color: #2e6cb1;
    border-radius: 6px;
    width: 130px;
    height: 40px;
    color: #fff;
    font-size: 18px;
    margin-right: 268px;
    // box-shadow:rgba(0, 0, 0, 0.12) 0px 2px 6px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .swiper__content .swiper__row .swiper__position {
    width: 147px;
    height: 36px;
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .swiper__content .swiper__row .swiper__position .swiper__position-img {
    padding-right: 5px;
  }
  .swiper-slide .swiper__label {
    position: absolute;
    // right: 360px;
    // bottom: 65px;
    right: -248px;
    bottom: -320px;
    z-index: 11;
  }
  .swiper-slide .swiper__label .swiper__list {
    display: flex;
    justify-content: flex-end;
  }
  .swiper-slide .swiper__label .swiper__list li {
    width: 149px;
    height: 30px;
    background-color: #000000;
    border-radius: 4px;
    opacity: 0.7;
    line-height: 30px;
    text-align: center;
    margin-right: 14px;
    list-style: none;
  }
}
/* 数据 ------------------ */
.index__bg_white {
  width: 100%;
  margin-bottom: 50px;
  background: white;
}
.statistics {
  width: 1200px;
  margin: auto;
  box-sizing: border-box;
  .statistics_list {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 34px 0;
  }
  .statistics_list li {
    display: flex;
    align-items: center;
  }
  .statistics_list li .list_img {
    width: 72px;
    height: 72px;
    border: solid 2px #ececec;
    border-radius: 50%;
    position: relative;
    background-position: center;
    background-size: 38px 34px;
    background-repeat: no-repeat;
    transition: all .2s ease;
    cursor: pointer;
  }
  .statistics_list li:nth-child(1) .list_img {
    background-image: url("~@/static/images/icon/house.png");
  }
  .statistics_list li:nth-child(1) .list_img:hover {
    background-image: url("~@/static/images/icon/house01.png");
    background-color: #2e6cb1;
  }
  .statistics_list li:nth-child(2) .list_img {
    background-image: url("~@/static/images/icon/business.png");
  }
  .statistics_list li:nth-child(2) .list_img:hover {
    background-image: url("~@/static/images/icon/business01.png");
    background-color: #2e6cb1;
  }
  .statistics_list li:nth-child(3) .list_img {
    background-image: url("~@/static/images/icon/year.png");
  }
  .statistics_list li:nth-child(3) .list_img:hover {
    background-image: url("~@/static/images/icon/year01.png");
    background-color: #2e6cb1;
  }
  .statistics_list li:nth-child(4) .list_img {
    background-image: url("~@/static/images/icon/city.png");
  }
  .statistics_list li:nth-child(4) .list_img:hover {
    background-image: url("~@/static/images/icon/city01.png");
    background-color: #2e6cb1;
  }
  .statistics_list li .list_content {
    margin-left: 30px;
  }
  .statistics_list li .list_content .content_number {
    font-size: 28px;
    color: #333333;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .statistics_list li .list_content p {
    font-size: 12px;
    color: #999999;
    margin-bottom: 10px;
  }
}
/* 直播视频 */
.index__bg {
  background: #F5F8FB;
  width: 100%;
  padding-bottom: 50px;
}
.swiper-box {
  margin: auto;
  width: 1200px;
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
            color:rgba(46,108,177,1);
          }
        }
      }
      .swiper-box__more {
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#999999;
        display: flex;
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
      margin-right: 27px;
    }
  }
}
/* 直播视频 */
.headline {
  padding: 50px 360px;
  width: 100%;
  background: #F5F8FB;
  .headline__box {
    position: relative;
    .headline__title {
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
      .headline__more {
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(46,108,177,1);
        display: flex;
        .more__icon {
          width:10px;
          height:18px;
        }
      }
    }
    .headline__content {
      display: flex;
      justify-content: space-between;
    }
    .swiper-button-prev {
      position: absolute;
      width: 44px;
      height: 44px;
      background-image: url("~@/static/images/icon/index__pre.png");
      left: 0;
    }
    .swiper-button-prev::after {
      content: '';
    }
    .swiper-button-next {
      position: absolute;
      width: 44px;
      height: 44px;
      background-image: url("~@/static/images/icon/index__pre.png");
      transform:rotateY(180deg);
      right: 0;
    }
    .swiper-button-next::after {
      content: '';
    }
  }
}
</style>
