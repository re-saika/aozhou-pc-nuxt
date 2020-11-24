<template>
  <div>
    <subtitle sub-title="澳洲好房" sub-title-en="Australian Life" bg="https://fulihaofang-1253580818.cos.ap-guangzhou.myqcloud.com/static/az/az_img05.jpg?imageMogr2/thumbnail/!80p" />
    <div class="about">
      <nav class="about__navigation">
        <nav class="navigation">
          <div class="navigation__item" @click="routeTo('index')">
            首页
          </div>
          <img src="@/static/images/icon/down.png" class="navigation__icon">
          <div class="navigation__item" @click="routeTo('about')">
            联系我们
          </div>
          <img src="@/static/images/icon/down.png" class="navigation__icon">
          <div class="navigation__item font-blue">
            <span v-if="isActive == 0">关于我们</span>
            <span v-if="isActive == 1">联系我们</span>
            <span v-if="isActive == 2">人才招聘</span>
          </div>
        </nav>
        <!-- <navigation /> -->
        <ul class="bread">
          <li v-for="(item,index) in menu" :key="'5' + index" class="bread__li" :class="isActive == index?'bread__li_active':''" @click="changeMenu(index)">
            {{ item }}
            <img v-if="isActive == index" class="bread__lipoint" src="@/static/images/icon/index_point_icon.png">
          </li>
        </ul>
      </nav>
      <transition name="pointtwo">
        <div v-if="isActive == 0" class="aboutus">
          <div class="common-title common-title_aboutus">
            关于我们
          </div>
          <div class="aboutus__content">
            <article class="aboutus__article">
              <p class="abouts__p">
                从广州起步，我司的物业已经拓展至全国及海外，同时在全球拥有约49,500名雇员。我司于2014年年中进军澳洲地产市场，在墨尔本及布里斯班设有分公司。致力于将丰富的海内外优质物业的开发经验带到澳洲并打造适合澳洲市场的产品，实现多个项目开发并成功交付。自2019年5月30日以来，已有近500名业主顺利收楼入住。
              </p>
              <p class="abouts__p">
                布里斯班CBD水景学位地铁房布里斯本1号、布里斯班CBD南永久产权土地美墅、墨尔本CBD地标社区精装现房Live City以及华人新贵之居博士山，四个项目均为我司重点打造，深受置业者喜爱与欢迎。
              </p>
              <div class="address">
                <div class="address__line">
                  <img class="address__icon" src="@/static/images/icon/about_position.png">
                  北京展厅：北京市朝阳区东三环富力中心15层
                </div>
                <div class="address__line">
                  <img class="address__icon" src="@/static/images/icon/about_position.png">
                  上海展厅：上海市南京西路中信泰富广场710-711A
                </div>
                <div class="address__line">
                  <img class="address__icon" src="@/static/images/icon/about_position.png">
                  广州展厅：广州市珠江新城富力中心37层澳洲展厅
                </div>
                <div class="address__line">
                  <img class="address__icon" src="@/static/images/icon/about_phone.png">
                  联系热线：400-888-7222
                </div>
              </div>
            </article>
            <div class="aboutus__img">
              <img src="@/static/images/img/about_desc.png">
            </div>
          </div>
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-if="isActive == 1" class="contact">
          <div class="contact__my">
            <div class="common-title">
              联系方式
            </div>
            <!-- <div class="contact__mybox">
              <div class="contact__boxtitle">
                澳洲墨尔本
              </div>
              <div>客户服务热线：+31-3-90362777</div>
              <div>客服邮箱：reception@rfproperty.com.au</div>
            </div>
            <div class="contact__mybox">
              <div class="contact__boxtitle">
                澳洲布里斯班
              </div>
              <div>客户服务热线：+61-7-30961300</div>
              <div>客服邮箱：Reception.brisbane@rfproperty.com.au</div>
            </div> -->
            <div class="contact__mybox">
              <div class="contact__boxtitle">
                中国区
              </div>
              <div>客户服务热线：400-888-7222-(转)1428</div>
              <div>客服邮箱：ausettlements@rfchina.com</div>
            </div>
          </div>
          <div>
            <div class="contact__inputs">
              <div class="contact__input">
                <div class="input__left">
                  <img src="@/static/images/icon/human_blue@2x.png" class="inputs__img1">
                </div>
                <input v-model="name" class="input__in" placeholder="请输入您的姓名">
              </div>
              <div class="contact__input">
                <div class="input__left">
                  <img src="@/static/images/icon/phone_blue@2x.png" class="inputs__img1">
                </div>
                <input v-model="mobile" class="input__in" placeholder="请输入联系方式">
              </div>
              <div class="contact__input">
                <div class="input__left">
                  <img src="@/static/images/icon/building_blue@2x.png" class="inputs__img1">
                </div>
                <input v-model="address" class="input__in" placeholder="请输入地址">
              </div>
              <div class="contact__input" @click="showSelecter">
                <div class="input__left">
                  <img src="@/static/images/icon/building_blue@2x.png" class="inputs__img1">
                </div>
                <div class="input___select selecter">
                  <div>{{ consulting || '请选择咨询项目' }}</div>
                  <transition name="pointtwo">
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
              <textarea v-model="remark" class="contact__input contact__textarea" placeholder="请输入您的留言" />
              <div class="contact__btn" @click="sub1">
                <Spin v-if="spinShow" fix />提交免费获取置业方案
              </div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="pointtwo">
        <div v-if="isActive == 2" class="recruit">
          <div class="fold">
            <div class="fold__head">
              <div class="fold__head-content">
                <div class="fold__title">
                  渠道主管
                </div>
                <div>
                  <img class="fold__icon1" src="@/static/images/icon/position_gray.png">
                  <span class="fold__label">北京、上海、广州</span>
                  <!-- <span class="fold__label">物业事业部</span> -->
                  <!-- <span class="fold__label">产品/项目类</span> -->
                  <!-- <span class="fold__label">招聘2人</span> -->
                  <!-- <span class="fold__label">本科</span> -->
                </div>
                <div>
                  <img class="fold__icon2" src="@/static/images/icon/time_gray.png">
                  2020-09-27
                </div>
              </div>
              <div class="fold__button" @click="changeModel(true)">
                投递简历
              </div>
            </div>
            <transition
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
              @afterLeave="afterLeave"
            >
              <article v-show="isOpen" class="fold__content">
                工作内容<br>
                岗位职责：<br>
                1、根据公司的销售目标，结合澳洲房产业务特点，执行线下渠道开拓、异业合作等渠道拓展和商务谈判；<br>
                2、联动城市公司客源开拓、渠道合作谈判、执行；<br>
                3、潜在客群分析，做好市场信息的搜集、整理和反馈，并撰写分析报告；<br>
                4、具有海外房产销售经验，能够独立销售项目。<br>
                任职要求：<br>
                1、3年以上渠道拓展工作经验；
                2、高端渠道拓展，如国内高端楼盘、金融机构、高端物业、商协会等高净值客户资源者优先；<br>
                3、较强的谈判意思以及客户公关能力；<br>
                4、能接受出差，积极主动，抗压能力强；<br>
                5、有海外房产、移民、投资等同行业经验优先。
              </article>
            </transition>
            <div class="fold__unfold" @click="showFold">
              <div v-if="isOpen" class="fold__unfold-btn">
                收起
              </div>
              <div v-else class="fold__unfold-btn">
                查看详情
              </div>
            </div>
          </div>
        </div>
      </transition>
      <img v-if="isActive == 0" src="@/static/images/img/about_bg.png" class="development">
    </div>
    <div v-if="isShowModel" class="blackbg">
      <div class="popup">
        <div class="resume">
          <div class="resume__title">
            请完善您的资料
          </div>
          <div class="resume__tips">
            <span class="red">*</span>
            为必填项目，简历基本完整，才可用于投递，建议优先完善必填内容
          </div>
          <form class="form">
            <div class="form__item">
              <span class="red red_form">*</span><input v-model="form.name" class="resume__input" placeholder="姓名">
            </div>
            <div class="form__item">
              <span class="red red_form">*</span><input v-model="form.mobile" class="resume__input" placeholder="手机号">
            </div>
            <div class="form__item">
              <span class="red red_form">*</span>
              性别
              <label class="form__radio mr">男<input type="radio" name="gender" checked value="0" @click="changeGender('0')">
              </label>
              <label class="form__radio">女<input type="radio" name="gender" value="1" @click="changeGender('1')"></label>
            </div>
            <div class="form__item">
              <span class="red red_form">*</span><input v-model="form.career" class="resume__input" placeholder="职位" disabled>
            </div>
            <div class="form__item">
              <span class="red red_form">*</span><input v-model="form.birth" class="resume__input" placeholder="出生年月(2000-01)">
            </div>
            <div class="form__item">
              <span class="red red_form">*</span><input v-model="form.degree" class="resume__input" placeholder="学历">
            </div>
            <div class="form__item form__item_file">
              <span class="red red_form">*</span>上传简历附件<input ref="file" type="file" class="resume__file" accept="application/msword,application/pdf" @change="changeFile($event)">
            </div>
          </form>
          <div class="resume__submit" @click="sub2">
            <Spin v-if="spinShow" fix />保存并提交简历
          </div>
        </div>
        <div class="popup__close" @click="changeModel(false)">
          X
        </div>
      </div>
    </div>
    <my-footer :cover="isActive == 0" />
  </div>
