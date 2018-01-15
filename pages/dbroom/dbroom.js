//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        process: 'enterance', //enterance, room
        roomNo: ~~(Math.random() * 1000),
        pushStreamNo: 0,
        pullStreamNo: 0
    },
    onInputRoomNo: function (e) {
        this.setData({
            roomNo: e.detail.value
        })
    },
    onEnterRoom: function () {
        console.log("this.roomNo", this.roomNo)
        let roomNo = this.data.roomNo;
        let pushStreamNo = 0;
        let pullStreamNo = 0;
        wx.showToast({
            title: app.globalData.userInfo.nickName,
        })
        if (app.globalData.userInfo.nickName == "忆楼欢") {
            pushStreamNo = 'YiLouHuan'
            pullStreamNo = 'Random' + roomNo
        } else {
            pushStreamNo = 'Random' + roomNo
            pullStreamNo = 'YiLouHuan'
        }
        this.setData({
            process: 'room',
            pushStreamNo: pushStreamNo,
            pullStreamNo: pullStreamNo
        });
    },
    statechange(e) {
    },
    onLoad: function () {

    },
    onShow: function () {

    },
    onHide: function () {
    },
    onUnload: function () {
    }
})
