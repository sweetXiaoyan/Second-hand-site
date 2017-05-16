<?php
header("Content-type:text/html;charset=utf-8");
/*----将提问信息插入数据库----*/
$askContent = $_POST["askContent"];
$time = $_POST["time"];
$emailLogin = $_POST["emailLogin"];
$goodsName = $_POST["goodsName"];
include 'connect.php';
$mysqli->set_charset('utf8');

$sql1 = "INSERT INTO `second-hand`.`商品交易相关信息表`(`商品名称`, `发布时间`,`邮箱号`,`留言信息`) VALUES ('$goodsName','$time','$emailLogin','$askContent')";
$req1=$mysqli->query($sql1);

if($req1){
    echo '1';
}
else{
    echo '0';
}

//echo $askContent;
?>