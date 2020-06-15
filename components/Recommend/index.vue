<template>
  <aside class="recommend">
    <!-- 预约咨询 -->
    <div class="appointment">
      <div class="title">
        预约咨询
      </div>
      <input v-model="name" class="appointment__input" placeholder="请输入您的姓名">
      <input v-model="mobile" class="appointment__input" placeholder="请输入您的手机号">
      <div class="appointment__btn" @click="sub">
        <Spin v-if="spinShow" fix />
        <img src="@/static/images/icon/project__chat.png" class="appointment__icon">
        在线预约
      </div>
    </div>
    <!-- 视频推荐 -->
    <div class="video">
      <div class="title">
        视频推荐
      </div>
      <div class="video__box" @click="toSee">
        <div class="video__imgbox">
          <img class="video__img" :src="video.img_url">
        </div>
        <div class="video__content text-overs">
          {{ video.name }}
        </div>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div class="news">
      <div class="title">
        新闻资讯
      </div>
      <div class="news__list">
        <div v-for="item in article" :key="item.id" class="news__box" @click="routeTo('estate-article', item.id)">
          <div class="news__imgbox">
            <img class="news__img" :src="item.img_url">
          </div>
          <div class="news__content">
            <div class="news__word text-over">
              {{ item.name }}
            </div>
            <div class="news__time">
              {{ item.last }}小时前
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { validateForm, debounce } from '@/libs/tools.js'
export default {
  // async asyncData({ app }) {
  //   try {
  //     const [data1, data2] = await Promise.all([
  //       app.$api.recommend.recomendVideo().then(({ data }) => {
  //         return { video: data[0] }
  //       }),
  //       app.$api.recommend.recomendArticle().then(({ data }) => {
  //         return { article: data.slice(0, 4) }
  //       })
  //     ])
  //     const res = {
  //       video: data1.video,
  //       article: data2.article
  //     }

  //     return res
  //   } catch (error) {
  //     console.error(error)
  //   }
  // },
  data() {
    return {
      video: {},
      article: [],
      name: '',
      mobile: '',
      spinShow: false // iview loading
    }
  },
  mounted() {
    this.t = debounce(() => { this.submit() }, 2000)
    this.getData()
  },
  methods: {
    sub() {
      this.spinShow = true
      this.t()
    },
    submit() {
      const obj = {
        name: this.name,
        mobile: this.mobile
      }
      const array = [
        [this.name, '请正确输入姓名'],
        [this.mobile, '请正确输入联系方式', /^(1[1-9]\d{9}$)/]
      ]
      if (validateForm(array)) {
        this.$api.recommend.appointment({ info: obj }).then((res) => {
          this.$Message.success({
            content: '提交成功',
            duration: 3,
            closable: true
          })
          this.spinShow = false
          this.name = ''
          this.mobile = ''
          this.consulting = ''
        })
      }
      this.spinShow = false
    },
    getData() {
      this.getVideo()
      this.getArticle()
    },
    getVideo() {
      this.$api.recommend.recomendVideo().then((res) => {
        this.video = res.data[0]
      })
    },
    getArticle() {
      this.$api.recommend.recomendArticle().then((res) => {
        this.article = res.data.slice(0, 4)
      })
    },
    routeTo(name, id) {
      this.$router.push({ name, query: { id } })
    },
    toSee() {
      if (this.video.link === '') {
        this.routeTo('estate-video', this.video.id)
      } else {
        window.open(this.video.link)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size:18px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(46,108,177,1);
  margin-bottom: 20px;
}
.recommend {
  padding-top: 30px;
  .appointment {
    width:300px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    padding: 20px 15px;
    margin-bottom: 20px;
    .appointment__input {
      width:270px;
      height:40px;
      background:rgba(251,251,251,1);
      border:1px solid rgba(222,222,222,1);
      border-radius:4px;
      font-size:16px;
      font-family:Microsoft YaHei;
      font-weight:400;
      padding: 0 14px;
      margin-bottom: 15px;
    }
    .appointment__btn {
      cursor: pointer;
      width:270px;
      height:40px;
      background:rgba(46,108,177,1);
      border-radius:4px;
      font-size:18px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .appointment__icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
  .video {
    width:300px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    padding: 20px 15px 15px 15px;
    margin-bottom: 20px;
    .video__box {
      width: 270px;
      border:1px solid rgba(153,153,153,1);
      .video__imgbox {
        width:270px;
        height:163px;
        .video__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .video__content {
        height: 39px;
        margin: 16px 10px;
        line-height: 20px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }
  }
  .news {
    width:300px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    padding: 20px 15px 0 15px;
    margin-bottom: 20px;
    .news__list {
      .news__box {
        border-bottom: 1px solid #E3E3E3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 110px;
        .news__imgbox {
          width:120px;
          height:80px;
          border-radius:4px;
          .news__img {
            border-radius:4px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
        .news__content {
          width: 138px;
          font-size:16px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          .news__word {
            line-height: 20px;
            margin-bottom: 14px;
            width: 138px;
            height: 36px;
          }
          .news__time {
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(182,182,182,1);
          }
        }
      }
    }
  }
}
</style>
