<?php

if (isset($_POST['submit'])) {
    $lastName = $_POST['lastName'];
    $FirstName = $_POST['firstName'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = 'info@magyarokausztriaban.at';
    $headers = 'From: ' . $mailFrom;
    $txt = 'You have received an e-mail from ' . $lastName . ".\n\n" . $message;

    mail($mailTo, $FirstName, $txt, $headers);
    header('Location: index.php?mailsend');
}
