<!DOCTYPE html5>
<html>
  <head>
    <title>About</title>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="styles/style.css"/>
    <link link="link" href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,700,700i" rel="stylesheet"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/45faac0910.css"/>
    <script src="//platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  </head>
  <body>
    <div id="fb-root"></div>
    <script>
      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v2.8";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    </script>
    <div class="container">
      <header>
        <div class="row">
          <nav class="col-full-nav nav">
            <ul>
              <li><a href="index.html" class="nav-wide">Home </a><a href="index.html" class="nav-mobile"><i class="fa fa-home nav-icons"> </i></a></li>
              <li><a href="info.html" class="nav-wide">About</a><a href="info.html" class="nav-mobile"><i class="fa fa-user nav-icons"></i></a></li>
              <li><a href="cv.html" class="nav-wide">Credentials</a><a href="cv.html" class="nav-mobile"><i class="fa fa-university nav-icons"></i></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <?php
        include(".admin/config.php");
        $query = "SELECT * FROM content";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_array($result);
        $name = $row['html'];
        echo $name;
      ?>

      <main>
        <div class="row row-grey">
          <content class="col-left"> <i class="fa fa-quote-right fa-5x cred-icons"></i></content>
          <article class="col-right">
            <h1 class="headline">Famous qoute</h1>
            <p class="main-content">Let's ride a bicycle made out of dreams into friendship. </p>
          </article>
        </div>
      </main>
      <main>
        <div class="row row-white">
          <content class="col-left"> <i class="fa fa-share-alt fa-5x cred-icons"></i></content>
          <article class="col-right trans">
            <h1 class="headline">Share my site</h1>
            <div class="hide">
              <div data-href="https://www.adambarsk.se" data-layout="button" data-size="small" data-mobile-iframe="true" class="fb-share-button"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.adambarsk.se%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
              <script type="IN/Share" data-url="http://www.adambarsk.se"></script>
              <div data-size="medium" data-annotation="none" data-href="http://www.adambarsk.se" class="g-plusone"></div>
            </div><i class="fa fa-chevron-down expand"></i>
          </article>
        </div>
      </main>
      <footer class="footer">
        <div class="row">
          <div class="col-full-footer">
            <h1> <a href="mailto:adambarsk@gmail.com" class="footer-wide">Adambarsk@gmail.com</a><a href="mailto:adambarsk@gmail.com" class="footer-mobile"><i class="fa fa-envelope"></i></a></h1>
          </div>
        </div>
        <div class="row">
          <div class="col-full-footer">
            <ul>
              <li><a href="https://www.facebook.com/iBarsk" target="_blank" class="footer-wide">Facebook</a><a href="https://www.facebook.com/iBarsk" target="_blank" class="footer-mobile"><i class="fa fa-facebook-square nav-icons"></i></a></li>
              <li><a href="https://www.linkedin.com/in/adam-ahlnander-barsk-993846121?trk=nav_responsive_tab_profile" target="_blank" class="footer-wide">LinkedIN</a><a href="https://www.linkedin.com/in/adam-ahlnander-barsk-993846121?trk=nav_responsive_tab_profile" target="_blank" class="footer-mobile"><i class="fa fa-linkedin-square nav-icons"></i></a></li>
              <li><a href="https://github.com/AdamBarsk" target="_blank" class="footer-wide">Github</a><a href="https://github.com/AdamBarsk" target="_blank" class="footer-mobile"><i class="fa fa-github-square nav-icons"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    <script src="scripts/expand.js"></script>
    <script src="https://apis.google.com/js/platform.js" async="" defer=""></script>
  </body>
</html>
