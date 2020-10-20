<template>
  <div class="gray">
    <!-- 头部介绍 -->
    <div class="projectd__header-warp">
      <div class="projectd__header">
        <div class="projectd__nav">
          <nav class="navigation">
            <div class="navigation__item" @click="routeTo('index')">
              首页
            </div>
            <img src="@/static/images/icon/r_w_arrow.png" class="navigation__icon">
            <div class="navigation__item" @click="routeTo('project')">
              项目推荐
            </div>
            <img src="@/static/images/icon/r_w_arrow.png" class="navigation__icon">
            <div class="navigation__item">
              {{ detail.name }}
            </div>
          </nav>
        </div>
        <div class="projectd__title">
          <div class="projectd__title-word">
            {{ detail.name }}
          </div>
          <div v-for="(item, index) in (detail.spread_tag || '').split(',')" :key="index">
            <div
              v-if="afterIndex(index+1) == 1"
              class="projectd__title-label projectd__title-label_green"
            >
              {{ item }}
            </div>
            <div
              v-if="afterIndex(index+1) == 2"
              class="projectd__title-label projectd__title-label_blue"
            >
              {{ item }}
            </div>
            <div
              v-if="afterIndex(index+1) == 0"
              class="projectd__title-label projectd__title-label_orange"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="projectd__content">
          <!-- 轮播 -->
          <div class="projectd__swiper">
            <Spin v-if="!picLoading" fix />
            <!-- 大轮播 -->
            <div class="swiper-pic">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in imgs"
                  :key="index"
                  class="swiper-slide swiper-pic__content"
                >
                  <img class="swiper-pic__img" :src="item" @click="toPic" @load="picLoading = true">
                </div>
              </div>
            </div>
            <div class="swiper-pic-prev" />
            <div class="swiper-pic-next" />
            <!-- 小轮播 -->
            <div class="swiper-list">
              <div class="swiper-wrapper">
                <div
                  v-for="(now,index) in images"
                  :key="index"
                  class="swiper-slide swiper-list__content"
                >
                  <div
                    v-for="(item) in now"
                    :key="item.name"
                    class="swiper-list__item"
                    @click="showBigPic(item)"
                  >
                    <img class="swiper-list__itemimg" :src="item.aid[0]">
                    <div class="swiper-list__itemname">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-list-prev" />
            <div class="swiper-list-next" />
          </div>
          <!-- 详情 -->
          <div class="projectd__msg">
            <div class="projectd__msg1">
              <div class="number">
                <div class="number__block">
                  <div class="number__blueword">
                    <span class="number__smallword" />
                    {{ detail.price }}
                    <span class="number__smallword" />
                    <span v-if="detail.type == 1">万</span>
                  </div>
                  <div class="number__word">
                    <span v-if="detail.type == 1">澳元起</span>
                    <span v-else>均价（澳币/平）</span>
                  </div>
                </div>
                <div class="number__block">
                  <div class="number__blueword">
                    {{ detail.down_pay_percent | getNumer }}
                    <span class="number__smallword">{{ detail.down_pay_percent | getNumberOther }}</span>
                  </div>
                  <div class="number__word">
                    首付比例
                  </div>
                </div>
                <div class="number__block">
                  <div class="number__blueword">
                    {{ detail.annualized_return | getNumer }}
                    <span class="number__smallword">{{ detail.annualized_return | getNumberOther }}</span>
                  </div>
                  <div class="number__word">
                    年回报率
                  </div>
                </div>
              </div>
              <div class="discount">
                <span class="discount__label">优惠信息</span>
                {{ detail.discount_msg }}
              </div>
              <div class="developers">
                <span class="developers__title">开发商</span>
                {{ detail.developer }}
              </div>
            </div>
            <div class="projectd__msg2">
              <div class="projectd__msg2block">
                项目面积： {{ detail.area }}㎡
              </div>
              <div class="projectd__msg2block">
                产权年限： {{ detail.property_year }}
              </div>
              <div class="projectd__msg2block">
                房产类型：
                <span v-if="detail.type == 0">住宅</span>
                <span v-if="detail.type == 1">公寓</span>
                <span v-if="detail.type == 2">别墅</span>
                <span v-if="detail.type == 3">现房住宅</span>
                <span v-if="detail.type == 4">产权土地</span>
                <span v-if="detail.type == 5">期房住宅</span>
              </div>
              <div class="projectd__msg2block">
                城市： {{ detail.city }}
              </div>
              <div class="projectd__msg2block">
                交房时间： {{ detail.boarding_time }}
              </div>
              <div class="projectd__msg2block">
                可选户型： {{ detail.apartment }}
              </div>
            </div>
            <div class="projectd__msg3">
              <div class="landmark">
                <img src="@/static/images/icon/project_position.png" class="landmark__icon">
                {{ detail.addr_annotation }}
              </div>
              <div class="address">
                详细地址：{{ detail.address }}
              </div>
              <div class="project__btns">
                <div class="project__btn1" @click="toVR">
                  VR看房
                </div>
                <div class="project__btn2" @click="doCopy">
                  <img class="projectd__btnicon" src="@/static/images/icon/project_phone.png">获取电话号码
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中部内容 -->
    <div class="projectd__main">
      <!-- 导航 -->
      <div :class="tabtop?'nav-warp_top':'nav-warp'">
        <nav class="nav">
          <div class="nav__item" :class="isActive == 0?'nav__item_active':''" @click="toIntroduce">
            项目介绍
          </div>
          <div class="nav__item" :class="isActive == 1?'nav__item_active':''" @click="toApartment">
            户型介绍
          </div>
          <div class="nav__item" :class="isActive == 2?'nav__item_active':''" @click="toPeriphery">
            周边配套
          </div>
          <div class="nav__item" :class="isActive == 3?'nav__item_active':''" @click="toCharacteristic">
            项目特色
          </div>
          <div class="nav__item" :class="isActive == 4?'nav__item_active':''" @click="toDownload">
            资料下载
          </div>
        </nav>
      </div>
      <!-- 项目详情 -->
      <div class="projectd__body">
        <!-- 详情主体 -->
        <div class="projectd__article">
          <div ref="introduce" class="article">
            <div class="article__header">
              <img src="@/static/images/icon/project_article1.png" class="article__icon1">
              项目介绍
            </div>
            <!-- <div class="article-html" v-html="detail.briefing"></div> -->
            <my-article :content="detail.briefing" />
          </div>
          <div ref="apartment" class="article">
            <div class="article__header">
              <img src="@/static/images/icon/project_article2.png" class="article__icon2">
              户型介绍
            </div>
            <div class="apart">
              <div v-for="(item,index) in apartments" :key="index" class="apart__item" :class="isApart == index?'apart__item_active':''" @click="changeApart(index)">
                <div>{{ item.name }}</div>
                <div>{{ item.area }}</div>
              </div>
              <div
                v-for="(item, index) in (5 - apartments.length%5)"
                :key="index + Math.random()"
                :class="apartments.length%5 != 0?'apart__empty':'apart__empty_none'"
              />
            </div>
            <div class="apart__swiper-warp">
              <div
                class="apart__swiper"
                @slideChangeTransitionStart="apartSwiperChange"
              >
                <div class="swiper-wrapper">
                  <div v-for="(item, index) in appartImgs" :key="index" class="swiper-slide">
                    <div class="apart__swiper-imgbox">
                      <img v-viewer class="apart__swiper-img" :src="item" alt="暂无预览图">
                    </div>
                    <div class="apart__swiper-imgtips">
                      点击图片查看原图
                    </div>
                  </div>
                </div>
              </div>
              <div class="apart__swiper-prev" />
              <div class="apart__swiper-next" />
            </div>
          </div>
          <div ref="periphery" class="article">
            <div class="article__header">
              <img src="@/static/images/icon/project_article3.png" class="article__icon3">
              周边配套
            </div>
            <my-article :content="detail.peripheral_matching" />
          </div>
          <div ref="characteristic" class="article">
            <div class="article__header">
              <img src="@/static/images/icon/project_article4.png" class="article__icon4">
              项目特色
            </div>
            <my-article :content="detail.project_features" />
          </div>
          <div ref="download" class="article">
            <div class="article__header">
              <img src="@/static/images/icon/project_article5.png" class="article__icon5">
              资料下载
            </div>
            <div class="article__btns">
              <a class="article__btn" :href="downloadUrl1" target="_blank">
                单张
              </a>
              <a class="article__btn" :href="downloadUrl2" target="_blank">
                折页
              </a>
              <a class="article__btn" :href="downloadUrl3" target="_blank">
                户型图
              </a>
            </div>
          </div>
        </div>
        <!-- 推荐 -->
        <recommend :pid="detail.id" />
      </div>
    </div>
  </div>
