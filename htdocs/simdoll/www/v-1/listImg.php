<?php
//header ('Content-type: text/html; charset=utf-8');

$dir = $_GET["path"]."/";
$filename = $dir."list.txt";

// Open a known directory, and proceed to read its contents
if (is_dir($dir)) { 
    if ($handle = opendir($dir)) {
        $open = fopen($filename, "w") or die("can't open file");
        $count = 0;
        while (($file = readdir($handle)) !== false) {
            if ($file != "." && $file != ".." && $file != "list.txt") {
			    $count++;
                $f = iconv("TIS-620", "UTF-8", $file);
                fwrite($open, "$f,$f,".substr($f, 0, strlen($f)-4)."\n");
            }
        }
        closedir($handle);
        fclose($open);
        echo "Wrote list.txt in $dir";
    }
}
?>