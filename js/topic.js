;(function($){
	var box = {
		init : function(){
			this.initDom();
			this.initEvent();
		},
		initDom : function(){
			this.left=$(".left");
			this.right=$(".right");
			this.box=$("#box");
			w=$(window).width();
			this.btn=$("#btn");
			this.questions=$(".questions");
			this.chioce=$(".chioce");
			this.timi=$(".timi");
			this.boxs=$(".boxs");
			this.project=$(".project");
			this.boxs1=$(".boxs1");
			this.btn3=$(".btn3");
			this.result=$(".result");
			this.success=$(".success");
			this.bag=$(".bag");
			this.bg=$(".bg");
			this.bag1=$(".bag1");
			this.bag2=$(".bag2");
			this.bag3=$(".bag3");
			this.bag4=$(".bag4");
			this.bag5=$(".bag5");
			this.bag6=$(".bag6");
			this.lov=$(".lov");
			this.jo=$(".jo");
			this.fri=$(".fri");
			this.target=$(".target");
			this.bg=$(".bg");
		},
		initEvent : function(){
			var	that=this;
			var i=0,
				ind=0,
				len=that.box.find("section").size(),
				len1=that.questions.find("div").size(),
				startX=0,
				moveX=0,
				h=$(window).height(),
				w=$(window).width(),
				sum=0;
			//按钮左右
			that.left.on("tap",function(){
				i--;
				if(i<0) i=0; 
				if($(this).parent().attr("class")=="chioce swiper-container"){
					that.play(i,1);
				}else{
					$(this).siblings(".boxs1").css({
						"-webkit-transform":"translate3d("+(-i*w)+"px,0,0)",
						"-webkit-transition":"all 0.5s"
					})
				}
			})
			that.right.on("tap",function(){
				if($(this).parents().attr("class")=="chioce swiper-container"){
					i++;
					if(i>len-1)  i=len-1;
					that.play(i,1);
				}else{
					var len2 = $(this).siblings(".boxs1").find("div").size();
					i++;
					if(i>len2-1)  i=len2-1;
					$(this).siblings(".boxs1").css({
						"-webkit-transform":"translate3d("+(-i*w)+"px,0,0)",
						"-webkit-transition":"all 0.5s"
					})
				}
			})
			//项目左右滑
			that.box.on("swipeLeft",function(){
				i++;
				if(i>len-1)  i=len-1;
				that.play(i,1);
			}).on("swipeRight",function(){
				i--;
				if(i<0) i=0; 
				that.play(i,1);
			})
			//选项左右划
			that.boxs1.on("swipeLeft",function(){
				var len_len = $(this).find("div").size();
				i++;
				if(i>len_len-1)  i=len_len-1;
				$(this).css({
					"-webkit-transform":"translate3d("+(-i*w)+"px,0,0)",
					"-webkit-transition":"all 0.5s"
				})

			}).on("swipeRight",function(){
				i--;
				if(i<0) i=0; 
				$(this).css({
					"-webkit-transform":"translate3d("+(-i*w)+"px,0,0)",
					"-webkit-transition":"all 0.5s"
				})
			})
			
			//点击btn进入questions
			that.btn.on("tap",function(){
				that.chioce.hide();
				that.questions.eq(i).show().siblings().hide();
				var nn=parseInt(Math.random()*1);
				if(i==0){
					that.lov.show().siblings().hide();
					if(nn==0){
						that.bag1.show().siblings().hide();
					}else if(nn=1){
						that.bag2.show().siblings().hide();
					}
				}else if(i==1){
					that.jo.show().siblings().hide();
					if(nn==0){
						that.bag3.show().siblings().hide();
					}else if(nn=1){
						that.bag4.show().siblings().hide();
					}
				}else if(i==2){
					that.fri.show().siblings().hide();
					if(nn==0){
						that.bag5.show().siblings().hide();
					}else if(nn=1){
						that.bag6.show().siblings().hide();
					}
				}
				i=0;

			})
			that.boxs.on("swipeUp",function(){
				$(this).css({
					"transform":"translate3d(0,-100%,0)",
					"transition":"all .5s"
				})
			})
			that.boxs.on("swipeDown",function(){
				$(this).css({
					"transform":"translate3d(0,0,0)",
					"transition":"all .5s"
				})
			})
			//点击选项中的btn3
			that.btn3.on("tap",function(){
				$(this).parents(".boxs").next().show().siblings().hide();
				//选项的data相加求总分
				var j=$(this).siblings(".boxs1").find("div").eq(i).data("value");
				sum=sum+j;

				if($(this).parents(".boxs").index()+1==$(this).parents(".questions").find(".boxs").length){
					that.result.show().siblings().hide();
					if(sum==100){
						that.success.find("span").text(99);
					}else if(sum==95){
						that.success.find("span").text(95);
					}else if(sum>=85 && sum<=90){
						that.success.find("span").text(90);
					}else if(sum>=75 && sum<=80){
						that.success.find("span").text(88);
					}else{
						that.success.hide().next().show();
						if(sum>=65 && sum<=70){
							that.success.next().find("span").text(60);
						}else if(sum>=55 && sum<=60){
							that.success.next().find("span").text(50);
						}else if(sum>=45 && sum<=50){
							that.success.next().find("span").text(40);
						}else if(sum>=5 && sum<=40){
							that.success.next().find("span").text(30);
						}
					}
				}
				i=0;
			})
			//点击获取社交锦囊，随机出现一个题
			
			//向上滑过bag页面，社交目标target显示出来
			that.bag.on("swipeUp",function(){
				$(this).css({
					"transform":"translate3d(0,-100%,0)",
					"transition":"all .5s"
				});	

			})
			that.bag.on("swipeDown",function(){
				$(this).css({
					"transform":"translate3d(0,0,0)",
					"transition":"all .5s"
				});	

			})
			

			
			
		},
		play : function (i,o) {
			if(o==1){
				this.box.css({
					"-webkit-transform":"translate3d("+(-i*w)+"px,0,0)",
					"-webkit-transition":"all 0.5s"
				})
			}else if(o==0){
			}
		}

	}
	box.init();
})(Zepto)