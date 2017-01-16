<?php
$query = 'SELECT html FROM content';
$result = mysqli_query($db, $query);

while($row = $result->fetch_array(MYSQLI_NUM)) {
$rows[] = $row;
}

$mainHeadline  = (string)$rows[0][0];
$mainSubline   = (string)$rows[1][0];
$mainP         = (string)$rows[2][0];
$infoHeadline  = (string)$rows[3][0];
$infoP         = (string)$rows[4][0];
$cvH11         = (string)$rows[5][0];
$cvShowP1      = (string)$rows[6][0];
$cvHideP1      = (string)$rows[7][0];
$cvH12         = (string)$rows[8][0];
$cvShowP2      = (string)$rows[9][0];
$cvHideP2      = (string)$rows[10][0];
$cvH13         = (string)$rows[11][0];
$cvShowP3      = (string)$rows[12][0];
$cvHideP3      = (string)$rows[13][0];
$cvH14         = (string)$rows[14][0];
$cvShowP4      = (string)$rows[15][0];
$cvHideP4      = (string)$rows[16][0];
$portHeadline  = (string)$rows[17][0];
$portP         = (string)$rows[18][0];
$portHeadline2 = (string)$rows[19][0];
$portP2        = (string)$rows[20][0];
$portHeadline3 = (string)$rows[21][0];
$portP3        = (string)$rows[22][0];
$portHeadline4 = (string)$rows[23][0];
$portP4        = (string)$rows[24][0];
$portA         = (string)$rows[25][0];
?>
