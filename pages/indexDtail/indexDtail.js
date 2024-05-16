//import request from '../../utils/request'
const {host,indexDetail } =require('../../common/config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:''
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    //console.log(options);
    wx.showLoading({
      title: '加载中...',
    })
    wx.showNavigationBarLoading()
   
   wx.request({
     url: host+indexDetail,
     data:{
      id:options.mark
     },
     
     success:(res)=>{
      wx.showToast({
        title: '加载完毕',
      })
      wx.setNavigationBarTitle({
        title: res.data[0].title,
      })
      this.setData({
        info:res.data[0],
        
      })
     },
     complete(){
      wx.hideLoading()
      wx.hideNavigationBarLoading()
     }

   })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})