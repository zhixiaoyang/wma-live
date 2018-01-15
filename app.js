//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
            this.loginAnyChat();
        } else {
          wx.authorize({
            scope: 'scope.userInfo',
            success: res => {
              this.loginAnyChat();
            }
          })
        }
      }
    })
  },
  loginAnyChat: function(){
    wx.login({
        success: res => {
            wx.getUserInfo({
                success: res => {
                    // 可以将 res 发送给后台解码出 unionId
                    console.log("res.userInfo", res.userInfo)
                    this.globalData.userInfo = res.userInfo

                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (this.userInfoReadyCallback) {
                        this.userInfoReadyCallback(res)
                    }
                }
            })
        },
        fail: function(res) {},
        complete: function(res) {},
    })
  },
  globalData: {
    latlong: {},
    userInfo: null,
    vips: ['La Tour Eiffel'],
    secret: 'E4BDA0E5BE88E5A5BDEFBC8CE68891E5BE88E5969CE6ACA2E4BDA0'
  }
})