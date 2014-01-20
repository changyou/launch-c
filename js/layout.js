$(document).ready(function() {
	//首页背景轮播
	$('.topPic')
		.cycle({
			fx:                'fade',
			activePagerClass:  'crt',
			speed:             500,
			timeout:           4000,
			pause:             1,
			pager:			   '.btnHandle',
			pagerEvent:        'click',
			pauseOnPagerHover: 1,
			cleartypeNoBg:   	true,
			pagerAnchorBuilder: function (idx, slide) {
				return $('.btnHandle a').eq(idx);
			},
			after: function (currSlideElement, nextSlideElement, options, forwardFlag) {
				var idx = $('.btnHandle a.crt').index();
				if( idx < 0 ){
					idx = 0;
				}
				$('.mainTopBgLink').fadeOut();
				$('.mainTopBgLink:eq(' + idx + ')').fadeIn();
			}
   		});
});