<template>
  <footer class="footer-all">
    <div v-if="!isClose && !isBottom" class="footer-block" />
    <transition name="pointtwo">
      <div v-if="!isClose && isAlive" :class="isBottom?'contact-warp_bottom':'contact-warp'">
        <div class="contact">
          <div class="concat__title">
            免费预约咨询
          </div>
          <div>
            <div class="contact__content">
              <div class="contact__inputs">
                <div class="contact__input">
                  <div class="input__left">
                    <img src="@/static/images/icon/footer_user.png" class="inputs__img1">
                  </div>
                  <input v-model="name" class="input__in" placeholder="请输入您的姓名">
                </div>
                <div class="contact__input">
                  <div class="input__left">
                    <img src="@/static/images/icon/footer_phone.png" class="inputs__img1">
                  </div>
                  <input v-model="mobile" class="input__in" placeholder="请输入联系方式">
                </div>
                <div class="contact__input">
                  <div class="input__left">
                    <img src="@/static/images/icon/footer_build.png" class="inputs__img1">
                  </div>
                  <div class="input___select selecter" @click="showSelecter">
                    <div>{{ consulting || '请选择咨询项目' }}</div>
                    <transition name="options">
                      <div v-show="isShow" class="selecter__options input___options">
                        <div v-for="(item, index) in list" :key="index" class="selecter__option">
                          <div class="selecter__item" :class="index+1 == list.length?'selecter__item_last':index == 0?'selecter__item_first':''" @click="changeSelect(item.name)">
                            {{ item.name }}
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                  <!-- <img src="@/static/images/icon/dropdown.png"> -->
                </div>
              </div>
              <div class="contact__btn" @click="sub">
                <Spin v-if="spinShow" fix />
                提交免费获取置业方案
              </div>
            </div>
            <div class="contact__tips">
              *提交信息后,24小时内将有专业的顾问与您联系！
            </div>
          </div>
          <img src="@/static/images/icon/close.png" class="img-close contact__close" @click="close">
        </div>
      </div>
    </transition>
    <div class="footer-warp">
      <div class="footer">
        <div class="left-footer">
          <ul class="left-footer__navs">
            <li class="navs__nav" @click="routeTo('index')">
              首页
            </li>
            <li class="navs__nav" @click="routeTo('project')">
              项目推荐
            </li>
            <li class="navs__nav" @click="routeTo('estate')">
              置业澳洲
            </li>
            <li class="navs__nav" @click="routeTo('about')">
              联系我们
            </li>
            <li class="navs__nav" @click="toHref('http://haofang.wkan.cn/fladmin/')">
              登录中心
            </li>
          </ul>
          <div class="left-footer__line2">
            <div class="left-footer__boderbox">
              澳洲好房版权所有
            </div>
            <!-- <div class="left-footer__boderbox">
              法律声明
            </div>
            <div class="left-footer__boderbox">
              粤ICP备11089557号-3
            </div> -->
          </div>
          <!-- 之后要改 -->
          <div class="left-footer__navs">
            友情链接：
            <a class="navs__nav navs__nav_boder" href="http://oversea.5i5j.com/">我爱我家</a>
            <a class="navs__nav navs__nav_boder" href="http://www.jindichan.com.cn/">津地产</a>
            <a class="navs__nav navs__nav_boder" href="https://www.kbrz.com.au">KBRZ</a>
            <!-- <a class="navs__nav navs__nav_boder">思为知屋</a> -->
          </div>
        </div>
        <div class="footer__right platform">
          <!-- <div class="right__item">
            <img src="@/static/images/icon/Applet_code.jpg" class="right__img">
            <div>澳洲好房小程序</div>
          </div>
          <div class="right__item">
            <img src="@/static/images/icon/gzh.jpg" class="right__img">
            <div>澳洲好房公众号</div>
          </div> -->
          <div class="platform__icons">
            <a v-for="(item, index) in platformList" :key="index" class="platform__icon" @mouseleave="showModal(null)">
              <img :src="item" @mouseover="showModal(index)">
              <transition name="fade">
                <div v-show="modalActive === index" class="platform__modal">
                  <img src="@/static/images/icon/gzh.jpg">
                  <div class="platform__triangle" />
                </div>
              </transition>
            </a>
          </div>
          <div class="platform__desc">
            关注我们 各大平台 详情请点击上方图标
          </div>
          <div class="platform__info">
            <p>© 2018 R&F Properties Cambodia. All Rights Reserved</p>
            <p>Powered by vancheer</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { debounce, validateForm } from '@/libs/tools.js'

