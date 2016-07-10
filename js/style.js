;(function($){
	/*var imgs=[
		'img/1_03.png',
		'img/1_07.png',
		'img/1_10.png',
		'img/1A.png',
		'img/1At.png',
		'img/1B.png',
		'img/1Bt.png',
		'img/1C.jpg',
		'img/1Ttimu.png',
		'img/1Ttu.png',
		'img/1Twenzi.png',
		'img/2_03.png',
		'img/2_06.png',
		'img/2_09.png',
		'img/2_14.png',
		'img/2_16.png',
		'img/2_18.png',
		'img/2_23.png',
		'img/2_25.png',
		'img/2_28.png',
		'img/2_33.png',
		'img/2_34.png',
		'img/2_36.png',
		'img/2A.png',
		'img/2At.png',
		'img/2B.png',
		'img/2Bt.png',
		'img/2C.png',
		'img/2Ct.png',
		'img/2Ttimu.png',
		'img/2Ttu.png',
		'img/3.png',
		'img/3A.jpg',
		'img/3A.png',
		'img/3B.jpg',
		'img/3B.png',
		'img/3C.jpg',
		'img/3C.png',
		'img/4_03.png',
		'img/4_07.png',
		'img/4_10.png',
		'img/4_13.png',
		'img/4A.jpg',
		'img/4B.jpg',
		'img/4C.jpg',
		'img/5_03.png',
		'img/5_07.png',
		'img/6_03.png',
		'img/6_07.png',
		'img/7.png',
		'img/8.png',
		'img/A.jpg',
		'img/B.jpg',
		'img/baidb.png',
		'img/C.jpg',
		'img/f1A.png',
		'img/f1B.png',
		'img/f1C.png',
		'img/f2.jpg',
		'img/f2A.png',
		'img/f2B.png',
		'img/f2C.png',
		'img/f3A.png',
		'img/f3B.png',
		'img/f3C.png',
		'img/f3D.png',
		'img/f4.jpg',
		'img/f4A.png',
		'img/f4B.png',
		'img/f4C.png',
		'img/fail.png',
		'img/friend1.png',
		'img/friend2.png',
		'img/g1.jpg',
		'img/g2A.png',
		'img/g2B.png',
		'img/g2C.png',
		'img/g3A.png',
		'img/g3B.png',
		'img/g3C.png',
		'img/g4A.png',
		'img/g4B.png',
		'img/g4C.png',
		'img/images1.png',
		'img/job1.png',
		'img/job2.png',
		'img/l1.png',
		'img/love1.png',
		'img/love2.png',
		'img/next.png',
		'img/play1_1.png',
		'img/play1_2.png',
		'img/play1_3.png',
		'img/play1_4.png',
		'img/play2.jpg',
		'img/play3.jpg',
		'img/play4.jpg',
		'img/success.png',
		'img/target.png',
		'img/la.jpg',
		'img/lb.jpg',
		'img/lbg.jpg',
		'img/lbg2.jpg',
		'img/lbg3.jpg',
		'img/lbg4.jpg',
		'img/lc.jpg',
		'img/ld.jpg'
	],s=0,arrImg=[],e=0;

	for(var i=0;i<imgs.length;i++){
		arrImg[i]=new Image();
		arrImg[i].src=imgs[i];
		arrImg[i].onload=function(){
			if(i==imgs.length-1){
				preload(1)
			}else{
				s++;
				preload(s/imgs.length)
			}
		}
		arrImg[i].onerror=function(){
			e++;
			alert("共有"+e+"张图片出现错误")
		}

	}

	function preload(num){
		var num=num*100>=100?100:Math.floor(num*100);
		$("#line").css({width:num+"%"});
		$("#num").html(num+"%");
		if(num>=100){
			loading.hide();
			sex.show();
		}
	}*/
    
	var i=0,
		line=$("#line");
		
		
		/**/
		var sex=$(".sex"),
		loading=$(".loading"),
		star=$(".star"),
		num=$("#num");
	//loading页进入sex页
	timer=setInterval(function(){
		i+=3;
		line.css({"width":i+"%"});
		num.html(i+"%");
		if(i>100){
			loading.hide();
			sex.show();
			clearInterval(timer)
			return false;
		}
	},100)
	//sex中选择男女进入星座页
	sex.on("click","li",function(){
		//var ssex=JSON.stringify($(this).data());
		sex.hide();
		star.show();
	})
	//location.href="www.baidu.com?a=0&&b=0"
	//星座页进入场景页（工作，约会，朋友）
	
	
})(Zepto)