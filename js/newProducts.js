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
