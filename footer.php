<?php

if (isset($_SESSION['admin'])) {
echo '<script src="/scripts/change.js" type="text/javascript"></script>';
echo '<footer class="footer">
    <div class="row">
      <div class="col-full-footer">
        <h1> <a href="logout.php" class="footer-wide">Logout</a><a href="logout.php" class="footer-mobile"><i class="fa fa-sign-out"></i></a></h1>
      </div>
    </div>';
} else {
  echo '<footer class="footer">
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
  </div>';
}

?>
