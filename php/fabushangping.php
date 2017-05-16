<?php
header("Content-type:text/html;charset=utf-8");
include 'connect.php';
$mysqli->set_charset('utf8');
session_start();
$email=$_SESSION['emailLogin'];
$file = $_FILES['file'];
$name = $file['name'];
$type = strtolower(substr($name,strrpos($name,'.')+1));
$allow_type = array('jpg','jpeg','gif','png');
if(!in_array($type, $allow_type)){
  return ;
}
if(!is_uploaded_file($file['tmp_name'])){
  return ;
}
$upload_path = "../userphoto/";
move_uploaded_file($file['tmp_name'],$upload_path.$file['name']);
$src=$upload_path.$file['name'];  // 图片地址
$goodsName=$_POST['goodsName']; //商品名称
$goodsDepict=$_POST['goodsDepict']; //商品描述
$loco=$_POST['loco'];  //地址
$price=$_POST['price']; //价格
$classify=$_POST['classify'];//分类
$classifyArr=array("1" =>'校园代步',"2" =>'手机',"3" =>'电脑',"4" =>'数码配件',"5" =>'数码',"6" =>'电器',"7"=>'运动健身',"8" =>'衣物伞帽',"9" =>'图书教材',"10"=>'租赁',"11" =>'生活娱乐',"12"=>'其他');
if($classify==null ||$classify =="1"){
    $classify = "1";
}
$classifyName = $classifyArr[$classify];

$radio=$_POST['radio']; //讲价
$sellPriceArr =array("0" =>"可讲价","1" =>"拒绝讲价");
$sell = $sellPriceArr[$radio];
//echo $sell;
$phone=$_POST['phone']; //手机机号
$qq=$_POST['qq'];  //qq号码
date_default_timezone_set('PRC');//解决时差问题
$time=date('Y-m-d H:i:s', time());  //时间
$emails = $_POST['email'];

//print_r($_POST);
/*$sql="insert into 发布商品信息表 values('$email','$goodsName','$goodsDepict','$loco','$price','$classify','$radio','$phone','$qq','$src','$time')";
$req=$mysqli->query($sql);*/

/*---商品交易相关信息表插入数据---*/
/*$sql1 = "INSERT INTO `second-hand`.`商品交易相关信息表`(`商品名称`, `发布时间`,`邮箱号`) VALUES ('$goodsName','$time','$emails')";
$req1=$mysqli->query($sql1);*/

$sql2 = "INSERT INTO `second-hand`.`发布商品信息表`(`商品名称`, `商品描述`, `价格`, `交易地点`, `发布时间`, `手机号`, `QQ`, `讲价`,`商品图片`,`商品分类`,`邮箱号`) VALUES ('$goodsName','$goodsDepict','$price','$loco','$time','$phone','$qq','$sell','$src','$classifyName','$emails')";
$req=$mysqli->query($sql2);
if ($req) {
	echo "1";
} else {
	echo "0";
}
 ?>