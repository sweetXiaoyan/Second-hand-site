<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>发布商品--辽工二手街</title>
	<link rel="stylesheet" href="css/index.css"/>
	<link rel="stylesheet" type="text/css" href="css/fubushangping.css">
	<script type="text/javascript" src="js/common.js"></script>
	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
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
<!--<div class="header">
	<a href="/Xihua-Second-Street-master/" class="logo-a"><img class="logo" src="images/school-logo.jpg" alt="辽工二手街"></a>
	<div class="header-title">
		<h1><b>辽工二手街</b></h1>
		<p>最安全方便的二手市场</p>
	</div>
	<form action="#" method="post" class="search">
		<div class="search-text">
			<img src="images/search-icon.png" alt="" />
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
	<div class="search-hots">
		<span>热门：</span>
		<a class="hots" href="/category2" target="_blank">自行车</a>
		<a class="hots" href="/category3" target="_blank">电动车</a>
		<a class="hots" href="/category6" target="_blank">笔记本</a>
		<a class="hots" href="/category40" target="_blank">教材</a>
	</div>
</div>-->
<?php include "header.php";?>
<!-- header结束 -->
<script type="text/javascript">
    $("#logReg").css("display","none");
    $.ajax({
        url:'php/status.php',
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
            url:'php/quit.php',
            data:{
            },
            dataType:"text",
            type:'POST',
            success:function(){
                window.location.href="index.php";
            },
            error:function(XMLHttpRequest, textStatus, errorThrown) {
                alert("请求失败!");
            }
        })
    });
</script>

<div class="sidebar">
	<ul>
		<li class="li-title">商品分类</li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/1.png" alt=""></i><h5>校园代步</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/2.png" alt=""></i><h5>手机</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/3.png" alt=""></i><h5>电脑</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/4.png" alt=""></i><h5>数码配件</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/5.png" alt=""></i><h5>数码</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/6.png" alt=""></i><h5>电器</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/7.png" alt=""></i><h5>运动健身</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/8.png" alt=""></i><h5>衣物伞帽</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/9.png" alt=""></i><h5>图书教材</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/10.png" alt=""></i><h5>租赁</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/11.png" alt=""></i><h5>生活娱乐</h5></a></li>
		<li class="side-li"><a href="#"><i class="li-icon"><img src="images/12.png" alt=""></i><h5>其他</h5></a></li>
	</ul>
</div><!-- sidebar结束 -->
<div class="main">
	<div class="container">
		<div class="container-title">
		</div>
		<div class="container-main">
			<form id="uploadForm" method="POST" enctype="multipart/form-data">
				<!--添加照片位置-->
				<div class="goods-img">
					<div class="bk">
						<div class="flie-img">
							<input type="file" name="file" id="inputfile1" accept="image/*" capture="camera"></div>
					</div>
					<div class="file">
				<!--		<input type="file" id="picture[]" name="picture[]"  accept="image/*" capture="camera" multiple="multiple" size =22>-->
						<input type="file" id="inputfile2" name="picture[]"  accept="image/*" capture="camera" multiple="multiple" size =22>
					</div>
					<div class="prompt">最多上传四张图片，支持jpg、png、gif格式</div>
				</div>
				<div class="goods-infor">
					<label for="">商品名称</label>
					<input type="text" name="goodsName" id="goodsName" placeholder="少于25字">
					<br/>
					<label for="">商品详情</label>
					<textarea id="goodsDepict" name="goodsDepict" placeholder="建议写物品用途,新旧程度,原价等信息,至少15个字"></textarea>
					<br/>
					<label>交易地点</label>
					<input type="text" name="loco" id="loco" placeholder="宿舍,教学楼,食堂等">
					<br/>
					<label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp价格</label>
					<input type="text" name="price" id="price">
					<br/>
					<label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分类</label>
					<select name="select" id="select">
						<option value="1">校园代步</option>
						<option value="2">手机</option>
						<option value="3">电脑</option>
						<option value="4">数码配件</option>
						<option value="5">数码</option>
						<option value="6">电器</option>
						<option value="7">运动健身</option>
						<option value="8">衣物伞帽</option>
						<option value="9">图书教材</option>
						<option value="10">租赁</option>
						<option value="11">生活娱乐</option>
						<option value="12">其他</option>
					</select>
					<input type="hidden" id="classify" value=""  name="classify"/>
					<br/>
					<label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp讲价</label>
					<input type="radio" name="radio" value="1">可小刀
					<input type="radio" name="radio" value="0">不可小刀
					<br/>
					<label for="">联系方式</label>
					<hr />
					<label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp手机</label>
					<input type="text" name="phone" id="phone">
					<br/>
					<label for="">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspQQ</label>
					<input type="text" name="qq" id="qq">
					<br/>
					<button type="submit" value="submit" name="submit" id="submit-publish">马上发布</button>
				</div>
			</form>
		</div>
	</div><!-- container结束 -->
	<?php include "banner-and-footer.php"?>
    <!-- banner结束 -->
    <!-- footer结束 -->
</div><!-- main结束 -->
<script type="text/javascript" src="js/fabushangping.js"></script>
</body>

</html>