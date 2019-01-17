$(document).ready( function () {

	// nice scroll
	$('body').niceScroll({
		cursorcolor:"#e7512f",
		cursorborder:"1px solid #e7512f",
		zindex:99999,
		cursorborderradius:0,
		cursorwidth:8,
		autohidemode:true
	});

	$('.carousel').carousel({
		interval:3000
	});

	// show/hide color option box
	$(".gear-check").click( function () {

		$('.option-box').toggleClass('visible');

		if($('.option-box').hasClass('visible')) {

			$(".option-box").animate({
				left : 0
			}, 500);
		} else {
			$(".option-box").animate({
				left : '-200px'
			}, 500);
		}
	});

	// change theme color 
	var colorLi = $(".color-option ul li");

	colorLi.eq(0).css("backgroundColor","#ce0000").end()
			.eq(1).css("backgroundColor","#72ce00").end()
			.eq(2).css("backgroundColor","#0773a5").end()
			.eq(3).css("backgroundColor","#e35c07");
	
	colorLi.click(function () {
		$("link[href*='theme']").attr("href" , $(this).attr("data-value") );
	});


	// Scroll to top button
	var scrollButton = $(".scroll-top");

	// show/hide scroll top button
	($(this).scrollTop() >= 700) ? scrollButton.show() : scrollButton.hide();

	$(window).scroll(function () {
		
		if( $(this).scrollTop() >= 700 ){

			scrollButton.show();

		}else{

			scrollButton.hide();
		}
	});
	
	// on click scroll to top
	scrollButton.click(function () {
		$("html,body").animate({ scrollTop : 0 } , 1000);
	});

});


// Loading page with spinner
$(window).on("load", function () {
	
	$(".loading-overlay .spinner").fadeOut(1000, function () {

		$(this).parent().fadeOut(1000, function () {

			$(this).remove();
		});
	});
});
