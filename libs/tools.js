import { Message } from 'iview'
/**
 * 深度拷贝
 * @param obj
 * @returns {any}
 */
export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 遍历object是否为空
 * @param {Object}
 */
export function validateObject(obj) {
  const array = Object.values(obj)
  for (let i = 0; i < array.length; i++) {
    const str = array[i].replace(/^\s+|\s+$/g, '')
    if (str === '' || str == null) {
      return false
    }
  }
  return true
}

/**
 * 判断是否为空
 * @param {Object} v
 */
// export function isEmpty(v) {
//   switch (typeof v) {
//   case 'undefined':
//     return true
//   case 'string':
//     if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true
//     break
//   case 'boolean':
//     if (!v) return true
//     break
//   case 'number':
//     if (isNaN(v)) return true
//     break
//   case 'object':
//     if (v === null || v.length === 0) return true
//     for (const i in v) {
//       return false
//     }
//     return true
//   }
//   return false
// }

/**
  * 防抖
  * fn [function] 需要防抖的函数
  * delay [number] 毫秒，防抖期限值
  */
export function debounce(fn, delay) {
  let timer = null // 借助闭包
  return function() {
    if (timer) {
      clearTimeout(timer) // 进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
    }

    timer = setTimeout(fn, delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
  }
}

/**
  * 节流
  * fn [function] 需要节流的函数
  * delay [number] 毫秒，节流期限值
  */
export function throttle(callback, delay) {
  let valid = true
  return function() {
    if (!valid) {
      return false
    }
    // 执行函数并且在间隔期内把状态位设为无效
    valid = false
    setTimeout(() => {
      callback && callback()
      valid = true
    }, delay)
  }
}

/**
 * 简单的手机号验证
 * @param {Object} v
 */
export function verifyMobile(v) {
  // 验证手机号是否为1开头
  // 第二位在1-9之间
  // 11位数
  const reg = new RegExp(/^(1[1-9]\d{9}$)/)
  return reg.test(v)
}

/**
 * 将第二个对象的属性值赋值给第一个对象的属性值，合并成一个新对象返回
 * @param obj1    原对象
 * @param obj2    新对象
 * @returns { Object }  合并成一个新对象返回
 */
export const assignExist = (obj1, obj2) => {
  const newObj = deepCopy(obj1)
  for (const key in obj2) {
    if (newObj[key] === undefined) {
      continue
    }
    newObj[key] = obj2[key]
  }
  return newObj
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
// export const getIntersection = (arr1, arr2) => {
//   const len = Math.min(arr1.length, arr2.length)
//   let i = -1
//   const res = []
//   while (++i < len) {
//     const item = arr2[i]
//     if (arr1.indexOf(item) > -1) res.push(item)
//   }
//   return res
// }

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @returns {String} 当前浏览器名称
 */
// export const getExplorer = () => {
//   const ua = window.navigator.userAgent
//   const isExplorer = (exp) => {
//     return ua.indexOf(exp) > -1
//   }
//   if (isExplorer('MSIE')) return 'IE'
//   else if (isExplorer('Firefox')) return 'Firefox'
//   else if (isExplorer('Chrome')) return 'Chrome'
//   else if (isExplorer('Opera')) return 'Opera'
//   else if (isExplorer('Safari')) return 'Safari'
// }

/**
 * 标准时间/时间戳 转Date
 * @param time
 * @returns { Date } 时间（该项目只需要年月）
 */
export function standardtoDate(time) {
  const date = new Date(time)
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  // var d = date.getDate()
  // d = d < 10 ? ('0' + d) : d
  // var h = date.getHours()
  // var minute = date.getMinutes()
  // minute = minute < 10 ? ('0' + minute) : minute
  return y + '-' + m
}

/**
 * 生成随机数
 * @param num 取值范围
 * @returns { Number } 随机数
 */
export function Rand(num) {
  const today = new Date()
  let seed = today.getTime()

  function rnd() {
    seed = (seed * 9301 + 49297) % 233280
    return seed / (233280.0)
  }

  return function rand(number) {
    // return Math.ceil(rnd(seed) * number) // 向上取整
    return Math.floor(rnd(seed) * number)
  }
}

/**
 * 验证表单数组
 * @param array 数组对象
 * @returns { Boolean } 是否通过验证
 */
export function validateForm(array) {
  for (let i = 0; i < array.length; i++) {
    if (!validateObj(...array[i])) {
      return false
    }
  }
  return true
}
/**
 * 验证单个表单
 * @param param 数组对象
 * @param msg 弹出的提示
 * @param reg 正则
 * @returns { Boolean } 是否通过验证
 */
function validateObj(param, msg, reg = null) {
  // 是否undefined
  if (Object.prototype.toString.call(param).slice(8, -1) === 'Undefined') {
    console.error('validateObj--undefined： 传的值未定义')
  }
  param = param.replace(/(^\s*)|(\s*$)/g, '') // 去掉收尾空格
  // 如有正则，先判断正则
  if (reg && !reg.test(param)) {
    Message.warning({
      content: msg,
      duration: 3,
      closable: true
    })
    return false
  }
  // 判空
  if (param === '' || param === null) {
    Message.warning({
      content: msg,
      duration: 3,
      closable: true
    })
    return false
  }
  // 通过验证
  return true
}
