<?php
$query = 'SELECT * FROM content';
$result = mysqli_query($db, $query);

while($row = $result->fetch_array(MYSQLI_NUM)) {
$rows[] = $row;
}

$mainHeadline = (string)$rows[0][1];
$mainSubline  = (string)$rows[1][1];
$mainP        = (string)$rows[2][1];
$infoHeadline = (string)$rows[3][1];
$infoP        = (string)$rows[4][1];
$cvH11        = (string)$rows[5][1];
$cvShowP1     = (string)$rows[6][1];
$cvHideP1     = (string)$rows[7][1];
$cvH12        = (string)$rows[8][1];
$cvShowP2     = (string)$rows[9][1];
$cvHideP2     = (string)$rows[10][1];
$cvH13        = (string)$rows[11][1];
$cvShowP3     = (string)$rows[12][1];
$cvHideP3     = (string)$rows[13][1];
$cvH14        = (string)$rows[14][1];
$cvShowP4     = (string)$rows[15][1];
$cvHideP4     = (string)$rows[16][1];
?>
