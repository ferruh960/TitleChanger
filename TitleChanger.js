$(function() {
	// var sayılan titli alıyoruz.
  	var pageTitle = $("title").text();

	// başka taba geçişta, titlede göstermek istediğimiz txt i yazıyoruz.
	$(window).blur(function() {
	  $("title").text("We add value to your values !");
	});

	// website açıldığındaki default title..
	$(window).focus(function() {
	  $("title").text(pageTitle);
	});
});