<?php
header ('Content-type: text/html; charset=tis-620');
$dir = $_GET["path"]."/";
$filename = $dir."list.txt";
$open = fopen($filename, "r") or die("can't open file");
if($open){
    $f = file($filename);
    foreach($f as $val){
        $img = explode(",", $val);
        echo "<a href='".$dir.$img[0]."' rel='image'><img width='500' height='375' src='".$dir.$img[1]."' title='".$img[2]."' /></a>\n";
    }
    fclose($open);
}
?>