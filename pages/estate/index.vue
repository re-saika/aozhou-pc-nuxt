<template>
  <div>
    <subtitle class="bm" sub-title="置业澳洲" sub-title-en="Property Australia" />
    <div class="main">
      <div class="main__auto">
        <!-- 好房视频 -->
        <div class="main__item">
          <div class="main__title">
            <span class="main__title-left">好房视频</span>
            <div class="main__title-right">
              <div v-for="(item, index) in videoList" :key="index" class="main__li main__li_pointer" :class="{'main__li_active': isActive.includes(index)}" @click="changeFun(index)">
                {{ item.name }}
              </div>
              <div class="main__more main__li_pointer" @click="moreFun(0)">
                更多
                <img class="main__more-icon" src="@/static/images/icon/right_gray.png" alt="">
              </div>
            </div>
          </div>
          <div class="main__content">
            <div v-swiper:myswiper="swiperOptions" @slideChangeTransitionStart="nextCallback">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in videoList" :key="index" class="swiper-slide main__row" :class="{'main__flex':item.data.length<3?true:false}">
                  <div v-for="(element, i) in item.data" :key="i" class="main__box" @click="checkFun(element)">
                    <div class="main__picbox">
                      <img :src="element.aid" class="main__pic" alt="">
                    </div>
                    <img class="main__active" src="@/static/images/img/action.png" alt="">
                    <div class="main__info">
                      <div class="main__info-title text-overs">
                        {{ element.name }}
                      </div>
                      <p class="main__p">
                        {{ element.introduction }}
                      </p>
                    </div>
                  </div>
                  <div v-if="item.data.length>0?false:true" class="main__default">
                    <img class="main__default-img" src="@/static/images/icon/default.png" alt="">
                  </div>
                </div>
              </div>
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </div>
          </div>
        </div>
        <!-- 澳洲生活 -->
        <div class="main__item">
          <div class="main__title">
            <span class="main__title-left">澳洲生活</span>
            <div class="main__title-right">
              <div v-for="(item, index) in articleList1" :key="index" class="main__li main__li_pointer" :class="{'main__li_active': isLife.includes(index)}" @click="lifeChangeFun(index)">
                {{ item.name }}
              </div>
              <div class="main__more main__li_pointer" @click="moreFun(9)">
                更多<img class="main__more-icon" src="@/static/images/icon/right_gray.png" alt="">
              </div>
            </div>
          </div>
          <div class="main__content">
            <div v-swiper:swiper1="swiperOptions" @slideChangeTransitionStart="lifeNextCallback">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in articleList1" :key="index" class="swiper-slide main__row" :class="{'main__flex':item.data.length<3?true:false}">
                  <div v-for="(element, i) in item.data" :key="i" class="main__box" @click="checkFun(element)">
                    <div class="main__picbox">
                      <img :src="element.aid" alt="" class="main__pic">
                    </div>
                    <div class="main__info">
                      <div class="main__info-title text-overs">
                        {{ element.name }}
                      </div>
                      <p class="main__p">
                        {{ element.introduction }}
                      </p>
                    </div>
                  </div>
                  <div v-if="item.data.length>0?false:true" class="main__default">
                    <img class="main__default-img" src="@/static/images/icon/default.png" alt="">
                  </div>
                </div>
              </div>
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </div>
          </div>
        </div>
        <!-- 购房攻略 -->
        <div class="main__item">
          <div class="main__title">
            <span class="main__title-left">购房攻略</span>
            <div class="main__title-right">
              <div v-for="(item, index) in articleList2" :key="index" class="main__li main__li_pointer" :class="{'main__li_active': isCourse.includes(index)}" @click="courseChangeFun(index)">
                {{ item.name }}
              </div>
              <div class="main__more main__li_pointer" @click="moreFun(10)">
                更多<img class="main__more-icon" src="@/static/images/icon/right_gray.png" alt="">
              </div>
            </div>
          </div>
          <div class="main__content">
            <div v-swiper:swiper2="swiperOptions" @slideChangeTransitionStart="courseNextCallback">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in articleList2" :key="index" class="swiper-slide main__row" :class="{'main__flex':item.data.length<3?true:false}">
                  <div v-for="(element, i) in item.data" :key="i" class="main__box" @click="checkFun(element)">
                    <div class="main__picbox">
                      <img :src="element.aid" alt="" class="main__pic">
                    </div>
                    <div class="main__info">
                      <div class="main__info-title text-overs">
                        {{ element.name }}
                      </div>
                      <p class="main__p">
                        {{ element.introduction }}
                      </p>
                    </div>
                  </div>
                  <div v-if="item.data.length>0?false:true" class="main__default">
                    <img class="main__default-img" src="@/static/images/icon/default.png" alt="">
                  </div>
                </div>
              </div>
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </div>
          </div>
        </div>
        <!-- 澳洲资讯 -->
        <div class="main__item">
          <div class="main__title">
            <span class="main__title-left">澳洲资讯</span>
            <div class="main__title-right">
              <div v-for="(item, index) in articleList3" :key="index" class="main__li main__li_pointer" :class="{'main__li_active': isInfo.includes(index)}" @click="infoChangeFun(index)">
                {{ item.name }}
              </div>
              <div class="main__more main__li_pointer" @click="moreFun(11)">
                更多<img class="main__more-icon" src="@/static/images/icon/right_gray.png" alt="">
              </div>
            </div>
          </div>
          <div class="main__content">
            <div v-swiper:swiper3="swiperOptions" @slideChangeTransitionStart="infoNextCallback">
              <div class="swiper-wrapper">
                <div v-for="(item, index) in articleList3" :key="index" class="swiper-slide main__row" :class="{'main__flex':item.data.length<3?true:false}">
                  <div v-for="(element, i) in item.data" :key="i" class="main__box" @click="checkFun(element)">
                    <div class="main__picbox">
                      <img :src="element.aid" alt="" class="main__pic">
                    </div>
                    <div class="main__info">
                      <div class="main__info-title text-overs">
                        {{ element.name }}
                      </div>
                      <p class="main__p">
                        {{ element.introduction }}
                      </p>
                    </div>
                  </div>
                  <div v-if="item.data.length>0?false:true" class="main__default">
                    <img class="main__default-img" src="@/static/images/icon/default.png" alt="">
                  </div>
                </div>
              </div>
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import subtitle from '@/components/Subtitle'
export default {
  components: {
    subtitle
  },
  async asyncData({ app }) {
    try {
      // 获得文章列表
      return await app.$api.estate.setHouseAus().then(({ data }) => {
        return {
          data,
          videoList: data[0].children,
          articleList1: data[1].children,
          articleList2: data[2].children,
          articleList3: data[3].children
        }
      })
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      swiperOptions: {
        // pagination: {
        //   el: '.swiper-pagination'
        // }
        // slidesPerView: 3,
        // spaceBetween: 30,
        // freeMode: true
      },
      data: [],
      swiperData: [],
      // 控制类名绑定，选中效果
      isActive: [0],
      isLife: [0],
      isCourse: [0],
      isInfo: [0],
      // 每一行的数据
      videoList: [],
      articleList1: [],
      articleList2: [],
      articleList3: []
    }
  },
  methods: {
    // 好房视频
    changeFun(i) {
      if (!this.isActive.includes(i)) {
        this.isActive = []
        this.isActive.push(i)
      }
      if (i === 0) {
        window.open('https://play.yunxi.tv/wechat/liveroom/67407?key=1d5fdb0bcd0510df2d1b183292b3edaf')
      }
      this.myswiper.slideTo(i, 1000, false)
    },
    nextCallback() {
      const id = this.myswiper.realIndex
      if (!this.isActive.includes(id)) {
        this.isActive = []
        this.isActive.push(id)
      }
    },
    // 澳洲生活
    lifeChangeFun(id) {
      if (!this.isLife.includes(id)) {
        this.isLife = []
        this.isLife.push(id)
      }
      this.swiper1.slideTo(id, 1000, false)
    },
    lifeNextCallback() {
      const id = this.swiper1.realIndex
      if (!this.isLife.includes(id)) {
        this.isLife = []
        this.isLife.push(id)
      }
    },
    // 购房攻略
    courseChangeFun(id) {
      if (!this.isCourse.includes(id)) {
        this.isCourse = []
        this.isCourse.push(id)
      }
      this.swiper2.slideTo(id, 1000, false)
    },
    courseNextCallback() {
      const id = this.swiper2.realIndex
      if (!this.isCourse.includes(id)) {
        this.isCourse = []
        this.isCourse.push(id)
      }
    },
    // 澳洲咨询
    infoChangeFun(id) {
      if (!this.isInfo.includes(id)) {
        this.isInfo = []
        this.isInfo.push(id)
      }
      this.swiper3.slideTo(id, 1000, false)
    },
    infoNextCallback() {
      const id = this.swiper3.realIndex
      if (!this.isInfo.includes(id)) {
        this.isInfo = []
        this.isInfo.push(id)
      }
    },
    // 查看更多
    moreFun(index) {
      // console.log('xxx')
      if (index === 0) {
        this.$router.push({
          name: 'estate-videoList'
        })
      } else {
        this.$router.push({
          name: 'estate-list',
          query: {
            id: index
          }
        })
      }
    },
    // 详情页
    checkFun(row) {
      // console.log(row)
      if (row.classify_id === 3) {
        window.open(row.link)
        return false
      } else if (row.classify_id === 4) {
        console.log(row.id)
        this.$router.push({
          name: 'estate-video',
          query: {
            id: row.id
          }
        })
        return false
      }
      this.$router.push({
        name: 'estate-article',
        query: {
          id: row.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  background: #f5f8fb;
  padding: 50px 0 50px;
  // height: 500px;
  &__auto{
    width: 1204px;
    margin: 0 auto;
    // background: #ccc;
  }
  &__item{
    width: 100%;
    margin-bottom: 50px;
    &:last-child{
      margin: 0;
    }
  }
  &__title{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title-left{
    border-left: 4px solid #123467;
    padding: 5px 10px;
    font-size: 30px;
    color: #333333;
  }
  &__title-right{
    display: flex;
    align-items: center;
  }
  &__more{
    vertical-align: middle;
    color: #999999;
    font-size: 18px;
    &-icon{
      vertical-align: middle;
      width: 11px;
      height: 18px;
      margin-left: 5px;
      margin-top: -3px;
    }
  }
  &__li{
    font-size: 18px;
    color: #666666;
    margin-right: 46px;
    position: relative;
    &_pointer{
      cursor: pointer;
    }
    &_active{
      &::before{
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: #2e6cb1;
      }
      &::after{
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%);
        border: 4px solid transparent;
        border-bottom-color: #2e6cb1;
      }
    }
  }
  &__content{
    width: 100%;
  }
  &__row{
    // display: flex;
    // justify-content: space-between;
    display:flex;
    justify-content: space-between;
  }
  &__box{
    width: 380px;
    // margin-right: 30px;
    background: #fff;
    border: solid 1px #e3e3e3;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  &__picbox {
    width: 384px;
    height: 240px;
  }
  &__pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &__flex{
    display: flex;
    justify-content: flex-start;
    .main__box{
      margin-right: 30px;
      &:last-child{
        margin: 0;
      }
    }
  }
  &__active{
    width: 58px;
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__info{
    box-sizing: border-box;
    padding: 20px 16px;
  }
  &__info-title{
    font-size: 18px;
    color: #333333;
    margin-bottom: 10px;
  }
  &__p{
    font-size: 16px;
    color: #999999;
    overflow:hidden; //溢出隐藏
    text-overflow:ellipsis;//超出显示省略号
    white-space:nowrap;//强制文本在一行内显示
  }
  &__default{
    width: 100%;
    height: 322px;
    text-align: center;
    &-img{
      width: 380px;
    }
  }
}
.text-overs {
  height: 36px;
}
</style>
