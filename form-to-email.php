<? php
if(!isset($_POST['submit']))
{
	echo "error; you need to submit the form";
}
//Collect
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate
if(empty($name)||empty($visitor_email))
{
	echo "Name and email are mandatory!";
	exit;
}

$email_from = 'adam.waniczek@gmail.com';
$email_subject = "New Form subbmition";
$email_body = "You have received a new message from the user $name.\n".
	"email address: $visitor_email\n".
	"Here is the message:\n $message";
	
$to = "adam.waniczek@gmail.com";
$headers = "From: $email_from\r\n";

//Send email
mail($to,$email_subject,$email_body,$headers);
?>