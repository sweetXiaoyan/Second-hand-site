window.onload=function(){
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
    ajaxPub();
    ajaxPubWant();
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
	   s=document.getElementById('loginButton');
	   t=document.getElementsByClassName("login")[0];
	   id="logina";
	   x=document.getElementById("emailLogin");
	}
	else{
        s=document.getElementById('regButton');
        t=document.getElementsByClassName("reg")[0];
        id="rega";
        x=document.getElementById("nickname");
	}
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
	var a=document.getElementById(id);
	if (id=="rega") {
		s=document.getElementsByClassName("reg")[0];
		t=document.getElementsByClassName("login")[0];
	}
	else{
		s=document.getElementsByClassName("login")[0];
        t=document.getElementsByClassName("reg")[0];
	}
	a.onclick=function(){
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
//检查电子邮件是否输入正确
//判断是否有@,.,用户名,运营商,域名
 function checkEmail(emailId,nextId){
 	var a=document.getElementById(emailId);
 	var b=document.getElementById(nextId);
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
 	}
 	b.onfocus=function(){
 		var v=a.value;
 		var i=v.indexOf("@");
		var j=v.indexOf(".");
		var k=v.length-1-j;
		if ((i<1)||(i-j>1)||(j<1)||(k<0)) {
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
 //点击事件在昵称,邮箱,密码都不为空才能执行,passwordConfirm()已经判断了确认密码为空的情况
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
					nickname:$('#nickname').val(),
					emailReg:$('#emailReg').val(),
					passwordReg:$('#passwordReg').val()
				},
				dataType:"text",
				type:'POST',
			    success:function(){
			        	var regyes=document.getElementsByClassName("regyes")[0];
				        var reg=document.getElementsByClassName("reg")[0];
				        reg.style.display='none';
				        regyes.style.display='block';
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
				dataType:"text",
				type:'POST',
			    success:function(data){
			    	if (data=='1') {
			    		alert("登录成功");
			    	}
			    	else{
			    		alert("邮箱号与密码不匹配!");
			    	}
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
}
//发布求购的ajax请求
function ajaxWant(){
	$.ajax({
				url:'php/fabuqiugou.php',
				data:{
					goodsName:$('#goodsName').val(),
					goodsDepict:$('#goodsDepict').val(),
					expectedPrice:$('#expectedPrice').val(),
					loco:$('#loco').val(),
					phone:$('#phone').val(),
					qq:$('#qq').val()
				},
				dataType:"text",
				type:'POST',
			    success:function(data){
			    	if (data=='1') {
			    		alert("发布成功");
			    	}
			    	else{
			    		alert("发布失败");
			    	}
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
}

//发布商品按钮验证登录状态的ajax请求
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
			    	if (data=='1') {
			    		window.location='../fabushangpingUI.php'
			    	}
			    	else{
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
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
	}
}

//发布求购按钮验证登录状态的ajax请求
/*-------点击求购专区------*/
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
			    	if (data=='1') {
			    		window.location='../fabuqiugouUI.php';
			    	}
			    	else{
			    		window.location='http://localhost/xihua%20Second%20hand%20Street/index.html';
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
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
			})
	}
}