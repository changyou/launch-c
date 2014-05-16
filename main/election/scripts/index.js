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
    img.src = img.dataset.src;
    if(img.complete || img.binded){ continue; }
    img.style.opacity = '0';
    img.style.transition = 'opacity .5s';
    onload(img);
  }
};
function loaded () {
  loadimg('.thum');
  var myScroll = new IScroll('#slider');
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
