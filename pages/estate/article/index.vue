<template>
  <div class="whitebg">
    <div class="article__nav">
      <nav class="navigation">
        <div @click="routeTo('index')">
          首页
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div @click="routeTo('estate')">
          澳洲利好
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div class="font-blue">
          {{ detail.name }}
        </div>
      </nav>
    </div>
    <div class="article__body">
      <div class="article">
        <div class="article__header">
          <div class="article__title">
            {{ detail.name }}
          </div>
          <div class="article__msg">
            <div class="article__pname">
              {{ detail.p_name }}
            </div>
            <div class="article__time">
              发布时间：{{ detail.create_time }}
            </div>
          </div>
        </div>
        <my-article :content="detail.info" />
      </div>
      <!-- 推荐 -->
      <recommend />
    </div>
  </div>
</template>

<script>
import recommend from '@/components/Recommend'
import MyArticle from '@/components/MyArticle'
import tran from '@/mixins/tran'
export default {
  components: {
    recommend,
    MyArticle
  },
  mixins: [tran],
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

<style lang="scss" scoped>
.whitebg {
  width: 100%;
}
.article__nav {
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
.article__body {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  .article {
    width: 846px;
    .article__header {
      margin-bottom: 20px;
      .article__title {
        font-size:22px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(51,51,51,1);
        padding: 30px 0;
      }
      .article__msg {
        display: flex;
        padding-bottom: 25px;
        border-bottom: 1px dashed #999999;
        .article__pname {
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          margin-right: 16px;
        }
        .article__time {
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
      }
    }
  }
}
</style>
