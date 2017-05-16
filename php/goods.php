<!DOCTYPE html>
<?php
session_start();
$goodsname=$_SESSION['goodsname'];
$nickname=$_SESSION['name'];
$price=$_SESSION['price'];
$time=$_SESSION['time'];
$goodsimg=$_SESSION['goodsimg'];
$xiaodao=$_SESSION['xiaodao'];
$loco=$_SESSION['loco'];
$iphone=$_SESSION['iphone'];
$QQ=$_SESSION['QQ'];
$produce = $_SESSION['produce'];

/*include 'connect.php';
$mysqli->set_charset('utf8');
$sql="select 发布商品信息表.商品描述 from  发布商品信息表 where 发布商品信息表.发布时间='$time'";
$mysqli_result=$mysqli->query($sql);
$row=$mysqli_result->fetch_row();
$produce=$row;

*/

 ?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>辽工二手街--最安全方便的二手市场</title>
	<link rel="stylesheet" type="text/css" href="../css/index.css">
	<link rel="stylesheet" type="text/css" href="../css/goods.css">
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">
    <script type="text/javascript" src="../js/common.js"></script>
	<script type="text/javascript" src="../js/jquery-2.1.4.min.js"></script>
    <script src="../js/comTool.js"></script>
	<style type="text/css">
		#user{
			display: none;
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
		<!--<div class="log-reg">
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
		</div>-->
        <div class="log-reg">
            <div id="logReg">
                <div class="button" id="loginButton">登录</div>
                <div class="button" id="regButton">注册</div>
            </div>
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
				url:'../php/status.php',
				data:{
				},
				dataType:"json",
				type:'POST',
			    success:function(data){
			    	if (data=='0') {
			    		return false;
			    	}
			    	else{
			    	    $("#user").css("display","block");
			    	    $("#logReg").css("display","none");

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
					url:'php/quit.php',
					data:{
					},
					dataType:"text",
					type:'POST',
				    success:function(){
				    	    window.location.href="index.html";
				    },
				    error:function(XMLHttpRequest, textStatus, errorThrown) {
	                        alert("请求失败!");
	                    }
				})
			});
		    $("#loginButton").click(function () {
                comTool.loginWithGoods("login");
            })
	    </script>
		<div class="search-hots">
			<span>热门：</span>
			<a class="hots" href="/category2" target="_blank">自行车</a>
			<a class="hots" href="/category3" target="_blank">电动车</a>
			<a class="hots" href="/category6" target="_blank">笔记本</a>
			<a class="hots" href="/category40" target="_blank">教材</a>
		</div>
	</div><!-- header结束 -->
	<div class="sidebar">
		<ul>
		    <li class="li-title">商品分类</li>
			<li class="side-li">
                <a href="#">
                    <i class="li-icon">
                        <img src="../images/1.png" alt="">
                    </i>
                    <h5>校园代步</h5>
                </a>
            </li>
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
			<div class="container-title">
			</div>
			<div class="container-main">
				<div class="GoodsImage">
				  <img src="<?php echo $goodsimg; ?>" alt="">
				</div>
				<div class="GoodsInfor">
					<div class="GoodsInfortit">
						<p><?php echo $goodsname; ?></p>
						<span class="price"><?php echo $price; ?></span>
						<span class="jj"><?php echo $xiaodao; ?></span>
					</div>
					<div class="GoodsInformain">
						<sapn>交易地点:</sapn>
						<sapn>卖家</sapn>
						<sapn>手机</sapn>
						<sapn>QQ</sapn>
						<sapn>发布时间</sapn>
						<sapn>喜欢 <i class="icon-heart"></i></sapn>
						<sapn>联系主人:</sapn>
					</div>
					<div class="Informain">
						<sapn><?php echo $loco; ?></sapn>
						<sapn><?php echo $nickname; ?></sapn>
						<sapn><?php echo $iphone; ?></sapn>
						<sapn><?php echo $QQ; ?></sapn>
						<sapn class="goodsTime"><?php echo $time; ?></sapn>
						<sapn>收藏 <i class="icon-github"></i></sapn>
						<sapn class="goods-chat"><i class="icon-chat"></i>与他对话 </sapn>
					</div>
				</div>
			</div>

            <!--tab切换，给卖家留言---->
             <div class="goods-tab">
                 <ul>
                     <li class="active">宝贝介绍</li>
                     <li>买家提问</li>
                     <li>更多细节</li>
                 </ul>
                <div class="tab-cut">
                    <div class="goods-show">
                        <p class="goods-tips">如遇到以下情况可能是诈骗行为：<span>1.宝贝价格异常低；2.卖家不同意验货；3.卖家要求直接汇款。</span></p>
                        <h3>宝贝介绍</h3>
                        <p class="introduce"><?php echo $produce; ?></p>
                    </div>
                    <div class="goods-ask">
                        <p class="goods-tips">如遇到以下情况可能是诈骗行为：<span>1.宝贝价格异常低；2.卖家不同意验货；3.卖家要求直接汇款。</span></p>
                        <h3>提问信息</h3>
                        <div class="ask-content">
                        </div>
                        <div class="ask-submit">
                            <input type="text" class="ask-con">
                            <button id="ask_sub" class="ask-btn">提交问题</button>
                        </div>
                    </div>
                    <div class="goods-more">
                        <p class="goods-tips">如遇到以下情况可能是诈骗行为：<span>1.宝贝价格异常低；2.卖家不同意验货；3.卖家要求直接汇款。</span></p>
                        <h3>更多细节</h3>
                        <p class="introduce">ffffffffffffffffffffffffff</p>
                    </div>
                </div>
             </div>
		</div>
        <!-- container结束 -->
		<!--<div class="banner">
			<div class="help">
				<img src="../images/help.png" alt="">
			</div>
			<div class="download">
				<img src="../images/new_web_qrcode.png" alt="下载客户端">
			</div>
		</div><!-- banner结束 -->
		<!--<div class="footer">
			<div class="footer-top">
				<div class="footer-top1"></div>
				<div class="footer-top2"></div>
			</div>
			<a href="#">产品意见反馈</a>
			<p> ©2014-2015 和平科技 版权所有 鄂ICP备14003265号-2 </p>
		</div>-->
        <!-- footer结束 -->
	</div><!-- main结束 -->
    <!----登录界面-->
    <div class="login">
        <div class="login-title">
            <img src="../images/logo.png" alt="">
            <h4>大学生的二手街</h4>
        </div>
        <div class="login-main">
            <form method="post" onkeydown="if(event.keyCode==13) return false;">
                <label>学号</label>
                <input type="text" name="email" id="emailLogin">
                <br/>
                <label>密码</label>
                <input type="password" name="password" id="passwordLogin">
                <br/>
                <button  type="button" id="buttonLogin">登录二手街</button>
                <br/>
                <a href="#" id="logina">马上注册</a>

            </form>
        </div>
    </div>


    <div class="reg">
        <div class="reg-title">
            <img src="../images/logo.png" alt="">
            <h4>大学生的二手街</h4>
        </div>
        <div class="reg-main">
            <form onkeydown="if(event.keyCode==13) return false;" method="post">
                <input type="text" placeholder="昵称" id="nickname" name="nickname" />
                <br/>
                <input type="text" placeholder="请填写学号" id="emailReg" name="emailReg" />
                <br/>
                <input type="password" placeholder="密码" id="passwordReg" name="passwordReg" />
                <br/>
                <input type="password" placeholder="确认密码" id="confirm" />
                <br/>
                <button  type="button" id="buttonReg">注册二手街</button>
                <br/>
                <a href="#" id="rega">立即登录</a>
            </form>
        </div>
    </div>
    <!------注册成功-->
    <div class="regyes">
        <div class="regyes-title">
            <img src="../images/logo.png" alt="">
            <h4>大学生的二手街</h4>
        </div>
        <div class="regyes-main">
            <h4>注册成功,欢迎你的到来!</h4>
            <button  type="submit" id="buttonRegyes">立即登录</button>
        </div>
    </div>
    <!--登陆注册时的灰色蒙版-->
    <div class="trans"></div>
    <script src="../js/goods.js"></script>

</body>
</html>