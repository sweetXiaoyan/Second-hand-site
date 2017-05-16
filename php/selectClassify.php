<?php
header("Content-type:text/html;charset=utf-8");
include 'connect.php';
$mysqli->set_charset('utf8');
$flag = $_POST['flag'];
if($flag =="校园代步"){
    selectDatas($mysqli,$flag);

}
else if($flag =="手机"){
    selectDatas($mysqli,$flag);
}
else if($flag =="生活娱乐"){
    selectDatas($mysqli,$flag);
}
else if($flag =="电脑"){
    selectDatas($mysqli,$flag);
}
else if($flag =="数码配件"){
    selectDatas($mysqli,$flag);
}
else if($flag =="数码"){
    selectDatas($mysqli,$flag);
}
else if($flag =="电器"){
    selectDatas($mysqli,$flag);
}
else if($flag =="运动健身"){
    selectDatas($mysqli,$flag);
}
else if($flag =="衣物伞帽"){
    selectDatas($mysqli,$flag);
}
else if($flag =="图书教材"){
    selectDatas($mysqli,$flag);
}
else if($flag =="租赁"){
    selectDatas($mysqli,$flag);
}
else if($flag =="生活娱乐"){
    selectDatas($mysqli,$flag);
}
else if($flag =="其他"){
    selectDatas($mysqli,$flag);
}
function selectDatas($mysqli,$flag){
    $sql = "SELECT `商品名称`, `价格`,`发布时间`, `商品图片`, `邮箱号`, `讲价`, `交易地点`, `手机号`, `QQ`, `商品描述` FROM `发布商品信息表` WHERE `商品分类`=\"$flag\"";
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
}
?>