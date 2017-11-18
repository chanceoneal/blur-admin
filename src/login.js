$(function() {
	$('#signin').click(function() {
		// Check if all required fields are filled
		if (!$('#inputEmail3').val() || !$('#inputPassword3').val()) {
			alert("Username and password must be filled out.");
		} else {
			debugger;
			if ($('#inputEmail3').val() == "test@test.com" && $('#inputPassword3').val() == "test") {
				alert("Valid input.");
			} else {
				alert("Invalid input.");
			}

		}
		// Check if username exists
	})
});