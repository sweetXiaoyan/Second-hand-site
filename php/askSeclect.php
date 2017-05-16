<?php
header("Content-type:text/html;charset=utf-8");
include 'connect.php';
$mysqli->set_charset('utf8');
/*--自动更新---*/
$goodsName = $_POST['goodsName'];
$time = $_POST['time'];
/*    $sql1="select `商品交易相关信息表`.`留言信息`, `商品交易相关信息表`.`邮箱号` from 商品交易相关信息表 where 发布时间='$time' and `留言信息`=\"$emailLogin\"";*/

$sql = "SELECT `留言信息`, `邮箱号` FROM `商品交易相关信息表` WHERE `发布时间`=\"$time\" AND `商品名称`=\"$goodsName\"";
    $res = mysqli_query($mysqli,$sql);
    $arr = array();
    while ($rows = mysqli_fetch_array($res,MYSQLI_ASSOC)){
        $count =count($rows);//不能在循环语句中，由于每次删除 row 数据长度都减小
        for ($i =0; $i < $count;$i++){
            unset($rows[$i]); //删除冗余的数据
        }
        array_push($arr,$rows);
    }
    echo $str = json_encode($arr);

?>