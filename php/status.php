<?php
header("Content-type:application/json;charset=utf-8");
session_start();
/*---isset函数检测变量是否设置,没设置或者为null返回 false

同时时检查多个变量时，每个单项都符合上一条要求时才返回 TRUE，否则结果为 FALSE

$_SESSION是服务器端的cookie，浏览器关闭前，和session销毁前，$_SESSION中的数据可以一直用(除了重新赋值) */
//$emailLogin=$_SESSION['emailLogin'];
if (isset($_SESSION['emailLogin'])) {
	$emailLogin=$_SESSION['emailLogin'];
	$nickname=$_SESSION['nickname'];
    $img=$_SESSION['img'];
    echo json_encode(array('emailLogin' => "$emailLogin",'nickname'=>"$nickname",'img'=>"$img"));
} else {   //未登录
	echo "0";
}
 ?>