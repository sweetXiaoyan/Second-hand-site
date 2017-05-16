<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>求购专区--辽工二手街</title>
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">
	<link rel="stylesheet" href="../css/index.css" />
	<link rel="stylesheet" type="text/css" href="../css/want.css">
	<script type="text/javascript" src="../js/common.js"></script>
	<script type="text/javascript" src="../js/jquery-2.1.4.min.js"></script>
    <script src="../js/comTool.js"></script>
	<style type="text/css">
		#user{
			display: block;
		}
		.publish a{
			text-decoration: none;
		}
	</style>
</head>
<body>
<div class="header">
		<a href="/Xihua-Second-Street-master/" class="logo-a"><img class="logo" src="../images/school-logo.jpg" alt="辽工二手街"></a>
		<div class="header-title">
			<h1><b>辽工二手街</b></h1>
			<p>最安全方便的二手市场</p>
		</div>
		<form action="#" method="post" class="search">
			<div class="search-text">
				<img src="../images/search-icon.png" alt="" />
				<div class="search-input">
					<input type="text" placeholder="搜索你想要的二货">
				</div>
			</div>
			<button class="search-submit" type="submit">搜索</button>
		</form>
		<div class="log-reg">
			<div id="user">
				<div class="user-img">
					<img src="">
				</div>
				<h4 id="username"></h4>
				<div class="usermain">
					<h3 id="hiusername"></h3>
					<ul>
						<li id="personal">个人中心</li>
						<li id="quit">退出登录</li>
					</ul>
				</div>
		    </div>
		</div>
    <script type="text/javascript">
        $.ajax({
            url:'status.php',
            data:{
            },
            dataType:"json",
            type:'POST',
            success:function(data){
                if (data=='0') {
                    return false;
                }
                else{
                    var img=data.img;
                    img="../"+img;
                    var nickname=data.nickname;
                    var emailLogin=data.emailLogin;
                    $('#user').css("display","block");
                    $(".user-img").find("img").attr("src",img);
                    document.getElementById('username').innerHTML=emailLogin;
                    document.getElementById('hiusername').innerHTML='嗨,'+nickname;
                }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown) {
                alert("请求失败!");
            }
        });
        $('#user').hover(function(){
            $('.log-reg').css('border-bottom','2px solid #3EB196');
            $('.usermain').css('display','block');
        },function(){
            $('.log-reg').css('border-bottom','none');
            $('.usermain').css('display','none');
        });
        $('#quit').bind("click",function(){
            $.ajax({
                url:'../php/quit.php',
                data:{
                },
                dataType:"text",
                type:'POST',
                success:function(){
                    window.location.href="../index.php";
                },
                error:function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("请求失败!");
                }
            })
        });
    </script>
		<div class="search-hots">
			<span>热门：</span>
			<a class="hots" href="/category2" target="_blank">自行车</a>
			<a class="hots" href="/category3" target="_blank">电动车</a>
			<a class="hots" href="/category6" target="_blank">笔记本</a>
			<a class="hots" href="/category40" target="_blank">教材</a>
		</div>
	</div>
<!-- header结束 -->
	<div class="sidebar">
		<ul>
		    <li class="li-title">商品分类</li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/1.png" alt=""></i><h5>校园代步</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/2.png" alt=""></i><h5>手机</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/3.png" alt=""></i><h5>电脑</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/4.png" alt=""></i><h5>数码配件</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/5.png" alt=""></i><h5>数码</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/6.png" alt=""></i><h5>电器</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/7.png" alt=""></i><h5>运动健身</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/8.png" alt=""></i><h5>衣物伞帽</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/9.png" alt=""></i><h5>图书教材</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/10.png" alt=""></i><h5>租赁</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/11.png" alt=""></i><h5>生活娱乐</h5></a></li>
			<li class="side-li"><a href="#"><i class="li-icon"><img src="../images/12.png" alt=""></i><h5>其他</h5></a></li>
		</ul>
	</div>
<!-- sidebar结束 -->
	<div class="main">
		<div class="container">
            <script>
                $(".container").empty();
            </script>
			<div class="container-title"></div>
<?php
include 'connect.php';
$mysqli->set_charset('utf8');
 $sql="select 个人信息表.头像,求购表.商品名称,求购表.商品描述,求购表.期望价格,求购表.交易地点,求购表.发布时间,注册表.昵称,求购表.手机号,求购表.QQ from 注册表 join 求购表 on 注册表.邮箱号=求购表.邮箱号 join 个人信息表 on 求购表.邮箱号=个人信息表.邮箱号";

/*$sql="select 个人信息表.头像,求购表.商品名称,求购表.商品描述,求购表.期望价格,求购表.交易地点,求购表.发布时间,注册表.昵称,求购表.手机号,求购表.QQ from 求购表 on 注册表.邮箱号 = 求购表.邮箱号 join 个人信息表 on 求购表.邮箱号=个人信息表.邮箱号";*/


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
 foreach ($rows[0] as $wantgoods):
  ?>
			<div class="wantgoods">
				<div class="wantuser">
					<div class="wantuserimg">
						<img src="<?php echo '../'.$wantgoods['头像']; ?>">
					</div>
				</div>
				<div class="goodsinfor">
					<p class="goodsname">[求购]&nbsp&nbsp<span class="goodsname1"><?php echo $wantgoods['商品名称']; ?></span></p>
					<p class="goodsdepict"><?php echo $wantgoods['商品描述']; ?></p>
					<p class="infor">
					<span class="tit">期待价格:</span><span class="goodsjg"><?php echo $wantgoods['期望价格']; ?></span>
					<span class="tit">交易地点:</span><span class="goodsdd"><?php echo $wantgoods['交易地点']; ?></span>
					<span class="pubtime"><?php echo $wantgoods['发布时间']; ?></span>
					</p>
					<i><img src="../images/ico-per.png"></i>
					<span class="nick"><?php echo $wantgoods['昵称']; ?></span>
					<div class="total">
                        <span class="contact"></span>
                        <p class="con">
                            <i><img src="../images/icon_arr.png"></i>
                            <span class="tit" style="color: rgb(62,177,150)">手机:</span>
                            <span class="phone"><?php echo $wantgoods['手机号']; ?></span>
                            <span class="tit" style="color: rgb(62,177,150)">QQ:</span>
                            <span class="qq"><?php echo $wantgoods['QQ']; ?></span>
                        </p>
                    </div>
				</div>
			</div>
<?php
endforeach;
 ?>
		</div><!-- container结束 -->

        <!------这里不能引用头文件，资源找不到----->
		<div class="banner">
			<div class="publish">
				<a href="../fabuqiugouUI.php"><h3>发布求购</h3></a>
			</div>
			<div class="help">
				<img src="../images/help.png" alt="">
			</div>
			<div class="download">
				<img src="../images/new_web_qrcode.png" alt="下载客户端">
			</div>
		</div><!-- banner结束 -->
		<div class="footer">
			<div class="footer-top">
				<div class="footer-top1"></div>
				<div class="footer-top2"></div>
			</div>
			<a href="#">产品意见反馈</a>
			<p> ©2014-2015 和平科技 版权所有 鄂ICP备14003265号-2 </p>
		</div><!-- footer结束 -->
	</div><!-- main结束 -->
	<div id="returntop">
	</div>
</body>
<script src="../js/fabuqiugou.js"></script>
<script type="text/javascript">
	$('.contact').click(function(){
//		$('.con').css('display','inline-block');
        $(this).siblings(".con").css('display','inline-block');

        /*------侧边栏导航的问题------*/
        comTool.navLinks('selectClassify.php','../classfiyProducts.php');

	});
</script>
</html>