<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="stylesheet" type="text/css" href="css/fabuqiugou.css">
	<script type="text/javascript" src="js/common.js"></script>
	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    <script src="js/comTool.js"></script>
	<title>发布求购--辽工二手街</title>
	<style type="text/css">
		#user{
			display: block;
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
		<script type="text/javascript">
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
			    		$('#user').css("display","block");
			    		$(".user-img").find("img").attr("src",img);
			    		document.getElementById('username').innerHTML=nickname;
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
				    	    window.location.href="http://localhost/Xihua-Second-Street-master/index.php";
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
	</div>-->
    <?php include "header.php";?>

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
    <!-- header结束 -->
    <?php include "slider.php"?>
    <!-- sidebar结束 -->
	<div class="main">
		<div class="container">
			<div class="container-title">
			</div>
			<div class="container-main">
				<form  method="post">
					<label for="">商品名称</label>
					<input type="text" name="" id="goodsName" placeholder="少于25字">
					<br/>
					<label for="">商品描述</label>
					<textarea id="goodsDepict"></textarea>
					<br/>
					<label>期望价格</label>
					<input type="text" name="" id="expectedPrice">
					<br/>
					<label>交易地点</label>
					<input type="text" name="" id="loco" placeholder="宿舍,教学楼,食堂等">
					<br/>
					<label for="">联系方式</label>
					<hr />	
					<label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp手机</label>
					<input type="text" name="" id="phone">
					<br/>
					<label for="">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspQQ</label>
					<input type="text" name="" id="qq">
					<br/>
					<button type="button" id="submit-publish" >马上发布</button>
					<button type="button" id="quit-publish" >取消发布</button>
				</form>
			</div>
		</div><!-- container结束 -->
		<div class="banner">
			<div class="help">
				<img src="images/help.png" alt="">
			</div>
			<div class="download">
				<img src="images/new_web_qrcode.png" alt="下载客户端">
			</div>
		</div><!-- banner结束 -->
		<div class="footer">
			<div class="footer-top">
				<div class="footer-top1"></div>
				<div class="footer-top2"></div>
			</div>
			<a href="#">产品意见反馈</a>
			<p> </p>
		</div><!-- footer结束 -->
	</div><!-- main结束 -->
	<script src="js/fabuqiugou.js"></script>
</body>
</html>