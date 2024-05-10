// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerArr:[],
    currentIndex:0
    
  },
  swiperChange:function(res){
    //console.log(res);
   this.setData({
    currentIndex:res.detail.current
   })
  },
  

//  async getList(){
//     let res = await get(`http://iwenwiki.com:3002/api/banner`,parmas)
//     console.log(res);
//   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://iwenwiki.com:3002/api/banner',
      method:'GET',
      success:(parmas)=>{
        console.log(parmas);
       if(parmas.data.status==200){
         this.setData({
           bannerArr:parmas.data.data
         })
       }

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
