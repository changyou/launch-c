/*jshint -W117 */
$(function() {
	
	// Global Status
	var nowPage = 0; // [ 0, 1, 2, 3 ]
	var partHeight = document.documentElement.clientHeight - 37;
	
	var scrollPage = null;
	
	// Logo slip left at start
	TweenLite.to($("#logo"), 1, { "margin-left":"0", opacity: 1 });

	// TODO: Adjust by screen height
	$(".bg").height(partHeight);
	
	// TODO: Bind Arrow keys
	
	// Trigger by mousewheel
	$("body").mousewheel(function(event, delta, deltaX, deltaY) {
		
		// Ensure step only one
		nowPage -= delta > 0 ? 1 : -1;
		
		// Range 0-3 ensurance
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

