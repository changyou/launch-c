/*jshint -W117 */
$(function() {
	
	// Global Status
	var nowPage = 0;
	var pageDeltas = [ 0, 1, 1, 2, 3 ];
	var partHeight = 855;
	var Tween = TweenMax;
	
	var $body = $("body"),
		$logo = $("#logo"),
		$phone0 = $("#phone0"),
		$appicons = $("#appicons"),
		$intro2 = $("#intro2"),
		$phone1 = $("#wphone"),
		$functions = $("#functions"),
		$wheatear = $("#wheatear"),
		$polygon = $("#polygon"),
		$st2 = $(".st_2");

	Tween.from($logo, 0.5, { "margin-left":"100px", opacity: 1 });
	window.steps = [
		function step0() {
			Tween.to($body, 0.5, { "scrollTop": 0 });
			Tween.to($appicons, 1, { top: "0" });
			Tween.to($phone0, 1, { opacity: 1, top: "200px", yoyo: true });
		},
		function step1() {
			Tween.to($appicons, 0.2, { top: "-500px" });
			Tween.to($phone0, 2, { opacity: 0, top: -partHeight + "px"});
			Tween.to($st2, 1, { opacity: 1, yoyo: true });
			Tween.to($functions, 2, { opacity: 0.8, top: "50%", "margin-top": "-320px" });
			Tween.to($intro2, 1, { opacity: 0, yoyo: true, top: "100%" });
			
			Tween.to($wheatear, 1, { opacity: 1, bottom: 0 });
			Tween.to($polygon, 1, { opacity: 0, top:"100%", "margin-top": "-250px" });
		},
		function step2() {
			Tween.to($st2, 1, { opacity: 0.8, yoyo: true });
			Tween.to($functions, 2, { opacity: 0, yoyo: true, "top": "-200px" });
			Tween.to($phone1, 1, { opacity: 0, yoyo: true, skewX: "0" });
			Tween.to($intro2, 1, { opacity: 1, yoyo: true, top: "200px" });
			
			Tween.to($wheatear, 1, { opacity: 0, bottom: "500px", yoyo: true });
			Tween.to($polygon, 1, { opacity: 1, top: "0%" });
			Tween.to( $(".wphone"), 2, { opacity: 0 });
		},
		function step3() {
			Tween.to($phone1, 1, { opacity: 1, yoyo: true, skewX: "-30deg", transformOrigin: "0% 100%" });
			Tween.staggerTo( $(".wphone"), 2, { opacity: 1 }, 0.5);
			Tween.to($polygon, 1, { opacity: 1, top: "0%" });
		},
		function step4() {
			Tween.to( $(".wphone"), 2, { opacity: 0 });
			Tween.to($polygon, 1, { opacity: 0, top: "-200%" });
			Tween.to($phone1, 1, { opacity: 0, yoyo: true });
		}
	];
	
	var initPageHeight = function() {
		partHeight = document.documentElement.clientHeight - 37;
		// Min height 855px each page
		partHeight = partHeight < 855 ? 855 : partHeight;
		// Adjust by screen height
		$(".bg").height(partHeight);
		// Reset step
		steps[0]();
	};
	initPageHeight();
	window.onresize = initPageHeight;
	
	
	// TODO: Bind arrow keys
	
	var switchStage = function(n) {
		//TODO: calculate the path to n-stage
		if(steps[n]) {
			steps[n]();
		}
	};
	
	// Trigger by mousewheel
	$("body").mousewheel(function(event, delta) {
		
		// Ensure step only one
		nowPage -= delta > 0 ? 1 : -1;
		
		// Ensure range 0-3
		nowPage = nowPage < 0 ? 0 : nowPage;
		nowPage = nowPage > 4 ? 4 : nowPage;
		
		// Scroll page smoothly
		// $("body").scrollTop(pageDeltas[nowPage] * partHeight);
		TweenLite.to( $("body"), 1, { scrollTop: pageDeltas[nowPage] * partHeight, delay: 0.1 });
		switchStage(nowPage);
		
		return false;
	});
	
	
});

