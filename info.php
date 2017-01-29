<?php

$phoneErr = $_SESSION['phoneError'];
$emailErr = $_SESSION['emailError'];
$senderErr = $_SESSION['senderError'];
$conf = $_SESSION['confirmation'];

echo '
<div id="fb-root"></div>
  <script>
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, \'script\', \'facebook-jssdk\'));
  </script>
  <script src="//platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>

    <main>
      <div class="row row-grey">
        <content class="col-left"> <i class="fa fa-quote-right fa-5x cred-icons"></i></content>
        <article class="col-right">
          <h1 class="headline admin" id="info-headline">'.$infoHeadline.'</h1>
          <p class="main-content admin" id="info-p">'.$infoP.'</p>
        </article>
      </div>
    </main>
    <main>
      <div class="row row-white">
        <content class="col-left"> <i class="fa fa-paper-plane fa-5x cred-icons"></i></content>
        <article class="col-right trans">
          <h1 class="headline">Message me</h1>

          <form action="message.php" method="post">
            <div class="container-inputs">
              <label><b>Name</b></label>
              <input type="text" placeholder="Your name" name="sender" class="admin-inputs" required>
              <p class="error">'.$senderErr.'</p>
              <label><b>Message</b></label>
              <textarea type="text" placeholder="Your message" name="message" class="admin-inputs" required></textarea>
              <label><b>Phone</b></label>
              <input type="text" placeholder="Your phone" name="phone" class="admin-inputs" required>
              <p class="error">'.$phoneErr.'</p>
              <label><b>Email</b></label>
              <input type="text" placeholder="Your email" name="email" class="admin-inputs" required>
              <p class="error">'.$emailErr.'</p>

              <button type="submit" class="login-button"><b>Send message</b></button>
              <p class="confirmation">'.$conf.'</p>
            </div>
          </form>

        </article>
      </div>
    </main>
    <main>
      <div class="row row-grey">
        <content class="col-left"> <i class="fa fa-television fa-5x cred-icons"></i></content>
        <article class="col-right">
          <iframe id="video" width="450" height="250" src="//www.youtube.com/embed/Yipwf4Cp4vQ?rel=0" frameborder="0" allowfullscreen></iframe>
        </article>
      </div>
    </main>
    <main>
      <div class="row row-white">
        <content class="col-left"> <i class="fa fa-share-alt fa-5x cred-icons"></i></content>
        <article class="col-right trans">
          <h1 class="headline">Share my site</h1>
          <div class="hide showText">
            <div data-href="https://www.adambarsk.se" data-layout="button" data-size="small" data-mobile-iframe="true" class="fb-share-button"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.adambarsk.se%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
            <script type="IN/Share" data-url="http://www.adambarsk.se"></script>
            <div data-size="medium" data-annotation="none" data-href="http://www.adambarsk.se" class="g-plusone"></div>
          </div><i class="fa fa-chevron-down expand"></i>
        </article>
      </div>
    </main>

  <script src="scripts/expand.js"></script>
  <script src="https://apis.google.com/js/platform.js" async="" defer=""></script>';

  session_destroy();
?>
