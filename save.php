<?php
  session_start();
  include('config.php');
  $editor = mysqli_real_escape_string($db, trim($_POST['data']));
  $id = mysqli_real_escape_string($db, trim($_POST['id']));
  $query = "UPDATE content SET html = '".$editor."' WHERE id = '".$id."'";
  mysqli_query($db, $query);
?>
