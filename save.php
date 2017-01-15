<?php
  session_start();
  include('config.php');
  $editor = trim($_POST['data']);
  $id = trim($_POST['id']);
  $query = "UPDATE content SET html = '".$editor."' WHERE id = '".$id."'";
  mysqli_query($db, $query);
?>
