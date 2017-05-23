window.onload=function(){
	window.addEventListener("scroll",scroll,false);
    window.addEventListener("scroll",showreturnTop,false);
	var rt=document.getElementById('returntop');

	/*-----接收已经登录的邮箱，在发布信息js文件中使用*/
   /* console.log(rt);
    if(rt){
        rt.addEventListener("click",returnTop,false);
    }*/
	/*---控制登录和注册界面的展示---*/
    showlogreg("reg");
    showlogreg("login");
	/*-- enter 键聚焦功能---*/
    enterFocus("nickname","emailReg");
    enterFocus("emailReg","passwordReg");
    enterFocus("passwordReg","confirm");
	/*--昵称验证，十个字符以内---*/
    checkNickName();
    //检查注册电子邮件是否输入正确
    checkEmail("emailReg","passwordReg");
	/*--检查密码长度是否超过20个字符--*/
    checkPasswordReg();
	/*--验证两次密码是否相同--*/
    passwordConfirm();

	/*---注册按钮的点击：判断所有框中都填入了内容才发送注册的网络请求*/
    checkRegClick();
	/*---检查登录界面输入的邮箱是否正确----*/
    checkEmail("emailLogin","passwordLogin");
    enterFocus("emailLogin","passwordLogin");

	/*--检查登录满足点击登录按钮发送网络请求的条件------*/
    checkPasswordLogin();
    checkLoginClick();

	/*---注册成功的页面操作---*/
    rgeyes();
    //主页的我要发布按钮验证登录状态的ajax请求
    ajaxPub();
    // 求购专区的发布求购按钮点击
    ajaxPubWant();
    //验证 登录状态ajax请求（已登录还是未登录）
    ajaxCheck();

    //显示个人中心
    showUser();
    //退出登录的ajax请求
    quit();

    //显示商品
    showgoods();



}
//控制页面顶部和左边栏伸缩的函数
function scroll(){
    var header=document.getElementsByClassName("header")[0];
    var logo=document.getElementsByClassName("logo-a")[0];
    var headerTitle=document.getElementsByClassName("header-title")[0];
    var search=document.getElementsByClassName("search")[0];
    var logReg=document.getElementsByClassName("log-reg")[0];
    var searchHots=document.getElementsByClassName("search-hots")[0];
    var sidebar=document.getElementsByClassName("sidebar")[0];
    var liTitle=document.getElementsByClassName("li-title")[0];
    var liIcon=document.getElementsByClassName("li-icon");
    var st=document.documentElement.scrollTop;
    var h5=document.getElementsByTagName('h5');
    var main=document.getElementsByClassName('main')[0];
    if (st>0) {
    	header.style.height=55+'px';
	    logo.style.height=55+'px';
	    headerTitle.style.marginTop=5+'px';
	    headerTitle.style.marginLeft='12.75%';
	    search.style.marginTop=10+'px';
	    logReg.style.marginTop=11.5+'px';
	    searchHots.style.display="none";
	    sidebar.style.width=55+'px';
	    liTitle.style.width=55+'px';
	    liTitle.style.fontSize=13+'px';
	    main.style.marginTop=55+'px';
	    for(var i=0;i<liIcon.length;i++){
	    	liIcon[i].style.display="none";
	    }
	    for(var i=0;i<h5.length;i++){
	    	h5[i].style.textAlign="center";
	    }
    }
    else{
	    for(var i=0;i<liIcon.length;i++){
	    	liIcon[i].style.display="flex";
	    }
	    liTitle.style.fontSize=13+'px';
	    liTitle.style.width=86+'px';
	    sidebar.style.width=86+'px';
	    searchHots.style.display="block";
	    logReg.style.marginTop=26+'px';
	    search.style.marginTop=22+'px';
	    headerTitle.style.marginTop=20+'px';
	    headerTitle.style.marginLeft='10.54%';
	    logo.style.height=86+'px';
	    header.style.height=86+'px';
	    liTitle.style.fontSize=16+'px';
	    main.style.marginTop=86+'px';
	    for(var i=0;i<h5.length;i++){
	    	h5[i].style.textAlign="left";
	    }
    }
}
//控制回到顶部的div的display
function showreturnTop(){
	var st=document.documentElement.scrollTop||document.body.scrollTop;
	var rt=document.getElementById('returntop');
	if (st>200) {
		rt.style.display="block";
	}
	else{
		rt.style.display="none";
	}
}
var timer=null;
function returnTop(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		var speed=document.documentElement.scrollTop/20;
		timer=setInterval(function(){
		document.documentElement.scrollTop=document.body.scrollTop-=speed;
		if (document.documentElement.scrollTop=document.body.scrollTop==0) {
			clearInterval(timer);
			}
		},30);
}