</template>

<script>
import MyFooter from '@/components/MyFooter'
import subtitle from '@/components/Subtitle'
// import navigation from '@/components/Navigation'
import { validateForm, deepCopy, debounce } from '@/libs/tools.js'
import tran from '@/mixins/tran'
const defaultForm = {
  name: '',
  mobile: '',
  gender: '0',
  career: '渠道主管', // 职位
  birth: '', // 出生年月
  degree: '' // 学历
}

export default {
  components: {
    subtitle,
    MyFooter
    // navigation
  },
  mixins: [tran],
  layout: 'cover',
  async asyncData({ app }) {
    try {
    // 获得项目列表
      return await app.$api.app.projectlist().then(({ data }) => {
        return { list: data }
      })
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      // 关于我们
      isActive: 0,
      menu: ['关于我们', '联系我们', '人才招聘'],
      // 联系方式
      isAlive: true, // 咨询是否显示
      list: [], // 项目列表,
      isShow: false, // 是否显示咨询下拉框
      consulting: '', // 咨询的项目
      name: '',
      mobile: '',
      address: '',
      remark: '',
      // 招聘
      isShowModel: false,
      isOpen: false,
      form: deepCopy(defaultForm),
      formData: null, // 文件上传表单对象
      t1: null,
      t2: null,
      spinShow: false
    }
  },
  watch: {
    // 监听 route跳转时$route.fullPath'是否一样
    '$route.fullPath'(val) {
      history.go(0)
    }
  },
  created() {
    if (this.$route.query.id) {
      this.isActive = this.$route.query.id
    }
  },
  mounted() {
    this.t1 = debounce(() => { this.submit() }, 2000)
    this.t2 = debounce(() => { this.submitForm() }, 2000)
  },
  methods: {
    changeMenu(index) {
      this.isActive = index
      document.documentElement.scrollTop = 200
      // this.$refs.foot.isBottom = true
      // this.$refs.foot.isAlive = true
    },
    showSelecter() {
      this.isShow = !this.isShow
    },
    changeSelect(name) {
      this.consulting = name
    },
    // 验证表单
    validateForm(obj) {
      const array = Object.keys(obj)
      for (let i = 0; i < array.length; i++) {
        const str = array[i].replace(/^\s+|\s+$/g, '')
        if (str === '') {
          return false
        }
      }
      return true
    },
    close() {
      this.isAlive = false
    },
    sub1() {
      this.spinShow = true
      this.t1()
    },
    sub2() {
      this.spinShow = true
      this.t2()
    },
    submit() {
      const obj = {
        name: this.name,
        mobile: this.mobile,
        data: this.consulting,
        remark: this.remark,
        address: this.address
      }
      const array = [
        [this.name, '请正确输入姓名'],
        [this.mobile, '请正确输入联系方式', /^(1[1-9]\d{9}$)/],
        [this.consulting, '请选择咨询的项目'],
        [this.remark, '请正确输入留言']
      ]
      if (validateForm(array)) {
        this.$api.about.contactus({ info: obj }).then((res) => {
          this.spinShow = false
          this.$Message.success({
            content: '提交成功',
            duration: 3,
            closable: true
          })
          this.name = ''
          this.mobile = ''
          this.consulting = ''
          this.address = ''
          this.remark = ''
        })
      }
      this.spinShow = false
    },
    // 招聘
    // 选性别
    changeGender(value) {
      this.form.gender = value
    },
    changeFile(e) {
      const file = e.target.files
      this.formData = new FormData()
      this.formData.append('files', file[0])
      this.formData.append('type', 'file')
      // e.target.value = null
    },
    upload() {
      return this.$axios.post(
        'http://admin.azhfang.com/api/upload/index/index',
        this.formData
      ).then((res) => {
        return res.aid
      }).catch((err) => {
        console.log(err)
      })

      // return this.$api.about.upload(this.formData).then((res) => {
      //   return res.aid
      // }).catch((err) => {
      //   console.log(err)
      // })
    },
    submitForm() {
      const array = [
        [this.form.name, '请正确输入姓名'],
        [this.form.mobile, '请正确输入联系方式', /^(1[1-9]\d{9}$)/],
        [this.form.gender, '请选择性别'],
        [this.form.career, '请正确输入驻场经理'],
        [this.form.birth, '请正确输入出生年月', /^\d{4}-\d{2}$/],
        [this.form.degree, '请正确输入学历'],
        [this.$refs.file.value, '请上传简历']
      ]
      if (validateForm(array)) {
        this.upload().then((res) => {
          this.form.cv_id = res
          this.$api.about.resume({ info: this.form }).then((res) => {
            this.spinShow = false
            this.$Message.success({
              content: '提交成功',
              duration: 3,
              closable: true
            })
            this.isShowModel = false
            this.form = defaultForm
          })
        })
      }
      this.spinShow = false
    },
    changeModel(val) {
      this.isShowModel = val
    },
    // 折叠
    showFold() {
      this.isOpen = !this.isOpen
    },
    enter(el) {
      el.style.height = 'auto'
      // noinspection JSSuspiciousNameCombination
      const endWidth = window.getComputedStyle(el).height
      el.style.height = '0px'
      /* eslint-disable */
      el.offsetHeight // force repaint
      /* eslint-disable */
      // noinspection JSSuspiciousNameCombination
      el.style.height = endWidth
    },
    afterEnter(el) {
      el.style.height = null
    },
    leave(el) {
      el.style.height = window.getComputedStyle(el).height
      /* eslint-disable */
      el.offsetHeight // force repaint
      /* eslint-disable */
      el.style.height = '0px'
    },
    afterLeave(el) {
      el.style.height = null
    },
    routeTo(name) {
      this.$router.push({
        name: name
      })
    }
  },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { hid: 'keywords', name: 'keywords', content: '澳洲好房联系方式,澳洲好房关于我们，澳洲好房人才招聘' },
        { hid: 'description', name: 'description', content: '澳洲好房联系方式客户服务热线:400-888-7222-(转)1409，客服邮箱:ausettlements@rfchina.com' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin input {
  border:0;/*去掉未选中状态边框*/
  outline:none;/*去掉选中状态边框*/
  background-color:rgba(0,0,0,0);/*透明背景*/
  font-size:18px;
  font-family:Source Han Sans CN;
  font-weight:400;
}
.about {
  width: 100%;
  min-height: calc(100vh - 700px);
  .development {
    width:100%;
    height:592px;
    margin-bottom: -2px;
  }
  .about__navigation {
    margin: auto;
    width: 1200px;
    height: 63px;
    border-bottom: 1px solid #CCCCCC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .navigation {
      font-size:14px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(153,153,153,1);
      display: flex;
      height: 16px;
      align-items: center;
      .navigation__icon {
        width:16px;
        height:9px;
        margin: 0 8px;
        transform:rotate(-90deg);
      }
    }
    .bread {
      display: flex;
      .bread__li {
        margin-right: 46px;
        list-style: none;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        position: relative;
        cursor: pointer;
        .bread__lipoint {
          position: absolute;
          left: 0;
          bottom: -23px;
          width:72px;
          height:7px;
        }
      }
      .bread__li_active {
        color:#062A5A;
      }
    }
  }
  .aboutus {
    width: 1200px;
    margin: auto;
    .common-title_aboutus {
      height: 93px;
      line-height: 93px;
      width: 200px;
    }
    .aboutus__content {
      display: flex;
      margin: 30px 0 90px 0;
      .aboutus__article {
        width: 100%;
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(102,102,102,1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 38px;
        .abouts__p {
          line-height: 32px;
        }
      }
      .aboutus__img {
        width:1055px;
        height:420px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 5px;
        }
      }
    }
  }
  .contact {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
    padding: 50px 0;
    .contact__boxtitle {
      font-weight:bold;
      color:#062A5A;
    }
    .contact__mybox {
      margin: 22px 0;
      font-size:18px;
      font-family:Source Han Sans CN;
      color:#333333;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .contact__inputs {
      .contact__input {
        width:580px;
        height:60px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        display: flex;
        align-items: center;
        border: 1px solid #062A5A;
        margin-bottom: 20px;
        transition: all .2s;
        .input__left {
          height: 30px;
          width: 55px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid #123467;
          .inputs__img {
            width: 25px;
            height: 29px;
          }
        }
        .input__in {
          @include input;
          width: 100%;
          padding: 0 15px;
        }
        .input___select {
          width: 580px;
          margin: 0 15px;
          font-size:18px;
          font-family:Source Han Sans CN;
          font-weight:400;
        }
        .selecter {
          background: url("~@/static/images/icon/down.png") no-repeat scroll right center transparent;
          background-size:28px 16px;
          position: relative;
          .selecter__options {
            position: absolute;
            border-radius: 4px;
            background: white;
            border: 1px solid #062A5A;
            .selecter__option {
              width: 580px;
              transition: all .2s;
              padding: 0 10px;
              .selecter__item {
                border-bottom: 1px solid #062A5A;
                height: 40px;
                padding: 10px;
              }
              .selecter__item_first {
                border-radius: 4px 4px 0 0;
              }
              .selecter__item_last {
                border-radius:  0 0 4px 4px;
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
            left: -63px;
            top: 43px;
          }
        }
      }
      &:hover {
        border-color: #2b85e4;
        transition: all .2s;
      }
      .contact__textarea {
        @include input();
        width:580px;
        height:156px;
        background:rgba(255,255,255,1);
        border:1px solid #062A5A;
        border-radius:4px;
        padding: 16px;
      }
      .contact__btn {
        width:580px;
        height:60px;
        background:#062A5A;
        border-radius:4px;
        font-size:24px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 60px;
        cursor: pointer;
        position: relative;
      }
    }
  }
  .recruit {
    width: 1200px;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 22px;
    .fold {
      width: 100%;
      border: 1px solid #E3E3E3;
      margin-bottom: 28px;
      .fold__head {
        padding: 16px;
        height: 134px;
        display: flex;
        justify-content: space-between;
        .fold__head-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
          .fold__title {
            font-size:20px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .fold__icon1 {
            width:12px;
            height:14px;
            margin-right: 5px;
          }
          .fold__icon2 {
            width: 13px;
            height: 13px;
            margin-right: 5px;
          }
          .fold__label {
            margin-right: 20px;
          }
        }
        .fold__button {
          width:120px;
          height:45px;
          background:#062A5A;
          border-radius:4px;
          font-size:18px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          text-align: center;
          line-height: 45px;
          cursor: pointer;
        }
      }
      .fold__content {
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        padding: 20px;
        line-height: 32px;
        transition: height .5s ease-in-out;
        overflow: hidden;
      }
      .fold__unfold {
        padding: 0 40px;
        .fold__unfold-btn {
          width: 100%;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size:18px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          border-top: 1px dashed #DCDCDC;
          cursor: pointer;
        }
      }
    }
  }
}
.address {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #2E6CB1;
  &__line {
    margin-bottom: 15px;
  }
  &__icon {
    width: 17px;
    height: 17px;
    margin-right: 12px;
  }
}
.blackbg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .popup {
    width:771px;
    min-height:335px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 6px 0px rgba(51,51,51,0.3);
    border-radius:4px;
    padding: 20px;
    position: relative;
    .resume {
      display: flex;
      flex-direction: column;
      align-items: center;
      .resume__title {
        font-size:20px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-bottom: 15px;
      }
      .resume__tips {
        width: 100%;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color: #999999;
        margin-bottom: 15px;
      }
      .form {
        // display: flex;
        // justify-content: space-around;
        // flex-wrap: wrap;
        width: 100%;
        .form__item {
          // display: flex;
          align-items: center;
          display: inline-block;
          width:360px;
          .red_form {
            margin-right: 5px;
            margin-left: 10px;
          }
          .resume__input {
            @include input();
            width:332px;
            height:32px;
            border:1px solid #062A5A;
            border-radius:4px;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
            padding: 10px;
            margin-bottom: 20px;
          }
        }
        .form__item_file {
          width: 400px;
        }
      }
      .resume__submit {
        width:200px;
        height:40px;
        background:#062A5A;
        border-radius:4px;
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 40px;
        margin-top: 20px;
      }
    }
    .popup__close {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  }
}
</style>

