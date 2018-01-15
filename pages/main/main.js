// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canShow: 0,
    tapTime: '',		// 防止两次点击操作间隔太快
    entryInfos: [
      { icon: "../Resources/liveroom.png", title: "开始直播", navigateTo: "../live/live" },
      { icon: "../Resources/doubleroom.png", title: "观看直播", navigateTo: "../audience/audience" },
      { icon: "../Resources/multiroom.png", title: "拍照录像", navigateTo: "../record/record" },
      { icon: "../Resources/vodplay.png", title: "地图导航", navigateTo: "../map/map" },
      { icon: "../Resources/doubleroom.png", title: "双向视频", navigateTo: "../dbroom/dbroom" },
      // { icon: "../Resources/vodplay.png", title: "信令服务", navigateTo: "../signaling/signaling" },
      // { icon: "../Resources/rtplay.png", title: "低延时播放", navigateTo: "../rtplay/rtplay" }
      // { icon: "../Resources/wawaplay@2x.png", title: "在线抓娃娃", navigateTo: "../wawaplayer/wawaroomlist/wawaroomlist" }
    ]
  },

  onEntryTap: function (e) {
    if (this.data.canShow) {
      // if(1) {
      // 防止两次点击操作间隔太快
      var nowTime = new Date();
      if (nowTime - this.data.tapTime < 1000) {
        return;
      }
      var toUrl = this.data.entryInfos[e.currentTarget.id].navigateTo;
      wx.navigateTo({
        url: toUrl,
      });
      this.setData({ 'tapTime': nowTime });
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。',
        showCancel: false
      });
    }
  },

  onQrcode: function () {
    wx.scanCode({
      success: (res) => {
        wx.showModal({
          title: '提示',
          content: res.result,
          success: function (res) {
            if (res.confirm) {
            } else if (res.cancel) {
            }
          }
        });
      },
      fail: function (err) {
        wx.showToast({
          title: '扫码失败',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (!wx.createLivePlayerContext) {
      setTimeout(function () {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。',
          showCancel: false
        });
      }, 0);
    } else {
      // 版本正确，允许进入
      this.data.canShow = 1;
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '腾讯视频云',
      path: '/pages/main/main',
      imageUrl: '../Resources/share.png'
    }
  }
})