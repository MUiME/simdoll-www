var tween_msg_exit, is_zoom, scrolly, keyESC;
window.addEvent("domready", function(){
    tween_msg_exit = null;
    is_zoom = true;
    scrolly = 0;
    keyESC = null;

    var obj_animate = [];
    obj_animate['area_paper_addr'] = {left:67, top:-9};
    obj_animate['area_msg_addr'] = {left:127, top:62};
    obj_animate['area_paper_other1'] = {left:638, top:280};
    obj_animate['area_paper_contact'] = {left:409, top:52};
    obj_animate['area_msg_contact'] = {left:547, top:105};
    obj_animate['area_msg_dept'] = {left:571, top:63};
    obj_animate['area_logo'] = {left:432, top:79};
    obj_animate['area_clip'] = {left:356, top:24};
    obj_animate['area_heart'] = {left:29, top:22};
    obj_animate['area_paper_other2'] = {left:191, top:607};
    obj_animate['area_paper_photo'] = {left:4, top:478};
    obj_animate['area_paper_other3'] = {left:209, top:338};
    obj_animate['area_photo'] = {left:16, top:490};
    obj_animate['area_coins'] = {left:31, top:526};
    obj_animate['area_map0'] = {left:201, top:272};
    obj_animate['area_map'] = {left:218, top:305}
    obj_animate['area_pen'] = {left:4, top:39};
    obj_animate['area_key'] = {left:111, top:658};

    var div_animate = $$('div').filter(function(el){ return el.getProperty('rel')=='animate'; });
    div_animate.each(function(el){
        el.set('morph', {duration:2500});
        el.morph({left:obj_animate[el.id].left, top:obj_animate[el.id].top});
    });

    with(google.maps){
        var maps_latlng = new LatLng(13.70003, 100.6212);
        var maps_map = new Map($('map_zoom'), {
            zoom:16,
            center:maps_latlng,
            mapTypeId:MapTypeId.ROADMAP
        });

        var maps_marker = new Marker({map:maps_map, position:maps_latlng});
        event.addListener(maps_marker, "click", function(){
            var html = "<div align='left' style='font-family:Tahoma;font-size:10pt;'><div><b>Company</b> : รุ่งทวีวิวัฒน์ จำกัด (Rungtaveeviwat Co.,Ltd)</div><div><b>Address</b> : 168 ซอยพึ่งมี 46  ถนนสุขุมวิท93 บางจาก พระโขนง กรุงเทพฯ 10260</div><div><b>Tel</b> : +662-742-5193, <b>Fax</b> : +662-742-5194</div></div>";
            var maps_infowindow = new InfoWindow({content:html, position:maps_latlng});
            maps_infowindow.open(maps_map);
        });
    }

    tween_msg_exit = new Fx.Tween($('area_msg_exit'), {duration:4500});
    tween_msg_exit.set("opacity", 0);
    tween_msg_exit.set("display", "block");

    $('mapg').addEvent("click", zoom_map);
    document.id('mapd').addEvent('click', popupmap);
});
function zoom_map(){
    var area_map_zoom = $('area_map_zoom');
    if(is_zoom){
        scrolly = window.getScroll().y;
        document.body.setStyle("overflow", "hidden");
        area_map_zoom.setStyle("visibility", "visible");
        tween_msg_exit.set("opacity", 1);
        tween_msg_exit.start("opacity", 0);
        window.scrollTo(0, 0);
        is_zoom = false;

        keyESC = function(e){ if(e.code == 27){ e.stop(); zoom_map(); } }
        document.addEvent('keydown', keyESC);
    }
    else{
        document.body.setStyle("overflow", "");
        area_map_zoom.setStyle("visibility", "hidden");
        tween_msg_exit.cancel();
        tween_msg_exit.set("opacity", 0);
        window.scrollTo(0, scrolly);          
        is_zoom = true;

        document.removeEvent('keydown', keyESC);
    }
}//end zoom_map

function popupmap(){
    var winobj = window.open("", "popupmap", "status=0, toolbar=0, location=0, menubar=0, directories=0");
    winobj.document.body.innerHTML = '<div align="center"><img src="'+jsrealpath('image/contact/popupmap.png')+'" /></div>';
}

function jsrealpath(path) {
    //  discuss at: http://phpjs.org/functions/realpath/
    // original by: mk.keck
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    //        note: Returned path is an url like e.g. 'http://yourhost.tld/path/'
    //   example 1: realpath('../.././_supporters/pj_test_supportfile_1.htm');
    //   returns 1: 'file:/home/kevin/code/_supporters/pj_test_supportfile_1.htm'
  
    var p = 0, arr = []; /* Save the root, if not given */
      
    var r = this.window.location.href; /* Avoid input failures */
    path = (path + '').replace('\\', '/'); /* Check if there's a port in path (like 'http://') */
      
    if (path.indexOf('://') !== -1) {
        p = 1;
    } /* Ok, there's not a port in path, so let's take the root */
    if (!p) {
        path = r.substring(0, r.lastIndexOf('/') + 1) + path;
    } /* Explode the given path into it's parts */
    arr = path.split('/'); /* The path is an array now */
    path = []; /* Foreach part make a check */
    for(var k=0; k<arr.length; k++){ /* This is'nt really interesting */
        if (arr[k] == '.') {
            continue;
        } /* This reduces the realpath */
        if (arr[k] == '..') {
            /* But only if there more than 3 parts in the path-array.
             * The first three parts are for the uri */
            if (path.length > 3) {
                path.pop();
            }
        } /* This adds parts to the realpath */
        else {
            /* But only if the part is not empty or the uri
             * (the first three parts ar needed) was not
             * saved */
            if ((path.length < 2) || (arr[k] !== '')) {
                path.push(arr[k]);
            }
        }
    } /* Returns the absloute path as a string */
    return path.join('/');
}