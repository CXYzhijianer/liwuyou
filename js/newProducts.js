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
	,"slow");
	$(".much2").toggle(
		  function () {
		    $(".uls2").addClass("navList");
		  },
		  function () {
		    $(".uls2").removeClass("navList");
		  }
		,1000);
	
})
