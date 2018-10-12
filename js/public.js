//二级导航 划过效果
$("#hv1").hover(
		function(){
			$("#tow").css("display","block");
		},
		function(){
			$("#tow").css("display","none");	
		}
	);
$("#hv2").hover(
		function(){
			$("#gift_contentBox").css("display","block");
		},
		function(){
			$("#gift_contentBox").css("display","none");	
		}
	);
$("#link_wx").hover(
		function(){
			$("#wx").css("display","block");
		},
		function(){
			$("#wx").css("display","none");	
		}
	);
$("#gift_content").click(function(){
	$("#gift_content a").css("border","1px solid black")
})
//点击每个li

$("#tow li").click(function () { 
	let obj=this;
	this.each(function () { 
 	obj.css("border","1px solid black");

	});
});


//logo
 $("#linkA")[0].onmouseleave=function(){
 	this.style.backgroundPosition="left"+" 0"+"px";
 	this.style.transition="all 1s";
 }
 $("#linkA")[0].onmouseenter=function(){
 	this.style.backgroundPosition=-58+"px"+" 0"+"px";
 	this.style.transition="all 1s";
 }
 //用户
$("#infoBox")[0].onmouseleave=function(){
	$("#navTip").css("display","none");
 	$("#nav_user")[0].style.backgroundPosition=-146+"px"+" 4"+"px";
 	$("#nav_user")[0].style.transition="all 1s";
 	$("#userBox").css("border","1px solid #ebebeb")
 }
 $("#infoBox")[0].onmouseenter=function(){
 	$("#navTip").css("display","block");
 	$("#nav_user")[0].style.backgroundPosition=-146+"px"+" -13"+"px";
 	$("#nav_user")[0].style.transition="all 1s";
 	$("#userBox").css("border","1px solid red")
 }
//购物车
$("#CartInfoBox")[0].onmouseleave=function(){
	$("#shopingCart_info").css("display","none");	
 	$("#nav_shopingCart")[0].style.backgroundPosition=-164+"px"+" 4"+"px";
 	$("#nav_shopingCart")[0].style.transition="all 1s";
 	$("#shopingCartBox").css("border","1px solid #ebebeb")
 }
 $("#CartInfoBox")[0].onmouseenter=function(){
 	$("#shopingCart_info").css("display","block");
 	$("#nav_shopingCart")[0].style.backgroundPosition=-164+"px"+" -13"+"px";
 	$("#nav_shopingCart")[0].style.transition="all 1s";
 	$("#shopingCartBox").css("border","1px solid red")
 }
//回到顶部
window.onscroll=function(){
		//1获取box
		var boxUp=$("#upTop")[0];
		//2获取当前页面滚动的距离
		var _top = document.body.scrollTop || document.documentElement.scrollTop;	
		//3临界显示与隐藏
		if (_top>=100) {
			boxUp.style.display="block"
		}else{
			boxUp.style.display="none";
		}
		// 4添加点击事件
		$("#upBox")[0].onclick=function(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}