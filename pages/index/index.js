//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'WX App Demo',
    userInfo: {
      avatarUrl: "http://tse1.mm.bing.net/th?&id=OIP.M4795007adaba1fa889035788d499d59ao0&w=300&h=225&c=0&pid=1.9&rs=0&p=0&r=0",
      nickName: "Aaron"
    },
    posts: [],
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      // icaonPath: '../images/car.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      // iconPath: '../images/car.png',
      rotate: 90
    }]
  },
  requestData : function() {
    wx.request({
      url: 'http://api.kanzhihu.com/getposts',
      method: "GET",
      header:{
          "Content-Type":"application/json"
      },
      success: function(res) {
        console.log("request ");
        console.log(res);
      },
      fail: function(res) {
        console.log("request data failed");
      }
    });
  },
  //事件处理函数
  bindViewTap: function(event) {
    console.log("## bindViewTap");
    var postId = event.currentTarget.dataset.postId;
    console.log(event.currentTarget.dataset.postId);
    wx.navigateTo({
      url: '../topics/topics?postId=' + postId
    })
  },
  onLoad: function () {
    console.log('## onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    wx.request({
      url: 'http://api.kanzhihu.com/getposts',
      method: "GET",
      header:{
          "Content-Type":"application/json"
      },
      success: function(res) {
        console.log(res);
        that.setData({
          posts: res.data.posts
        });
      },
      fail: function(res) {
        console.log("request data failed");
      }
    });

    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  },
  onReady: function() {
    console.log("## onReady");
  },
  onShow: function() {
    console.log("## onShow");
  },
  onHide: function() {
    console.log("## onHide");
  },
  onUnload: function() {
    console.log("## onUnload");
  },
  viewTap: function() {
    this.setData({
      text: "Overwrite data"
    })
  }
})
