//导航展开收缩功能
$(function(){
	
	$("#much1").toggle(
	  function () {
	    $("#uls").addClass("navList");
//	    $(".focuSpan").css("background","url(../img/ico.png) 79px 1.5px")
	  },
	  function () {
	    $("#uls").removeClass("navList");
	  }
	);
	
	$(".much2").toggle(
		  function () {
		    $(".uls2").addClass("navList");
		  },
		  function () {
		    $(".uls2").removeClass("navList");
		  }
	);
//	)
	
//商品列表
//	let $focusA=$(".focusA");
//	let $imgs=$(".imgs");
////	alert($($focusA))
//	for(let i=0;i<$focusA.length;i++){
//		$focusA[i].onmouseenter=function(){
//			  $(this).parent().parent().children().get(0).fadeOut("slow");
//			  $(this).parent().parent().children().get(1).fadeIn("slow");
//		 };
//		 $focusA[i].onmouseleave=function(){
//			  $(this).parent().parent().children().get(0).fadeIn("slow");
//			  $(this).parent().parent().children().get(1).fadeOut("slow");
//		 }
//	}



//
//console.log($(".design"));
//$(".design").each(function(){
////	console.log($(this).find(".focusA"));
//	$(this).find(".focusB").hover(
//	  function () {
////		console.log($(this).parents(".design").children(".img1"));
//	  $(this).parents(".design").children(".img1").fadeOut("slow");
//	   $(this).parents(".design").children(".img2").fadeIn("slow");
//	  },
//	  function () {
//	  	$(this).parents(".design").children(".img1").fadeIn("slow");
//	  	$(this).parents(".design").children(".img2").fadeOut("slow");
//	  }
//	)
//})

// $("#focusB").hover(
// 		  function () {
// 		  	$(".imgs").prev().fadeOut("slow");
// 		   $(".imgs").fadeIn("slow");
// 		  },
// 		  function () {
// 		  	$(".imgs").prev().fadeIn("show")
// 		    $(".imgs").fadeOut("show");
// 		  }
// 	)
$("#focusB").hover(
		  function () {
		 $("#img1").fadeOut("slow");
		   $("#img2").fadeIn("slow");
		  },
		  function () {
		  	$("#img1").fadeIn("slow");
		   $("#img2").fadeOut("slow");
		  }
	)
$("#focusC").hover(
		  function () {
		 $("#img3").fadeOut("slow");
		   $("#img4").fadeIn("slow");
		  },
		  function () {
		  	$("#img3").fadeIn("slow");
		   $("#img4").fadeOut("slow");
		  }
	)



});
	//动态创建商品了,列表
	//动态创建商品了,列表
// $(function(){
// 	//1、发送ajax请求，获取商品信息
// 	$.ajax({
// 		type:"get",
// 		url:"getGoodsList.php",
// 		async:true,
// 		success:function(data){

// 			var str='';
// 			for(var i=0;i<data.length;i++){
			
// 				str+="<li>\
// 				<a href=''>\
// 					<img src='"+data[i].goodsImg+"' width='225px' height='225px'>\
// 				</a>\
// 				<p>\
// 					<a href='#'>"+data[i].goodsName+"</a>\
// 				</p>\
// 				<p>$"+data[i].goodsPrice+"</p>\
// 				<p><span>"+data[i].beiyong1+"</span></p>\
// 			</li>"	
// 			};
// 			$(".goodlists").html(str);
			
// 		},
// 		dataType:"json"
// 	});	
// });
function goGoodsDetail(obj){
	let goodsid = obj.getAttribute("goodsid");
	addCookie("goodsid",goodsid);
	// window.location.href="goodsdetail.html";
	
}
//显示数据
function showList(data){
	var str='';
	for(var i=0;i<data.length;i++){
		str+="<li>\
		<a href='goodsdetail.html'>\
			<img goodsid='"+data[i].goodsId+"' src='"+data[i].goodsImg+"' width='225px' height='225px' onclick='goGoodsDetail(this)'>\
		</a>\
		<p>\
			<a href='#'>"+data[i].goodsName+"</a>\
		</p>\
		<p>￥"+data[i].goodsPrice+"</p>\
		<p><span>"+data[i].beiyong1+"</span></p>\
	</li>";
		$("#one")[0].innerHTML=str;
	}
}

$(function(){
	//1、发送ajax请求，获取商品信息
	$.ajax({
		type:"get",
		url:"getGoodsList.php",
		async:true,
		success:function(data){
			showList(data);	
		},
		dataType:"json"
	});	
});