//通过主页顶部的登录或注册打开对应的页面的函数
function showlogreg(name){
	var s,t,id,x;
	if (name=="login") {
	   s = document.getElementById('loginButton');
	   /*----t 登录界面dom元素-*/
	   t=document.getElementsByClassName("login")[0];
        // console.log(t);
        id="logina";
	   x=document.getElementById("emailLogin");
	}
	else{
        s=document.getElementById('regButton');
        t=document.getElementsByClassName("reg")[0];
        id="rega";
        x=document.getElementById("nickname");
	}

    // console.log(s);
	  s.addEventListener("click",function(){
    	t.style.display="block";
    	x.focus();//进入时让第一个input得到焦点
    	var trans=document.getElementsByClassName('trans')[0];
    	var regyes=document.getElementsByClassName('regyes')[0];
		trans.style.display="block";
	    trans.addEventListener("click",function(){
		t.style.display="none";
		trans.style.display="none";
		regyes.style.display="none";
		},false);
    },false);
    servlet(id);
}


// 通过注册页面或登录页面的a标签跳转到登录页面或注册页面的函数
function servlet(id){
	var s,t;
	/*--立即登录按钮---*/
	var a = document.getElementById(id);
	if (id=="rega") {  //立即登录
		/*----s 注册界面dom元素-*/
		s=document.getElementsByClassName("reg")[0];
		t=document.getElementsByClassName("login")[0];
	}
	else{   //立即注册
		s=document.getElementsByClassName("login")[0];
        t=document.getElementsByClassName("reg")[0];
	}
	a.onclick=function(){  // 点击对应的按钮对应的界面展示，反之隐藏
		s.style.display="none";
		t.style.display="block";
	}
}
//注册表验证
//enter键触发焦点移向下一个元素
function enterFocus(Id,nextId){
	var a=document.getElementById(Id);
	var b=document.getElementById(nextId);
	a.onkeydown=function(event){
	   if(event.keyCode==13){
	   	b.focus();
	   }
	}
}
//昵称验证,十个字符内,
//通过nickname的onblur事件来验证
//通过emailReg的onfocus事件来重新得到焦点
function checkNickName(){
	var nickname=document.getElementById("nickname");
	var emailReg=document.getElementById("emailReg");
	nickname.onblur=function(){
		var Len=nickname.value.length;
		if(Len==0){
	    	nickname.style.border="1px solid red";
			nickname.placeholder="昵称不能为空哦!";
			nickname.style.color="red";
	    }
	    else if(Len>10){
			nickname.value="";
			nickname.style.border="1px solid red";
			nickname.placeholder="昵称限制在十个字符内";
			nickname.style.color="red";
		}
		else{
			nickname.style.border="none";
			nickname.style.color="#3EB196";
		}
	}
	emailReg.onfocus=function(){
	    var Len=nickname.value.length;
	    if(Len==0){
			nickname.focus();
	    }
		else if(Len>10){
			nickname.focus();
		}
	}
}

