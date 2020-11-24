<template>
  <header>
    <div :class="home?'header_home':''" class="header" @mouseover="showColor(true)" @mouseleave="showColor(false)">
      <div class="header__content">
        <transition name="pointfive">
          <div>
            <img v-show="isColor" class="logo" src="@/static/images/icon/logo_header.png" @click="routeTo('index')">
            <img v-show="!isColor" class="logo" src="@/static/images/icon/logo_header_white.png" @click="routeTo('index')">
          </div>
        </transition>
        <div class="header__nav wt" @mouseleave="showThePic(0)">
          <ul class="nav">
            <li class="nav__li" :class="isActive == 'index'?'nav__li_active':''" @click="routeTo('index')">
              首页
            </li>
            <!-- <nuxt-link class="nav__li" to="index">首页</nuxt-link> -->
            <Poptip trigger="hover">
              <li class="nav__li" :class="isActive == 'project'?'nav__li_active':''" @click="routeTo('project')">
                项目推荐
              </li>
              <div slot="content" class="menu">
                <div v-for="(item, index) in list" :key="index" class="menu__item" @click="routeTo('project-detail', {id: item.id})">
                  {{ item.name }}
                </div>
              </div>
            </Poptip>
            <Poptip trigger="hover">
              <li class="nav__li" :class="isActive == 'estate'?'nav__li_active':''" @click="routeTo('estate')" @mouseleave="hoverMenu('')">
                澳洲利好
              </li>
              <div slot="content" class="menu">
                <div
                  v-for="(item, index) in newsList"
                  :key="index"
                  trigger="hover"
                  placement="right"
                  class="menu__item"
                  @mouseover="hoverMenu(index)"
                >
                  {{ item.name }}
                </div>
                <div v-if="currentMenu !== ''" class="menu2">
                  <div v-for="(ele, i) in newsList[currentMenu].children" :key="i" class="menu2__item" @click="routeTo('estate-list', { id: ele.pid, cid: ele.id })">
                    {{ ele.name }}
                  </div>
                </div>
              </div>
            </Poptip>
            <Poptip trigger="hover">
              <li class="nav__li" :class="isActive == 'about'?'nav__li_active':''" @click="routeTo('about')">
                联系我们
              </li>
              <div slot="content" class="menu">
                <div class="menu__item" @click="routeTo('about', {id:0})">
                  关于我们
                </div>
                <div class="menu__item" @click="routeTo('about', {id:1})">
                  联系我们
                </div>
                <div class="menu__item" @click="routeTo('about', {id:2})">
                  人才招聘
                </div>
              </div>
            </Poptip>
          </ul>
          <div class="white-search">
            <img src="@/static/images/icon/search.png" class="white-search__icon" @click="getProjectList">
            <input v-model="value" class="white-search__input inputs wt" placeholder="搜索" @keyup.enter="getProjectList">
          </div>
          <div class="white-phone white-phone_header">
            <img src="@/static/images/icon/header_phone.png" class="white-phone__icon">
            <span>400-3888-2777</span>
          </div>
          <div class="dropdown">
            <div @mouseover="showThePic(1)">
              中/EN
              <img class="dropdown__icon" src="@/static/images/icon/dropdown.png">
            </div>
            <div @mouseover="showThePic(2)" @mouseleave="showThePic(0)">
              小程序
              <img class="dropdown__icon" src="@/static/images/icon/dropdown.png">
            </div>
            <div @mouseover="showThePic(3)" @mouseleave="showThePic(0)">
              公众号
              <img class="dropdown__icon" src="@/static/images/icon/dropdown.png">
            </div>
            <!-- 弹出窗 -->
            <transition name="pointtwo">
              <div v-show="showPic == 1" class="nav__lang">
                <div @click="changeFont('s')">
                  简
                </div>
                <div @click="changeFont('t')">
                  繁
                </div>
                <div @click="changeLang">
                  EN
                </div>
              </div>
            </transition>
            <transition name="pointtwo">
              <div v-show="showPic == 2" class="nav__imgbg">
                <img class="img-applet" src="@/static/images/img/xcx.png">
              </div>
            </transition>
            <transition name="pointtwo">
              <div v-show="showPic == 3" class="nav__imgbg">
                <img class="img-applet" src="@/static/images/img/gzh.png">
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { zhTran } from '@/libs/lang.js'
export default {
  props: {
    home: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isColor: false,
      isIndex: false,
      visible: false,
      showPic: 0,
      value: '',
      isActive: '',
      showLang: false,
      list: [], // 项目列表
      newsList: [], // 澳洲利好列表
      currentMenu: '' // 澳洲利好菜单移入
    }
  },
  watch: {
    // 监听 route跳转时$route.fullPath'是否一样
    '$route.fullPath'(val) {
      this.isActive = val.replace('/', '') || 'index'
    }
  },
  // 第一次进入
  created() {
    this.isActive = this.$route.name
    this.getProject()
    this.getNews()
  },
  methods: {
    // 首页鼠标移入颜色会发生变化
    showColor(bool) {
      this.isColor = bool
    },
    showThePic(index) {
      this.showPic = index
    },
    showTheLang() {
      this.showLang = !this.showLang
    },
    routeTo(to, query = {}) {
      // if (to === this.$route.name) {
      //   history.go(0)
      //   // return
      // }
      this.$router.push({
        name: to,
        query
      })
    },
    // 获得列表
    getProject() {
      this.$api.app.projectlist().then((res) => {
        this.list = res.data
      })
    },
    // 获得新闻
    getNews() {
      this.$api.estate.setHouseAus().then((res) => {
        res.data.shift()
        this.newsList = [
          res.data[2],
          res.data[1],
          res.data[0]
        ]
      })
    },
    // 鼠标移入菜单列表
    hoverMenu(index) {
      this.currentMenu = index
    },
    getProjectList() {
      this.$router.push({
        name: 'project',
        query: {
          value: this.value
        }
      })
    },
    changeLang() {
      window.open('https://www.rfpropertyaustralia.com.au/')
    },
    changeFont(f) {
      zhTran(f)
      this.$Message.success({
        content: '更改语言成功!',
        duration: 3,
        closable: true
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.header {
  width: 100%;
  background-color:#062A5A;
  box-shadow:0px 2px 6px 0px rgba(12,64,149,0.5);
  .header__content {
    height:100px;
    // max-width: 1834px;
    padding: 0 42px;
    // min-width: 1200px;
    // width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width:127px;
      height:92px;
    }
    .header__nav {
      display: flex;
      align-items: center;
      .nav {
        display: flex;
        margin-right: 3px;
        font-size: 15px;
        .nav__li {
          font-family:Microsoft YaHei;
          list-style: none;
          width: 92px;
          height: 100px;
          text-align: center;
          line-height: 100px;
          margin-right: 23px;
          cursor: pointer;
          transition: all .2s;
        }
        .nav__li:hover {
          background-color: #FFFFFF;
          color: #062A5A;
          transition: all .2s;
        }
        // .nav__li_active {
        //   font-weight:bold;
        //   border-bottom: 2px solid white;
        // }
      }
      .white-search {
        background:rgba(242,242,242,0.5);
        border:1px solid rgba(255,255,255,0.8);
        border-radius:15px;
        display: flex;
        align-items: center;
        padding: 0 13px;
        height: 30px;
        .white-search__icon {
          width:16px;
          height:17px;
          margin-right: 6px;
        }
        .white-search__input {
          font-size:14px;
          width: 28px;
          transition: all .2s;
        }
        .white-search__input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
            color: #FFFFFF;
        }
        .white-search__input:-moz-placeholder { /* Mozilla Firefox 4 to 18 适配火狐 */
            color: #FFFFFF;
        }
        .white-search__input::-moz-placeholder { /* Mozilla Firefox 19+ 适配火狐 */
            color: #FFFFFF;
        }
        .white-search__input:-ms-input-placeholder { /* Internet Explorer 10+  适配ie*/
            color: #FFFFFF;
        }
        .white-search__input:focus {
          width: 100px;
          transition: all .5s;
        }
      }
      .white-phone {
        display: flex;
        align-items: center;
        .white-phone__icon {
          width:20px;
          height:21px;
          margin-right: 8px;
        }
      }
      .white-phone_header {
        margin: 0 19px;
      }
      .dropdown {
        display: flex;
        width: 190px;
        justify-content: space-between;
        cursor: pointer;
        position: relative;
        .nav__lang {
          display: flex;
          position: absolute;
          justify-content: space-around;
          align-items: center;
          top: 50px;
          left: 0px;
          z-index: 99;
          background-color: #062A5A;
          width: 140px;
          height: 70px;
        }
        .nav__imgbg {
          position: absolute;
          width: 223px;
          height: 223px;
          background-color: #062A5A;
          top: 65px;
          left: -37px;
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .img-applet {
          width: 150px;
          height: 150px;
          padding: 10px;
          background-color: #FFFFFF;
        }
      }
    }
  }
}

// 改写样式
/deep/ .ivu-poptip-popper {
  background-color: #062A5A;
  /deep/ .ivu-poptip-body {
    padding: 0;
    // background-color: #062A5A;
  }
  /deep/ .ivu-poptip-arrow {
    display: none;
  }
}
// 内部列表
.menu {
  display: flex;
  flex-direction: column;
  &__item {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    background-color: #062A5A;
    color: #FFF;
    position: relative;
  }
  &__item:hover {
    background-color: #FFF;
    color: #062A5A;
    cursor: pointer;
  }
}

.menu2 {
  position: absolute;
  left: 150px;
  width: 150px;
  min-height: 150px;
  background-color: #062A5A;
  &__item {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    color: #FFF;
    position: relative;
  }
  &__item:hover {
    background-color: #FFF;
    color: #062A5A;
    cursor: pointer;
  }
}

.header_home {
  background-color: transparent;
  width: 100%;
  transition: all .5s;
  box-shadow: none;
}
.header_home:hover {
  background-color: #062A5A;
  transition: all .5s;
}

@media (min-width: 1200px) {
}

@media (max-width: 1200px) {
  .nav__li {
    width: 60px;
  }
  .header__content {
    padding: 0 50px;
  }
  .dropdown__icon {
    display: none;
  }
}
</style>
