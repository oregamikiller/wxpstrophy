//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log('options', options)
    var that = this;
    wx.request({
      url: 'https://www.semidream.com/trophydata/?platForm=ps4', 
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data
        })
      }
    })
  },

  onReachBottom: function () {
    var that = this;
    console.log(this.data.list.length)
    let page = parseInt(this.data.list.length / 20) + 1;
    wx.request({
      url: 'https://www.semidream.com/trophydata/?platForm=ps4&page=' + page, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var templist = that.data.list.concat(res.data)
        that.setData({
          list: templist
        })
      }
    })
  },

  detailClick: function(event) {
    var logs = wx.getStorageSync('logs') || [];
    console.log(event.currentTarget.dataset.item);
    logs.unshift(event.currentTarget.dataset.item);
    wx.setStorageSync('logs', logs)
    wx.navigateTo({
      url: '../detail/detail?id=' +           event.currentTarget.dataset.id
    })
  }
})
