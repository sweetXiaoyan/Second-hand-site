<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>辽工二手街--最安全方便的二手市场</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<!--	 <script type="text/javascript" src="js/index.js"></script>-->
	<script type="text/javascript" src="js/common.js"></script>
    <script src="js/comTool.js"></script>

</head>
<body>
<?php include "header.php"?>
    <!-- header结束 -->
<?php include "slider.php"?>
<!-- sidebar结束 -->
	<div class="main">
		<div class="container">
			<div class="container-title">
				<a href="#">最新发布</a>
				<p>-----------------------------------------------------------------------------------------------------</p>
				<h3 id="pubWant">求购专区</h3>
			</div>
			<div class="container-main">
<?php
include 'php/connect.php';
$mysqli->set_charset('utf8');

 $sql="select 个人信息表.头像,发布商品信息表.商品名称,发布商品信息表.价格,发布商品信息表.发布时间,注册表.昵称,发布商品信息表.商品图片 from 注册表 join 发布商品信息表 on 注册表.邮箱号=发布商品信息表.邮箱号 join 个人信息表 on 发布商品信息表.邮箱号=个人信息表.邮箱号";

 if($mysqli->multi_query($sql)){
	do{
	    if($mysqli_result=$mysqli->store_result()){
	        $rows[]=$mysqli_result->fetch_all(MYSQL_ASSOC);
	    }
	  }
	while($mysqli->more_results() && $mysqli->next_result());
}
?>
<?php
 foreach ($rows[0] as $goods):
 ?>
				<div class="Goods">
					<div class="Goodsimg">
						<img src="<?php echo substr($goods['商品图片'], 3); ?>">
                        <script>
                        </script>
					</div>
					<span class="Goodsprice">¥<?php echo $goods['价格']; ?></span>
					<div class="Goodsname"><?php echo $goods['商品名称']; ?></div>
					<div class="User">
						<div class="Userimg"><img src="<?php echo $goods['头像']; ?>" alt="" /></div>
						<span class="Username"><?php echo $goods['昵称']; ?></span>
					<!--	<span class="Time"><?php /*echo substr($goods['发布时间'],0,10); */?></span>-->
                        <span class="Time"><?php echo $goods['发布时间']; ?></span>
					</div>
				</div>
<?php
endforeach;
 ?>
			</div>
		</div><!-- container结束 -->
 <?php include "banner-and-footer.php"?>
        <!-- banner结束 -->
        <!-- footer结束 -->
	</div><!-- main结束 -->
	<div id="returntop">
	</div>
    <!----登录界面-->
<?php include "login-UI.php"?>

<?php include "reg- UI.php"?>
    <!------注册成功-->
<?php include "reg-yes-UI.php"?>
    <!--登陆注册时的灰色蒙版-->
	<div class="trans"></div>
<?php include "footer.php"?>
</body>
<script>
    $(function () {
        comTool.navLinks('php/selectClassify.php','classfiyProducts.php');
        $(".search-submit").click(function () {
            window.open("searchUI.php");
        })
    })
</script>
</html>