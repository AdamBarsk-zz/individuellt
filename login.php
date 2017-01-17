<?php
echo '
<div id="modal" class="modal">
  <form class="modal-content" action="" method="post">
    <div class="container-inputs">
      <label><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" class="admin-inputs" required autofocus>

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" class="admin-inputs" required>

      <button type="submit" class="login-button"><b>Login</b></button>
    </div>
  </form>
</div>';

if (isset ($_POST['username'], $_POST['password'])){

  $username = mysqli_real_escape_string($db, $_POST['username']);
  $password = mysqli_real_escape_string($db, $_POST['password']);
  $hash = password_hash($password, PASSWORD_DEFAULT, ['cost' => 12]);
  $query = "SELECT username, password FROM user WHERE username = '".$username."' AND password = '".$password."'";

  $result = mysqli_query($db, $query);

  if(mysqli_num_rows($result) > 0){
    $row = mysqli_fetch_assoc($result);
    if (password_verify($row['password'], $hash)) {
      $_SESSION['admin'] = TRUE;
      header('Location: http://adambarsk.se');
      exit();
    }
  } else {
    echo '
    <script type="text/javascript">admin();</script>
    ';
    exit();
  }
}
?>
