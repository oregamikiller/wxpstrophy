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
  onShow: function () {
    console.log(wx.getStorageSync('logs'))
    this.setData({
      list: wx.getStorageSync('logs') || []

    })
  },

    detailClick: function (event) {
    
    wx.navigateTo({
      url: '../detail/detail?id=' + event.currentTarget.dataset.id
    })
  }
})
