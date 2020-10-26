<template>
  <div>
    <subtitle sub-title="澳洲利好" sub-title-en="News of AUS" bg="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/az_img01.jpg" />
    <div class="main">
      <div class="main__tab">
        <div class="main__auto">
          <div class="main__ul">
            <div v-for="(item, ind) in tabData" :key="ind" class="main__li" :class="{'main__li_active': isActive.includes(item.id)}" @click="activeFun(item.id)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="main__content">
        <div class="main__auto">
          <div class="main__wrap">
            <!-- 图文列表 -->
            <table-wrap ref="tableWrap" :limit="10">
              <template v-slot="{ list }">
                <div class="main__list">
                  <div v-for="(item, ind) in list" :key="ind" class="main__row" @click="navigator(item.id)">
                    <img class="main__row-img" :src="item.aid" alt="">
                    <div class="main__row-content">
                      <div class="main__row-title">
                        {{ item.name }}
                      </div>
                      <div class="main__row-text">
                        {{ item.introduction }}
                      </div>
                      <div class="main__row-information">
                        <div class="main__row-information-l">
                          <span class="main__row-information-time">来源：澳洲好房</span>
                          <span>发布时间：
                            {{ item.create_time }}
                          </span>
                        </div>
                        <!-- <div class="main__row-information-r">
                          338次阅读
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </table-wrap>
            <!-- 推荐 -->
            <recommend class="section" />
            <!-- <div class="section">
              <form class="form card">
                <div class="form__item"><span>预约咨询</span></div>
                <div class="form__item">
                  <input class="form__input" v-model="forms.name" type="text" placeholder="请输入您的姓名">
                </div>
                <div class="form__item">
                  <input class="form__input" v-model="forms.mobile" type="text" placeholder="请输入您的手机号">
                </div>
                <div class="form__item" @click="sub">
                  <img class="form__icon" src="@/static/images/icon/project__chat.png" alt="">
                  <Spin fix v-if="spinShow"></Spin>
                  在线预约
                </div>
              </form>
              <div class="recommend card">
                <div class="recommend__title">视频推荐</div>
                <div class="recommend__box" @click="navigatorVideo(videoData.id)">
                  <img class="recommend__img" :src="videoData.img_url" alt="">
                  <div class="recommend__content">
                    <span class="recommend__text">{{videoData.name}}</span>
                  </div>
                </div>
              </div>
              <div class="new card">
                <div class="new__title">新闻资讯</div>
                <div class="new__list">
                  <div class="new__list-item" v-for="(item, index) in ArticleData" :key="index" @click="navigatorNew(item.id)">
                    <img class="new__list-img" :src="item.img_url" alt="">
                    <div class="new__list-content">
                      <div class="new__list-text">{{item.name}}</div>
                      <div class="new__list-time">{{item.create_time}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recommend from '@/components/Recommend'
import tableWrap from '@/components/TableWrap'
import subtitle from '@/components/Subtitle'
// import * as estate from '@/api/estate'
// import * as recommend from '@/api/recommend'
import { debounce } from '@/libs/tools'
import tran from '@/mixins/tran'
export default {
  components: {
    recommend,
    subtitle,
    tableWrap
  },
  mixins: [tran],
  data() {
    return {
      spinShow: false,
      data: [
        {
          name: '澳洲生活',
          id: 9,
          children: [
            {
              name: '澳洲旅游',
              id: 12
            },
            {
              name: '澳洲教育',
              id: 13
            },
            {
              name: '澳洲福利',
              id: 14
            }
          ]
        },
        {
          name: '购房攻略',
          id: 10,
          children: [
            {
              name: '澳洲置业理由',
              id: 15
            },
            {
              name: '澳洲买房政策',
              id: 16
            },
            {
              name: '澳洲交付流程',
              id: 17
            }
          ]
        },
        {
          name: '澳洲资讯',
          id: 11,
          children: [
            {
              name: '楼市利好',
              id: 18
            },
            {
              name: '项目资讯',
              id: 19
            }
          ]
        }
      ],
      tabData: [],
      index: null, // 当前选项的id
      list: [], // 列表数据
      isActive: [], // 控制tab栏点击效果
      forms: {
        name: '',
        mobile: ''
      },
      videoData: {}, // 最新的推荐视频数据
      ArticleData: [] // 推荐文章数据
    }
  },
  watch: {
    // 监听 route跳转时$route.fullPath'是否一样
    '$route.fullPath'(val) {
      history.go(0)
    }
  },
  created() {
    if (this.$route.query.id) {
      this.setData(Number(this.$route.query.id))
    }
    // if (this.$route.query.cid) {
    //   this.activeFun(this.$route.query.cid)
    // }
  },
  mounted() {
    this.init()
    this.t = debounce(() => { this.appointment() }, 2000)
  },
  methods: {
    // 初始化方法
    init() {
      // this.isActive.push(this.$route.query.cid || '')
      this.activeFun(Number(this.$route.query.cid) || '')
    },
    activeFun(id) {
      if (!this.isActive.includes(id)) {
        this.isActive = []
        this.isActive.push(id)
      }
      console.log('数组', this.isActive)
      this.getArticleList(id)
    },
    // 获取图文列表
    getArticleList(id) {
      const index = id || this.index
      // console.log(index, '这是当前的数据')
      this.$refs.tableWrap.getData({
        target: this.$api.estate.articleList,
        data: {
          // limit: 10,
          classify_id: index
        }
      }).then((res) => {
        this.list = res.data
        // console.log(this.list, '图文数据啊')
      })
    },
    // 提交前先防抖 20200609
    sub() {
      this.spinShow = true
      this.t()
    },
    // 处理当前数据
    setData(id) {
      this.data.forEach((item, index) => {
        if (item.id === id) {
          this.tabData = item.children
        }
      })
      this.isActive.push(this.tabData[0].id)
      this.index = this.tabData[0].id
    },
    // 详情页
    navigator(index) {
      this.$router.push({
        name: 'estate-article',
        query: {
          id: index
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  &__auto{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  // tab
  &__tab{
    width: 100%;
    height: 80px;
    background: #fff;
  }
  &__content{
    width: 100%;
    background: #f5f8fb;
    overflow: hidden;
    padding-bottom: 58px;
  }
  &__ul{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  &__li{
    font-size: 18px;
    color: #333333;
    width: 136px;
    line-height: 42px;
    text-align: center;
    cursor: pointer;
    &_active{
      background-color: #062A5A;
      position: relative;
      color: #fff;
      &::before{
        content: '';
        display: block;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: #062A5A;
      }
    }
  }
  // content
  &__wrap{
    width: 100%;
    display: flex;
    margin-top: 35px;
    // position: relative;
    // top: 8px;
  }
  &__list{
    width: 840px;
  }
  &__row{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 22px 20px;
    background: #fff;
    margin-bottom: 2px;
    &-img{
      width: 240px;
      height: 160px;
      border-radius: 4px;
    }
    &-content{
      width: 100%;
      box-sizing: border-box;
      padding: 12px 0 0 20px;
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      position: relative;
    }
    &-title{
      width: 100%;
      font-size: 18px;
      color: #333333;
      margin-bottom: 28px;
    }
    &-text{
      width: 100%;
      font-size: 14px;
      color: #999999;
      position: absolute;
      left: 20px;
      top: 48px;
    }
    &-information{
      width: 100%;
      display: flex;
      font-size: 12px;
      color: #666666;
      justify-content: space-between;
      // position: absolute;
      // bottom: 0;
      &-time{
        margin-right: 10px;
      }
    }
  }

}
.section{
  width: 300px;
  margin-left: 62px;
  overflow: hidden;
  font-size: 18px;
  padding-top: 0;
  .card{
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin-top: 20px;
    border: solid 1px #dcdcdc;
  }
  .form{
    padding: 20px 15px;
    &__item{
      width: 100%;
      background-color: #fbfbfb;
      border-radius: 4px;
      border: solid 1px #dedede;
      line-height: 40px;
      margin-bottom: 15px;
      position: relative;
      &:first-child{
        background: transparent;
        border: none;
        font-size: 18px;
        color: #062A5A;
      }
      &:last-child{
        background-color: #062A5A;
        margin: 0;
        text-align: center;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
      }
    }
    &__icon{
      vertical-align: middle;
    }
    &__input{
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background: transparent;
      box-sizing: border-box;
      padding-left: 14px;
      font-size: 14px;
    }
  }
  .recommend{
    padding: 20px 15px 15px 15px;
    &__box{
      border: solid 1px #999999;
    }
    &__title{
      color: #062A5A;
      margin-bottom: 20px;
    }
    &__img{
      width: 100%;
      height: 163px;
      display: block;
    }
    &__content{
      font-size: 16px;
      color: #333333;
      box-sizing: border-box;
      padding: 16px 10px;
    }
    &__text{
      overflow: hidden;
      text-overflow: ellipsis; // 超出显示省略号
      display: -webkit-box; // 将元素作为弹性伸缩盒子模型显示 。
      -webkit-line-clamp: 2; // 用来限制在一个块元素显示的文本的行数
      -webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式
    }
  }
  .new{
    padding: 20px 15px;
    &__title{
      color: #062A5A;
      margin-bottom: 5px;
    }
    &__list{
      width: 100%;
      &-item{
        display: flex;
        border-bottom: 1px solid #e3e3e3;
        padding: 15px 0;
        &:last-child{
          border: none;
          padding-bottom: 0px;
        }
      }
      &-img{
        width: 120px;
        height: 80px;
        border-radius: 4px;
      }
      &-content{
        box-sizing: border-box;
        padding: 8px 0 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &-text{
        font-size: 16px;
        color: #333333;
        overflow:hidden; //溢出隐藏
        text-overflow:ellipsis;//超出显示省略号
        display: -webkit-box; // 将元素作为弹性伸缩盒子模型显示 。
        -webkit-line-clamp: 2; // 用来限制在一个块元素显示的文本的行数
        -webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式
      }
      &-time{
        font-size: 14px;
        color: #b6b6b6;
      }
    }
  }
}
</style>
