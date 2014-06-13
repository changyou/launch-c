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
  //正式服 51，测试服?
  themeType: 51
}
var loadContent = function() {
  holdLoading();
  $.ajax({
    url: 'http://test.api.c-launcher.com/client/newtheme/lastestByType.do?density=0&type=' +loadOption.themeType+ '&jsonp=true&pageSize=' + loadOption.pageSize + '&lastId=' + loadOption.lastId,
    dataType: 'jsonp',
    jsonp: "jsonpcallback",
    success: function(data) {
      // data = {"data":{"code":100,"themes":[{"_id":"539a5b59534645de64e41834","id":148458,"title":"Brazil Neymar","description":"World Cup opener in Brazil VS Croatia, opening only 11 minutes Marcelo own goal to help lead the Legion grid, but \"Brazil's national treasure,\" Neymar to come forward, his left foot shot hit the post into the room, as the Brazilian scored the crucial equalizer Goal! Fred manufacturing penalty in the second half, Neymar withstand the pressure of the penalty into the penalty, to help Brazil 2-1 ahead!","author":"Amanda","category":"World Cup ","tag":"World Cup，Brazil，Star，Handsome","downloads":0,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-13","thumbnail":"http://d.c-launcher.com/thumbnail/780/539a5b59534645de64e41834/thumbnail_mobile_1402627437429.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/288/539a5b59534645de64e41834/160.amr","sizeStr":"311KB","size":318446,"previews":[{"url":"http://d.c-launcher.com/preview/780/539a5b59534645de64e41834/desktop_mobile_1402627437484.jpg"},{"url":"http://d.c-launcher.com/preview/780/539a5b59534645de64e41834/drawer_mobile_1402627437598.jpg"},{"url":"http://d.c-launcher.com/preview/780/539a5b59534645de64e41834/widgets_mobile_1402627437696.jpg"}]},{"_id":"53990e9d0d254cc66428cbab","id":146985,"title":"world Football women","description":"2014 World Cup opening in Brazil. Which do you think will win the football right? Brazil? Spain? Germany? Portugal? Every day another theme, change your mood every day, hoping the World Cup scores and accompany you throughout the month.......","author":"Amanda","category":"World Cup ","tag":"World Cup came, watching beautiful girls, watching football right","downloads":0,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-12","thumbnail":"http://d.c-launcher.com/thumbnail/235/53990e9d0d254cc66428cbab/thumbnail_mobile_1402627438552.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/448/53990e9d0d254cc66428cbab/160.amr","sizeStr":"402KB","size":411232,"previews":[{"url":"http://d.c-launcher.com/preview/235/53990e9d0d254cc66428cbab/desktop_mobile_1402627438608.jpg"},{"url":"http://d.c-launcher.com/preview/235/53990e9d0d254cc66428cbab/drawer_mobile_1402627438706.jpg"},{"url":"http://d.c-launcher.com/preview/235/53990e9d0d254cc66428cbab/widgets_mobile_1402627438822.jpg"}]},{"_id":"5396f6fc534645de64e4177f","id":143932,"title":"Sports Bike","description":"Sports Bike","author":"Amruta","category":"World Cup ","tag":"Sports Bike, Bike, sports, Action, Rider, Speed","downloads":372,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-11","thumbnail":"http://d.c-launcher.com/thumbnail/183/5396f6fc534645de64e4177f/thumbnail_mobile_1402539142693.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/872/5396f6fc534645de64e4177f/160.amr","sizeStr":"623KB","size":637741,"previews":[{"url":"http://d.c-launcher.com/preview/183/5396f6fc534645de64e4177f/desktop_mobile_1402539142761.jpg"},{"url":"http://d.c-launcher.com/preview/183/5396f6fc534645de64e4177f/drawer_mobile_1402539142875.jpg"},{"url":"http://d.c-launcher.com/preview/183/5396f6fc534645de64e4177f/widgets_mobile_1402539143005.jpg"}]},{"_id":"538f6c82723d1c702553dcd4","id":131650,"title":"Yuvraj Singh Thems","description":"Yuvraj Singh is an Indian international cricketer. He is an all-rounder who bats left-handed in the middle-order and bowls slow left-arm orthodox. He is the son of former Indian fast bowler and Punjabi actor Yograj Singh.","author":"acemanoj","category":"World Cup ","tag":"Yuvraj Singh, Cricket, Sports, India","downloads":532,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-06","thumbnail":"http://d.c-launcher.com/thumbnail/676/538f6c82723d1c702553dcd4/thumbnail_mobile_1402404656772.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/512/538f6c82723d1c702553dcd4/160.amr","sizeStr":"730KB","size":747413,"previews":[{"url":"http://d.c-launcher.com/preview/676/538f6c82723d1c702553dcd4/desktop_mobile_1402404657027.jpg"},{"url":"http://d.c-launcher.com/preview/676/538f6c82723d1c702553dcd4/drawer_mobile_1402404657440.jpg"},{"url":"http://d.c-launcher.com/preview/676/538f6c82723d1c702553dcd4/widgets_mobile_1402404657845.jpg"}]},{"_id":"5385e24cac60d1ff55db27b8","id":127680,"title":"Virat Kohli","description":"is an Indian cricketer. A middle-order batsman, who can also bowl right arm medium pace,[1] Kohli captained the victorious Indian team at the 2008 U/19 Cricket World Cup held in Malaysia, and is the captain of the Royal Challengers Bangalore franchise in the Indian Premier League.","author":"ajittikone","category":"World Cup ","tag":"Virat Kohli, Cricket, India, Hindi, Mumbai","downloads":1054,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-04","thumbnail":"http://d.c-launcher.com/thumbnail/712/5385e24cac60d1ff55db27b8/thumbnail_mobile_1402056694357.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/544/5385e24cac60d1ff55db27b8/160.amr","sizeStr":"1MB","size":1049011,"previews":[{"url":"http://d.c-launcher.com/preview/712/5385e24cac60d1ff55db27b8/desktop_mobile_1402056694963.jpg"},{"url":"http://d.c-launcher.com/preview/712/5385e24cac60d1ff55db27b8/drawer_mobile_1402056695485.jpg"},{"url":"http://d.c-launcher.com/preview/712/5385e24cac60d1ff55db27b8/widgets_mobile_1402056696065.jpg"}]},{"_id":"538d3e8f9fd9151c1aaa0baa","id":126688,"title":"The Belgian team","description":"The Belgian team","author":"ningtieying","category":"World Cup ","tag":"The Belgian team","downloads":1011,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-04","thumbnail":"http://d.c-launcher.com/thumbnail/186/538d3e8f9fd9151c1aaa0baa/thumbnail_mobile_1401847963422.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/400/538d3e8f9fd9151c1aaa0baa/160.amr","sizeStr":"426KB","size":435980,"previews":[{"url":"http://d.c-launcher.com/preview/186/538d3e8f9fd9151c1aaa0baa/desktop_mobile_1401847963478.jpg"},{"url":"http://d.c-launcher.com/preview/186/538d3e8f9fd9151c1aaa0baa/drawer_mobile_1401847963574.jpg"},{"url":"http://d.c-launcher.com/preview/186/538d3e8f9fd9151c1aaa0baa/widgets_mobile_1401847963678.jpg"}]},{"_id":"538d667d72bac6762529ea47","id":126685,"title":"the Portuguese team","description":"the Portuguese team","author":"ningtieying","category":"World Cup ","tag":"the Portuguese team","downloads":1296,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-04","thumbnail":"http://d.c-launcher.com/thumbnail/695/538d667d72bac6762529ea47/thumbnail_mobile_1401847964087.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/376/538d667d72bac6762529ea47/160.amr","sizeStr":"410KB","size":420106,"previews":[{"url":"http://d.c-launcher.com/preview/695/538d667d72bac6762529ea47/desktop_mobile_1401847964145.jpg"},{"url":"http://d.c-launcher.com/preview/695/538d667d72bac6762529ea47/drawer_mobile_1401847964250.jpg"},{"url":"http://d.c-launcher.com/preview/695/538d667d72bac6762529ea47/widgets_mobile_1401847964346.jpg"}]},{"_id":"538d67a13c15a0642590ed73","id":126681,"title":"Argentina team","description":"Argentina team","author":"ningtieying","category":"World Cup ","tag":"Argentina team","downloads":1660,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-04","thumbnail":"http://d.c-launcher.com/thumbnail/987/538d67a13c15a0642590ed73/thumbnail_mobile_1401847964773.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/424/538d67a13c15a0642590ed73/160.amr","sizeStr":"399KB","size":408327,"previews":[{"url":"http://d.c-launcher.com/preview/987/538d67a13c15a0642590ed73/desktop_mobile_1401847964850.jpg"},{"url":"http://d.c-launcher.com/preview/987/538d67a13c15a0642590ed73/drawer_mobile_1401847964946.jpg"},{"url":"http://d.c-launcher.com/preview/987/538d67a13c15a0642590ed73/widgets_mobile_1401847965042.jpg"}]},{"_id":"538d3feeef956b281a5e46e5","id":124111,"title":"ArgentinaTeam","description":"Argentina’s coach Alejandro Sabella cuts World Cup squad down to 23","author":"Bai","category":"World Cup ","tag":"WorldCup","downloads":1559,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-03","thumbnail":"http://d.c-launcher.com/thumbnail/389/538d3feeef956b281a5e46e5/thumbnail_mobile_1401766380475.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/176/538d3feeef956b281a5e46e5/160.amr","sizeStr":"573KB","size":586494,"previews":[{"url":"http://d.c-launcher.com/preview/389/538d3feeef956b281a5e46e5/desktop_mobile_1401766380726.jpg"},{"url":"http://d.c-launcher.com/preview/389/538d3feeef956b281a5e46e5/drawer_mobile_1401766381128.jpg"},{"url":"http://d.c-launcher.com/preview/389/538d3feeef956b281a5e46e5/widgets_mobile_1401766381502.jpg"}]},{"_id":"538d39349fd9151c1aaa0ba9","id":124042,"title":"Messi","description":"The 22-year-old Messi, the first Argentine to win the prestigious trophy, was the top scorer in last year\"s Champions League with nine goals\".","author":"Bai","category":"World Cup ","tag":"WorldCup","downloads":6853,"recommendTime":0,"inGooglePlay":"false","googlePlayUrl":"","create_date":"2014-06-03","thumbnail":"http://d.c-launcher.com/thumbnail/649/538d39349fd9151c1aaa0ba9/thumbnail_mobile_1401764556144.jpg","price":"0.00","url":"http://d.c-launcher.com/themes/864/538d39349fd9151c1aaa0ba9/160.amr","sizeStr":"495KB","size":507223,"previews":[{"url":"http://d.c-launcher.com/preview/649/538d39349fd9151c1aaa0ba9/desktop_mobile_1401764556408.jpg"},{"url":"http://d.c-launcher.com/preview/649/538d39349fd9151c1aaa0ba9/drawer_mobile_1401764556831.jpg"},{"url":"http://d.c-launcher.com/preview/649/538d39349fd9151c1aaa0ba9/widgets_mobile_1401764557211.jpg"}]}]}}
      var result = data.data || {}
      if (result.code == "100") {
        var themeList = '';
        var length = result.themes.length;
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