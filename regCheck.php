<?php 	
	header('Content-type:text/html;chartset=utf-8');
//1,接受前端发送的数据
	$userphone=$_POST['userphone'];
	$userpass=$_POST['userpass'];
//2、处理（连接数据库，保存数据）
	//连接数据库()
		// echo $userpass;
		// echo $username;
	$con=mysql_connect('localhost','root','root');
	//判断数据库
	if (!$con) {
		echo "连接数据库失败";
	}else{
		//选择数据库
		mysql_select_db('mysqldb',$con);
		//设置SQL语句（先判断是否有此记录;
		$sqlstr="select * from user where userphone='$userphone'";
		// echo $sqlstr;
		//执行语句
		$result=mysql_query($sqlstr,$con);
		//获取行
		$rows=mysql_num_rows($result);
		// echo $rows;
		if ($rows<=0) {
			//2）、添加	
			$sqlstr="insert into user(userphone,userpass) values('$userphone','$userpass')";
			//执行插入
			$result=mysql_query($sqlstr,$con);
			// echo $result;（找错）
			if($result==1){
//				echo "1";//注册成功；
			header("location:index.html");
			}else{
				echo "0";//注册失败
			}
		}else{
			echo "-1";//注册失败：用户名已经存在，
		}
	}
 ?>