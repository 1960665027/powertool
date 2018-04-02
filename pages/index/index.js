var app = getApp();
const ctx = wx.createCanvasContext('myCanvas')
  
Page({
  data: {
    jieguo:0,
    wucha:0,
  items1 : [
      { name: 0, value: '黑', color:"#000000"},
      { name: 1, value: '棕', checked: 'true', color: "#9a322e" },
      { name: 2, value: '红', color: "#f90100"},
      { name: 3, value: '橙', color: "#fd9903"},
      { name: 4, value: '黄', color: "#fafb00"},
      { name: 5, value: '绿', color: "#009900"},
      { name: 6, value: '蓝', color: "#060df5"},
      { name: 7, value: '紫', color: "#fb99fc"},
      { name: 8, value: '灰', color: "#666666"},
      { name: 9, value: '白', color: "#ffffff"}
    ],
    items2: [
      { name: 0, value: '黑', color: "#000000" },
      { name: 1, value: '棕', checked: 'true', color: "#9a322e" },
      { name: 2, value: '红', color: "#f90100" },
      { name: 3, value: '橙', color: "#fd9903" },
      { name: 4, value: '黄', color: "#fafb00" },
      { name: 5, value: '绿', color: "#009900" },
      { name: 6, value: '蓝', color: "#060df5" },
      { name: 7, value: '紫', color: "#fb99fc" },
      { name: 8, value: '灰', color: "#666666" },
      { name: 9, value: '白', color: "#ffffff" }
    ],
    items3: [
      { name: 1, value: '黑', color: "#000000" },
      { name: 10, value: '棕', checked: 'true', color: "#9a322e"},
      { name: 100, value: '红', color: "#f90100"},
      { name: 1000, value: '橙', color: "#fd9903"},
      { name: 10000, value: '黄', color: "#fafb00"},
      { name: 100000, value: '绿', color: "#009900"},
      { name: 1000000, value: '蓝', color: "#060df5"},
      { name: 10000000, value: '紫', color: "#fb99fc"},
      { name: 100000000, value: '灰', color: "#666666"},
      { name: 1000000000, value: '白', color: "#ffffff"},
      { name: 0.1, value: '金', color: "#cc9e24" },
      { name: 0.01, value: '银', color: "#cbcbcb"}
    ],
    items4: [
      { name: 5, value: '金', color: "#cc9e24" },
      { name: 10, value: '银', checked: 'true', color: "#cbcbcb"},
    
    ]
  },
  onLoad:function()
  {
    ctx.drawImage('/imgs/dianzu.jpg', 100, 0, 150, 30);
    ctx.draw();
    
  },
  radioChange1: function (e) {
    app.globalData.item1 = e.detail.value; 
      //绘图
      ctx.setFillStyle(this.data.items1[app.globalData.item1].color)
      ctx.fillRect(155, 5, 6, 22)
      ctx.draw(true)
    console.log('radio发生change事件，携带value值为：', e)
    this.setData({
      jieguo: app.globalData.item1
    })
   
  },
  radioChange2: function (e) {
    
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    app.globalData.item2 = e.detail.value;
    app.globalData.jia = parseFloat(app.globalData.item1 + app.globalData.item2)
    this.setData({
      jieguo: app.globalData.item2
    })
    //绘图
    ctx.setFillStyle(this.data.items2[app.globalData.item2].color)
    ctx.fillRect(166, 5, 6, 22)
    ctx.draw(true)
  },
  radioChange3: function (e) {
    app.globalData.item3 = parseFloat(e.detail.value);
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      jieguo: app.globalData.item3
    })
    switch (app.globalData.item3)
    {
      case 1:
        //绘图
        ctx.setFillStyle("#000000")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
      break;
      case 10:
        //绘图
        ctx.setFillStyle("#9a322e")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 100:
        //绘图
        ctx.setFillStyle("#f90100")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 1000:
        //绘图
        ctx.setFillStyle("#fd9903")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 10000:
        //绘图
        ctx.setFillStyle("#fafb00")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 100000:
        //绘图
        ctx.setFillStyle("#009900")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 1000000:
        //绘图
        ctx.setFillStyle("#060df5")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 10000000:
        //绘图
        ctx.setFillStyle("#fb99fc")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 100000000:
        //绘图
        ctx.setFillStyle("#666666")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 1000000000:
        //绘图
        ctx.setFillStyle("#ffffff")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 0.1:
        //绘图
        ctx.setFillStyle("#cc9e24")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;
      case 0.01:
        //绘图
        ctx.setFillStyle("#cbcbcb")
        ctx.fillRect(178, 5, 6, 22)
        ctx.draw(true)
        break;

    }
   
  },
  radioChange4: function (e) {
    
   let wucha = e.detail.value;
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    let jieguo = app.globalData.jia * app.globalData.item3
    this.setData({
      jieguo: jieguo,
      wucha: wucha
    })
    if (wucha==5){
      //绘图
      ctx.setFillStyle("#cc9e24")
      ctx.fillRect(189, 5, 6, 22)
      ctx.draw(true)
    }else{
      //绘图
      ctx.setFillStyle("#cbcbcb")
      ctx.fillRect(189, 5, 6, 22)
      ctx.draw(true)
    }
  }

})
