<?php 
$mysqli = new mysqli('localhost','root','','second-hand');
if($mysqli->connect_errno){
	die('数据库连接失败!'.$mysqli->connect_error);
}
?>