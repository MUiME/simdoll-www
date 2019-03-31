<?php
    $scat = $_POST['scat'];
    $dir = 'image/gallery/product/'.$scat;
    
    $list_obj_img = array();
    if($handle = opendir($dir)) {
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $imagick = new Imagick($dir.'/'.$entry);
                $width = $imagick->getImageWidth();
                $height = $imagick->getImageHeight();
                
                $list_obj_img[] = array(
                    'href' => $dir.'/'.$entry,
                    'src' => $dir.'/'.$entry,
                    'title' => substr($entry, 0, strpos($entry, '.')),
                    'width' => $width,
                    'height' => $height
                );
            }
        }
        closedir($handle);
    }

    echo json_encode(array('list_obj_img' => $list_obj_img));
?>