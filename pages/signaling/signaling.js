
var socketOpen = false
var socketMsgQueue = []
Page({
  data: {
    recieve_msgs: '',
    send_msgs: ''
  },
  onReady() {
    wx.connectSocket({
      url: 'wss://dev.anychat.cn:4433'
    })
    wx.onSocketOpen(function (res) {
      socketOpen = true
      for (var i = 0; i < socketMsgQueue.length; i++) {
        this.sendSocketMessage(socketMsgQueue[i])
      }
      socketMsgQueue = []
    })
    wx.onSocketClose(function (res) {
      console.log('WebSocket 已关闭！')
    })
    wx.onSocketMessage(function (res) {
      console.log('收到服务器内容：' + res.data)
    })
  },
  onShareAppMessage(options) {
    console.log(options.webViewUrl)
  },
  sendSocketMessage(msg) {
    if (socketOpen) {
      wx.sendSocketMessage({
        data: msg
      })
    } else {
      socketMsgQueue.push(msg)
    }
  }
})