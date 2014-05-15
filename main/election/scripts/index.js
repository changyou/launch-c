function onload(img){
  img.binded = true;
  img.onload = function(){
    this.style.opacity = '1';
  };
}

/**
 * selector [string]
 */
function loadimg(s){
  var imglist = document.querySelectorAll(s),img;

  for (var i = 0, len = imglist.length; i < len; i++) {
    img = imglist[i];
    if(img.complete || img.binded){ continue; }
    img.style.opacity = '0';
    img.style.transition = 'opacity .5s';
    onload(img);
  }
};
document.onload = function(){
  loadimg('.thum');
}
