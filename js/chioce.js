;(function($){
	var ind=0,
		len=$(".questions").find("div").size(),
		h=$(window).height();
	
	//选这个
	$("#btn").on("tap",function(){
		$(".chioce").hide();
		$(".questions").show();
	})
	//上下滑动
	
		$(".questions").on("swipeUp",function(){//上滑
			ind++;
			if(ind>=len-1) ind=len-1;
			var dis=-ind*h;
			$(this).next().show()
			$(".timi").css({
				"transform":"translate3d(0,"+dis+"px,0)",
				"transition":"all .5s"
			})
		}).on("swipeDown",function(){//下滑
			ind--;
			if(ind<=0) ind=0;
			lay();
		})
		function lay(){
			var dis=-ind*h;
			console.log(ind)
			//$(".timi").eq(ind).hide();
			$(this).next().show()
			
			$(".timi").css({
				"transform":"translate3d(0,"+dis+"px,0)",
				"transition":"all .5s"
			})
		}

	/*$(".btn2").on("tap",function(){
		$(this).hide();
		$(".answer").css({
			"-webkit-transform":"translateY(-100%)",
			"-webkit-transition":"all .2s"
		})
	})
	$(".timi").on("tap",function(){
		$(".btn2").hide();
	})*/
})(Zepto)

/*function Slider(obj){
	this.con=obj.con;
	this.yh_box1=obj.yh_box1;
	this.left=obj.left;
	this.right=obj.right;
	this.callback=obj.callback;
	this.type=obj.type;
	this.auto=obj.auto;

	//执行方法
	this.init();
	this.initDom();
	this.initEvent();
}
Slider.prototype = {
	init : function(){
		this.winW=$(window).width();
		this.winH=$(window).height();
		this._index=0;
	},
	initDom : function(){
		this._item=this.con.find("section");
		var self=this;
		for(var i=0;i<self._item.length;i++){
			$(self._item[i]).css('-webkit-transform','translate3d('+i*self.winW+'px'+',0,0)')
		}
	},
	initEvent : function(){
		var self=this;
		this._item.on('touchstart',function(e){
			e.preventDefault();
			self._startX=e.touches[0].screenX;
			self._offsetX=0
		})
		this.auto  &&  setInterval(function(){
			self._star("+1");
		},2000)
		
		this._item.on('touchmove',function(e){
			e.preventDefault();
			self._moveX=e.touches[0].screenX;
			self._offsetX=self._moveX-self._startX;
			var _winW=self._winW,
				_offsetX=self._offsetX;
				for(var i=0;i<self._item.length;i++){
					if($(self._item[i])){
						$(self._item[i]).css('-webkit-transform','translate3d('+(i-self._index)*_winW+_offsetX+'px,0,0,)');
						$(self._item[i]).css('-webkit-transition','none');
					}
				}
		})
		this._item.on('touchend',function(e){
			var _offsetX=self._offsetX;
			if(_offsetX>0){
				self._star('+1',e.type);
			}else{
				self._star('-1',e.type);
			}
		})
		this.left.on("click",function(e){
			self._star("-1",e.type);
		})
		this.right.on("click",function(e){
			self._star("+1",e.type);
		})
	},
	_star : function(num,type){
		var index=this._index,
			width=this.winW,
			item=this._item,
			len=item.length;
		if(typeof(num)=="number"){
			nowIndex=num;
		}
		if(typeof(num)=="string"){
			nowIndex=index+num*1;
		}
		if(nowIndex>len-1){
			nowIndex=len-1;
		}
		if(nowIndex<0){
			nowIndex=0;
		}

		item[nowIndex] && ($(item[nowIndex]).css('-webkit-transform','translate3d(0,0,0)'));
		item[nowIndex-1] && ($(item[nowIndex-1]).css('-webkit-transform','translate3d('+(-width)+'px,0,0)'));
		item[nowIndex+1] && ($(item[nowIndex+1]).css('-webkit-transform','translate3d('+width+'px,0,0)'));
		

		item[nowIndex] && ($(item[nowIndex]).css('-webkit-transition','all 0.3s'));
		item[nowIndex-1] && ($(item[nowIndex-1]).css('-webkit-transition','all 0.3s'));
		item[nowIndex+1] && ($(item[nowIndex+1]).css('-webkit-transition','all 0.3s'));

		this._index=nowIndex;
		
		if(!type) return false;
		if(type.indexOf("touch")>=0){
			this.callback && this.callback();
		}
		
		
	}
}*/
