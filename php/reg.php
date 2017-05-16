<?php
header("Content-type:application/json;charset=utf-8");
include 'connect.php';
$mysqli->set_charset('utf8');
$avatar=array("images/avatar0.png",
	          "images/avatar1.png",
	          "images/avatar2.png",
	          "images/avatar3.png",
	          "images/avatar4.png",
	          "images/avatar5.png",
	          "images/avatar6.png" ,
	          "images/avatar7.png" ,
	          "images/avatar8.png" ,
	          "images/avatar9.png" ,
	          "images/avatar10.png" ,
	          "images/avatar11.png" ,
	          "images/avatar12.png" ,
	          "images/avatar13.png" ,
	          "images/avatar14.png" ,
	          "images/avatar15.png" ,
	          "images/avatar16.png" ,
	          "images/avatar17.png" ,
	          "images/avatar18.png" ,
	          "images/avatar19.png" ,
	          "images/avatar20.png" ,
	          "images/avatar21.png" ,
	          "images/avatar22.png" ,
	          "images/avatar23.png" ,
    );
$n=rand(0,23);
$img=$avatar[$n];
$nickname=$_POST['nickname'];
$emailReg=$_POST['emailReg'];
$passwordReg=$_POST['passwordReg'];

//查询结果 测试数据库的
/*$query="select * from 个人信息表";  //创建一句SQL语句
$result = $mysqli ->query($query);  //把执行的sql语句赋给$result
print_r($result ->fetch_row());  //将结果集的第一行输出
$result ->free();      //释放查询内存
$mysqli ->close();*/      //关闭数据库

// 测试传输的值 ||插入测试
///*print_r($emailReg);
/*print_r($nickname);
print_r($passwordReg);
$qqqq = "INSERT INTO `second-hand`.`注册表`(`邮箱号`, `昵称`, `密码`) VALUES ('1234569@qq.com', 'xiaoxiao', '1234567')";*/
//$flag = $mysqli ->query($qqqq);

/*---想注册表插数据----*/
$sql1 = "INSERT INTO `second-hand`.`注册表`(`邮箱号`, `昵称`, `密码`) VALUES ('$emailReg','$nickname','$passwordReg')";
$flag1 = $mysqli ->query($sql1);
$sql2 = "INSERT INTO `second-hand`.`个人信息表`(`邮箱号`, `头像`) VALUES ('$emailReg','$img')";
$flag2 = $mysqli ->query($sql2);
if($flag1 === false || $flag2 ===false){
echo "0";
}

//$mysqli ->close();

/*$sql1="insert into 注册表  values('$emailReg','$nickname','$passwordReg',1)";
$sql2="insert into 个人信息表 values('$emailReg','','','$img')";*/
/*$mysqli->query($sql1);
$mysqli->query($sql2);*/
?>