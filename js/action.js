/*jshint -W117 */
$(function() {

	// Global Status
	var nowPage = 0;
	var pageDeltas = [ 0, 1, 1, 2, 3 ];
	var partHeight = 855;
	var Tween = TweenMax;

	var $body = $("body"),
		$logo = $("#logo"),
		$intro1 = $(".st_0 .intro-text"),
		$appicons = $("#appicons"),
		$phone0 = $("#phone0"),
		$intro2 = $("#intro2"),
		$phone1 = $("#wphone"),
		$functions = $("#functions"),
		$wheatear = $("#wheatear"),
		$polygon = $("#polygon"),
		$wphone = $(".wphone-imgs"),
		$intro3 = $("#intro3"),
		$st2 = $(".st_2"),
		$rolling = $(".rolling-tip");
	var flag = false, // in process
		roN = 0;
	var unLock = function() {
		flag = false;
	};
	Tween.from($logo, 0.5, { "margin-left":"100px", opacity: 1 });

	var rollingTween = Tween.to($rolling, 0.2, { bottom: "2px", yoyo: true, repeat: -1, ease:Power4.easeOut,
		onRepeatParams: [$rolling, "{self}"],
		onRepeat: function($ro, tw) {
			roN = roN + 1;
			if(0 === roN % 6) {
				tw.pause();
				setTimeout(function() {
					tw.play();
				}, 2000);
			}
		}
	});

	window.steps = [
		function step0() {
			Tween.to( $("body"), 1, { marginTop: -(pageDeltas[0] * partHeight), delay: 0.5, ease: Sine.easeOut });
			Tween.to($body, 0.5, { "scrollTop": 0 });
			Tween.to($appicons, 1, { top: "0" });
			Tween.to($intro1, 1, { top: "200px" });
			Tween.to($phone0, 1, { top: "200px", yoyo: true });
			Tween.to($wheatear, 1, { bottom: "-610px", delay: 1, onComplete: unLock });
		},
		function step1() {
			Tween.to( $("body"), 1, { marginTop: -(pageDeltas[1] * partHeight), delay: 0.5, ease: Sine.easeInOut });
			Tween.to($appicons, 1, { top: "-=500px" });
			Tween.to($intro1, 1, { top: "-=500px", delay: 1 });
			Tween.to($phone0, 1, { top: "-=475px", delay: 0.5});
			Tween.to($st2, 1, { opacity: 1, yoyo: true });
			Tween.to($functions, 2, { opacity: 0.8, top: "50%", marginTop: "-260px" });
			Tween.to($intro2, 1, { opacity: 0, yoyo: true, top: "100%", onComplete: unLock });

			Tween.to($wheatear, 1, { opacity: 1, bottom: 0 });
			Tween.to($polygon, 1, { opacity: 0, top:"100%", marginTop: "-210px" });
		},
		function step2() {
			Tween.to( $("body"), 1, { marginTop: -(pageDeltas[2] * partHeight), delay: 0.5, ease: Sine.easeOut });
			Tween.to($st2, 1, { opacity: 0.8, yoyo: true });
			Tween.to($functions, 2, { opacity: 0, yoyo: true, "top": "-200px" });
			Tween.to($phone1, 1, { opacity: 0, yoyo: true, skewX: "0" });
			Tween.to($intro2, 1, { opacity: 1, yoyo: true, top: "145px", delay: 1, onComplete: unLock });

			Tween.to($wheatear, 1, { opacity: 0, bottom: "500px", yoyo: true });
			Tween.to($polygon, 1, { opacity: 1, top: "0%" });
			Tween.to( $(".wphone"), 2, { opacity: 0 });
			Tween.to($intro3, 1, { opacity: 0, top: "100%" });
		},
		function step3() {
			Tween.to( $("body"), 1, { marginTop: -(pageDeltas[3] * partHeight), delay: 0.5, ease: Sine.easeOut });
			Tween.to($phone1, 1, { opacity: 1, yoyo: true, skewX: "-30deg", transformOrigin: "0% 100%" });
			Tween.staggerTo( $(".wphone"), 1.5, { opacity: 1, delay: 0.5 }, 0.5);
			Tween.to($wphone, 2, { top: "20px"});
			Tween.to($polygon, 1, { opacity: 1, top: "0%" });
			Tween.to($intro3, 1, { opacity: 1, top: "420px", delay: 1.5, onComplete: unLock} );
			$rolling.fadeIn();
		},
		function step4() {
			Tween.to( $("body"), 1, { marginTop: -(pageDeltas[4] * partHeight), delay: 1, ease: Sine.easeOut });
			Tween.to( $(".wphone"), 2, { opacity: 0, delay: 1 });
			Tween.to($wphone, 2, { top: "-200%", delay: 0.5 });
			Tween.to($polygon, 2, { opacity: 0, top: "-200%", onComplete: unLock });
			Tween.to($phone1, 1, { opacity: 0, yoyo: true });
			$rolling.fadeOut();
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

	var switchStage = function(n) {
		// Scroll page smoothly
		// $("body").scrollTop(pageDeltas[nowPage] * partHeight);
//		TweenLite.to( $("body"), 1, { scrollTop: pageDeltas[nowPage] * partHeight, delay: 0.1 });
//		TweenLite.to( $("body"), 1, { marginTop: -(pageDeltas[n] * partHeight), delay: 0.5, ease: Sine.easeOut });
//		TweenLite.to( $("body"), 1, { scrollTo: { y: pageDeltas[nowPage] * partHeight }, delay: 0.1 });

		//TODO: calculate the path to n-stage
		if(steps[n]) {
			steps[n]();
		}
	};



	// Trigger by mousewheel
	$("body").mousewheel(function(event, delta) {
		if(flag) {
			return false;
		}
		flag = true;
		// Ensure step only one
		nowPage -= delta > 0 ? 1 : -1;

		// Ensure range 0-3
		nowPage = nowPage < 0 ? 0 : nowPage;
		nowPage = nowPage > 4 ? 4 : nowPage;

		switchStage(nowPage);

		return false;
	});

	$("a.rolling-tip").click(function() {
		$("body").trigger("mousewheel");
		return false;
	}).mouseenter(function() {
		rollingTween.pause();
	}).mouseleave(function() {
		rollingTween.play();
	});

});

