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
    this.setData({
      latitude: app.globalData.latlong.latitude,
      longitude: app.globalData.latlong.longitude
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
