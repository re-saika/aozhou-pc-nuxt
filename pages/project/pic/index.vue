<template>
  <div class="gray">
    <div class="album__nav">
      <nav class="navigation">
        <div @click="routeTo('index')">
          首页
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div @click="routeTo('project')">
          推荐项目
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div class="font-blue">
          项目相册
        </div>
      </nav>
    </div>
    <div class="album-warp">
      <div class="album">
        <!-- 左侧轮播 -->
        <div class="album__pics">
          <div class="album__bigpicbox">
            <Spin v-if="!picLoading" fix />
            <img v-viewer class="album__bigpic" :src="img" @load="picLoading = true">
          </div>
          <div class="album__swiper-warp">
            <div class="album__swiper">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in newImg" :key="index" class="swiper-slide album__slide">
                  <div v-for="(i, ind) in item" :key="ind" class="album__slide-item" @click="changeShowPic(i)">
                    <img class="zoom-img" :src="i" alt="暂无预览图">
                  </div>
                  <div v-for="(i, ind) in (5 - item.length%5)" :key="ind + Math.random()" :class="item.length%5 != 0?'album__slide-item':'album__slide-none'" />
                </div>
              </div>
            </div>
            <div class="album__swiper-prev" />
            <div class="album__swiper-next" />
          </div>
        </div>
        <!-- 右侧导航 -->
        <div class="album__navs">
          <div class="navs">
            <div class="navs__title">
              项目相册
            </div>
            <ul class="navs__ul">
              <li v-for="(item , index) in list" :key="index" class="navs__li" @click="changeImgs(item.aid)">
                <!-- <img :src="require('@/static/images/icon/album_icon'+(index+1)+'.png')" :class="'navs__icon'+(index+1)"> -->
                {{ item.name }}({{ item.num }})
              </li>
            </ul>
          </div>
          <div class="projectbox">
            <div class="projectbox__header">
              <div class="projectbox__title">
                {{ detail.name }}
              </div>
              <div class="projectbox__year">
                {{ detail.property_year }}
              </div>
            </div>
            <ul class="projectbox__labels">
              <li class="projectbox__label">
                {{ detail.state_capital }}
              </li>
              <li class="projectbox__label">
                <span v-if="detail.type == 0">住宅</span>
                <span v-if="detail.type == 1">公寓</span>
                <span v-if="detail.type == 2">别墅</span>
                <span v-if="detail.type == 3">现房住宅</span>
                <span v-if="detail.type == 4">产权土地</span>
                <span v-if="detail.type == 5">期房住宅</span>
              </li>
              <li class="projectbox__label projectbox__labe_last">
                {{ detail.progress }}
              </li>
            </ul>
            <div class="projectbox__phone">
              <span class="projectbox__phone-title">咨询电话:</span>400-888-7222
            </div>
            <div class="projectbox__btn" @click="toDetail">
              查看项目详情
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="album__guess">
      <guesslike :pid="pid" />
    </div>
  </div>
</template>

