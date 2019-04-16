var is_empty;
window.addEvent("domready", function(){
    set_pos_brick();
    set_search();
});

function set_pos_brick(){
    if($('wood').offsetTop >= 327){
        var brick = $$('.brick1', '.brick2');
        var move = [-87, 233, 153, 73, -177, 473];
        brick.each(function(el, i){
            el.setStyles({'top':$('wood').offsetTop+move[i], 'visibility':'visible'});
        });
    }
    else{
        location.reload();
    }
}//end set_pos_brick
function set_search(){
    is_empty = true;

    var search = $('search');
    var init_val = "Search";
    var init_font = {'font-family':'Monotype Corsiva', 'color':'#ccc'}; 

    search.value = init_val;
    search.setStyles(init_font);
    search.addEvents({
        "focus": function(){        
            if(is_empty){ search.value = ""; }
            search.setStyles({'font-family':'Tahoma', 'color':'black'});
            is_empty = false;
        },
        "blur": function(){
            if(search.value == ""){ 
                search.value = init_val;
                search.setStyles(init_font);
                is_empty = true;
            }
        }
    });
    search.disabled = true;
}//end set_search