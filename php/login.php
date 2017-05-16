<?php
header("Content-type:application/json;charset=utf-8");
include 'connect.php';
session_start();
$_SESSION['emailLogin']=null;
$_SESSION['nickname']=null;
$_SESSION['img']=null;
$mysqli->set_charset('utf8');
$emailLogin=$_POST['emailLogin'];
$passwordLogin=$_POST['passwordLogin'];
$sql1="select 昵称 from 注册表 where 邮箱号='$emailLogin' and 密码='$passwordLogin' limit 1";
$mysqli_result=$mysqli->query($sql1);
if ($mysqli_result && $mysqli_result->num_rows>0) {
    $_SESSION['emailLogin'] = $emailLogin;
    $row=$mysqli_result->fetch_row();
    $nickname=$row['0'];
    $_SESSION['nickname'] = $nickname;
	$sql2="select 头像 from 个人信息表 where 邮箱号='$emailLogin'limit 1";
	$mysqli_result=$mysqli->query($sql2);
	$row=$mysqli_result->fetch_row();
	$img=$row['0'];
    $_SESSION['img'] = $img;
    echo json_encode(array('nickname' =>"$nickname" ,'img'=>"$img","emailLogin"=>$emailLogin ));
} else {
	echo '0';
}

?>