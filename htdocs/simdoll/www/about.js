window.addEvent("domready", function(){ 
    var el_contentdtl = document.id('container_content').getElement('.contentdtl');
    var el_run = el_contentdtl.getElement('img.run');
    var el_detail = el_contentdtl.getElement('.detail');
    
    el_run.src = "image/about/run.gif?"+String.uniqueID();
    
    (function(){
        new Fx.Morph(el_detail, {
            duration:800
        }).start({
            'width':800,
            'top':13,
            'left':112,
        });
    }).delay(4400);
});