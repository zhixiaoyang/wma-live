//index.js
//获取应用实例
const app = getApp()

let ctx = {};
let recording = false;
Page({
  data: {
    btntext: '开始录制',
    preview: '',
    btntype: 'primary'
  },
  onShow: function () {
    ctx = wx.createCameraContext()
  },
  onHide: function () {
  },
  takePhoto() {
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          p_src: res.tempImagePath,
          preview: 'image'
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
            btntype: 'primary',
            v_src: res.tempVideoPath,
            preview: 'video'
          })
        }
      })
    } else {
      ctx.startRecord({
        success: function(){
          recording = true;
          _this.setData({
            btntext: '正在录制',
            btntype: 'warn',
          })
        },
        fail: function(err){
          wx.showModal({
            title: '录像失败',
            content: JSON.stringify(err),
            success: function (res) {
              if (res.confirm) {
              } else if (res.cancel) {
              }
            }
          });
        }
      });
      
    }
  },
  error(e) {
  }
})
