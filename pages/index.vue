<template>
  <div class="container gray">
    <!-- 轮播 -->
    <div ref="banner" class="banner-warp">
      <my-header class="header_banner" :home="true" />
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
      <div class="banner">
        <div class="swiper-wrapper">
          <div class="swiper__item swiper-slide">
            <div class="swiper__warp">
              <img class="swiper__img" src="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/lc.png">
            </div>
            <div class="rotation__mask" />
            <div class="w1200 swiper__flexbox">
              <div class="swiper__content">
                <h3>墨尔本CBD西综合体现房</h3>
                <h3>房源托管服务</h3>
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
            <div class="swiper__warp">
              <img class="swiper__img" src="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/wl.png">
            </div>
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
            <div class="swiper__warp">
              <img class="swiper__img" src="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/ms.png">
            </div>
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
            <div class="swiper__warp">
              <img class="swiper__img" src="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/ps.png">
            </div>
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
                    <li>墨尔本大学旁</li>
                    <li>墨尔本富人区</li>
                    <li>九步生活</li>
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
        <div class="flex">
          <div class="statistics__bg">
            <img src="@/static/images/icon/azpic.png">
          </div>
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
                <p>拥有房源总数</p>
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
    <!-- 置业理由 -->
    <div class="reason">
      <div class="reason__btns">
        <div class="reason-prev">
          <img src="@/static/images/icon/r_w_arrow.png">
        </div>
        <div class="reason-next">
          <img src="@/static/images/icon/right_gray.png">
        </div>
      </div>
      <div class="rbanner">
        <div class="swiper-wrapper">
          <div class="reason__content swiper-slide">
            <div class="reason__main">
              <div class="reason__front">
                <div class="reason__header">
                  <div class="reason__subtitle">
                    REASON
                  </div>
                  <div class="reason__title">
                    澳房置业理由
                  </div>
                  <div class="reason__line" />
                </div>
                <div class="r-article">
                  <div class="r-article__title">
                    海外资产配置首选<span class="article__subtitle">投资澳洲房产详情解析</span>
                  </div>
                  <article class="r-article__p">
                    近年来，国内房地产投资属性逐渐削弱，投资者们纷纷把眼光转向了海外。据《澳大利亚金融评论报》报道，中国投资者在过去四年内向澳大利亚经济注入了404亿美元（约人民币2786亿）。即使置业澳洲已成为国人投资趋势，但仍存在着许多首次置业澳洲的投资者，对澳洲房产情况还不太了解。今天，就为您详细讲解澳洲投资情况，带您成为投资澳洲房产的老手。
                  </article>
                  <div class="r-article__ptitle">
                    <span class="r-article__num">01</span>为什么海外房产置业首选澳洲？
                  </div>
                  <article class="r-article__p">
                    澳洲作为南半球最宜居的发达国家，俨然成为投资者海外配置的第一选择。0遗产税、0房产税、永久产权、顶尖教育、可贷款以及10%的低首付让绝大多数人都可负担起，投资风险小，金融杠杆充足。相比于股票，基金等，房产是最为稳定的投资项目，并且澳洲10%的首付存于信托账户中，受政府监管，还有利息可拿，完全无风险。
                  </article>
                </div>
              </div>
              <div class="reason__route" @click="toArticle(84)">
                查看更多
              </div>
            </div>
            <div class="reason__img">
              <img src="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/nav1.png">
            </div>
          </div>
          <div class="reason__content swiper-slide">
            <div class="reason__main">
              <div class="reason__front">
                <div class="reason__header">
                  <div class="reason__subtitle">
                    policy
                  </div>
                  <div class="reason__title">
                    澳房买房政策
                  </div>
                  <div class="reason__line" />
                </div>
                <div class="r-article">
                  <div class="r-article__title">
                    墨尔本置业基础必看
                  </div>
                  <div class="r-article__ptitle">
                    <span class="r-article__num">01</span>墨尔本城市介绍
                  </div>
                  <article class="r-article__p">
                    墨尔本（Melbourne），澳洲第二大城市，维多利亚州首府城市，面积8831平方公里，截至2018年墨尔本人口已突破500万。在过去10年墨尔本为整个澳洲和维州经济贡献的份额分别为6%和27%，经济增速3.1%，成为澳洲经济发展最迅猛的城市。
                  </article>
                  <article class="r-article__p">
                    墨尔本是有“花园之州”之称的维多利亚州的首府，绿化覆盖率高达40%，在全球140个城市中，墨尔本以97.5的高分卫冕，并连续7年夺得全球宜居城市的称号。
                  </article>
                  <article class="r-article__p">
                    同时，墨尔本有“澳大利亚文化之都”的美誉，也是国际闻名的时尚之都，其服饰、艺术、音乐、电视制作、电影、舞蹈等潮流文化均享誉全球。
                  </article>
                </div>
              </div>
              <div class="reason__route" @click="toArticle(85)">
                查看更多
              </div>
            </div>
            <div class="reason__img">
              <img src="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/nav2.png">
            </div>
          </div>
          <div class="reason__content swiper-slide">
            <div class="reason__main">
              <div class="reason__front">
                <div class="reason__header">
                  <div class="reason__subtitle">
                    procedure
                  </div>
                  <div class="reason__title">
                    澳房交付流程
                  </div>
                  <div class="reason__line" />
                </div>
                <div class="r-article">
                  <div class="r-article__title">
                    布里斯班房屋交付流程一览
                  </div>
                  <div class="r-article__ptitle">
                    <span class="r-article__num">01</span>新房交付在即，贷款流程需了解
                  </div>
                  <article class="r-article__p">
                    在当前澳洲当地房产贷款政策收紧的情况下，为帮助业主们顺利获得贷款批准，特联合澳洲专业贷款机构为业主们提供专属服务。那问题来了，业主们如何才能轻松获得满额的贷款呢？小编接下来为您一一讲解：
                  </article>
                  <article class="r-article__p">
                    1.递交贷款申请<br>
                    联系贷款机构，选择符合个人情况的贷款产品，准备货款材料（如身份证明文件、个人征信证明、存款证明、购房文件、收入证明文件及资产证明等），递交贷款机构。
                  </article>
                  <article class="r-article__p">
                    2.获得贷款预批 <br>银行/基金公司审贷款材料，提供货款预批。
                  </article>
                </div>
              </div>
              <div class="reason__route" @click="toArticle(86)">
                查看更多
              </div>
            </div>
            <div class="reason__img">
              <img src="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/nav3.png">
            </div>
          </div>
        </div>
      </div>
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
          <div class="lbanner">
            <div class="swiper-wrapper">
              <div v-for="v in videoList" :key="v.id" class="swiper-box__content swiper-slide">
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
                  :big="true"
                />
              </div>
            </div>
            <empty v-if="videoList.length === 0" />
          </div>
        </div>
      </article>
    </div>
    <!-- 新闻资讯 -->
    <div ref="news" class="news">
      <div class="news__content">
        <div class="infobox__title">
          <div>新闻资讯</div>
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
        <div class="news__main">
          <div ref="newsimg" class="news__img">
            <img src="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az//news_img.png">
          </div>
          <div ref="newslist" class="news__list">
            <div v-for="(item, index) in articleList" :key="index" class="new" @click="toArticle(item.id)">
              <div class="new__time">
                <div class="new__date">
                  {{ item.create_time.substring(5,10) }}
                </div>
                <div class="new__year">
                  {{ item.create_time.substring(0,4) }}
                </div>
              </div>
              <div class="new__msg">
                <div class="new__name text-overs">
                  {{ item.name }}
                </div>
                <div class="new__desc text-overs">
                  {{ item.introduction }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news__btm gray" />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import viewbox from '@/components/Viewbox'
import Swiper from '@/libs/swiper.js'
export default {
  components: {
    MyHeader,
    viewbox
  },
  layout: 'home',
  async asyncData({ app }) {
    try {
    // 获得文章列表
      return await app.$api.estate.setHouseAus().then(({ data }) => {
        console.log(data)
        return {
          videoList: data[0].children,
          articleList: data[1].children[0].data,
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
      // 轮播实例
      banner: null,
      rbanner: null,
      lbanner: null,
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
      articleList: [],
      articleList1: [],
      articleList2: [],
      articleList3: [],
      // 导航图片的indexx
      navList: ['好房直播', '项目视频', '云展厅', '项目推荐', '澳洲生活'],
      navListIndex: 1,
      // 置业澳洲banner
      sethouse: [
        {
          title: '澳房置业理由',
          label: '海外资产配置首选澳洲'
        },
        {
          title: '澳房买房政策',
          label: '墨尔本置业基础必看'
        },
        {
          title: '澳房交付流程',
          label: '布里斯班房屋交付流程一览'
        }
      ],
      sethouseIndex: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    const that = this
    this.banner = new Swiper(
      '.banner',
      {
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
        },
        on: {
          slideChangeTransitionStart() {
            that.bannerStart(this.realIndex)
          }
        }
      }
    )
    this.rbanner = new Swiper(
      '.rbanner',
      {
        speed: 1000,
        navigation: {
          nextEl: '.reason-next',
          prevEl: '.reason-prev',
          hideOnClick: true
        }
      }
    )
    this.lbanner = new Swiper(
      '.lbanner',
      {
        speed: 1000,
        navigation: {
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
          hideOnClick: true,
          disabledClass: 'my-button-disabled',
          hiddenClass: 'my-button-hidden'
        },
        on: {
          slideChangeTransitionStart() {
            that.liveStart(this.realIndex)
          }
        }
      }
    )
    /* eslint-disable */
  },
  methods: {
    // 滑入导航的动画 ----------------------------------------
    changeNavList(index) {
      this.navListIndex = index
    },
    enter(el) {
      console.log(el)
      el.style.height = 'auto'
      // noinspection JSSuspiciousNameCombination
      const endWidth = window.getComputedStyle(el).height
      el.style.height = '0px'
      /* eslint-disable */
      el.offsetHeight // force repaint
      /* eslint-disable */
      // noinspection JSSuspiciousNameCombination
      el.style.height = endWidth
    },
    afterEnter(el) {
      el.style.height = null
    },
    leave(el) {
      el.style.height = window.getComputedStyle(el).height
      /* eslint-disable */
      el.offsetHeight // force repaint
      /* eslint-disable */
      el.style.height = '0px'
    },
    afterLeave(el) {
      el.style.height = null
    },
    // 监听滚动并执行数字增加
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.documentElement.clientHeight - 250
      if (scrollTop > 0 && !this.isNum) {
        this.addNum()
      }
      // 导航栏动画
      if (this.$refs.navlist && this.$refs.navlist.getBoundingClientRect().top < clientHeight) {
        this.$refs.navlist.className = 'index__navlist topmove'
      }
      // 新闻动画
      if (this.$refs.news && this.$refs.news.getBoundingClientRect().top < clientHeight) {
        this.$refs.newsimg.className = 'news__img leftmove'
        this.$refs.newslist.className = 'news__list rightmove'
      }
    },
    // -----------------------------------------------------
    // 数字增加效果
    addNum() {
      this.isNum = true // 已执行，不再执行
      const num = [10000, 500, 6, 2]
      const timer1 = window.setInterval(() => {
        if (num[0] > 0) {
          this.num1+=100
          num[0]-=100
        } else {
          window.clearInterval(timer1)
        }
      }, 1000 / num[0])
      const timer2 = window.setInterval(() => {
        if (num[1] > 0) {
          this.num2+=10
          num[1]-=10
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
      if (this.banner.realIndex === 0) {
        id = 6
      } else if (this.banner.realIndex === 1) {
        id = 1
      } else if (this.banner.realIndex === 2) {
        id = 7
      } else if (this.banner.realIndex === 3) {
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
      this.banner.slideTo(index, 1000, false)
      this.bannerActive = this.banner.realIndex
    },
    changeLive(index) {
      if (index === 0) {
        window.open('https://play.yunxi.tv/wechat/liveroom/67407?key=1d5fdb0bcd0510df2d1b183292b3edaf')
      }
      this.liveActive = index
      this.lbanner.slideTo(index, 1000, false)
    },
    liveStart(index) {
      this.liveActive = index
    },
    changePage(index) {
      this.pageActive = index
      if (index == 0) {
        this.articleList = this.articleList1
      } else if (index == 1) {
        this.articleList = this.articleList2
      } else if (index == 2) {
        this.articleList = this.articleList3
      }
    },
    bannerStart(index) {
      this.bannerActive = index
    },
    routeTo(name) {
      if (name === this.$route.name) {
        history.go(0)
      }
      this.$router.push({ name })
    },
    navRouter(index) {
      if (index == 0) {
        window.location.href = 'https://play.yunxi.tv/wechat/liveroom/67407?key=1d5fdb0bcd0510df2d1b183292b3edaf'
        // window.open('https://play.yunxi.tv/wechat/liveroom/67407?key=1d5fdb0bcd0510df2d1b183292b3edaf')
      } else if (index == 1) {
        this.$router.push({ name: 'estate-videoList' })
      } else if (index == 2) {
        // this.$router.push({ name: 'estate-videoList' })
      } else if (index == 3) {
        this.$router.push({ name: 'project' })
      } else if (index == 4) {
        this.$router.push({ name: 'estate' })
      }
    },
    toArticle(id) {
      this.$router.push({
        name: 'estate-article',
        query: {
          id
        }
      })
    }
  },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { hid: 'keywords', name: 'keywords', content: '澳洲好房官网,澳洲房产,澳洲房产网,澳洲房产投资,澳洲买房,澳洲生活,澳洲房价,澳洲购房攻略,澳洲买房移民,澳洲资产配置、0房产税、0遗产税、永久产权' },
        { hid: 'description', name: 'description', content: '澳洲好房为您精选澳洲优质房源，置业澳洲认准澳洲好房！' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.more_icon {
  width:13px;
  height:23px;
}
.banner-warp {
  width: 100%;
  // height: calc(100vh - 200px);
  // height: 900px;
  height: 750px;
  position: relative;
  .header_banner {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 11;
  }
  .banner__menu-warp {
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 56%;
    // transform: translateX(-50%);
    transform: translateY(-50%);
    .banner__menu {
      display: flex;
      // max-width: 1834px;
      padding: 0 40px;
      // width: 1200px;
      // margin: auto;
      // height: 100%;
      .menu__btns {
        width: 100%;
        height: 200px;
        position: relative;
        // background-color: rgba(0, 0, 0, 0.5);
        .menu__bannerbtn {
          position: absolute;
          cursor: pointer;
          // background-color: yellow;
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
        .swiper-button-prev {
          width: 20px;
          height: 36px;
          background-image: url("~@/static/images/icon/index_prev.png");
          background-size: 20px 36px;
        }
        .swiper-button-prev::after {
          content: '';
        }
        .swiper-button-next {
          width: 20px;
          height: 36px;
          background-image: url("~@/static/images/icon/index_prev.png");
          background-size: 20px 36px;
          transform: rotate(180deg);
        }
        .swiper-button-next::after {
          content: '';
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
          width: 10px;
          height: 18px;
          transform: translateY(-50%);
        }
        .menu__item:hover a {
          background-color: #062A5A;
          // border-radius: 10px;
          transition: all .2s;
        }
        .menu__item_active {
          background-color: #062A5A;
          transition: all .2s;
        }
        .menu__item_activef {
          background-color: #062A5A;
          border-radius: 10px 10px 0 0;
          transition: all .2s;
        }
        .menu__item_activel {
          background-color: #062A5A;
          border-radius: 0 0 10px 10px;
          transition: all .2s;
        }
      }
    }
  }
}
.banner, .rbanner, .lbanner {
  overflow: hidden;
}
.banner {
  // height: 500px;
  // height: calc(100vh - 200px);
  // height: 900px;
  height: 750px;
  position: relative;
  color: white;
  .rotation__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    // box-shadow: 0 0 100px rgba(10, 10, 10, .8) inset;
   box-shadow: 0 20px 70px -15px rgba(10, 10, 10, .8) inset;
  }
  .w1200 {
    z-index: 10;
    width: 1200px;
    margin: 0 auto;
  }
  .swiper__warp {
    width: 100%;
    // height: 100vh;
  }
  .swiper__img {
    // min-width: 1920px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
    border: none;
    background: none;
    outline: none;
    // border: solid 1px #062A5A;
    // background-color: #062A5A;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    width: 130px;
    height: 40px;
    color: #fff;
    font-size: 18px;
    margin-right: 268px;
    // box-shadow:rgba(0, 0, 0, 0.12) 0px 2px 6px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .swiper__content .swiper__row .swiper__position {
    // width: 147px;
    height: 36px;
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .swiper__content .swiper__row .swiper__position .swiper__position-img {
    padding-right: 5px;
    width:24px;
    height:24px;
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
    // width: 149px;
    padding: 0 10px;
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
  // background-image: url("~@/static/images/icon/data_bg.png");;
}
.statistics {
  // width: 1200px;
  // margin-left: 506px;
  box-sizing: border-box;
  padding-left: 58px;
  .flex {
    align-items: center;
  }
  .statistics__bg {
    width:435px;
    height:140px;
    img {
      width: 100%;
      height: 100%;
      object-fit:cover;
      object-position: top;
    }
  }
  .statistics_list {
    max-width: 1200px;
    width: 100%;
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
    background-color: #062A5A;
  }
  .statistics_list li:nth-child(2) .list_img {
    background-image: url("~@/static/images/icon/business.png");
  }
  .statistics_list li:nth-child(2) .list_img:hover {
    background-image: url("~@/static/images/icon/business01.png");
    background-color: #062A5A;
  }
  .statistics_list li:nth-child(3) .list_img {
    background-image: url("~@/static/images/icon/year.png");
  }
  .statistics_list li:nth-child(3) .list_img:hover {
    background-image: url("~@/static/images/icon/year01.png");
    background-color: #062A5A;
  }
  .statistics_list li:nth-child(4) .list_img {
    background-image: url("~@/static/images/icon/city.png");
  }
  .statistics_list li:nth-child(4) .list_img:hover {
    background-image: url("~@/static/images/icon/city01.png");
    background-color: #062A5A;
  }
  .statistics_list li .list_content {
    margin-left: 30px;
  }
  .statistics_list li .list_content .content_number {
    font-size: 28px;
    color: #333333;
    font-weight: bold;
    margin-bottom: 15px;
    font-family:DINPro;
  }
  .statistics_list li .list_content p {
    font-size: 12px;
    color: #999999;
    margin-bottom: 10px;
  }
}

/* --------------- 置业理由轮播 --------------- */
.reason {
  background-color: white;
  background-image: url("~@/static/images/icon/index_bg1.png");
  background-repeat: no-repeat;
  background-position-y: 10px;
  background-size: 1033px 122px;
  height: 100%;
  position: relative;
  .reason__btns {
    position: absolute;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    bottom: 10px;
    display: flex;
    @mixin reasonbtn {
      width:76px;
      height:76px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 17px;
        height: 17px;
      }
    }
    .reason-prev {
      @include reasonbtn;
      background:rgba(16,46,106,1);
      transform: rotate(180deg);
    }
    .reason-next {
      @include reasonbtn;
      background:rgba(255,255,255,1);
    }
  }
  .reason__content {
    display: flex;
    width: 100%;
    height: 100%;
    .reason__main {
      width: 50%;
      height: 850px;
      padding-bottom: 20px;
      .reason__front {
        min-height: 720px;
      }
      .reason__header {
        padding-top: 24px;
        .reason__subtitle {
          font-size:18px;
          margin-bottom: 18px;
          color: #062A5A;
          letter-spacing: 5px;
        }
        .reason__title {
          font-size:40px;
          margin-bottom: 40px;
        }
        .reason__line {
          width:78px;
          height:4px;
          background:rgba(6,42,90,1);
        }
      }
      .r-article {
        .r-article__title {
          font-size:26px;
          color:rgba(51,51,51,1);
          padding: 40px 0;
          .article__subtitle {
            font-weight: lighter;
            margin-left: 5px;
          }
        }
        .r-article__p {
          font-size:18px;
          color:rgba(153,153,153,1);
          line-height: 25px;
          margin-bottom: 45px;
        }
        .r-article__ptitle {
          font-size:18px;
          color: #333333;
          margin-bottom: 40px;
        }
        .r-article__num {
          display: inline-block;
          width:33px;
          height:33px;
          text-align: center;
          line-height: 33px;
          background:rgba(235,235,235,1);
          border-radius:5px;
          font-size:18px;
          font-family:DINPro;
          color:rgba(51,51,51,1);
          margin-right: 15px;
        }
      }
      .reason__route {
        width:190px;
        height:57px;
        background:rgba(16,46,106,1);
        font-size:24px;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 57px;
        cursor: pointer;
      }
    }
    .reason__img {
      width:50%;
      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
    }
  }
}

/* ---------------- 新闻资讯 ------------- */
.news {
  width: 100%;
  background-image: url("~@/static/images/icon/news.png");
  background-position-y: 50px;
  background-repeat: no-repeat;
  background-color: #FFFFFF;
  background-size: 100% 100%;
  cursor: pointer;
  .news__content {
    // width: 1200px;
    // height: 505px;
    margin: auto;
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
    .news__main {
      display: flex;
      // width: 1200px;
      .news__img {
        width:741px;
        height:541px;
        opacity: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .news__list {
        opacity: 0;
        width: auto;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;

        // justify-content: space-between;
        padding: 30px 0;
        .new {
          display: flex;
          margin-bottom: 60px;
          .new__time {
            height: 100px;
            width: 160px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-right: 1px solid rgba(52,52,52,.1);
            .new__date {
              font-size:26px;
              font-weight:500;
              color:rgba(51,51,51,1);
              margin-bottom: 10px;
            }
            .new__year {
              font-size:16px;
              color:#999999;
            }
          }
          .new__msg {
            padding-left: 35px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .new__name {
              width: 378px;
              font-size:20px;
              font-weight:bold;
              color:rgba(51,51,51,1);
            }
            .new__desc {
              width: 378px;
              font-size:14px;
              font-weight:400;
              color:rgba(153,153,153,1);
            }
          }
        }
      }
    }
  }
}
.news__btm {
  height: 50px;
  width: 100%;
  background: #F5F8FB;
}


/* ------- 导航图片 ----------*/
.index__nav {
  position: relative;
  padding-bottom: 120px;
  .index__nav-banner {
    min-width: 1200px;
    height: 700px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .index__navlist {
    position:absolute;
    top: 632px;
    width: 100%;
    opacity: 0;
    .navlist {
      margin: auto;
      width: 1200px;
      display: flex;
      .navlist__item {
        position: relative;
        width:240px;
        height:140px;
        font-size:26px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(51,51,51,1);
        transition: all .2s;
        cursor: pointer;
        .navlist__icon1 {
          width: 46px;
          height: 45px;
          margin-right: 18px;
        }
        .navlist__icon2 {
          width: 46px;
          height: 46px;
          margin-right: 16px;
        }
        .navlist__icon3 {
          width: 47px;
          height: 46px;
          margin-right: 18px;
        }
        .navlist__icon4 {
          width: 42px;
          height: 46px;
          margin-right: 19px;
        }
        .navlist__icon5 {
          width: 52px;
          height: 47px;
          margin-right: 14px;
        }
      }
      // .navlist__item::after {
      //   content: '';
      //   position: absolute;
      //   left: 0;
      //   bottom: 0;
      //   width: 100%;
      //   height: 0;
      //   z-index: 1;
      //   background: #062A5A;
      // }
      .navlist__item_gray {
        background: #ECECEC;
      }
      .navlist__item_white {
        background: #FBFBFB;
      }
      .navlist__content {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .navlist__item_active {
        // background: #062A5A;
        // background: #ECECEC;
        color: white;
        transition: all .5s;
        transition-timing-function: ease;
      }
      .navlist__bg {
        height: 0;
        position:absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #062A5A;
        z-index: 1;
        transition: all .5s;
        transition-timing-function: ease;
      }
      .navlist__bg_active {
        height: 100%;
        transition: all .5s;
        transition-timing-function: ease;
      }
    }
  }
}
/* ---------------- 置业澳洲 ------------- */
.sethouse {
  min-width: 100%;
  height: 705px;
  position: relative;
  // .sethouse__label::after {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   display: block;
  //   height: 0;
  //   width: 888px;
  //   padding-left:5px;
  //   border-width: 0px 147px 705px 0px;
  //   transform:scaleX(-1) rotate(180deg);
  //   border-style: none solid solid;
  //   border-color: transparent transparent #111;
  // }
  .sethouse__label {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width:888px;
    height:705px;
    background-image: url("~@/static/images/icon/sethouse_label.png");
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @mixin label {
      line-height: 187px;
      text-align: center;
      font-size:71px;
      font-family:Microsoft YaHei;
      font-weight:bold;
      font-style:italic;
      color:rgba(255,255,255,1);
      position: relative;
      margin-left: 196px;
      cursor: pointer;
      transition: all .2s;
    }
    @mixin labelafter {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      display: block;
      height: 0;
      transform:scaleX(-1) rotate(180deg);
      border-style: none solid solid;
      border-color: transparent transparent rgba(11,72,141,.2);
    }
    .label1, .label1__active {
      @include label;
      width: 636px;
    }
    .label1::after {
      @include labelafter;
      width: 687px;
      padding-left:5px;
      border-width: 0px 39px 187px 0px;
    }
    .label1__active::after {
      @include labelafter;
      width: 710px;
      padding-left:5px;
      border-width: 0px 39px 187px 0px;
      border-color: transparent transparent #062A5A;
    }
    .label2, .label2__active {
      @include label;
      width: 592px;
    }
    .label2::after {
      @include labelafter;
      width: 637px;
      padding-left: 5px;
      border-width: 0px 38px 187px 0px;
    }
    .label2__active::after {
      @include labelafter;
      width: 660px;
      padding-left:5px;
      border-width: 0px 39px 187px 0px;
      border-color: transparent transparent #062A5A;
    }
    .label3, .label3__active {
      @include label;
      width: 543px;
    }
    .label3::after {
      @include labelafter;
      width: 589px;
      padding-left:5px;
      border-width: 0px 40px 187px 0px;
    }
    .label3__active::after {
      @include labelafter;
      width: 612px;
      padding-left:5px;
      border-width: 0px 39px 187px 0px;
      border-color: transparent transparent #062A5A;
    }
  }
  .sbanner {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    .sbanner__label {
      position: absolute;
      right: 209px;
      bottom: 131px;
      padding: 0 18px;
      height:95px;
      line-height: 95px;
      text-align: center;
      background:rgba(255,255,255,.3);
      font-size:51px;
      font-family:Microsoft YaHei;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .sbanner__btn {
      position: absolute;
      right: 209px;
      bottom: 48px;
      width:280px;
      height:62px;
      line-height: 62px;
      text-align: center;
      background:#062A5A;
      font-size:24px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      cursor: pointer;
    }
  }
}


/* 直播视频 */
.index__bg {
  background: #F5F8FB;
  width: 100%;
  background-image: url("~@/static/images/icon/index_bg2.png");
  background-size: 460px 113px;
  background-repeat: no-repeat;
  background-position-y: 50px;
  background-position-x: 18px;
}
.swiper-box {
  margin: auto;
  // width: 1200px;
  max-width: 1510px;
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
      // margin-right: 25px;
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
        color:#062A5A;
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
/* 动画 */
.leftmove {
  animation:leftmove 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.rightmove {
  animation:rightmove 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.topmove {
  animation:topmove 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes leftmove {
  0% {
    transform: translateX(10%);
    opacity: 0;
  }
  40% {
    transform: translate(-5%);
    opacity: 1;
  }
  60% {
    transform: translate(-5%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes rightmove {
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  40% {
    transform: translate(5%);
    opacity: 1;
  }
  60% {
    transform: translate(5%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes topmove {
  0% {
    opacity: 0;
    transform: translateY(20%)
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (min-width: 1200px) {
  .reason__main {
    padding-left: 204px;
    padding-right: 147px;
  }
  .index__bg {
    padding: 50px 0;
    margin: auto;
  }
  .news {
    padding: 50px 205px 0 205px;
  }
  .viewbox_home {
    margin-right: 25px;
  }
  .menu__bannerbtn {
    top: 15px;
    right: 63%;
    width: 230px;
    height: 50px;
  }
}

@media (max-width: 1510px) {
  .swiper-box__content div:nth-child(3) {
    display: none;
  }
  .viewbox_home {
    margin-right: 125px;
  }
}

@media (max-width: 1630px) {
  .reason__main {
    padding: 0 50px;
  }
}

@media (max-width: 1200px) {
  .banner__menu {
    padding: 0 50px;
  }
  .index__bg {
    padding: 50px;
  }
  .news {
    padding: 50px 50px 0 50px;
  }
  .menu__bannerbtn {
    top: 10px;
    left: 50px;
    width: 230px;
    height: 50px;
  }
}
</style>
