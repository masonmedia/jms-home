//navbar auto collapse on click
//from: https://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
//samuel de backer / 55
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $('.navbar-toggle').trigger( "click" );
        }
    });
});

//Change navbar color on scroll

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


//smooth scroll

$(document).ready(function () {
	// Add smooth scrolling to all links in navbar + footer link
	$(".navbar a, .contact a, div a, footer a[href='#myPage']").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {

			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				//      window.location.hash = hash;
			});
		} // End if
	});
})

// baguette box lightbox

$(document).ready(function () {
	baguetteBox.run('.gallery');
});

//img defer load

function init() {
	var imgDefer = document.getElementsByTagName('img');
	for (var i = 0; i < imgDefer.length; i++) {
		if (imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
		}
	}
}
window.onload = init;
