<?php
$isLocal = ($_SERVER['SERVER_NAME'] === 'localhost');

// PHPMailer includes
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();

    if ($isLocal) {
        $mail->Host       = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'a44a45e7e15bec';
        $mail->Password   = 'c3a17f0ca92e75';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 2525;
    } else {
       $mail->Host       = 'smtpout.secureserver.net';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'programinghub733@gmail.com';
        $mail->Password   = '@dishu)(';
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
    }

    // Form data with safety
    $name    = $_POST['name']    ?? '';
    $email   = $_POST['email']   ?? '';
    $phone   = $_POST['phone']   ?? '';
     $subject   = $_POST['subject']   ?? '';
    $message = $_POST['message'] ?? '';
    $service = $_POST['selectservice'] ?? 'Not specified';


    // Validate
    if (!$name || !$email || !$phone) {
        die("Please fill in all required fields.");
    }

    // Sender details
    $mail->setFrom($email, $name);
    $mail->addAddress('programinghub733@gmail.com'); // Replace with your receiving email

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'Contact Form Message';
    $mail->Body    = "
        <strong>Name:</strong> {$name}<br>
        <strong>Email:</strong> {$email}<br>
        <strong>Phone:</strong> {$phone}<br>
        <strong>subject:</strong> {$subject}<br>
        <strong>Message:</strong><br>{$message}
    ";

    $mail->send();
// ✅ Redirect back to contact page with success flag
    header("Location: contact.php?success=1");
    exit;

} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
?>
