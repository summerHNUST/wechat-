// index.js
import request from '../../utils/request'
//const { host,bannerUrl,indexUrl } =require('../../common/config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerArr:[],
    currentIndex:0,
    list:[]
    
  },
  goDetail(e){
   // console.log(e);
    wx.navigateTo({
      url: '../indexDtail/indexDtail?mark='+e.currentTarget.dataset.id,
    })
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
  onLoad:async function (options) {
    // var that=this
    // wx.request({
    //   // url: 'http://iwenwiki.com:3002/api/banner',
    //   url:host+bannerUrl,  
    //   method:'GET',
    //   success:(parmas)=>{
    //     //console.log(parmas);
    //    if(parmas.data.status==200){
    //      that.setData({
    //        bannerArr:parmas.data.data
    //      })  
    //    }

    //   }
    // })
    const res = await request('/api/banner')
    this.setData({
      bannerArr:res.data.data   
    })

    const result=await request('/api/indexlist')
    this.setData({
      list:result.data.data
    })

    // wx.request({
    //   //url:'http://iwenwiki.com:3002/api/indexlist',
    //   url:host+indexUrl,
    //   method:'GET',
    //   success:(res)=>{
    //     //console.log(res);
    //     if(res.data.status==200){
    //       that.setData({
    //         list:res.data.data
    //       })
    //     }
    //   }
    // })
    
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
