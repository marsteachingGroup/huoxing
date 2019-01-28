import { cloneAsDate, getFirstDateInMonth, getDatesInMonth } from 'jfk-ui/lib/time.js'
export const dateWeekRangeByDate = function (date = new Date(), excludeFutureDates) {
  let i = date.getDay() || 7
  let start = cloneAsDate(date)
  start.setTime(start.getTime() - 3600 * 1000 * 24 * i)
  let end = cloneAsDate(date)
  end.setTime(end.getTime() + 3600 * 1000 * 24 * (6 - i))
  if (excludeFutureDates) {
    let today = cloneAsDate(new Date())
    if (start < today && end > today) {
      end = today
    }
  }
  return [start, end]
}

export const dateMonthRangeByDate = function (date = new Date()) {
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let start = getFirstDateInMonth(y, m)
  let lastDateStr = getDatesInMonth(y, m)
  let end = new Date(y, m - 1, lastDateStr)
  return [start, end]
}

export const dateStrByDate = function (excludeFutureDates) {
  let time = excludeFutureDates
  let seperator = '-'
  let month = time.getMonth() + 1
  let strDate = time.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  let currentdate = time.getFullYear() + seperator + month + seperator + strDate
  return currentdate
}
