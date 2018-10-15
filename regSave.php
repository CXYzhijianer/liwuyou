<?php 
	header("Content-type;text/html;charset-utf-8");

	$userphone=$_POST['username'];
	$userpass-$_POST['userpass'];

	$con=mysql_connect("localhost","root","root");
	if (!$con) {
		echo "数据库连接失败";
	}else{
		mysql_selectdb("mysqldb",$con);

		//查询语句
		$sqlstr="select * from user where username='$username'";
		$result=mysql_query($sqlstr);

		$rows=mysql_num_rows($result);

		if ($rows<=0) {
			//可以添加
			$sqlstr="insert into user(username,userpass) values('$username','$userpass')";

			$result=mysql_query($sqlstr,$con);
			if ($result==1) {
				echo "1";//注册成功
			}else{
				echo "0";//注册失败
			}
		}else{
			echo "-1";//注册失败，用户名已经存在
		}
	}

 ?>