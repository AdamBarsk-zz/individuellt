<?php session_start(); ?>
<!DOCTYPE html>
<?php include_once('head.php'); ?>
<html>
  <body>
    <?php
    include_once('login.php');
    include_once('nav.php');
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
        include_once($page);
      } else {
        include_once('main.php');
      }

    include_once('footer.php');
    include_once('hangman.php');
    ?>
  </body>
</html>