export default {
  data() {
    return {
      isAlive: false, // 咨询是否显示
      isClose: false, // 关闭完再也不出现
      list: [], // 项目列表,
      isShow: false, // 是否显示咨询下拉框
      consulting: '', // 咨询的项目
      name: '',
      mobile: '',
      curHeight: '', // 当前屏幕高度
      isBottom: false, // 是否触底
      t: null, // 防抖
      spinShow: false,
      platformList: [
        require('@/static/images/icon/nimg50_6.png'),
        require('@/static/images/icon/nimg50_7.png'),
        require('@/static/images/icon/nimg50_5.png'),
        require('@/static/images/icon/nimg50_4.png'),
        require('@/static/images/icon/nimg50_1.png')
      ],
      modalActive: null
    }
  },
  created() {
    this.getProjectList()
  },
  mounted() {
    window.addEventListener('scroll', this.showMenu)
    this.beforeMount()
    // 防抖
    this.t = debounce(() => { this.submit() }, 2000)
  },
  methods: {
    // 新增平台列表
    showModal(index) {
      this.modalActive = index
    },
    // 获得列表
    getProjectList() {
      this.$api.app.projectlist().then((res) => {
        this.list = res.data
      })
    },
    // 获取高度
    beforeMount() {
      const h = document.documentElement.clientHeight || document.body.clientHeight
      this.curHeight = h
      // this.curHeight = h - height // 减去页面上固定高度height
    },
    // 超过屏幕宽度显示
    showMenu() {
      // console.log(document.documentElement.scrollTop, this.curHeight)
      if (!!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 300) {
        this.isAlive = true
      }
      if (!!document.documentElement.scrollTop &&
        document.documentElement.scrollTop < 300) {
        this.isAlive = false
      }

      // 触底合体
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      // console.log(scrollTop + windowHeight + 200, scrollHeight)
      if (scrollTop + windowHeight + 200 >= scrollHeight) {
        // 给咨询固定在底部
        this.isBottom = true
      } else {
        this.isBottom = false
      }
    },
    showSelecter() {
      console.log(this.list)
      this.isShow = !this.isShow
    },
    changeSelect(name) {
      this.consulting = name
    },
    close() {
      this.isClose = true
    },
    sub() {
      this.spinShow = true
      this.t()
    },
    submit() {
      const obj = {
        name: this.name,
        mobile: this.mobile,
        data: this.consulting
      }
      const array = [
        [this.name, '请正确输入姓名'],
        [this.mobile, '请正确输入联系方式', /^(1[1-9]\d{9}$)/],
        [this.consulting, '请正确输入咨询项目']
      ]
      if (validateForm(array)) {
        this.$api.app.consulting({ info: obj }).then((res) => {
          if (res.status === 1) {
            this.$Message.success({
              content: '提交成功',
              duration: 3,
              closable: true
            })
            this.spinShow = false
            this.name = ''
            this.mobile = ''
            this.consulting = ''
          }
        })
      }
      this.spinShow = false
    },
    routeTo(to) {
      if (to === this.$route.name) {
        history.go(0)
      }
      this.$router.push({
        name: to
      })
    },
    toHref(url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin input {
  border:0;/*去掉未选中状态边框*/
  outline:none;/*去掉选中状态边框*/
  background-color:rgba(0,0,0,0);/*透明背景*/
  font-size:14px;
  font-family:Source Han Sans CN;
  font-weight:400;
}
.footer-all {
  background: #F5F8FB;
}
.footer-block {
  height: 140px;
}
.contact-warp {
  width: 100%;
  height: 140px;
  background-color: #062A5A;
  position: fixed;
  bottom: 0;
  z-index: 99;
}
.contact-warp_bottom {
  width: 100%;
  height: 140px;
  background-color: #062A5A;
}
.contact {
  background: #062A5A;
  width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  height: 140px;
  position: relative;
  .concat__title {
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(254,254,254,1);
    margin-right: 104px;
  }
  .contact__content {
    display: flex;
    margin-top: 22px;
    .contact__inputs {
      display: flex;

      .contact__input {
        width:189px;
        height:43px;
        background:rgba(255,255,255,1);
        border-radius:8px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        .input__left {
          height: 30px;
          width: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid #123467;
          .inputs__img {
            width: 24px;
            height: 26px;
          }
        }
        .input__in {
          @include input;
          width: 140px;
          padding: 0 9px;
        }
        .input___select {
          width: 140px;
          margin: 0 9px;
        }
        .selecter {
          background: url("~@/static/images/icon/down.png") no-repeat scroll right center transparent;
          background-size:12px 6px;
          position: relative;
          cursor: pointer;
          .selecter__options {
            position: absolute;
            z-index: 1;
            border-radius: 8px;
            background: white;
            .selecter__option {
              width: 189px;
              transition: all .2s;
              .selecter__item {
                border-bottom: 1px solid #062A5A;
                height: 35px;
                padding: 10px;
              }
              .selecter__item_first {
                border-radius: 8px 8px 0 0;
                border: none;
              }
              .selecter__item_last {
                border-radius:  0 0 8px 8px;
                border: none;
              }
            }
            .selecter__option:hover {
              background: #062A5A;
              color: white;
              transition: all .2s;
            }
          }
          .input___options {
            left: -53px;
            top: 34px;
          }
        }
        /* 过渡 */
        .options-enter-active, .options-leave-active {
          transition: opacity .2s;
        }
        .options-enter, .options-leave-to /* .fade-leave-active below version 2.1.8 */ {
          opacity: 0;
        }
      }
    }
    .contact__btn {
      width:209px;
      height:43px;
      text-align: center;
      line-height: 43px;
      background:rgba(122,185,255,1);
      box-shadow:0px 0px 2px 0px rgba(12,64,149,0.5);
      border-radius:8px;
      font-size:18px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(18,52,103,1);
      cursor: pointer;
      position: relative;
    }
  }
  .contact__tips {
    font-size:12px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-top: 10px;
  }
  .img-close {
    width:20px;
    height:20px;
  }
  .contact__close {
    opacity:0.5;
    position: absolute;
    right: 0;
    top: 16px;
  }
}
.footer-warp {
  background: #062A5A;
  height: 200px;
  width: 100%;
  background-image: url('~@/static/images/icon/footer_building.png');
  display: flex;
  align-items: center;
}
.footer {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  .left-footer {
    display: flex;
    flex-direction: column;
    margin-top: 56px;
    min-width: 500px;
    // justify-content: center;
    .left-footer__navs {
      display: flex;
      font-size:18px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      margin-bottom: 18px;
      .navs__nav {
        margin-right: 15px;
        list-style: none;
        cursor: pointer;
        transition: all .2s ease;
      }
      .navs__nav:hover {
        color: #2d8cf0;
        transition: all .2s ease;
      }
      .navs__nav_boder {
        border-right: 1px solid white;
        color:rgba(255,255,255,1);
        padding-right: 16px;;
      }
      .navs__nav_boder:last-child {
        border: none;
      }
    }
    .left-footer__line2 {
      font-size:16px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,0.8);
      margin-bottom: 16px;
      display: flex;
      .left-footer__boderbox {
        padding-right: 16px;
        margin-right: 16px;
        border-right: 1px solid rgba(255,255,255,0.8);
      }
      .left-footer__boderbox:last-child {
        border: none;
      }
    }
  }
  .footer__right {
    display: flex;
    .right__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size:13px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      .right__img {
        width: 112px;
        height: 112px;
        margin-bottom: 9px;
      }
    }
    .right__item:first-child {
      margin-right: 16px;
    }
  }
  .platform {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #FFFFFF;
    font-size: 14px;
    .platform__icons {
      padding: 20px 0;
      display: flex;
      .platform__icon {
        width: 40px;
        height: 40px;
        margin-left: 15px;
        position: relative;
        transition: all .5s;
        img {
          width: 40px;
          height: 40px;
        }
        .platform__modal {
          position: absolute;
          background-color: #FFFFFF;
          width: 160px;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          left: -60px;
          top: -170px;
          img {
            width: 150px;
            height: 150px;
          }
          .platform__triangle {
            position: absolute;
            bottom: -20px;
            width: 0;
            height: 0;
            margin: auto;
            border: 10px solid transparent;
            border-top-color: #FFFFFF;
          }
        }
      }
      .platform__icon:hover {
        transform: translateY(-10%);
        transition: all .5s;
      }
    }
    .platform__desc {
      margin-bottom: 17px;
    }
    .platform__info {
      text-align: right;
      p {
        margin-bottom: 10px;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.slide-left-enter-to .slide-left-leave {
  transform: translateY(0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10%);
}
</style>>
