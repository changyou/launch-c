$(function() {
	var count = [0, 0, 0, 0, 0], data = '';
	$(".app-item").delegate(".btn", "mousedown", function() {
		var $elem = $(this);
		count[$elem.parent().index()]++;
		// 执行callback
		if (count[$elem.parent().index()] % 2) {
			data = "start";
		} else {
			data = "stop";
		}
		callback($elem, data);
	});

	$(".wrap").delegate(".exit", "click", function(){
		// 退出前清除count值并恢复初始状态
		count = [0, 0, 0, 0, 0];
		$(".btn").removeClass("download stop")
				.html("Download");
		// 调用Android代码执行退出
		window.moboDownload.exit();
	});
});

// 回调函数
function callback($elem, data) {

	if (data == "start") {	//传入参数'start'下载开始
		$elem.removeClass("stop")
			.addClass("download")
			.html("Downloading");

		// url改为data-url + 渠道号形式
		var url = $elem.attr("data-url") + '23009';
		// 调用Android代码执行下载
		window.moboDownload.clickToDownload(url);
	} else if (data == "stop") {	//传入参数'stop'下载停止
		$elem.removeClass("download")
			.addClass("stop")
			.html("Stop");

		// 调用Android代码暂停下载
		// todo stop
	} else {	//无参数调用返回初始状态
		$elem.removeClass("download stop")
			.html("Download");
	}
}