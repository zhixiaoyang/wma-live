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
        let roomNo = this.data.roomNo;
        let pushStreamNo = 0;
        let pullStreamNo = 0;
        wx.showToast({
            title: app.globalData.userInfo.nickName,
        })
        console.log("roomNo", roomNo)
        if (roomNo % 2 == 0) {
            pushStreamNo = '1008600'
            pullStreamNo = '1008601'
        } else {
            pushStreamNo = '1008601'
            pullStreamNo = '1008600'
        }
        this.setData({
            process: 'room',
            pushStreamNo: pushStreamNo,
            pullStreamNo: pullStreamNo
        });
    },
    onPush(e) {
        var code;
        if (e.detail) {
            code = e.detail.code;
        } else {
            code = e;
        }
    },
    onPull(e) {
        var code;
        if (e.detail) {
            code = e.detail.code;
        } else {
            code = e;
        }
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
