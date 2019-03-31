window.addEvent("load", function(){
    var el_contentdtl = document.id('container_content').getElement('.contentdtl');

    $$('div').filter(function(el){ return el.getProperty("rel")=="qa"; }).each(function(el){
        var obj = el.getChildren();
        var align = obj[0].get('html');
        var html_q = obj[1].get('html');
        var html_a = obj[2].get('html');
        var ptop = obj[3].get('html');
        
        var new_elem = new Element('div', {'rel':'animate', 'class':'qa_'+align, 'ptop':ptop});
        var new_elem_inner = new Element('div', {
            'align':"left",
            'style':'padding:30px 25px 15px 30px;',
            'html': '<div style="overflow:auto; height:150px;">'+
                        '<div class="qcontent">'+html_q+'</div>'+
                        '<div class="acontent">'+html_a+'</div>'+
                    '</div>'
        });
        new_elem_inner.inject(new_elem);
        new_elem.inject(el_contentdtl);
        new_elem.setStyle('top', -new_elem.offsetHeight);
    });

    el_contentdtl.getFirst().destroy();

    var animate = $$('div').filter(function(el){ return el.getProperty("rel")=="animate"; });
    var iLast = animate.length - 1;
    animate.each(function(el, i){
        if(i == iLast){ 
            el.set('tween', { onComplete: function(){
                $('bear1').set('tween', {duration:1000});
                $('bear1').tween('top', 250);
                $('bear2').set('tween', {duration:2000});
                $('bear2').tween('top', 605);
                $('bear3').set('tween', {duration:2000});
                $('bear3').tween('top', 50);
            }});               
        }
        el.set('tween', {duration:2500});
        el.tween('top', el.get('ptop').toInt());
    });
});