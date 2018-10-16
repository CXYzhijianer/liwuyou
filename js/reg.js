$(function(){
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
		$("#repass").focus(function(){
			$(this).css("opacity",1)
		})
		$("#repass").blur(function(){
			var str=this.value;
			if (!(str==($("#userpass")[0].value))){
				$(this).parent().html("请重新输入前后密码不一致")
				.css(
					{
					"text-align":"left",
					color:"red",
					"font-size":"12px",
					"padding-top":"10px"
					})
			}
		})
		
		return true;
	};
	//提交表单
	if (checkForm()) {
		$("#regBtn").click(
			function(){
				let xhr=new XMLHttpRequest();
				xhr.open("post","regCheck.php",true);
				xhr.onreadystatechange=function(){
					if (xhr.readyState==4&&xhr.status==200) {
						let str=xhr.responseText;
					//-1用户已存在1（注册成功）0（注册失败）
						if (str==0) {
							$("#messageBox").css("display","block")
							.html("注册失败服务器出错！");
						}else if(str==-1){
							$(".messageBox").css(
								"display","block"
							).html("此用户已经存在,检测是否记错电话号码");
//			alert("此用户已经存在")
						}else{
							location.href="index.html"
						}
					}
				
				}
				//设置请求头
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				let str="userphone="+$("#userphone")[0].value+"&userpass="+$("#userpass")[0].value;
				xhr.send(str);
			}
		)
	}
	
})