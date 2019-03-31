window.addEvent("domready", function(){
    var el_contentdtl = document.id('container_content').getElement('.contentdtl');
    var el_back = el_contentdtl.getElement('.back');
    var el_rackbody = el_contentdtl.getElement('.rack');
    var el_rackdoorl = el_contentdtl.getElement('.rack > .door_l');
    var el_rackdoorr = el_contentdtl.getElement('.rack > .door_r');
    
    var animhorse = function(el_horse){
        var el_horseprev;
        if(el_horse.hasClass('seq1')){
            el_horseprev = el_horse.getNext();
        }
        else if(el_horse.hasClass('seq2')){
            el_horseprev = el_horse.getPrevious();
        }
        el_horseprev.setStyle('visibility', "hidden");
        
        new Fx.Tween(el_horse, {
            duration:500, property:"visibility",
            onComplete:function(){
                var el_horsenext;
                if(el_horse.hasClass('seq1')){
                    el_horsenext = el_horse.getNext();
                }
                else if(el_horse.hasClass('seq2')){
                    el_horsenext = el_horse.getPrevious();
                }
                animhorse(el_horsenext);
            }
        }).start("visible");
    };
    animhorse(el_contentdtl.getElement('.horse.seq1'));
    
    $$('.rack > .level-group.major .block').addEvents({
        'mouseover':function(){
            var transform_value = "scale(1.1, 1.1)";
            this.getElement('.icon').setStyles({
                'transform':transform_value, 
                '-webkit-transform':transform_value,  
                '-moz-transform':transform_value,
                '-o-transform':transform_value,
                '-ms-transform':transform_value,
                'z-index':"1"
            });
        },
        'mouseout':function(){
            var transform_value = "scale(1, 1)";
            this.getElement('.icon').setStyles({
                'transform':transform_value, 
                '-webkit-transform':transform_value,  
                '-moz-transform':transform_value,
                '-o-transform':transform_value,
                '-ms-transform':transform_value,
                'z-index':""
            });
        }
    });
    
    $$('.rack > .level-group.major .block > img').addEvent('click', function(){
        var el_block = this.getParent();
        var el_lvgroup = el_block.getParent().getParent();
        var el_mirror = el_lvgroup.getElement('.mirror');
        var mcat = this.get('mcat');
        new Fx.Elements([el_rackdoorl, el_rackdoorr], {
            duration:1000,
            onComplete:function(){
                el_mirror.setStyle('display', "none");
                el_rackbody.getElement('.level-group.selected').removeClass('selected');
                el_rackbody.getElement('.level-group.sub.'+mcat).addClass('selected');
                
                (function(){
                       new Fx.Elements([el_rackdoorl, el_rackdoorr], {
                            duration:1000,
                            onComplete:function(){
                                new Fx.Tween(el_back, {
                                    duration:500,
                                    property:"left"
                                }).start(716);
                            }
                        }).start({
                            0:{ 'width':0 },
                            1:{ 'width':0 }
                        });
                }).delay(1500);
            }
        }).start({
            0:{ 'width':181 },
            1:{ 'width':180 }
        });
        el_block.fireEvent('mouseout');
        el_mirror.setStyle('display', "block");
    });
    
    $$('.rack > .level-group.sub .block').addEvents({
        'mouseover':function(){
            var transform_value = "scale(1.1, 1.1)";
            this.setStyles({
                'transform':transform_value, 
                '-webkit-transform':transform_value,  
                '-moz-transform':transform_value,
                '-o-transform':transform_value,
                '-ms-transform':transform_value,
                'z-index':"1"
            });
        },
        'mouseout':function(){
            var transform_value = "scale(1, 1)";
            this.setStyles({
                'transform':transform_value, 
                '-webkit-transform':transform_value,  
                '-moz-transform':transform_value,
                '-o-transform':transform_value,
                '-ms-transform':transform_value,
                'z-index':""
            });
        }
    });
    
    $$('.rack > .level-group.sub .block > img').addEvent('click',function(){
        var scat = this.get('scat');
        var el_popup = document.body.getElement('.popup.'+scat)
        if(!el_popup){
            var new_el_popup = new Element('div', {
                'align':"center",
                'class':"popup absfull "+scat,
                'html': '<div class="popup-background absfull"></div>'+
                        '<div class="popup-base">'+
                            '<img src="image/gallery/close.png" class="close" />'+
                            '<div class="content"></div>'+
                        '</div>'
            }).inject(document.id('wrapper'), 'after');
            
            var el_popup_close = new_el_popup.getElement('.popup-base > .close');
            el_popup_close.addEvent('click', function(){
                new_el_popup.setStyle('display', "none");
            });
            
            new Request.JSON({
                url:"listFile.php",
                method:"post",
                data:"scat="+scat,
                onSuccess:function(resp_json){
                    var list_obj_img = resp_json.list_obj_img.sortBy('title');
                    
                    var el_popup_content = new_el_popup.getElement('.popup-base > .content');
                    list_obj_img.each(function(obj_img){
                        el_popup_content.grab(new Element('a', {
                            'href':obj_img.href,
                            'rel':"image",
                            'html':'<img width="'+obj_img.width+'" height="'+obj_img.height+'" src="'+obj_img.src+'" title="'+obj_img.title+'" />'
                        }));
                    });
                    
                    var mf = new MooFlow(el_popup_content, {
                        onClickView: function(){ this.onClickView(this.getCurrent()); },
                        heightRatio: 0.63,
                        startIndex: 0,
                        interval: 2000,
                        factor: 120,
                        bgColor: '',
                        useCaption: true,
                        useResize: true,
                        useSlider: true,
                        useMouseWheel: true,
                        useWindowResize: true, 
                        useKeyInput: true,
                        useViewer: true,
                        useAutoPlay: true,
                        blankImgPath: 'image/gallery/product/img_blank_unit.png',
                        loadingImgPath: 'lib/js/MooFlow-V0.2/skin/loading.gif'
                    });
                }
            }).send();
        }
        else{
            el_popup.setStyle('display', "block");
        }
    });
    
    el_back.addEvent('click', function(){
        new Fx.Tween(el_back, {
            duration:500,
            property:"left",
            onComplete:function(){
                new Fx.Elements([el_rackdoorl, el_rackdoorr], {
                    duration:1000,
                    onComplete:function(){
                        el_rackbody.getElement('.level-group.selected').removeClass('selected');
                        el_rackbody.getElement('.level-group.major').addClass('selected');
                        
                        (function(){
                               new Fx.Elements([el_rackdoorl, el_rackdoorr], {
                                    duration:1000
                                }).start({
                                    0:{ 'width':0 },
                                    1:{ 'width':0 }
                                });
                        }).delay(1500);
                    }
                }).start({
                    0:{ 'width':181 },
                    1:{ 'width':180 }
                });
            }
        }).start(588);
    });
});