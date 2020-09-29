<template>
  <div class="guesslike">
    <div class="guesslike__header">
      <div class="guesslike__title">
        猜你喜欢
      </div>
      <div class="guesslike__change" @click="changeList">
        <img class="guesslike__icon" src="@/static/images/icon/change.png">
        换一换
      </div>
    </div>
    <div class="guesslike__content">
      <viewbox
        v-for="(item, index) in showList"
        :key="index"
        :title="item.name"
        :content="item.introduction"
        :is-video="isv"
        :link="item.link"
        :vid="item.id"
        :img="item.img_url"
      />
    </div>
  </div>
</template>

<script>
import viewbox from '@/components/Viewbox'
import { Rand } from '@/libs/tools'

export default {
  components: {
    viewbox
  },
  props: {
    isv: {
      type: Boolean,
      default: false
    },
    pid: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      list: [],
      showList: [],
      rand: null // 随机函数
    }
  },
  created() {
    if (!this.isv) {
      this.getArticle()
    } else {
      this.getVideo()
    }
    this.rand = new Rand()
  },
  methods: {
    // getArticle() {
    //   this.$api.recommend.recomendArticle().then((res) => {
    //     this.list = res.data
    //     this.changeList()
    //   })
    // },
    // getVideo() {
    //   this.$api.recommend.recomendVideo().then((res) => {
    //     this.list = res.data
    //     this.changeList()
    //   })
    // },
    getVideo() {
      this.$api.recommend.recomendVideo({ project_id: this.pid }).then((res) => {
        this.list = res.data
        this.changeList()
      })
    },
    getArticle() {
      console.log(this.pid)
      this.$api.recommend.recomendArticle({ project_id: this.pid }).then((res) => {
        this.list = res.data
        this.changeList()
      })
    },
    changeList() {
      this.showList = []
      for (let i = 0; i < 3; i++) {
        this.showList.push(this.list[this.rand(this.list.length)])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.guesslike {
  width: 1200px;
  margin: auto;
  .guesslike__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    .guesslike__title {
      font-size:20px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(102,102,102,1);
    }
    .guesslike__change {
      display: flex;
      align-items: center;
      font-size:14px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(153,153,153,1);
      cursor: pointer;
      .guesslike__icon {
        width: 16px;
        height: 16px;
        margin-right: 9px;
        transition: all .2s;
      }
    }
    .guesslike__change:hover .guesslike__icon {
      transform: rotate(180deg);
      transition: all .2s;
    }
  }
  .guesslike__content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
