	function regex(email) {
		const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);
	}
	
	function validation() {
		const $error = $("#result");
		const email = $("#email").val();
		$error.text("");
		
		if(!regex(email)) {
		$error.text(email + " is valid!");
		$error.css("color","red");
		}
		return false;
	}
	
	$("$error").on("click", validate);