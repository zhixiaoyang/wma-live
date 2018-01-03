//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello AnyChat',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sysInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotolive: function() {
    wx.navigateTo({
      url: '../live/live'
    })
  },
  gototv: function () {
    wx.navigateTo({
      url: '../tv/tv'
    })
  },
  gotomap: function () {
    wx.navigateTo({
      url: '../map/map'
    })
  }, 
  gotorecord: function() {
    wx.navigateTo({
      url: '../record/record'
    })
  }, 
  gotoqrcode: function () {
    wx.scanCode({
      success: (res) => {
        wx.showModal({
          title: '提示',
          content: res.result,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        });
        console.log(res)
      },
      fail: function(err) {
        wx.showToast({
          title: '扫码失败',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  onLoad: function () {
    var _this = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
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
            hasUserInfo: true
          })
        }
      })
    }
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          sysInfo: res
        });
      }
    })
  },
  onHide: function () {
    // Do something when page hide.
    console.log("onHide")
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
