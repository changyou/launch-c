/*jshint -W117 */
$(function() {
	
	// Global Status
	var nowPage = 0; // [ 0, 1, 2, 3 ]
	var partHeight = 855; 
	
	
	var initPageHeight = function() {
		partHeight = document.documentElement.clientHeight - 37;
		// Min height 855px each page
		partHeight = partHeight < 855 ? 855 : partHeight;
	};
	initPageHeight();
	window.onresize = initPageHeight;
	
	
	var scrollPage = null;
	
	// Logo slip left at start
	TweenLite.to($("#logo"), 0.5, { "margin-left":"0", opacity: 1 });

	// TODO: Adjust by screen height
	$(".bg").height(partHeight);
	
	// TODO: Bind arrow keys
	
	// Trigger by mousewheel
	$("body").mousewheel(function(event, delta, deltaX, deltaY) {
		
		// Ensure step only one
		nowPage -= delta > 0 ? 1 : -1;
		
		// Ensure range 0-3
		nowPage = nowPage < 0 ? 0 : nowPage;
		nowPage = nowPage > 3 ? 3 : nowPage;
		
		// Log
		console.log(delta, deltaY, nowPage);
		
		scrollPage();
		return false;
	});
	
	scrollPage = function() {
		//TODO: Scroll Page
		$("body").scrollTop(nowPage * partHeight);
		
	};
	
	
});

