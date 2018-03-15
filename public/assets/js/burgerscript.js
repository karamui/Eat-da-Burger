// once everything is fully loaded...
$(function() {
	// upon clicking the submit button...
	$("#submit").on("click", function() {
		// prevents default event upon submission
		event.preventDefault();

		// grabs user input
		var burgerName = $("#name").val().trim();

		if (burgerName == "") {
			// if the user does not enter a name, display error message
			alert("You need to tell us what you'd like to order!");
		} else {
			$.ajax("/api/burgers", {
	      		type: "POST"
	    	}).then(function(response) {
	        	// reload the page to display new burger
	        	location.reload();
	      	});
		}
	});
});