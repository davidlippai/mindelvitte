
<?php
//get data from form
$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'lippai28@gmail.com';

$subject = 'Árajánlat';
$txt =
    'Name = ' .
    $lastName .
    "\r\n  Email = " .
    $email .
    "\r\n Message =" .
    $message;
$headers =
    'From: noreply@yoursite.com' . "\r\n" . 'CC: somebodyelse@example.com';
if ($email != null) {
    mail($to, $subject, $txt, $headers);
}
//redirect
header('Location:thankyou.html');


?>
