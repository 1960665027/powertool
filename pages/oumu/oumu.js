var app = getApp();
var u = 0;
var i = 0;
var r = 0;
var p = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    array: ['已知电压U、电流I', '已知电压U、电阻R', '已知电压U、功率P', '已知电流I、电阻R', '已知电流I、功率P', '已知电阻R、功率P'],
    yizhione: "",
    yizhitwo: "",
    jieguoone: 0,
    jieguotwo: 0,
    wenzioen: "",
    wenzitwo: "",
    fuhaoone: "",
    fuhaotwo: ""
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    let num = parseInt(e.detail.value)
    app.globalData.xuanzhe = num
    switch (num) {
      case 0:
        this.setData({
          yizhione: "电压U",
          yizhitwo: "电流I",
          wenzioen: "电阻值为：",
          wenzitwo: "功率值为：",
          fuhaoone:"Ω",
          fuhaotwo:"W"
        })
        break;
      case 1:
        this.setData({
          yizhione: "电压U",
          yizhitwo: "电阻R",
          wenzioen: "电流值为：",
          wenzitwo: "功率值为：",
          fuhaoone: "A",
          fuhaotwo: "W"
        })
        break;
      case 2:
        this.setData({
          yizhione: "电压U",
          yizhitwo: "功率P",
          wenzioen: "电流值为：",
          wenzitwo: "电阻值为：",
          fuhaoone: "A",
          fuhaotwo: "Ω"
        })
        break;
      case 3:
        this.setData({
          yizhione: "电流I",
          yizhitwo: "电阻R",
          wenzioen: "电压值为：",
          wenzitwo: "功率值为：",
          fuhaoone: "V",
          fuhaotwo: "W"
        })
        break;
      case 4:
        this.setData({
          yizhione: "电流I",
          yizhitwo: "功率P",
          wenzioen: "电压值为：",
          wenzitwo: "电阻值为：",
          fuhaoone: "V",
          fuhaotwo: "Ω"
        })
        break;
      case 5:
        this.setData({
          yizhione: "电阻R",
          yizhitwo: "功率P",
          wenzioen: "电压值为：",
          wenzitwo: "功流值为：",
          fuhaoone: "V",
          fuhaotwo: "Ω"
        })
        break;
    }
  },
  formSubmit: function (e) {
    let that = this
    let onekey = e.detail.value.keyoen
    let twokey = e.detail.value.keytwo
    if (onekey ==""||twokey=="")
    {
      wx.showToast({
        title: '内容不能空',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (onekey == 0 || twokey == 0)
    {
      wx.showToast({
        title: '内容不能0',
        icon: 'success',
        duration: 1500
      })
      return false;
    }else{
    switch (app.globalData.xuanzhe) {
      case 0:
        let jieguozu = onekey / twokey
        let jieguogong = onekey * twokey
        that.setData({
          jieguoone: jieguozu,
          jieguotwo:jieguogong
        })
        break;
      case 1:
        let jieguoliu = onekey / twokey
        let jieguogong2 = onekey * onekey/twokey
        that.setData({
          jieguoone: jieguoliu,
          jieguotwo: jieguogong2
        })
        break;
      case 2:
        let jieguoliu3 = twokey / onekey 
        let jieguozu3 = onekey * onekey / twokey
        that.setData({
          jieguoone: jieguoliu3,
          jieguotwo: jieguozu3
        })
        break;
      case 3:
        let jieguoya4 = onekey * twokey
        let jieguogong4 = onekey * onekey * twokey
        that.setData({
          jieguoone: jieguoya4,
          jieguotwo: jieguogong4
        })
        break;
      case 4:
        let jieguoya5 = twokey / onekey
        let jieguozu5 = twokey /  (onekey *onekey) 
        that.setData({
          jieguoone: jieguoya5,
          jieguotwo: jieguozu5
        })
        break;
      case 5:
        let jieguozu6 = Math.sqrt(twokey * onekey)
        let jieguogong6 = Math.sqrt(twokey /  onekey)
        that.setData({
          jieguoone: jieguozu6,
          jieguotwo: jieguogong6
        })
        break;

    }
    }
  }

})