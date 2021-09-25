export function formatDayTime (date) {
  // let year = date.getFullYear()
  // let month = date.getMonth() + 1
  // let day = date.getDate()

  // return [year, month, day].map(formatNumber).join('-')

  console.log('进来')
}

////获取当前操作日期与时间
export function getLocalTime(){
  let myDate = new Date();
  return myDate.toLocaleString();
}

export function getQueryString (name) {
  let search = location.search

  if (search) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
  }

  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let str = location.href
  let num = location.href.indexOf('?')
  str = str.substr(num + 1)
  str = str.match(reg)
  if (str != null) return unescape(str[2])
  return null
}