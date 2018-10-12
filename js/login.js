$(function(){
	//表单效果
	let ob=$("form div:nth-child(9)")
	let oA=$("#QQ")[0];
	oA.onmouseenter=function(){
 	$("#QQ span:nth-child(1)").css("background-position","99px 66px")
 		$("#QQ span:nth-child(1)")[0].style.transition="all 1s";
 		 $("#QQ span:nth-child(2)")[0].style.color="red";
	 }
	 oA.onmouseleave=function(){
	 $("#QQ span:nth-child(1)").css(
	 		"background-position","99px 32px"
	 	)
	 $("#QQ span:nth-child(1)")[0].style.transition="all 1s";
	 $("#QQ span:nth-child(2)")[0].style.color="#333333";
 	}

 	let weibo=$("#weibo")[0];
	weibo.onmouseenter=function(){
 	$("#weibo span:nth-child(1)").css("background-position","65px 66px")
 		$("#weibo span:nth-child(1)")[0].style.transition="all 1s";
 		 $("#weibo span:nth-child(2)")[0].style.color="red";
	 }
	 weibo.onmouseleave=function(){
	 $("#weibo span:nth-child(1)").css(
	 		"background-position","65px 32px"
	 	)
	 $("#weibo span:nth-child(1)")[0].style.transition="all 1s";
	 $("#weibo span:nth-child(2)")[0].style.color="#333333";
 	}

 	let zfb=$("#zfb")[0];
	zfb.onmouseenter=function(){
 	$("#zfb span:nth-child(1)").css("background-position","32px 66px")
 		$("#zfb span:nth-child(1)")[0].style.transition="all 1s";
 		 $("#zfb span:nth-child(2)")[0].style.color="red";
	 }
	 zfb.onmouseleave=function(){
	 $("#zfb span:nth-child(1)").css(
	 		"background-position","32px 32px"
	 	)
	 $("#zfb span:nth-child(1)")[0].style.transition="all 1s";
	 $("#zfb span:nth-child(2)")[0].style.color="#333333";
 	}
	//表单验证
	function checkForm(){
		$("#userphone").focus(function(){
			$(this).css("opacity",1)
		})
		$("#userphone").blur(function(){
			var str=this.value;
			if (str.includes("@")) {
				 var reg =/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				if (!reg.test(str)) {
					$(this).parent().html("输入正确邮箱号").css({
						"text-align":"left",
						color:"red",
						"font-size":"12px",
						"padding-top":"10px"
					});
				}
			}else{
				reg=/^1[3-9]\d{9}$/;
				if (!reg.test(str)) {
					$(this).parent().html("输入正确的手机号").css({
						"text-align":"left",
						color:"red",
						"font-size":"12px",
						"padding-top":"10px"
					});
				}
			}	
		});
		$("#userpass").focus(function(){
			$(this).css("opacity",1)
		})
		$("#userpass").blur(
			function(){
				var str=this.value;
				if (str.length<6||str.length>12) {
					$(this).parent().html("请输入6到12密码")
					.css(
					{
					"text-align":"left",
					color:"red",
					"font-size":"12px",
					"padding-top":"10px"
					})
				}
			}
		);
		return true;
	}
	//免登录
	if (checkForm()) {
	 	$("#userphone").value=getCookie("userphone");
	 	$("#userpass").value=getCookie("userpass");
	 	//点击提交
	 	$("#loginBtn").click(
	 		function(){
	 			//保存用户信息
	 			var userphone=$("#userphone").value;
	 			var userpass=$("#userpass").value;
	 			var mianlogin=$("#checkbtn")[0];
	 			if (mianlogin.checked) {
	 				//添加cookie
	 				addCookie("userphone",userphone,30);
	 				addCookie("userpass",userpass,30);
	 			}
			//发送Ajax请求
				if (checkForm()) {
					$("#loginBtn").click(
						function(){
							let xhr=new XMLHttpRequest();
							xhr.open("post","loginCheck.php",true);
							xhr.onreadystatechange=function(){
								if (xhr.readyState==4&&xhr.status==200) {
									let str=xhr.responseText;
									if (str=="0") {
										alert("登录失败，请重新输入信息");
										$("#userphone").value='';
										$("#userpass").value='';
									}
								}
							}
							//设置请求头
							xhr.setRequestHeader("Content-type","application/x-www-from-urlencoded");
							let str="userphone="+$("#userphone").value+"&userpass="+$("#userpass").value
							//发送请求
							xhr.send(str);
						}
					);

				}	
	 		}
	 	);
	}
});