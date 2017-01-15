<?php
  session_start();
  include('config.php');
  $sender = $_POST['sender'];
  $message = $_POST['message'];
  $phone = $_POST['phone'];
  $email =$_POST['email'];
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
  header('Location: http://adambarsk.se/?page=info.php')
?>
