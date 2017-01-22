<?php session_start(); ?>
<!DOCTYPE html>
<?php include('head.php'); ?>
<html>
  <body>
    <?php
    include('nav.php');
      if(isset($_GET['page'])){
        switch ($_GET['page']) {
          case 'main':
            $page = "main.php";
            break;

          case 'info':
            $page = "info.php";
            break;

          case 'cv':
            $page = "cv.php";
            break;

          case 'portfolio':
            $page = "portfolio.php";
            break;

          default:
            $page = "main.php";
            break;
        }
        include($page);
      } else {
        include('main.php');
      }
    include('login.php');
    include('hangman.php');
    include('footer.php');
    ?>
  </body>
</html>