//判断是否有@,.,用户名,运营商,域名
//判断用户输入的是不是学号
 function checkEmail(emailId,nextId){
 	var a=document.getElementById(emailId);
 	var b=document.getElementById(nextId);
 	/*
 	a.onblur=function(){
 		var v=a.value;
 		var i=v.indexOf("@");
		var j=v.indexOf(".");
		var k=v.length-1-j;
		if ((i<1)||(i-j>1)||(j<1)||(k<0)) {
			a.value="";
			a.style.border="1px solid red";
			a.placeholder="请输入正确的邮箱地址!";
			a.style.color="red";
		}
		else{
			a.style.border="none";
			a.style.color="#3EB196";
		}
 	}*/
 	a.onblur=function(){
 		var reg =/^1\d{8}$/;
		if (reg.test(a)) {
			a.value="";
			a.style.border="1px solid red";
			a.placeholder="请输入正确的学号!";
			a.style.color="red";
		}
		else{
			a.style.border="none";
			a.style.color="#3EB196";
		}
 	}
/* 	b.onfocus=function(){
 		var v=a.value;
 		var i=v.indexOf("@");
		var j=v.indexOf(".");
		var k=v.length-1-j;
		if ((i<1)||(i-j>1)||(j<1)||(k<0)) {
			a.focus();
		}
 	}*/
 	b.onfocus=function(){
        var reg =/^1\d{8}$/;
		if (reg.test(a)) {
			a.focus();
		}
 	}
 }
 //检查密码
 //检查密码长度是否超过20个字符
 function checkPasswordReg(){
 	var passwordReg=document.getElementById("passwordReg");
 	var confirm=document.getElementById("confirm");
 	passwordReg.onblur=function(){
 		var len=passwordReg.value.length;
 		if(len==0){
			passwordReg.placeholder="密码不能为空哦!";
			passwordReg.style.color="red";
			passwordReg.style.border="1px solid red";
 		}
 		else if(len>20){
 			passwordReg.value="";
 			passwordReg.style.border="1px solid red";
 			passwordReg.style.color="red";
			passwordReg.placeholder="密码不能超过20个字符!";
 		}
 		else{
 			passwordReg.style.border="none";
 			passwordReg.style.color="#3EB196";
 		}
 	}
 	confirm.onfocus=function(){
 		var len=passwordReg.value.length;
 		if(len==0){
			passwordReg.focus();
 		}
 		else if(len>20){
			passwordReg.focus();
 		}
 	}
 }
 //检查确认密码
 //验证两次密码是否相同
 function passwordConfirm(){
 	var passwordReg=document.getElementById('passwordReg');
 	var confirm=document.getElementById('confirm');
 	var buttonReg=document.getElementById('buttonReg');
	confirm.onblur=function(){
		var v1=passwordReg.value;
 	    var v2=confirm.value;
		if (v1!==v2) {
            buttonReg.onclick=function(){
				return false;
			}
 			confirm.style.border="1px solid red";
 			confirm.style.color="red";
			confirm.placeholder="两次密码不同,请重新输入!";
			confirm.value="";
	   	}
	   	else{
 			confirm.style.border="none";
 			confirm.style.color="#3EB196";
 			buttonReg.onclick=function(){
 				ajaxReg();
 			}
 		}
	}
	confirm.onkeydown=function(event){
	   if(event.keyCode==13){
	   	var v1=passwordReg.value;
 	    var v2=confirm.value;
	   	if (v1!==v2) {
	   		confirm.value="";
 			confirm.style.border="1px solid red";
 			confirm.style.color="red";
			confirm.placeholder="两次密码不同,请重新输入!";
	   	}
	   	else{
 			passwordReg.style.border="none";
 			passwordReg.style.color="#3EB196";
 			ajaxReg();
 		}
	   }
	}
 }
 //判断button的点击事件在什么条件下执行
 //点击事件在昵称,邮箱,密码都不为空才能执行,passwordConfirm()已经判断了确认密码且不为空的情况
 function checkRegClick(){
 	var buttonReg=document.getElementById('buttonReg');
 	var nickname=document.getElementById("nickname");
	var emailReg=document.getElementById("emailReg");
	var passwordReg=document.getElementById("passwordReg");
	var confirm=document.getElementById("confirm");
	var v1=nickname.value;
	var v2=emailReg.value;
	var v3=passwordReg.value;
	var v4=confirm.value;
	if ((v1!=="")&&(v2!=="")&&(v3!=="")&&(v4!=="")) {
		/*---发送ajax请求 ---*/
		buttonReg.onclick=ajaxReg();
	}
	else{
		buttonReg.onclick=function(){
				return false;
			}
	}
 }
