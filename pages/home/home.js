
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['首页', '电路图'],
    currentTab: 0, 
    totalRecord:0,
    isInit:true,
    tucount:[],
    loadingMore:false
  },
  navbarTap:function(e)
  {

     this.setData({
       currentTab:e.currentTarget.dataset.idx 
     })
  },
  searchInputEvent:function(e)
  {
    this.setData({
      searchKey: e.detail.value
    })
  },
  searchClickEvent:function(e)
  {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //搜索输入框输入取值
  searchInputEvent: function (e) {
    this.setData({ searchKey: e.detail.value });
  },

  //搜索按钮点击事件
  searchClickEvent: function (e) {
    let that = this
    if (!this.data.searchKey) {
      return;
    }
    that.setData({
      isInit:false,
      loadingMore:true
    })
    console.log(this.data.searchKey);

    wx.request({   
      url: 'https://www.glyac.com/jianzhi/index.php?a=search&content=' + this.data.searchKey,
      
      success:function(res)
      {
        console.log(res);
        let lengthconunt = res.data.length
        if (parseInt(lengthconunt==0))
        {
          that.setData({
            totalRecord:0
          })
          return;
        }else{
          that.setData({
            totalRecord: lengthconunt,
            tucount:res.data,
            loadingMore:false
          })
          return;
        }
      },
      fail:function(e)
      {
        console.log("失败");
      }
    })
  },
  aiyoubind:function()
  {
    wx.navigateToMiniProgram({
      appId: 'wx052e4cb7e9fc8e61',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
        console.log(res)
      }, fail(res) {
        console.log(res)
      }
    })
  }
})