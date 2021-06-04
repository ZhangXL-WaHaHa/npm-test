module.exports = {
  formatNowDate(date) {
    // 切割传过来的数据
    const nowYear = parseFloat(date.split('-')[0]) || ''
    const nowMonth = parseFloat(date.split('-')[1]) || ''
    const nowDay = parseFloat(date.split('-')[2]) || ''

    // 判断输入的数据是否正确
    if (Number.isNaN(nowYear) || Number.isNaN(nowMonth) || Number.isNaN(nowDay)) {
      return {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      }
    }

    // 判断输入的时间有没有错
    // 暂时不清楚年份范围
    const value = this.getTotalDays({
      year: nowYear,
      month: nowMonth
    })
    // 判断年月
    if (nowYear < 1997 || nowYear > 10000 || nowMonth < 1 || nowMonth > 12) {
      return {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      }
    }
    // 判断天数
    if (nowDay < 1 || nowDay > value) {
      return {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      }
    }

    return {
      year: nowYear,
      month: nowMonth,
      day: nowDay
    }
  },

  getTotalDays(date) {
    // 使用时间戳计算
    const value = new Date(date.year, date.month, 0).getDate()
    return value
  },

  getFirstDayWeek(date) {
    return new Date(date.year, date.month - 1, 1).getDay()
  },
}
