//窗体加载时
$(function(){
	//1。获取加号按钮
	
	let addBtn=$(".addBtn");
	for(let i=0;i<addBtn.length;i++){
		addBtn[i].onclick=function(){
			//改数量
			let currNum=$(this).prev().html();
			currNum++;
			//赋值
			$(this).prev().html(currNum);
//			改小计
			let price=$(this).parent().parent().prev().html().substring(1);
			let money=price*currNum;
			$(this).parent().parent().next().next().children().html(money);
			//改总价
			totalMoney();
			
		}
	}
	//2.获取减号按钮
	let reduseBtn=$(".reduseBtn");
	for(let i=0;i<reduseBtn.length;i++){
		reduseBtn[i].onclick=function(){
			let currNum=$(this).next().html();
			currNum--;
			
			if (currNum<0) {
				return;
			} else{
				$(this).next().html(currNum);
				//改小计
				let price=$(this).parent().parent().prev().html().substring(1);
				let money=price*currNum;
				$(this).parent().parent().next().next().children().html(money);
				//改总价
				totalMoney();
				
			}
		}
	}
	
	
	//3.改数量改总金额
	function totalMoney(){
		//获取表格行
		let tableRows=$("#tab")[0].rows;
//		alert($("#totalPrice").html())
			
		let sum=0;
		for(let i=1;i<tableRows.length-1;i++){
			sum+=parseInt($(tableRows[i]).children().last().prev().children().last().html());
		}
		$("#totalPrice").html(sum);
	};
	
	
	
//	4删除操作

	let delBtn=$(".delId");
	let tabRows=$("#tab")[0].rows;
	for(i=0;i<delBtn.length;i++){
		if (tabRows.length<=3) {
			$(delBtn[i]).click(function(){
				$(this).parent().empty();	
				$("#tab").children().first().empty();
				$("#tab").children().first().html("购物车中没有礼物");
				$("#tab").css({
					"color":"#999999",
					"text-align":"center",
					"line-height":"284px",
					"width":"1210px",
					"heigth":"284px"
				})
				let oA=$("<a href='index.html'>继续购物</a>");
				oA.css({
					"display":"block",
					"width":"1080px",
					"height":"73px",
					"background":"white",
					"margin":"0 auto",
					"padding-left":"130px",
					"line-height":"73px"
				})
				$("#shopingCart").append(oA);

			})
			
			
		}else{
			$(delBtn[i]).click(function(){
				$(this).parent().empty();
//				$(this).parent().html("购物车中没有礼物");
			})
		}
		
	}

})
