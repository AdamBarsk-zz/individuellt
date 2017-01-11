<?php session_start(); ?>
<!DOCTYPE html>
<html>
<body>


  <?php
    include("config.php");
    echo "<h1>Logga in</h1>
      <form action='' method='post'>
        <label for='username'>Användarnamn:</label>
        <input type='text' name='username' />

      	<label for='password'>Lösenord:</label>
      	<input type='password' name='password' />

        <input type='submit' value='Logga in' />
      </form>";

    if (isset ($_POST['username'], $_POST['password'])){

      $username = $_POST['username'];
      $password = $_POST['password'];
      $query = "SELECT username, password FROM user WHERE username = '".$username."' AND password = '".$password."'";

      $result = mysqli_query($db, $query);

      if(mysqli_num_rows($result) > 0){
        header('Location: http://adambarsk.se');
      } else {
        echo "<h3>Wrong username and/or password!</h3>";
      }
    }
  ?>

</body>
</html>
