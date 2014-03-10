$(function() {
	$(".app-item").delegate(".btn.update", "click", function() {
		var $elem = $(this);
		var url = $elem.attr("data-url");
		// 改变为downloading状态
		callback(url, "downloading");
		// 调用Android代码执行下载
		window.moboDownload.clickToDownload(url);
	});

	$(".wrap").delegate(".exit", "click", function(){
		// 调用Android代码执行退出
		window.moboDownload.exit();
	});
	
});

// 回调函数
function callback(url, data) {
	$elem = $("a[data-url$='" + url + "']");
	if (data == "downloading") {
		$elem.removeClass("update").removeClass("ok")
			.addClass("download")
			.html("Downloading");
	} else if (data == "ok") {
		$elem.removeClass("update").removeClass("download")
			.addClass("ok")
			.html("Ok");
	} else {
		$elem.removeClass("download").removeClass("ok")
			.addClass("ok")
			.html("Download");
	}
}