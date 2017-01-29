<?php
session_start();

include('config.php');

$error = FALSE;

$senderError = "";
$emailError = "";
$phoneError = "";
$conf = "";

$sender  = mysqli_real_escape_string($db, $_POST['sender']);
$message = mysqli_real_escape_string($db, $_POST['message']);
$phone   = mysqli_real_escape_string($db, $_POST['phone']);
$email   = mysqli_real_escape_string($db, $_POST['email']);

function cleanMachine($inputData) {
$inputData = trim($inputData);
$inputData = stripslashes($inputData);
$inputData = htmlspecialchars($inputData);
return $inputData;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST['sender'])) {
    $senderError = 'Name is required.';
    $_SESSION['senderError'] = $senderError;
    $error = TRUE;
  } else {
    $sender = cleanMachine($_POST["sender"]);
      if (!preg_match('/^[a-zA-Z ]*$/',$sender)) {
        $senderError = 'Only letters allowed.';
        $_SESSION['senderError'] = $senderError;
        $error = TRUE;
        }
  }
  if (empty($_POST["email"])) {
    $emailError = 'Email is required';
    $_SESSION['emailError'] = $emailError;
    $error = TRUE;
  } else {
    $email = cleanMachine($_POST["email"]);
      if (!preg_match('/([\w\-]+\@[\w\-]+\.[\w\-]+)/',$email)) {
        $emailError = 'Invalid email.';
        $_SESSION['emailError'] = $emailError;
        $error = TRUE;
        }
  }
  if (empty($_POST['phone'])) {
    $phoneError = 'Number is required.';
    $_SESSION['phoneError'] = $phoneError;
    $error = TRUE;
  } else {
    $phone = cleanMachine($_POST["phone"]);
      if (!preg_match('/^(\+?)+([0-9]{10,})$/',$phone)) {
        $phoneError = 'Invalid number.';
        $_SESSION['phoneError'] = $phoneError;
        $error = TRUE;
        }
  }
  if (!$error) {
    $query = "
      INSERT INTO messages (
      date,
      sender,
      message,
      phone,
      email
      )
      VALUES (
      NOW(),
      '$sender',
      '$message',
      '$phone',
      '$email'
      )";

    mysqli_query($db, $query);

    $conf = 'Thank you for your message.';
    $_SESSION['confirmation'] = $conf;

    // Mail to me
    $to = 'adambarsk@gmail.com';
    $from = $sender;
    $theMessage = "$message \r\rPhone: $phone \rEmail: $email";
    $headers = "From: $email";

    mail($to, $from, $theMessage, $headers);
  }
}

header('Location: http://www.adambarsk.se/?page=info');
?>
