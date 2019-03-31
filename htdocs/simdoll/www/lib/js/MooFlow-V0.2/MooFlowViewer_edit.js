/* MooFlow Viewer (extra JS MooFlowViewer_edit.js)
 * useViewer:true
 * Adapt from MooFlowViewer.js for use with Slimbox
 * Edit by Manit Kwanyun
 */
MooFlow.implement({

	flowStart: function(){
		this.hideIcon();
	},
	
	flowComplete: function(){
		this.createIconTip();
	},
	
	createIconTip: function(){
		var cur = this.getCurrent();
		if(!$chk(cur.rel)||!$chk(cur.href)) return;
		this.tipFx = new Fx({link:'cancel'});
		if(!$chk(this.icon)) { this.icon = new Element('a').addClass('show').setStyles({'display':'none','opacity':'0'}).inject(this.MooFlow); }
		this.icon.addEvent('click', this.onClickView.bind(this, cur));
		//this.icon.addEvent('mouseenter', this.showTip.bind(this, cur));
		//this.icon.addEvent('mouseleave', this.hideTip.bind(this, cur));
		if(!$chk(this.tip)){ 
			this.tip = new Element('div').addClass('tooltip').setStyles({'display':'none','opacity':'0'}).inject(this.MooFlow);
			var tip_cont = new Element('div').setStyle('padding','20px').inject(this.tip); 
		}
		tip_cont.set('html', cur.alt);
		this.icon.addClass(cur.rel.toLowerCase());
		this.icon.setStyle('display','block').fade(0.6);
	},

	showTip: function(cur){
		this.tip.setStyles({'top':100,'display':'block'});
		this.tipFx = new Fx.Morph(this.tip,{link:'cancel'}).start({'opacity': 0.8, 'top': this.icon.getCoordinates().top-this.tip.getSize().y-21});
	},
	
	hideTip: function(cur){
		this.tipFx.start({'opacity': 0, 'top': 100});
	},

	hideIcon: function(){
		if($chk(this.icon) && $chk(this.icon.getParent())) this.icon.destroy();
		if($chk(this.tip) && $chk(this.tip.getParent())) this.tip.destroy();
		this.icon = this.tip = null;	
	},
	
	onClickView: function(cur){
		switch (cur.rel.toLowerCase()){
			case 'image':
			this.showImage(this.index);
			break;
			case 'link':
			window.open(cur.href, cur.target || '_blank');
			break;
			default:
		}
	},
	
	showImage: function(index){
		Slimbox.open(this.arr_img, index, {
			loop: false,
			initialWidth: 300,
			initialHeight: 300,
			overlayOpacity: 0.6,
			overlayFadeDuration: 800,
			resizeDuration: 400,
			//resizeTransition: Fx.Transitions.Elastic.easeOut,
			resizeTransition: false,
			imageFadeDuration: 800,
			counterText: "This is image <strong>{x}</strong> on a total of <strong>{y}</strong> in this gallery",
			previousKeys: [37, 80, 16],
			nextKeys: [39, 78, 17]
		});
	}
});
