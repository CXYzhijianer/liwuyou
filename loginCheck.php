<?php 
	header("Content-type:text/html;chartset=utf-8");
	//接收数据
	$userphone=$_POST['userphone'];
	$userpass=$_POST['userpass'];
	//2、处理（连接数据库，保存数据）
	//1)、建立连接（搭桥）
	$con=mysql_connect("localhost","root","root");
	if (!$con) {
		echo "连接错误";
	}else{
		//2）、选择数据库（目的地）
		mysql_select_db("mysqldb",$con);
		//3）、执行SQL数据（运输数据）
		$sqlstr="select * from user where userphone='$userphone' and userpass='$userpass'";
		//4)执行Sql语句(结果为表格)
		$result=mysql_query($sqlstr,$con);
		//5)关闭数据库
		mysql_close($con);
	//3响应
		$rows=mysql_num_rows($result);
		if ($rows==0)
		 {
		 	// echo "登录失败";
			echo "0";//登录失败
		}else{
			echo "1";//登陆成功
			header("location:index.html");
		}
	}
 ?>