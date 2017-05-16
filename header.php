<script src="js/comTool.js"></script>
<div class="header">
		<a href="/Xihua-Second-Street-master/school-intro/" class="logo-a"><img class="logo" src="images/school-logo.jpg" alt="辽工二手街"></a>
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
		    <div id="logReg">
				<div class="button" id="loginButton">登录</div>
				<div class="button" id=regButton>注册</div>
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
		<div class="search-hots">
			<span>热门：</span>
			<a class="hots" href="/Xihua-Second-Street-master/bike/bike.html" target="_blank">自行车</a>
			<a class="hots" href="/category3" target="_blank">电动车</a>
			<a class="hots" href="/category6" target="_blank">笔记本</a>
			<a class="hots" href="/category40" target="_blank">教材</a>
		</div>
	</div>
<script>
    $(function () {
        comTool.linkUserSelf();
    })
</script>

