window.addEvent("domready", function(){
    var anim = animate();
    $$('.anim').each(function(elem){
        if(elem.hasClass('process')){
            anim.tween(elem, 'visibility', 'visible', {duration:350});
            if(elem.get('flag')  == "1"){
                anim.delay(500);
            }
        }
        else if(elem.hasClass('word')){
            if(elem.hasClass('step6')){
                anim.tween(elem, 'visibility', 'visible', {
                    duration:0,
                    onComplete:function(){
                        (function(){
                            var el_step6_p2 = elcontent('.step6.process.p2');
                            el_step6_p2.src = "image/production/p6-2.gif?"+String.uniqueID();
                        }).delay(350);
                    }
                });
            }
            else{
                anim.tween(elem, 'visibility', 'visible', {duration:800});
            }
        }
        else if(elem.hasClass('move')){
            if(elem.get('flag') != "0"){
                anim.tween(elem.getPrevious(), 'visibility', 'hidden', {duration:0});
            }
            
            if(elem.get('flag') == "-1"){
                var func = function(el_move){
                    var el_moveprev;
                    if(el_move.get('flag') == "0"){
                        el_moveprev = elcontent('.step'+el_move.get('step')+'.move[flag="-1"]');
                    }
                    else{
                        el_moveprev = el_move.getPrevious();
                    }
                    el_moveprev.setStyle('visibility', "hidden");
                    
                    (function(){
                        new Fx.Tween(el_move, {
                            duration:500, property:"visibility",
                            onComplete:function(){
                                if(el_move.get('flag') == "-1"){
                                    el_move = elcontent('.step'+el_move.get('step')+'.move[flag="0"]');
                                }
                                else{
                                    el_move = el_move.getNext();
                                }
                                func(el_move);
                            }
                        }).start("visible");
                    }).delay((el_move.get('flag') == "0")? 500: 0);
                };
                
                anim.tween(elem, 'visibility', 'visible', {
                    duration:500,
                    onComplete:function(){
                        var el_move = elcontent('.step'+elem.get('step')+'.move[flag="0"]');
                        func(el_move);
                    }
                });
            }
            else{
                anim.tween(elem, 'visibility', 'visible', {duration:500});
            }    
        }
    });
    anim.delay(1850);
    
    var runtruck = function(){
        var anim_truck = animate();
        var el_truck = elcontent('.truck');
        
        anim_truck.delay(1000);
        if(el_truck.offsetLeft == 347){
            anim_truck.tween(el_truck, 'left', -470, {duration:800});
            anim_truck.tween(el_truck, 'opacity', 0, {onComplete:function(){ runtruck(); }});
        }
        else{
            el_truck.setStyle('left', 1294);
            anim_truck.tween(el_truck, 'opacity', 1, {duration:800});
            anim_truck.tween(el_truck, 'left', 347, {duration:800, onComplete:function(){ runtruck(); }});
        }
        
        anim_truck.start();
    };
    anim.tween(elcontent('.truck'), 'left', -470, {duration:800});
    anim.tween(elcontent('.truck'), 'opacity', 0, {onComplete:function(){ runtruck(); }});
    
    anim.start();
});

function elcontent(cls){
    var el_contentdtl = document.id('container_content').getElement('.contentdtl');
    return el_contentdtl.getElement(cls);
}