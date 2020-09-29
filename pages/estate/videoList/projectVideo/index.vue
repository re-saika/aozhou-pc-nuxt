<template>
  <div class="whitebg">
    <div class="vlist__nav">
      <nav class="navigation">
        <div class="navigation__item" @click="routeTo('index')">
          首页
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div class="navigation__item" @click="routeTo('estate')">
          澳洲利好
        </div>
        <img src="@/static/images/icon/down.png" class="navigation__icon">
        <div class="navigation__item font-blue">
          项目视频
        </div>
      </nav>
    </div>
    <div class="navlist">
      <div v-for="item in plist" :key="item.id" class="navlist__item" :class="isActive == item.id?'navlist__item_active':''" @click="changeList(item.id)">
        {{ item.name }}
        <div v-if="isActive == item.id" class="bluearrow">
          <div class="bluearrow__triangle" />
          <div class="bluearrow__rect" />
        </div>
      </div>
    </div>
    <table-wrap ref="tableWrap" class="vlist" :limit="9">
      <template v-slot="{ list }">
        <div class="vlist__list">
          <viewbox
            v-for="item in list"
            :key="item.id"
            :is-video="true"
            class="vlist__item"
            :vid="item.id"
            :img="item.aid"
            :title="item.name"
            :content="item.introduction"
          />
          <div v-for="(item, index) in (3 - list.length%3)" :key="index + Math.random()" :class="list.length%3 != 0?'vlist__empty':'vlist__empty_none'" />
        </div>
        <empty v-if="list.length === 0" class="empty_padding" />
      </template>
    </table-wrap>
    <!-- <mfooter ref=foot></mfooter> -->
  </div>
</template>

<script>
import tableWrap from '@/components/TableWrap'
import viewbox from '@/components/Viewbox'
import empty from '@/components/Empty'
import tran from '@/mixins/tran'

export default {
  components: {
    tableWrap,
    viewbox,
    empty
  },
  mixins: [tran],
  data() {
    return {
      isActive: null, //
      plist: [], // 项目列表
      list: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$api.app.projectlist().then((res) => {
        this.plist = res.data
        this.isActive = res.data[0].id
        this.getList(res.data[0].id)
      })
    },
    getList(id) {
      this.$refs.tableWrap.getData({
        target: this.$api.estate.videoList,
        data: {
          classify_id: 4,
          project_id: id
        }
      }).then((res) => {
        // this.tableData = res.data
        this.list = res.data
      })
    },
    changeList(id) {
      this.isActive = id
      this.getList(id)
      // this.$refs.foot.isBottom = true
    },
    routeTo(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.whitebg {
  width: 100%;
}
.vlist__nav {
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
.navlist {
  width: 1200px;
  margin: auto;
  border-bottom: 1px solid #CCCCCC;
  display: flex;
  margin-bottom: 50px;
  margin-top: 10px;
  .navlist__item {
    cursor: pointer;
    height: 56px;
    font-size:18px;
    line-height: 56px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-right: 44px;
  }
  .navlist__item_active {
    color: #062A5A;
    position: relative;
  }
  .bluearrow {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    .bluearrow__triangle {
      width: 0;
      height: 0;
      margin: auto;
      border: 4px solid transparent;
      border-bottom-color: #062A5A;
    }
    .bluearrow__rect {
      width: 100%;
      height: 3px;
      background: #062A5A;
    }
  }
}
.empty_padding {
  padding: 150px;
}
.vlist {
  width: 1200px;
  margin: auto;
  margin-bottom: 50px;
  .vlist__list {
    display: flex;
    // min-height: 300px;
    flex-wrap: wrap;
    justify-content: space-between;
    .vlist__item {
      margin-bottom: 50px;
    }
    .vlist__empty {
      width:382px;
      height:325px;
      margin-bottom: 50px;
    }
    .vlist__empty_none {
      display: none;
    }
  }
}
.mt {
  display: flex;
  justify-content: center;
}
</style>
