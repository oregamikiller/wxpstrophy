//logs.js
Page({
  data: {
    list: []
  },
  onLoad: function () {
    console.log(wx.getStorageSync('logs'))
    this.setData({
      list: wx.getStorageSync('logs') || []

    })
  },

    detailClick: function (event) {
    var logs = wx.getStorageSync('logs') || [];
    console.log(event.currentTarget.dataset.item);
    logs.unshift(event.currentTarget.dataset.item);
    wx.setStorageSync('logs', logs)
    wx.navigateTo({
      url: '../detail/detail?id=' + event.currentTarget.dataset.id
    })
  }
})
