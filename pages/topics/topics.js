//topics.js
//获取应用实例
var app = getApp()
Page({
  data: {
    answers: [],
    modalHidden: true
  },
  handleTap: function(event) {
    console.log("handleTap");
    var questionId = event.currentTarget.dataset.questionId;
    console.log(questionId);
    // wx.navigateTo({
    //   url: 'https://www.zhihu.com/question/' + questionId
    // })
    this.setData({
      modalHidden: false
    });
  },
  modalChange: function() {
    this.setData({
      modalHidden: true
    });
  },
  onLoad: function(params) {
    console.log("## onload");
    wx.request({
      url: 'http://api.kanzhihu.com/getpostanswers/' + params.postId,
      method: "GET",
      header:{
          "Content-Type":"application/json"
      },
      success: function(res) {
        console.log(res);
        this.setData({
          answers: res.data.answers
        });
      }.bind(this),
      fail: function(res) {
        console.log("request data failed");
      }
    });
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
