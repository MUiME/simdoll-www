window.addEvent('domready', function(){
});

window.addEvent('load', function(){
    $$('.central.dyn').each(function(elem){
        elem.setStyles({'margin-top':-elem.offsetHeight/2, 'margin-left':-elem.offsetWidth/2});
    });
    
    $$('.vmiddle.dyn').each(function(elem){
        elem.setStyle('margin-top', -elem.offsetHeight/2);
    });
    
    var scaleX = "1"; var scaleY = "1";
    //if(document.body.offsetWidth > document.id('wrapper').getStyle('max-width').toInt()){
    //    scaleX = document.body.offsetWidth / document.id('wrapper').getStyle('max-width').toInt();
    //}
    //if(document.body.offsetHeight > document.id('wrapper').getStyle('max-height').toInt()){
    //    scaleY = document.body.offsetHeight / document.id('wrapper').getStyle('max-height').toInt();
    //}
    //if(document.body.offsetWidth > 1280){
    //    scaleX = document.body.offsetWidth / 1280;
    //}
    //scaleY = scaleX;
    //if(document.body.offsetHeight > 800){
    //    scaleY = document.body.offsetHeight / 800;
    //}
    var transform_value = "scale("+scaleX+", "+scaleY+")";
    document.id('wrapper').setStyles({
        'transform':transform_value, 
        '-webkit-transform':transform_value,  
        '-moz-transform':transform_value,
        '-o-transform':transform_value,
        '-ms-transform':transform_value
    });
});