</template>

<script>
import MyArticle from '@/components/MyArticle'
import recommend from '@/components/Recommend'
import { spliceArray } from '@/libs/tools'
import Swiper from '@/libs/swiper.js'
import tran from '@/mixins/tran'
export default {
  components: {
    MyArticle,
    recommend
  },
  filters: {
    // 截取百分号前面的字符串
    getNumer(val) {
      if (val.includes('%')) {
        return val.match(/(\S*)%/)[1]
      }
      return val
      // console.log((val + '%').match(/(\S*)%/)[1])
      // return val.match(/(\S*)%/)[1]
    },
    // 截取百分号后面的字符串
    getNumberOther(val) {
      if (val.includes('%')) {
        return '%' + val.match(/%(\S*)/)[1]
      }
      return '%'
    }
  },
  mixins: [tran],
  async asyncData(context) {
    if (context.route.query.id) {
      try {
        const [data1, data2, data3] = await Promise.all([
          context.app.$api.project.projectDetail({ id: context.route.query.id }).then(({ data }) => {
            // data.boarding_time = standardtoDate(data.boarding_time * 1000) // 后台说由他转换 2020/6/17
            // lc的交房时间不要日期
            if (data.id === 6 || data.id === '6') {
              data.boarding_time = data.boarding_time.substring(0, data.boarding_time.length - 3)
            }
            return { detail: data }
          }),
          context.app.$api.project.projectPhoto({ project_id: context.route.query.id }).then(({ data }) => {
            const igs = []
            data.forEach((item) => {
              if (item.aid.length !== 0) {
                igs.push(item)
              }
            })
            const images = spliceArray(igs)
            return {
              images,
              imgs: images[0][0].aid
            }
          }),
          context.app.$api.project.projectApartment({ project_id: context.route.query.id }).then(({ data }) => {
            const appartImgs = []
            data.forEach((item) => {
              appartImgs.push(item.img_url)
            })
            return { appartImgs, apartments: data }
          })
        ])
        const res = {
          detail: data1.detail,
          images: data2.images,
          imgs: data2.imgs,
          appartImgs: data3.appartImgs,
          apartments: data3.apartments
        }

        return res
      } catch (error) {
        console.error(error)
      }
    }
  },
  data() {
    return {
      picLoading: false,
      hhh: 123,
      // nav
      tabtop: false, // nav是否置顶
      isActive: null,
      // ...
      detail: {},
      images: [], // 总图片数组
      imgs: [], // 当前显示的数组
      apartments: [], // 户型
      isApart: 0,
      appartImgs: []
    }
  },
  computed: {
    afterIndex() {
      return function(index) {
        return index % 3
      }
    },
    // 又是要写死的，根据写死的项目id，写死对应的COS链接
    // LC id = 6 布里斯本 id = 1 美塑 id = 7 博士山 id = 8
    // 单张
    downloadUrl1() {
      switch (this.detail.id) {
      case 6:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjo5OTZ9'
      case 1:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjo5OTd9'
      case 7:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjo5OTJ9'
      case 8:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjoxMDAxfQoo00ooo00o'
      default:
        return ''
      }
    },
    // 折页
    downloadUrl2() {
      switch (this.detail.id) {
      case 6:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjoxNzg5fQoo00ooo00o'
      case 1:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjoxNzg4fQoo00ooo00o'
      case 7:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjoxNzg3fQoo00ooo00o'
      case 8:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjoxNzkwfQoo00ooo00o'
      default:
        return ''
      }
    },
    // 户型图
    downloadUrl3() {
      switch (this.detail.id) {
      case 6:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjo5Njl9'
      case 1:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjo5NTl9'
      case 7:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjo5ODB9'
      case 8:
        return 'http://admin.azhfang.com/attachment/MLDvAbw5MCD8AiwqMHDeAaw0MHsiYWlkIjo5OTV9'
      default:
        return ''
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showTab)
    const that = this
    this.swiperPic = new Swiper(
      '.swiper-pic',
      {
        speed: 1000,
        observer: true,
        navigation: {
          nextEl: '.swiper-pic-next',
          prevEl: '.swiper-pic-prev',
          hideOnClick: true
        }
      }
    )
    this.swiperList = new Swiper(
      '.swiper-list',
      {
        speed: 1000,
        navigation: {
          nextEl: '.swiper-list-next',
          prevEl: '.swiper-list-prev',
          hideOnClick: true
        }
      }
    )
    this.swiperApart = new Swiper(
      '.apart__swiper',
      {
        speed: 1000,
        navigation: {
          nextEl: '.apart__swiper-next',
          prevEl: '.apart__swiper-prev',
          hideOnClick: true
        },
        on: {
          slideChangeTransitionStart() {
            that.apartSwiperChange()
          }
        }
      }
    )
  },
  methods: {
    // 5个5个分数组
    spliceArray(array) {
      const ra = []
      for (let i = 0; i < array.length;) {
        ra.push(array.slice(i, i + 5))
        i += 5
      }
      return ra
    },
    getPhoto() {
      project.projectPhoto({ project_id: this.id }).then((res) => {
        const igs = []
        res.data.forEach((item) => {
          if (item.aid.length !== 0) {
            igs.push(item)
          }
        })
        this.images = this.spliceArray(igs)
        this.imgs = this.images[0][0].aid
      })
    },
    getApartment() {
      project.projectApartment({ project_id: this.id }).then((res) => {
        this.apartments = res.data
        res.data.forEach((item) => {
          this.appartImgs.push(item.img_url)
        })
        // 刷新点击大图
        this.$previewRefresh()
      })
    },
    // 页面操作
    toVR() {
      window.open(this.detail.vr_url)
    },
    // 复制电话
    doCopy() {
      this.$clipboard(this.detail.phone)
      this.$Message.success(`${this.detail.phone}已复制！`)
    },
    showBigPic(item) {
      this.imgs = item.aid
    },
    changeApart(index) {
      this.isApart = index
      this.swiperApart.slideTo(index, 1000, false)
    },
    showTab() {
      if (document.documentElement.scrollTop >= 800) {
        this.tabtop = true
      } else {
        this.tabtop = false
      }
      if (this.$refs.characteristic) {
        if (this.$refs.download.getBoundingClientRect().top <= 500) {
          this.isActive = 4
        } else if (this.$refs.characteristic.getBoundingClientRect().top <= 60) {
          this.isActive = 3
        } else if (this.$refs.periphery.getBoundingClientRect().top <= 60) {
          this.isActive = 2
        } else if (this.$refs.apartment.getBoundingClientRect().top <= 60) {
          this.isActive = 1
        } else if (this.$refs.introduce.getBoundingClientRect().top <= 60) {
          this.isActive = 0
        }
      }
    },
    apartSwiperChange() {
      this.isApart = this.swiperApart.realIndex
    },
    // 跳转锚点
    toIntroduce() {
      this.$refs.introduce.scrollIntoView(true)
      this.showTab()
    },
    toApartment() {
      this.$refs.apartment.scrollIntoView(true)
      this.showTab()
    },
    toPeriphery() {
      this.$refs.periphery.scrollIntoView(true)
      this.showTab()
    },
    toCharacteristic() {
      this.$refs.characteristic.scrollIntoView(true)
      this.showTab()
    },
    toDownload() {
      this.$refs.download.scrollIntoView(true)
      this.showTab()
    },
    toPic() {
      this.$router.push({
        name: 'project-pic',
        query: {
          id: this.detail.id
        }
      })
    },
    routeTo(name) {
      this.$router.push({
        name
      })
    }
  },
  head() {
    return {
      title: this.detail.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: this.detail.keyword },
        { hid: 'description', name: 'description', content: this.detail.information }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.projectd__header-warp {
  width:100%;
  height:688px;
  background:rgba(36,40,46,.8);
}
.projectd__header {
  width: 1200px;
  margin: auto;
  .projectd__nav {
    height: 62px;
    display: flex;
    align-items: center;
    .navigation {
      font-size:14px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color: white;
      display: flex;
      height: 16px;
      align-items: center;
      cursor: pointer;
      .navigation__icon {
        width:7px;
        height:12px;
        margin: 0 8px;
      }
    }
  }
  .projectd__title {
    display: flex;
    align-items: center;
    margin-bottom: 27px;
    .projectd__title-word {
      font-size:30px;
      font-family:Microsoft YaHei;
      font-weight:bold;
      color:rgba(255,255,255,1);
      margin-right: 20px;
    }
    .projectd__title-label {
      width:80px;
      height:24px;
      text-align: center;
      line-height: 24px;
      border-radius:4px;
      font-size:14px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      margin-right: 15px;
    }
    .projectd__title-label_green {
      background:rgba(0,181,120,1);
    }
    .projectd__title-label_green {
      background:#00B578;
    }
    .projectd__title-label_blue {
      background:#1274FF;
    }
    .projectd__title-label_orange {
      background:#FE600C;
    }
  }
  .projectd__content {
    display: flex;
    justify-content: space-between;
    .projectd__swiper {
      width: 670px;
      position: relative;
      .swiper-pic {
        width:670px;
        height:448px;
        margin-bottom: 17px;
        overflow: hidden;
        .swiper-pic__img {
          width:100%;
          height:100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .swiper-pic-prev {
        position: absolute;
        width: 44px;
        height: 44px;
        background-image: url("~@/static/images/icon/index__pre.png");
        background-size: 44px 44px;
        left: 0;
        bottom: 306px;
        z-index: 1;
      }
      .swiper-pic-next {
        position: absolute;
        width: 44px;
        height: 44px;
        background-image: url("~@/static/images/icon/index__pre.png");
        background-size: 44px 44px;
        transform:rotateY(180deg);
        right: 0;
        bottom: 306px;
        z-index: 1;
      }
      .swiper-pic-prev::after {
        content: '';
      }
      .swiper-pic-next::after {
        content: '';
      }
      .swiper-list-prev {
        position: absolute;
        width: 24px;
        height: 44px;
        background-image: url("~@/static/images/icon/project_pre.png");
        left: 0;
        bottom: 34px;
        z-index: 1;
      }
      .swiper-list-next {
        position: absolute;
        width: 24px;
        height: 44px;
        background-image: url("~@/static/images/icon/project_pre.png");
        right: 0;
        bottom: 34px;
        transform:rotateY(180deg);
        z-index: 1;
      }
      .swiper-list-prev::after {
        content: '';
      }
      .swiper-list-next::after {
        content: '';
      }
      .swiper-list {
        width:670px;
        height:83px;
        overflow: hidden;
        .swiper-list__content {
          display: flex;
          // justify-content: space-between;
          .swiper-list__item {
            width:125px;
            height:83px;
            position: relative;
            margin-right: 11.25px;
            .swiper-list__itemimg {
              width:100%;
              height:100%;
              object-fit: cover;
              object-position: center;
            }
            .swiper-list__itemname {
              position: absolute;
              bottom: 0;
              width:125px;
              height:26px;
              background:rgba(51,51,51,.3);
              text-align: center;
              line-height: 26px;
              font-size:12px;
              font-family:Microsoft YaHei;
              font-weight:bold;
              color:rgba(255,255,255,1);
            }
          }
        }
      }
    }
    .projectd__msg {
      width:510px;
      height:548px;
      background:rgba(255,255,255,1);
      border-top: 10px solid #062A5A;
      .projectd__msg1 {
        border-bottom: 1px dashed #E4E4E4;
        padding: 0 35px;
        .number {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 136px;
          .number__block {
            text-align: center;
            .number__blueword {
              font-size:30px;
              font-family:Microsoft YaHei;
              font-weight:bold;
              color:#062A5A;
              letter-spacing: -1px;
              margin-bottom: 5px;
              .number__smallword {
                font-size:14px;
              }
            }
            .number__word {
              font-size:14px;
              font-family:Microsoft YaHei;
              font-weight:400;
              color:rgba(51,51,51,1);
            }
          }
        }
        .discount {
          font-size:12px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:#062A5A;
          display: flex;
          align-items: center;
          margin-bottom: 23px;
          .discount__label {
            font-size:12px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
            width:60px;
            height:18px;
            text-align: center;
            line-height: 18px;
            background:#062A5A;
            border-radius:2px;
            margin-right: 6px;
          }
        }
        .developers {
          margin-bottom: 18px;
          .developers__title {
            color:rgba(153,153,153,1);
            margin-right: 14px;
          }
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:#062A5A;
        }
      }
      .projectd__msg2 {
        border-bottom: 1px dashed #E4E4E4;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 20px 35px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        .projectd__msg2block {
          width: 50%;
          margin-bottom: 15px;
          line-height: 20px;
        }
        .projectd__msg2block_last {
          margin-bottom: 0;
        }
      }
      .projectd__msg3 {
        padding: 0 35px;
        .landmark {
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
          height: 42px;
          line-height: 42px;
          .landmark__icon {
            width:12px;
            height:14px;
            margin-right: 6px;
          }
        }
        .address {
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(102,102,102,1);
          margin-bottom: 16px;
        }
        .project__btns {
          display: flex;
          justify-content: space-between;
          .project__btn1 {
            width:200px;
            height:44px;
            background:rgba(255,255,255,1);
            border:1px solid #062A5A;
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:#062A5A;
            text-align: center;
            line-height: 44px;
            cursor: pointer;
          }
          .project__btn2 {
            width:200px;
            height:44px;
            background:#062A5A;
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            .projectd__btnicon {
              width: 24px;
              height: 24px;
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
}
.projectd__main {
  width: 100%;
  background: #F5F8FB;
  position: relative;
  .nav-warp {
    width: 100%;
    position: absolute;
    z-index: 10;
    background:rgba(255,255,255,1);
    box-shadow:1px 2px 8px 0px rgba(51,51,51,0.2);
  }
  .nav-warp_top {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    background:rgba(255,255,255,1);
    box-shadow:1px 2px 8px 0px rgba(51,51,51,0.2);
  }
  .nav {
    width: 1200px;
    margin: auto;
    display: flex;
    padding: 18px 0 8px 0;
    .nav__item {
      width: 136px;
      height: 55px;
      line-height: 44px;
      text-align: center;
      font-size:18px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(51,51,51,1);
      cursor: pointer;
    }
    .nav__item_active {
      background-image: url("~@/static/images/icon/project__active.png");
      background-size: 136px 55px;
      background-repeat: no-repeat;
      color:rgba(255,255,255,1);
    }
  }
  .projectd__body {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    .projectd__article {
      .article {
        width: 840px;
        margin-bottom: 14px;
        .article__header {
          width:840px;
          height:64px;
          background:rgba(255,255,255,1);
          font-size:22px;
          font-family:Microsoft YaHei;
          font-weight:bold;
          color:rgba(51,51,51,1);
          display: flex;
          align-items: center;
          padding-left: 11px;
          border-bottom: 1px solid #DCDCDC;
          margin-bottom: 40px;
          .article__icon1 {
            margin-right: 9px;
            width: 20px;
            height: 24px;
          }
          .article__icon2 {
            margin-right: 9px;
            width: 22px;
            height: 22px;
          }
          .article__icon3 {
            margin-right: 9px;
            width: 20px;
            height: 26px;
          }
          .article__icon4 {
            margin-right: 9px;
            width: 24px;
            height: 22px;
          }
          .article__icon5 {
            margin-right: 9px;
            width: 21px;
            height: 21px;
          }
        }
        .article__btns {
          margin-bottom: 46px;
          display: flex;
          .article__btn {
            cursor: pointer;
            width:130px;
            height:70px;
            text-align: center;
            line-height: 70px;
            border:1px solid #062A5A;
            font-size:24px;
            font-family:Microsoft YaHei;
            font-weight:400;
            background:rgba(255,255,255,1);
            color: #062A5A;
            margin-bottom: 20px;
            transition: all .2s;
            margin-right: 48px;
          }
          .article__btn:hover {
            background:#062A5A;
            transition: all .2s;
            color:rgba(255,255,255,1);
          }
        }
        .apart {
          margin-bottom: 46px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .apart__item {
            cursor: pointer;
            width:130px;
            height:70px;
            border:1px solid #062A5A;
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:400;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background:rgba(255,255,255,1);
            color: #062A5A;
            margin-bottom: 20px;
            transition: all .2s;
          }
          .apart__item_active {
            background:#062A5A;
            transition: all .2s;
            color:rgba(255,255,255,1);
          }
          .apart__empty {
            width:130px;
            height:70px;
          }
          .apart__empty_none {
            display: none;
          }
        }
        .apart__swiper-warp {
          width: 100%;
          position: relative;
          margin: auto;
          .apart__swiper {
            width:704px;
            height:879px;
            overflow: hidden;
            margin: auto;
            .apart__swiper-imgbox {
              width:704px;
              height:879px;
              position: relative;
              .apart__swiper-img {
                width: 100%;
                height: 100%;
                // object-fit: cover;
                object-fit: contain;
                object-position: center;
              }
            }
            .apart__swiper-imgtips {
              position: absolute;
              right: 0;
              top: 0;
              padding: 0 20px;
              height:36px;
              text-align: center;
              line-height: 36px;
              background:rgba(51,51,51,.5);
              font-size:16px;
              color:rgba(255,255,255,1);
            }
          }
          .apart__swiper-prev {
            position: absolute;
            width: 44px;
            height: 44px;
            background-image: url("~@/static/images/icon/index__pre.png");
            background-size: 44px 44px;
            left: 0;
            bottom: 417px;
            z-index: 1;
          }
          .apart__swiper-next {
            position: absolute;
            width: 44px;
            height: 44px;
            background-image: url("~@/static/images/icon/index__pre.png");
            background-size: 44px 44px;
            transform:rotateY(180deg);
            right: 0;
            bottom: 417px;
            z-index: 1;
          }
          .apart__swiper-prev::after {
            content: '';
          }
          .apart__swiper-next::after {
            content: '';
          }
        }
      }
    }
  }
}
</style>
