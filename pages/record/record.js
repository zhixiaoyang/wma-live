//index.js
//获取应用实例
const app = getApp()

let ctx = {};
let recording = false;
Page({
  data: {
    btntext: '开始录制'
  },
  onShow: function () {
    ctx = wx.createCameraContext()
    // Do something when page show.
    console.log("onShow")
  },
  onHide: function () {
    // Do something when page hide.
    console.log("onHide")
  },
  takePhoto() {
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          p_src: res.tempImagePath
        })
      }
    })
  },
  recordVideo() {
    var _this = this;
    if (recording) {
      ctx.stopRecord({
        success: function(res){
          recording = false;
          _this.setData({
            btntext: '开始录制',
            v_src: res.tempVideoPath
          })
        }
      })
    } else {
      ctx.startRecord({
        success: function(){
          console.log('开始成功');
          recording = true;
          _this.setData({
            btntext: '正在录制'
          })
        },
        fail: function(err){
          wx.showModal({
            title: '录像失败',
            content: JSON.stringify(err),
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          });
        }
      });
      
    }
  },
  error(e) {
    console.log(e.detail)
  }
})
