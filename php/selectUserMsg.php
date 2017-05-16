<?php
$emailLogin = $_POST["emailLogin"];
//echo $emailLogin;
include "connect.php";
$mysqli->set_charset('utf8');

/*$sql="select 发布商品信息表.商品名称,发布商品信息表.商品描述,发布商品信息表.期望价格,发布商品信息表.商品图片,发布商品信息表.讲价 from 发布商品信息表  WHERE 发布商品信息表.邮箱号='".$emailLogin."'";*/

$sql = "SELECT `商品名称`, `价格`, `发布时间`, `商品图片`, `邮箱号`, `讲价`, `交易地点`, `手机号`, `QQ`, `商品描述`, `商品分类` FROM `发布商品信息表` WHERE `邮箱号`=\"$emailLogin\"";

$res = mysqli_query($mysqli,$sql);
if (!$res){
    echo "没有查询成功！";
}
else{
    $arr = array();
    while ($rows = mysqli_fetch_array($res,MYSQLI_ASSOC)){
        $count =count($rows);//不能在循环语句中，由于每次删除 row 数据长度都减小
        for ($i =0; $i < $count;$i++){
            unset($rows[$i]); //删除冗余的数据
        }
        array_push($arr,$rows);
    }
    echo $str = json_encode($arr);

}

?>