//登录表验证
//密码验证
function checkPasswordLogin(){
	var passwordLogin=document.getElementById('passwordLogin');
	var buttonLogin=document.getElementById('buttonLogin');
	passwordLogin.onblur=function(){
 		var len=passwordLogin.value.length;
 		if((len==0)||(len>20)){
			passwordLogin.placeholder="密码错误!";
			passwordLogin.style.color="red";
			passwordLogin.style.border="1px solid red";
			buttonLogin.onclick=function(){
				return false;
			}
 		}
 		else{
 			passwordLogin.style.border="none";
 			passwordLogin.style.color="#3EB196";
 			buttonLogin.onclick=function(){
				ajaxLogin();
			}
 		}
 	}
 	passwordLogin.onkeydown=function(event){
	   if(event.keyCode==13){
	   	var len=passwordLogin.value.length;
 		if((len==0)||(len>20)){
			passwordLogin.placeholder="密码错误!";
			passwordLogin.style.color="red";
			passwordLogin.style.border="1px solid red";
 		}
 		else{
 			passwordLogin.style.border="none";
 			passwordLogin.style.color="#3EB196";
 			ajaxLogin();
 		}
	   }
	}
}
//检查登录表button点击事件条件
function checkLoginClick(){
	var emailLogin=document.getElementById('emailLogin');
	var buttonLogin=document.getElementById('buttonLogin');
	buttonLogin.onclick=function(){
		var v=emailLogin.value;
		var i=v.indexOf("@");
		var j=v.indexOf(".");
		var k=v.length-1-j;
		if ((i<1)||(i-j>1)||(j<1)||(k<0)) {
			return false;
		}
		else{
			ajaxLogin();
		}
	}
}
//注册成功的页面操作
function rgeyes(){
	var loginButton=document.getElementById('loginButton');
	var buttonRegyes=document.getElementById('buttonRegyes');
	var regyes=document.getElementsByClassName("regyes")[0];
	buttonRegyes.onclick=function(){
		regyes.style.display="none";
		loginButton.click();
	}
}
//注册的点击事件的ajax请求
function ajaxReg(){
			$.ajax({
				url:'php/reg.php',
				data:{
					nickname:$('#nickname').val(),  //昵称
					emailReg:$('#emailReg').val(),
					passwordReg:$('#passwordReg').val()
				},
				dataType:"text",
				type:'POST',
			    success:function(data,textStatus,jqXHR){
			        	var regyes = document.getElementsByClassName("regyes")[0];
				        var reg = document.getElementsByClassName("reg")[0];
				        reg.style.display='none';
				        regyes.style.display='block';
                        console.log(data);
                },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
}
//登录的点击事件的ajax请求
function ajaxLogin(){
			$.ajax({
				url:'php/login.php',
				data:{
					emailLogin:$('#emailLogin').val(),
					passwordLogin:$('#passwordLogin').val()
				},
				dataType:"json",
				type:'POST',
			    success:function(data){
			    	if (data=='0') {
			    		alert("邮箱号与密码不匹配!");
			    	}
			    	else{
			    		var img=data.img;
			    		var nickname=data.nickname;
			    		var emailLogin=data.emailLogin;
			    		$('.trans').css("display","none");
			    		$('.login').css("display","none");
			    		$('#logReg').css("display","none");
			    		$('#user').css("display","block");
			    		$(".user-img").find("img").attr("src",img);
			    		document.getElementById('username').innerHTML=emailLogin;
			    		document.getElementById('hiusername').innerHTML='嗨,'+nickname;
			    	}
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
}
//-------------------发布求购按钮点击的ajax请求
/*function ajaxWant(){
    var phoneNum = $('#phone').val();
    $.ajax({
				url:'php/fabuqiugou.php',
				data:{
					goodsName:$('#goodsName').val(),
					goodsDepict:$('#goodsDepict').val(),
					expectedPrice:$('#expectedPrice').val(),
					loco:$('#loco').val(),
					phone:phoneNum,
					qq:$('#qq').val()
				},
				dataType:"text",
				type:'POST',
			    success:function(data){
			    	/!*if (data=='1') {
			    		alert("发布成功");
			    		window.location.href="http://localhost/Xihua-Second-Street-master/php/want.php";
			    	}
			    	else{
			    		alert("发布失败");
			    	}*!/
                    console.log(data.response);
                },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
    console.log(phoneNum);
}*/

//我要发布按钮验证登录状态的ajax请求
function ajaxPub(){
	var pub=document.getElementById('pub');
	pub.onclick=function(){
		$.ajax({
				url:'php/status.php',
				 data:{
				 },
				dataType:"json",
				type:'POST',
			    success:function(data){
                    if (data =='0') {
			    		var login=document.getElementsByClassName("login")[0];
			    		var loginButton=document.getElementById('loginButton');
			    		var trans=document.getElementsByClassName('trans')[0];
			    		trans.style.display='block';
			    		login.style.display='block';
			    		loginButton.focus();
			    		trans.onclick=function(){
			    			trans.style.display='none';
			    		    login.style.display='none';
			    		}
			    	}
			    	else{  // 判断已经登录，跳转去发布商品
                        // emailLogin = data.emailLogin;
                        // console.log(emailLogin);
                        window.location='../Second-hand-site/fabuqiugouUI.php';
                     /*   window.open('../Second-hand-site/fabushangpingUI.php');*/
			    	}

                },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
	}
}

//求购专区按钮验证登录状态的ajax请求
function ajaxPubWant(){
	var pubWant=document.getElementById('pubWant');
	pubWant.onclick=function(){
		$.ajax({
				url:'php/status.php',
				 data:{
				 },
				dataType:"json",
				type:'POST',
			    success:function(data){
			    	if (data=='0') {
			    		var login=document.getElementsByClassName("login")[0];
			    		var loginButton=document.getElementById('loginButton');
			    		var trans=document.getElementsByClassName('trans')[0];
			    		trans.style.display='block';
			    		login.style.display='block';
			    		loginButton.focus();
			    		trans.onclick=function(){
			    			trans.style.display='none';
			    		    login.style.display='none';
			    	    }
			    	}
			    	else{
			    		// window.location='php/want.php';
                        window.open('php/want.php');
			    		}
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
	}
}
//验证登录状态ajax请求
function ajaxCheck(){
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
			    		var emailLogin =data.emailLogin;
			    		$('#logReg').css("display","none");
			    		$('#user').css("display","block");
			    		$(".user-img").find("img").attr("src",img);
			    		document.getElementById('username').innerHTML=emailLogin;
			    		document.getElementById('hiusername').innerHTML='嗨,'+nickname;
			    	}
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
}

//显示个人中心
function showUser(){
	$('#user').hover(function(){
		$('.log-reg').css('border-bottom','2px solid #3EB196');
		$('.usermain').css('display','block');
	},function(){
		$('.log-reg').css('border-bottom','none');
		$('.usermain').css('display','none');
	});
}
//退出登录的ajax请求
function quit(){
	$('#quit').bind("click",function(){
		$.ajax({
				url:'php/quit.php',
				data:{
				},
				dataType:"text",
				type:'POST',
			    success:function(data){
			    		$('#logReg').css("display","block");
			    		$('#user').css("display","none");
                    // console.log(data.response);

                },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
	});
}
//显示商品
function showgoods(){
	$('.Goods').bind("click",function(event){
         var val1= $(this).find('.Goodsname').text();
         var val2= $(this).find('.Username').text();
         var val3= $(this).find('.Goodsprice').text();
         var val4= $(this).find('.Time').text();
		$.ajax({
				url:'php/session.php',
				data:{
					goodsname:val1,
					nickname:val2,
					price:val3,
					time:val4
				},
				dataType:"text",
				type:'POST',
			    success:function(data){
			    	 window.open("http://localhost/Second-hand-site/php/goods.php");
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
	})
}