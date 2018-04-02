// pages/tuxiangqing/tuxiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtu:[],
    idopt:'',
    dianlu:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let idopt = parseInt(options.id)
    let that =this
    that.setData({
      idopt: idopt
    })
        wx.request({
      url: 'https://www.glyac.com/jianzhi/index.php?a=searchxq&id='+idopt,
      success:function(res)
      {
        console.log(res);
        for(var i=0;i<res.data.length;i++)
        {
          console.log(res.data[i].dianlu);
        }
        that.setData({
          searchtu:res.data,
          dianlu: res.data.dianlu
        })
      },
      fail:function(res)
      {
       console.log("请求失败");
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
  
  }, 
  tubind:function(e)
  {
 
    let urlimg = e.target.dataset.src
     wx.previewImage({
       current: urlimg,
       urls: this.data.searchtu,
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
  }
})