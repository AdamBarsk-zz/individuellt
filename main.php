<?php
echo '
<main>
  <div class="row row-grey">
    <content class="col-left"> <img src="/images/profile.jpg" class="profile"/></content>
    <article class="col-right">
      <h1 class="headline admin" id="main-headline">'.$mainHeadline.'</h1>
      <p class="subline admin" id="main-subline">'.$mainSubline.'</p>
      <p class="main-content admin" id="main-p">'.$mainP.'</p>
    </article>
  </div>
</main>
<div class="counters">
  <div class="row row-white">
    <content class="col-left">
      <table class="countdownOne">
        <tr>
          <td colspan="4" class="countText">Practice</td>
        </tr>
        <tr id="practice">
          <td id="days" class="countText"> </td>
          <td id="hours" class="countText"> </td>
          <td id="minutes" class="countText"> </td>
          <td id="seconds" class="countText"> </td>
        </tr>
        <tr>
          <td>Days</td>
          <td>Hours</td>
          <td>Minutes</td>
          <td>Seconds</td>
        </tr>
      </table>
    </content>
    <content class="col-right">
      <table class="countdownTwo">
        <tr>
          <td colspan="4" class="countText">Graduation</td>
        </tr>
        <tr id="graduation">
          <td id="days" class="countText"></td>
          <td id="hours" class="countText"></td>
          <td id="minutes" class="countText"></td>
          <td id="seconds" class="countText"></td>
        </tr>
        <tr>
          <td>Days</td>
          <td>Hours</td>
          <td>Minutes</td>
          <td>Seconds</td>
        </tr>
      </table>
    </content>
  </div>
</div>

<script src="/scripts/countdown.js" type="text/javascript"></script>';


?>
