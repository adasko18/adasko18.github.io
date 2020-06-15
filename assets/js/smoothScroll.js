$(function () {
		$("#to-top").click(function () {
			$('html, body').animate({
				scrollTop: $("#top").offset().top
                }, 2000);
				return false;
		});
	});
$(function () {
		$("#defaultOpen").click(function () {
			$('html, body').animate({
				scrollTop: $("#About").offset().top
                }, 2000);
				return false;
		});
	});
	$(function () {
		$("#scrollToProject").click(function () {
			$('html, body').animate({
				scrollTop: $("#Projects").offset().top
                }, 2000);
				return false;
		});
	});
	$(function () {
		$("#scrollToContact").click(function () {
			$('html, body').animate({
				scrollTop: $("#Contact").offset().top
                }, 2000);
				return false;
		});
	});