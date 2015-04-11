//this is a simple script to blur the nav bar button after it is clicked.
$(document).ready(function() {
	$('.navbar-toggle').click(function(event) {
		this.blur();
	});
});