<script>
import guesslike from '@/components/Guesslike'
import { spliceArray } from '@/libs/tools'
import Swiper from '@/libs/swiper.js'
import tran from '@/mixins/tran'
export default {
  components: {
    guesslike
  },
  mixins: [tran],
  async asyncData(context) {
    if (context.route.query.id) {
      try {
        const [data1, data2] = await Promise.all([
          context.app.$api.project.projectDetail({ id: context.route.query.id }).then(({ data }) => {
            return { detail: data }
          }),
          context.app.$api.project.projectPhoto({ project_id: context.route.query.id }).then(({ data }) => {
            // console.log(data.map((item) => {
            //   if (item.aid.length !== 0) {
            //     return item
            //   }
            // }))
            const list = []
            data.forEach((item) => {
              console.log(item)
              if (item.aid.length !== 0) {
                list.push(item)
              }
            })
            const imgs = list[0].aid
            const img = list[0].aid[0] || ''
            const newImg = spliceArray(imgs) // 二维数组
            return {
              list,
              imgs,
              img,
              newImg
            }
          })
        ])
        const res = {
          detail: data1.detail,
          list: data2.list,
          imgs: data2.imgs,
          img: data2.img,
          newImg: data2.newImg
        }

        return res
      } catch (error) {
        console.error(error)
      }
    }
  },
  data() {
    return {
      id: null,
      detail: {},
      list: [], // 相册列表
      imgs: [], // 图片列表
      img: '', // 当前大图
      newImg: [],
      picLoading: false
    }
  },
  computed: {
    pid() {
      return Number(this.$route.query.id)
    }
  },
  mounted() {
    // const that = this
    this.aSwiper = new Swiper(
      '.album__swiper',
      {
        speed: 1000,
        observer: true,
        navigation: {
          nextEl: '.album__swiper-next',
          prevEl: '.album__swiper-prev',
          disabledClass: 'swiper-disable',
          hideOnClick: true
        },
        on: {
          slideChangeTransitionStart() {
            // that.nextCallback()
          }
        }
      }
    )
  },
  methods: {
    changeImgs(imgs) {
      this.imgs = imgs
      this.newImg = spliceArray(this.imgs)
      this.img = imgs[0]
    },
    changeShowPic(img) {
      this.img = img
    },
    toDetail() {
      this.$router.push({
        name: 'project-detail',
        query: {
          id: this.pid
        }
      })
    },
    routeTo(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.album__nav {
  width: 100%;
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
.album-warp {
  width: 100%;
}
.album {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 31px;
  .album__pics {
    width: 840px;
    .album__bigpicbox {
      width: 840px;
      height: 500px;
      margin-bottom: 20px;
      overflow: hidden;
      position: relative;
      .album__bigpic {
        width: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .album__swiper-warp {
      width: 100%;
      height: 130px;
      position: relative;
      overflow: hidden;
      .album__swiper {
        width: 756px;
        height: 100%;
        margin: auto;
        .album__slide {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .album__slide-item {
            width: 146px;
            height: 90px;
          }
          .album__slide-none {
            display: none;
          }
        }
      }
      .album__swiper-prev {
        position: absolute;
        width: 30px;
        height: 130px;
        background-image: url("~@/static/images/icon/next.png");
        background-size: 14px 26px;
        transform:rotateY(180deg);
        background-position: center;
        background-repeat: no-repeat;;
        background-color: #062A5A;
        left: 0;
        top: 0;
        z-index: 1;
      }
      .album__swiper-next {
        position: absolute;
        width: 30px;
        height: 130px;
        background-image: url("~@/static/images/icon/next.png");
        background-size: 14px 26px;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #062A5A;
        right: 0;
        top: 0;
        z-index: 1;
      }
      .swiper-disable {
        background-color: #CCCCCC;
      }
      .album__swiper-prev::after {
        content: '';
      }
      .album__swiper-next::after {
        content: '';
      }
    }
  }
  .album__navs {
    width:340px;
    height:650px;
    background:rgba(255,255,255,1);
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .navs {
      .navs__title {
        height: 78px;
        border-bottom: 1px solid #CCCCCC;
        font-size:24px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height: 78px;
      }
      .navs__ul {
        padding-top: 31px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        .navs__li {
          margin-bottom: 20px;
          display: flex;
          transition: all .2s;
          align-items: center;
          cursor: pointer;
          .navs__icon1 {
            width: 18px;
            height: 18px;
            margin-right: 14px;
          }
          .navs__icon2 {
            width: 18px;
            height: 20px;
            margin-right: 14px;
          }
          .navs__icon3 {
            width: 17px;
            height: 16px;
            margin-right: 15px;
          }
          .navs__icon4 {
            width: 19px;
            height: 19px;
            margin-right: 14px;
          }
          .navs__icon5 {
            width: 19px;
            height: 18px;
            margin-right: 13px;
          }
          .navs__icon6 {
            width: 18px;
            height: 16px;
            margin-right: 14px;
          }
          .navs__icon7 {
            width: 21px;
            height: 23px;
            margin-right: 12px;
          }
        }
        .navs__li:hover {
          color: #062A5A;
          transition: all .2s;
        }
      }
    }
    .projectbox {
      width:310px;
      height:200px;
      background:rgba(245,248,251,1);
      border:1px solid rgba(204,204,204,1);
      padding: 19px 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .projectbox__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .projectbox__title {
          font-size:30px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .projectbox__year {
          width:80px;
          height:24px;
          text-align: center;
          line-height: 24px;
          background:rgba(254,96,12,1);
          border-radius:4px;
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
        }
      }
      .projectbox__labels {
        display: flex;
        .projectbox__label {
          list-style: none;
          margin-right: 10px;
          padding-right: 10px;
          border-right: 1px solid #062A5A;
          font-size:16px;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:#062A5A;
        }
        .projectbox__labe_last {
          margin: 0;
          padding: 0;
          border: none;
        }
      }
      .projectbox__phone {
        font-size:24px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color: #062A5A;
        .projectbox__phone-title {
          color:rgba(102,102,102,1);
        }
      }
      .projectbox__btn {
        width:280px;
        height:44px;
        background:#062A5A;
        border-radius:4px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 44px;
        cursor: pointer;
      }
    }
  }
}
.album__guess {
  background: white;
  width: 100%;
  padding: 50px 0 30px 0;
}
</style>
