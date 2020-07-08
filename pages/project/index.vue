<template>
  <div class="gray">
    <subtitle class="bm" sub-title="项目推荐" sub-title-en="Project Recommendation" />
    <div class="project">
      <div v-for="(item, index) in list" :key="index" class="project__box">
        <div class="project__left">
          <img class="project__img" :src="item.img_url" @click="toDetail(item.id)">
        </div>
        <div class="project__main">
          <div class="common-title common-title_project" @click="toDetail(item.id)">
            {{ item.name }}
          </div>
          <div class="boderblock boderblock_project">
            <div class="boderblock__item">
              {{ item.state_capital }}
            </div>
            <div class="boderblock__item">
              {{ item.type }}
            </div>
            <div class="boderblock__item">
              {{ item.progress }}
            </div>
          </div>
          <article class="project__article">
            {{ item.information }}
          </article>
          <div class="labels labels_project">
            <div class="labels__item">
              <img class="labels__icon labels__icon1" src="@/static/images/icon/location_icon@2x.png">
              <span>
                {{ item.addr_annotation }}
              </span>
            </div>
            <div class="labels__item">
              <img class="labels__icon labels__icon2" src="@/static/images/icon/tower_icon@2x.png">
              <span>
                {{ item.building }}
              </span>
            </div>
            <div class="labels__item">
              <img class="labels__icon labels__icon3" src="@/static/images/icon/apartment_icon@2x.png">
              <span>
                {{ item.property }}
              </span>
            </div>
          </div>
          <div class="white-btns">
            <div class="white-btn white-btn_project" @click="toDetail(item.id)">
              查看项目
            </div>
            <!-- <div class="white-btn" @click="toSee(item.vr_url)">
              在线看房
            </div> -->
          </div>
        </div>
      </div>
      <empty v-if="list.length === 0" class="empty_padding" />
    </div>
  </div>
</template>

<script>
import subtitle from '@/components/Subtitle'
import empty from '@/components/Empty'

export default {
  components: {
    subtitle,
    empty
  },
  async asyncData(context) {
    const hot = context.route.query.value || ''
    try {
    // 获得项目列表
      return await context.app.$api.app.projectlist({ hot }).then(({ data }) => {
        return { list: data }
      })
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      list: []
    }
  },
  watch: {
    // 监听 route跳转时$route.fullPath'是否一样
    '$route.fullPath'(val) {
      history.go(0)
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        name: 'project-detail',
        query: {
          id
        }
      })
    },
    toSee(url) {
      window.open(url)
      // window.history.pushState('', this.list.vr_url)
    }
  },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { hid: 'keywords', name: 'keywords', content: '澳大利亚楼市,澳大利亚新房,澳大利亚新楼盘,澳大利亚新房源,澳大利亚买新房、0房产税、0遗产税、永久产权' },
        { hid: 'description', name: 'description', content: '澳洲好房为您推荐澳洲优质房源，专属顾问为您解答澳洲购房疑问' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  min-height: 200px;
  .project__box {
    width: 1200px;
    margin: auto;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
    .project__left{
      width:424px;
      height:510px;
      display: flex;
      // justify-content: center;
      align-items: center;
      background: #fff;
    }
    .project__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .project__main {
      width: 692px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .common-title_project {
        cursor: pointer;
      }
      .boderblock {
        display: flex;
        .boderblock__item {
          padding-right: 16px;
          margin-right: 16px;
          border-right: 2px solid #062A5A;
        }
        .boderblock__item:last-child {
          border: none;
        }
      }
      .boderblock_project {
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#062A5A;
        padding: 30px 0;
      }
      .project__article {
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height: 32px;
        color:rgba(102,102,102,1);
        height: 122px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; //行数
        -webkit-box-orient: vertical;
      }
      .labels {
        display: flex;
        font-size:16px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(46,108,177,.8);
        .labels__item {
          margin-right: 36px;
          .labels__icon {
            margin-right: 10px;
          }
          .labels__icon1 {
            width: 19px;
            height: 25px;
          }
          .labels__icon2 {
            width: 16px;
            height: 25px;
          }
          .labels__icon3 {
            width: 33px;
            height: 25px;
          }
        }
      }
      .labels_project {
        padding: 30px 0;
      }
      .white-btns {
        display: flex;
        .white-btn {
          width:130px;
          height:45px;
          background:rgba(255,255,255,1);
          border:1px solid #062A5A;
          font-size:18px;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:#062A5A;
          text-align: center;
          line-height: 45px;
          transition: all .2s;
          cursor: pointer;
        }
        .white-btn:hover {
          background: #062A5A;
          color: white;
          transition: all .2s;
        }
        .white-btn_project {
          margin-right: 42px;
        }
      }
      .project__a {
        color: #062A5A;
      }
      .white-btn:hover a {
        color: white;
      }
    }
  }
}
.empty_padding {
  padding: 100px 0;
}
</style>
