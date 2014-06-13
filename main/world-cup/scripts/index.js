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
  errorTime: 0,
  //正式服 51，测试服79
  themeType: 79
}
var loadContent = function() {
  holdLoading();
  $.ajax({
    url: 'http://test.api.c-launcher.com/client/newtheme/lastestByType.do?density=0&type=' +loadOption.themeType+ '&jsonp=true&pageSize=' + loadOption.pageSize + (loadOption.lastId && ('&lastId=' + loadOption.lastId)),
    dataType: 'jsonp',
    jsonp: "jsonpcallback",
    success: function(data) {
      var result = data.data || {}
      if (result.code == "100") {
        var themeList = '';
        var length = result.themes.length;
        if(length<1){
          stopLoading();
        }
        $.each(result.themes, function(n, e) {
          if (length == n + 1){
            loadOption.lastId = e.id;
          }
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
      } else if (result.code == "101") {
        $(".more").hide();
        stopLoading();
      } else if (result.code == "103") {
        if (loadOption.errorTime++ > 10) stopLoading();
      } else {
        if (loadOption.errorTime++ > 10) stopLoading();
      }
      releaseLoading();
      if (moreShow()) {
        loadContent();
      } else {
        listenScroll();
      }
    },
    error: function() {
      if (loadOption.errorTime++ > 10) stopLoading();
      releaseLoading();
    }
  });
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