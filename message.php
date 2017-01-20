<?php
  session_start();

  include('config.php');

  $sender  = mysqli_real_escape_string($db, $_POST['sender']);
  $message = mysqli_real_escape_string($db, $_POST['message']);
  $phone   = mysqli_real_escape_string($db, $_POST['phone']);
  $email   = mysqli_real_escape_string($db, $_POST['email']);

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

  header('Location: http://www.adambarsk.se/?page=info')
?>
