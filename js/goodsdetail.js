//顶部设计（页面效果）
$(function(){

//	 let p=$(".nav_detail").offset().top;
//	alert(p)
//	window.scroll(function(){
////		let navTotop=$(".nav_detail").offset().top;
////		alert(p)
//	var _top = document.body.scrollTop || document.documentElement.scrollTop;		
//		
//		if (_top>=p) {
//			$("#headerBox")[0].style.display="block";
//		} else{
//			$("#headerBox")[0].style.display="none";
//		}
//	});
	
})

//后台连接展示信息
	$(function(){
	//1、从cookie中读取商品编号goodsid
	let goodsid = getCookie("goodsid");
	
	//2、发送ajax请求，获取商品信息
	$.ajax({
		type:"get",
		url:"getGoodsInfo.php",
		async:true,
		data:{
			"goodsId":goodsid
		},
		success:function(data){
			$("#goodsname").html(data.goodsName);
			$("#goodsdesc").html(data.goodsDesc);
			$("#goodsprice").html("￥"+data.goodsPrice+"元");
		},
		dataType:"json"
	});	
});

