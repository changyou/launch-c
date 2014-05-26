var config = {
  "apkName": ["BJP-political-party.apk",
    // "Congress-Party.apk",
    "BJP.apk",
    // "Congress-Rahul-Gandh.apk",
    // "BJP-Narendra-Modi.apk",
    // "CPIM-Political-Party.apk",
    // "TMC-Mamta-Bannerjee.apk",
    // "SP-Samajwadi-Party.apk",
    "BJP-Modi-Sarkar.apk"
  ],
  "baseUrl": "http://d.c-launcher.com/apk/0516/37003/",
  "channel": "facebook ad"
};

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

function handleDownload(){
  var downloadLinks = document.querySelectorAll(".j-download");
  for (var i = 0, len = downloadLinks.length; i < len; i++) {
    var num = i+1;
    link = downloadLinks[i];
    link.href=config.baseUrl+config.apkName[i];
    link.onclick = function(){
      _czc.push(﻿["_trackEvent","electionDownload at"+config.channel,"click","theme"+num,1]);
      return true;
    }
  }
}

function loaded () {
  handleDownload();
  loadimg('.thum');
  document.getElementById("youtube").innerHTML = '<iframe width="480" height="270" src="//www.youtube.com/embed/Ic4TprJ-3KM" frameborder="0" allowfullscreen></iframe>';
}

