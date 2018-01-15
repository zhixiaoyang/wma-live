//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    latitude: 0,
    longitude: 0,
    markers: [{
      // iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.123213,
      longitude: 113.373145,
      width: 50,
      height: 50,
      label: {
        content: "广州佰锐网络科技有限公司",
        textAlign: "center",
        fontSize: 16
      }
    }],
    controls: [{
      id: 1,
      // iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onReady: function(){
      //位置
      wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: (res) => {
              this.setData({
                  latitude: res.latitude,
                  longitude: res.longitude
              })
              this.globalData.latlong = {
                  latitude: res.latitude,
                  longitude: res.longitude
              }
          }
      })
    
  },
  regionchange(e) {
  },
  markertap(e) {
  },
  controltap(e) {
  }
})
