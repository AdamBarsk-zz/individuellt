<?php
include('body.php');
include('config.php');
include('head.php');
include('nav.php');
  if(isset($_GET['page']) && $_GET['page']!=""){
    $page = "";
    switch ($_GET['page']) {
      case 'main.php':
        $page = "main.php";
        break;

      case 'info.php':
        $page = "info.php";
        break;

      case 'cv.php':
        $page = "cv.php";
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
include('footer.php');
?>
