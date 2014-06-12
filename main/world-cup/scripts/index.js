function onload(img) {
  img.binded = true;
  img.onload = function() {
    this.style.opacity = '1';
  };
}

function loadimg(s) {
  var imglist = document.querySelectorAll(s),
    img;

  for (var i = 0, len = imglist.length; i < len; i++) {
    img = imglist[i];
    img.src = img.dataset.src;
    if (img.complete || img.binded) {
      continue;
    }
    img.style.opacity = '0';
    img.style.transition = 'opacity .5s';
    onload(img);
  }
};
var loadOption = {
  //第一次是8个，后来每次请求9个
  pageSize: 8,
  lastId: "",
  errorTime:0
}
var loadContent = function() {
  holdLoading();
  // $.ajax({
  //   url: 'http://test.api.c-launcher.com/client/newtheme/worldCup.do?pageSize=' + loadOption.pageSize + '&lastId=' + loadOption.lastId,
  //   dataType: 'jsonp',
  //   success: function(data) {
      var data = {
        "data": {
          "code": 100,
          "lastId": 707, //请求列表最后一个主题的编号
          "themes": [{
            "_id": "5358fb82a9e2b32e28370213", //主题String类型编号
            "id": 708, //主题int型编号
            "title": "Just for you", //主题名称
            "thumbnail": "http://s.c-launcher.com/thumbnail/560/5383f348e43ba3a44407812e/thumbnail.jpg", //主题缩略图地址
            "url": "http://10.12.0.71/upload/resources/themes/523/5358fb82a9e2b32e28370213/160.apk", //主题下载链接
          }, {
            "_id": "5358fb82a9e2b32e28370213", //主题String类型编号
            "id": 708, //主题int型编号
            "title": "Just for you", //主题名称
            "thumbnail": "http://s.c-launcher.com/thumbnail/560/5383f348e43ba3a44407812e/thumbnail.jpg", //主题缩略图地址
            "url": "http://10.12.0.71/upload/resources/themes/523/5358fb82a9e2b32e28370213/160.apk", //主题下载链接
          }]
        }
      }
      if(data.data.code == "100"){
        var themeList = '';
        $.each(data.data.themes, function(n, e) {
          themeList += '<div class="layout-container ">' +
            '<a href="' + e.url + '" download="' + e.title + '" target="_blank">' +
            '<div class="loader">' +
            '<img class="thum" data-src="' + e.thumbnail + '" src="">' +
            '<img class="loading" src="./styles/images/default.png">' +
            '</div>' +
            '<p class="info"><span class="ellipsis">' + e.title + '</span></p>' +
            '</a>' +
            '</div>'
        })
        $(".layout.theme").append(themeList);
        loadimg('.thum');
      }else if(data.data.code == "103"){
        if(loadOption.errorTime ++ > 10)stopLoading();
      }else if(data.data.code == "101"){
        $(".more").hide();
        stopLoading();
      }
      releaseLoading();
      if (moreShow()) {
        loadContent();
      } else {
        listenScroll();
      }
  //   },
  //   error: function(){
  //     if(loadOption.errorTime ++ > 10)stopLoading();
  //     releaseLoading();
  //   }
  // });
}
var listenScroll = function() {
  $(window).off("scroll").on("scroll", function(e) {
    if (moreShow()) {
      loadContent();
    }
  });
}
var stopLoading = function() {
  document.querySelector(".more").dataset.stop = true;
}
var holdLoading = function() {
  document.querySelector(".more").dataset.flag = false;
}
var releaseLoading = function() {
  document.querySelector(".more").dataset.flag = true;
}
var moreShow = function() {
  var more = document.querySelector(".more");
  var falg = more.dataset.flag;
  var stop = more.dataset.stop;
  return !stop && more && falg && more.offsetTop <= document.body.scrollTop + document.body.clientHeight;
}

$(function() {
  releaseLoading();
  if (moreShow()) {
    loadContent();
  } else {
    listenScroll();
  }
  loadOption.pageSize = 9;
});