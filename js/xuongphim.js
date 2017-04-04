
function buildTooltip(){
  $('.jt').cluetip({
    cluetipClass: 'jtip',
    attribute:    'data-jtip',
    local:true,
    arrows: true,
    dropShadow: true,
    hoverIntent: true,
    sticky: true,
    topOffset : 10,
    mouseOutClose:  'both',
    delayedClose:  100,
    cluezIndex:   499,
    width:    280,
    arrowPixelAdded: 185,
    closePosition: 'title'
   });
}
function buildScroll(){
	$('#scrollcensored .showMovie').carouFredSel({
		auto: false,
		responsive: true,
		width: '100%',
		prev: '#censored-prev',
		next: '#censored-next',
		/*scroll: 5,*/
		items: {width: 220,visible: {min: 4,max: 8}
		}
	});
	$('#scrolluncensored .showMovie').carouFredSel({
		auto: false,
		responsive: true,
		width: '100%',
		prev: '#uncensored-prev',
		next: '#uncensored-next',
		/*scroll: 5,*/
		items: {width: 220,visible: {min: 4,max: 8}
		}
	});
	$('#scrollPhimTopXP .showMovie').carouFredSel({
		auto:!1,responsive:!0,
		width: '100%',
		prev: '#tophdo-prev',
		next: '#tophdo-next',
		/*scroll: 5,*/
		items: {width: 220,visible: {min: 4,max: 8}
		}
	});
	$('#scrollPhimRecommend .showMovie').carouFredSel({
		auto: true,
		responsive: true,
		width: '100%',
		prev: '#recommend-prev',
		next: '#recommend-next',
		scroll: 3,
		items: {width: 220,visible: {min: 4,max: 8}
		}
	});
	$('#scrollPhimHotHome .showMovie').carouFredSel({
		auto: true,
		responsive: true,
		width: '100%',
		prev: '#hothome-prev',
		next: '#hothome-next',
		scroll: 3,
		items: {width: 220,visible: {min: 4,max: 8}
		}
	});
	$('#scrollPhimRap .showMovie').carouFredSel({
		auto: false,
		responsive: true,
		width: '100%',
		prev: '#phimrap-prev',
		next: '#phimrap-next',
		scroll: 3,
		items: {width: 220,visible: {min: 4,max: 8}
		}
	});	
}





jQuery(document).ready(function($) {
var oldScrollTop = 0;
$(window).on("scroll", function(){
	if ($(window).scrollTop() < oldScrollTop){
		if ($("header.tn-header-full").css("position") != "fixed"){
    		$("header.tn-header-full").css({
    			position: "fixed",
    			top: - $("header.tn-header-full").outerHeight(),
    			backgroundColor : "#fff"
    		});
    		$("header.tn-header-full").animate({top: "0px"}, 500);
    		$(".tn-main-full").css("margin-top", $("header.tn-header-full").outerHeight());
		}
	} else {
		$("header.tn-header-full").css({
			position: "relative",
			top: "0px"
		});
		$(".tn-main-full").css("margin-top", "0px");
	}
	oldScrollTop = $(window).scrollTop();
});
});