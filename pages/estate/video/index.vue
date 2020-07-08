<template>
  <div class="gray">
    <div class="video__nav">
      <nav class="navigation">
        <div class="navigation__item" @click="routeTo('index')">
          首页
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div class="navigation__item" @click="routeTo('estate')">
          置业澳洲
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div class="navigation__item font-blue">
          视频内页
        </div>
      </nav>
    </div>
    <div class="video__header">
      <div class="video__title">
        {{ detail.name }}
      </div>
      <div class="video__time">
        {{ detail.post_time }}
      </div>
      <!-- <div class="video__msg">
        <div class="video__time">
          {{ detail.post_time }}
        </div>
        <div class="video__time">
          {{ detail.post_time }}
        </div>
      </div> -->
    </div>
    <div class="video-warp">
      <div class="video">
        <!-- 左侧视频 -->
        <video class="video_view" :src="detail.file_url" controls />
        <!-- 右侧导航 -->
        <div class="video__msg">
          <div class="msg">
            <div class="msg__title">
              视频介绍：
            </div>
            <div class="msg__content">
              {{ detail.introduction }}
            </div>
          </div>
          <div class="projectbox">
            <div class="projectbox__header">
              <div class="projectbox__title">
                {{ detail.p_name }}
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
              </li>
              <li class="projectbox__label projectbox__labe_last">
                {{ detail.progress }}
              </li>
            </ul>
            <div class="projectbox__phone">
              <span class="projectbox__phone-title">咨询电话:</span>{{ detail.phone }}
            </div>
            <div class="projectbox__btn" @click="toDetail">
              查看项目详情
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video__guess">
      <guesslike :isv="true" />
    </div>
  </div>
</template>

<script>
import guesslike from '@/components/Guesslike'

export default {
  components: {
    guesslike
  },
  async asyncData(context) {
    if (context.route.query.id) {
      try {
        // 获得文章列表
        return await context.app.$api.estate.materialDetail({ id: context.route.query.id }).then(({ data }) => {
          return { detail: data }
        })
      } catch (error) {
        console.error(error)
      }
    }
  },
  data() {
    return {
      id: null,
      detail: {}
    }
  },
  watch: {
    // 监听 route跳转时$route.fullPath'是否一样
    '$route.fullPath'(val) {
      history.go(0)
    }
  },
  methods: {
    toDetail() {
      this.$router.push({
        name: 'project-detail',
        query: {
          id: this.detail.project_id
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
        { hid: 'keywords', name: 'keywords', content: this.detail.keyword },
        { hid: 'description', name: 'description', content: this.detail.introduction }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.video__nav {
  width: 100%;
  background: #333333;
  .navigation {
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:white;
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
.video__header {
  background: #333333;
  width: 100%;
  .video__title {
    width: 1200px;
    margin: auto;
    font-size:30px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    padding-bottom: 28px;
  }
  .video__time {
    width: 1200px;
    margin: auto;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    padding-bottom: 30px;
  }
}
.video-warp {
  width: 100%;
  background: #333333;
}
.video {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 31px;
  .video_view {
    width:810px;
    height:510px;
  }
  .video__msg {
    width:370px;
    height:510px;
    background:rgba(255,255,255,1);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .msg {
      .msg__title {
        font-size:20px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(51,51,51,1);
        margin-bottom: 19px;
      }
      .msg__content {
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height: 20px;
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
.video__guess {
  width: 100%;
  padding: 50px 0 30px 0;
}
</style>
