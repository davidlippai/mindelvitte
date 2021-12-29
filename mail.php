
<?php
//get data from form
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'info@magyarokausztriaban.at';

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
