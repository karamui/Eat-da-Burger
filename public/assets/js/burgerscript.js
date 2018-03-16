// once everything is fully loaded...
$(function() {
	// upon clicking the submit button...
	$("#submit").on("click", function() {
		// prevents default event upon submission
		event.preventDefault();

		// grabs user input
		var burgerName = $("#name").val().trim();
		console.log(burgerName);

		if (burgerName == "") {
			// if the user does not enter a name, display error message
			alert("You need to tell us what you'd like to order!");
		} else {
			$.ajax("/api/burgers", {
	      		type: "POST",
	      		data: {
	      			burgerName: burgerName
	      		}
	    	}).then(function(response) {
	        	// reload the page to display new burger
	        	location.reload();
	      	});
		}
	});

	// eating a burger
	$(".eaticon").on("click", function() {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: {
      			devoured: true
      		}
    	}).then(function() {
       		// reload the page to display changes
	        location.reload();
      	});
	});

	// ordering another burger
	$(".waitericon").on("click", function() {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: {
      			devoured: false
      		}
    	}).then(function() {
       		// reload the page to display changes
	        location.reload();
      	});
	});
});