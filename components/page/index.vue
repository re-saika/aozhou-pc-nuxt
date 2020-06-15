<template>
  <Page :total="pageTotal" :page-size="pageLimit" :transfer="pageTransfer" @on-change="pageChange" @on-page-size-change="pageSizeChange" />
</template>

<script>
export default {
  props: {
    pageLimit: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      /**
       * pageTotal            数据总数
       * pageLimit            每页条数
       * pageLimitOpts        每页条数切换的配置
       * pageCurrent          当前页码，支持 .sync 修饰符
       * pageShowTotal        显示总数
       * pageShowElevator     显示电梯，可以快速切换到某一页
       * pageShowSizer        显示分页，用来改变page-size
       * pageTransfer         是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
       */
      pageTotal: 0,
      // pageLimit: 20,
      pageLimitOpts: [10, 20, 30, 40],
      pageCurrent: 1,
      pageShowTotal: true,
      pageShowElevator: true,
      pageShowSizer: true,
      pageTransfer: true
    }
  },
  methods: {
    getPageData({ target, data = {} }) {
      if (!target) {
        return console.error('target 必须是一个Promise的api方法')
      }
      const param = {
        page: this.pageCurrent,
        limit: this.pageLimit
      }
      data = { ...data, ...param }
      return target(data).then((res) => {
        this.pageTotal = res.data.page.total_count
        return Promise.resolve(res)
      })
    },
    pageChange(current) {
      this.pageCurrent = current
      this.change()
    },
    pageSizeChange(pageLimit) {
      this.pageLimit = pageLimit
      this.change()
    },
    change() {
      this.$emit('on-change', {
        total: this.pageTotal,
        limit: this.pageLimit,
        current: this.pageCurrent
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
