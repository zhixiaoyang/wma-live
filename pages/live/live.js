//index.js
//获取应用实例
const app = getApp();
const decrypto = function(sct) {
  var arr = [,];
  for (var ix = 1; ix <= sct.length / 2; ix++) {
    arr.push(sct.slice(2 * (ix - 1), 2 * ix));
  }
  return decodeURIComponent(arr.join("%"));
}

Page({
  data: {
    secret: decrypto(app.globalData.secret),
    isvip: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  statechange(e) {
    console.log('live-pusher code:', e.errCode)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        isvip: app.globalData.vips.includes(app.globalData.userInfo.nickName),
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          isvip: app.globalData.vips.includes(res.userInfo.nickName),
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            isvip: app.globalData.vips.includes(res.userInfo.nickName),
            hasUserInfo: true
          })
        }
      })
    }
  }
})
