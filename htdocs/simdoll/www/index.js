window.addEvent("domready", function(){
       var ev_home1 = "";
       var ev_bearfaq1= "";
       var ev_product1 = "";
       var ev_bearmail1= "";
       
       $$('.menu_list a').addEvent('click', function(e){
              e.preventDefault();
       });
       
       $('indexc').addEvent('click', function(){
              window.location.href = ".";
       });
       
       $('home').addEvent("mouseover", function(){
              $('home1').setStyle('visibility', 'visible');
              $('home').setStyle('visibility', 'hidden');
       });
       $('home1').addEvent("mouseout", function(){
              if (ev_home1 != "click") {
                     $('home1').setStyle('visibility', 'hidden');
                     $('home').setStyle('visibility', 'visible');
              }
              ev_home1 = "mouseout";
       });
       [$('gc'),$('home1')].each(function(elem){
              elem.addEvent("click",function(){ 
                     $('home1').setStyle('visibility', 'hidden');
                     $('home').setStyle('visibility', 'hidden');
                     $('abig').setStyle('display', 'block');
                   
                     var myEffect = new Fx.Morph(document.id('bighome'),{
                            duration: 1500,
                            onComplete:function(){
                                   $('blur1').setStyle('display', 'block');
                                   var bgFx = new Fx.Morph('bg1', {
                                          'duration':1000,
                                          onComplete:function(){ window.location.href = "gallery.html"; }
                                   }).start({
                                          'width': 1420,
                                          'left': -54,
                                          'top': -5,
                                          'height': 478,
                                          'opacity':0.9
                                          });
                            }
                     }).start({
                            'width':1200,
                            //'height':800,
                            'top':-350,
                            'left':-50,
                            'opacity':0.1
                       });
                     
                     ev_home1 = "click";
              });
       });
        
       $('bearfaq').addEvent("mouseover", function(){
              $('bearfaq1').setStyle('visibility', 'visible');
              $('bearfaq').setStyle('visibility', 'hidden');
       });       
       $('bearfaq1').addEvent("mouseout", function(){
              if (ev_bearfaq1 != "click") {
                     $('bearfaq1').setStyle('visibility', 'hidden');
                     $('bearfaq').setStyle('visibility', 'visible');
              }
              
              ev_bearfaq1 = "mouseout";
       });
       [$('faqc'),$('bearfaq1')].each(function(elem){
              elem.addEvent("click",function(){
                     $('bearfaq').setStyle('visibility', 'hidden');
                     $('bearfaq1').setStyle('visibility', 'visible');
                     var myFx = new Fx.Tween('rope', {
                            duration: 2000,
                            property: 'top',
                            onComplete:function(){
                                   var myEfx = new Fx.Elements([$('bearfaq1'), $('rope')],
                                   {      duration: 2000,
                                          onComplete:function()
                                          { window.location.href = "faq.html"; }
                                   }).start({
                                          0:{
                                                 top:-160
                                          },
                                          1:{
                                                 top:-400
                                          }
                                   });
                            }
                     }).start(-20);
                     ev_bearfaq1 = "click";
              });
       });
        
       $('product').addEvent("mouseover", function(){
              $('product1').setStyle('visibility', 'visible');
              $('product').setStyle('visibility', 'hidden');
              $('hproduct').setStyle('visibility','visible');
       });
       $('product1').addEvent("mouseout", function(){
              if (ev_product1 != "click") {
                     $('product1').setStyle('visibility', 'hidden');
                     $('product').setStyle('visibility', 'visible');
                     $('hproduct').setStyle('visibility','hidden');
              }
              ev_product1 = "mouseout";
       });
       [$('proc'),$('product1')].each(function(elem){
              elem.addEvent("click",function(){ 
                     $('product1').setStyle('visibility', 'hidden');
                     $('product').setStyle('visibility', 'hidden');
                     $('hproduct').setStyle('visibility','hidden');
                     $('aproduct').setStyle('display', 'block');
                      
                     var myEffect = new Fx.Morph(document.id('bigproduct'),{
                            duration: 1500,
                            onComplete:function(){
                                   $('blur2').setStyle('display', 'block');
                                   var bgFx = new Fx.Morph('bg2',{
                                          'duration':1000,
                                          onComplete:function(){ window.location.href = "production.html"; }
                                   }).start({
                                          'width': 1450,
                                          'left': -28,
                                          'top': -1,
                                          'height': 469,
                                          'opacity': 0.9
                                          });
                            }
                     }).start({
                            'width':800,
                            //'height':1100,
                            'top':-500,
                            'left':100,
                            'opacity':0.1
                     });
                     
                     ev_product1 = "click";
              });
       });
        
       $('bearmail').addEvent("mouseover", function(){
              $('bearmail1').setStyle('visibility', 'visible');
              $('bearmail').setStyle('visibility', 'hidden');
              $('hcontact').setStyle('visibility','visible');
       });
       $('bearmail1').addEvent("mouseout", function(){
              if (ev_bearmail1 != "click") {
                     $('bearmail1').setStyle('visibility', 'hidden');
                     $('bearmail').setStyle('visibility', 'visible');
                     $('hcontact').setStyle('visibility','hidden');
              }
              ev_bearmail1 = "mouseout";
       });
       [$('conc'),$('bearmail1')].each(function(elem){
              elem.addEvent("click",function(){ 
                     $('bearmail1').setStyle('visibility', 'hidden');
                     $('bearmail').setStyle('visibility', 'visible');
                     $('hcontact').setStyle('visibility','hidden');
                    
                     var anim = animate();
                     $$('.anim').each(function(elem, i, arr){ 
                            if(elem.get('flag') == "1"){
                                   anim.tween(elem.getPrevious(), 'visibility', 'hidden', {duration:0});
                            }
                            if (i == arr.length-1) {
                                   anim.tween(elem, 'visibility', 'visible',
                                          {duration:1000, onComplete:function()
                                              { window.location.href = "contact.html" }
                                          });
                            }
                            else{
                                   anim.tween(elem, 'visibility', 'visible', {duration:200});
                            }
                           
                     });
                     anim.start();
                   
                     ev_bearmail1 = "click";  
              }); 
       });
        
        
       $('simdoll').addEvent("mouseover", function(){
              $('simdoll1').setStyle('visibility', 'visible');
              $('simdoll').setStyle('visibility', 'hidden');
              $('habout').setStyle('visibility','visible');
       });
       $('simdoll1').addEvent("mouseout", function(){
              $('simdoll1').setStyle('visibility', 'hidden');
              $('simdoll').setStyle('visibility', 'visible');
              $('habout').setStyle('visibility','hidden');
       });
       [$('aboutc'),$('simdoll1')].each(function(elem){
              elem.addEvent("click", function(){
                     $('simdoll').setStyle('visibility', 'hidden');
                     $('simdoll1').setStyle('visibility', 'visible');
                     $('habout').setStyle('visibility','hidden');  
                     window.location.href = "about.html";          
              });
       });
});