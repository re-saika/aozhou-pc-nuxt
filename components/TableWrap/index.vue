<template>
  <div class="table-wrapper">
    <div class="table">
      <Spin v-show="loading" fix>
        <Icon type="ios-loading" :size="18" class="table__load" />
        <div>Loading</div>
      </Spin>
      <slot :list="tableData" />
    </div>
    <div class="table__page mt">
      <page ref="page" :page-limit="limit" @on-change="pageChange" />
    </div>
  </div>
</template>

<script>
import page from '@/components/page'
export default {
  components: {
    page
  },
  props: {
    limit: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      loading: false,
      tableData: [],
      params: {}
    }
  },
  methods: {
    getData(options) {
      this.params = options
      this.loading = true
      return this.$refs.page.getPageData(this.params).then(({ data }) => {
        this.tableData = data.data || []
        return Promise.resolve(data)
      }).catch((err) => {
        return Promise.reject(err)
      }).finally(() => {
        this.loading = false
      })
    },
    pageChange(row) {
      this.getData(this.params)
    }
  }
}
</script>

<style lang="scss" scoped>
  .table {
    position: relative;
    &__load{
      animation: ani-demo-spin 1s linear infinite;
    }
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
