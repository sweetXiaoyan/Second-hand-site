/**
 * Created by Administrator on 2017/5/1.
 */

// 发送各种请求
(function () {

    function comTool() {}
    /*---跳转到个人中心--*/
    comTool.linkUserSelf =function () {
        $("#personal").click(function () {
            window.location.href = "My-center.php";
        })
    }

    /*-------发送检查是否登录的请求-------*/
    comTool.checkLogin = function (loginFunc,talkFunc) {
        $.ajax({
            url:'status.php',
            data:{
            },
            dataType:"json",
            type:'POST',
            success:function(data){
                if (data =='0') {  // 未登录

                    loginFunc();
                }
                else{  // 判断已经登录，跳转去发布商品
                    // emailLogin = data.emailLogin;
                    // console.log(emailLogin);
                    talkFunc();
                }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown) {
                alert("请求失败!");
            }
        })
    }
   /*--------点击登录发送的请求---(针对goods页面)--------*/
    comTool.ajaxLogin = function(){
        $.ajax({
            url:'login.php',
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

    comTool.sendAskContent = function (askContent,time,emailLogin,goodsName,succFunc) {
        $.ajax({
            url:'askWord.php',
            data:{
                askContent:askContent,
                time:time,
                emailLogin:emailLogin,
                goodsName:goodsName
            },
            dataType:"text",
            type:'POST',
            success:function(data){
                if (data =='0') {  // 判断数据插入清况
                    console.log("数据插入失败！");
                }
                else{
                    succFunc();
                }

            },
            error:function(XMLHttpRequest, textStatus, errorThrown) {
                alert("请求失败lll!");
            }
        })
    }
    comTool.updateAskContent = function (goodsName,time,updateFunc) {
        $.ajax({
            url:'askSeclect.php',
            data:{
                goodsName:goodsName,
                time:time
            },
            type:'POST',
            success:function(data){
                updateFunc(data);
            },
            error:function(XMLHttpRequest, textStatus, errorThrown) {
                alert("请求失败lll!");
            }
        })
    }
    // comTool.navLinks = function (url,linkUrl,getDataFunc) {
    //     $(".sidebar >ul > .side-li").click(function () {
    //         /*----发送一个查询商品，相应的名字，*/
    //         console.log($(this).find("h5").text());
    //         var flagData = $(this).find("h5").text();
    //         $.ajax({
    //             url:url,
    //             data:{
    //                 flag:flagData
    //             },
    //             type:'POST',
    //             success:function(data){
    //                window.location.href= linkUrl;
    //                getDataFunc(data);
    //             },
    //             error:function(XMLHttpRequest, textStatus, errorThrown) {
    //                 alert("请求失败!");
    //             }
    //         })
    //     })
    // }
    /*----侧边导航的所有点击事件--*/
    comTool.navLinks = function (url,linkUrl,getDataFunc) {
        var flagData;
        $(".sidebar >ul > .side-li").click(function () {
            /*----发送一个查询商品，相应的名字，*/
            // console.log($(this).find("h5").text());
             flagData = $(this).find("h5").text();
            /*--编码--*/
            var eUrl = encodeURI('?data='+flagData);
            if(linkUrl){
                 window.location.href= linkUrl+eUrl;
             }
             else{
                 getDataFunc();
             }
        })
    }
    comTool.navClickData = function (flagData,succFunc) {
       $.ajax({
                url:'php/selectClassify.php',
                data:{
                    flag:flagData
                },
                type:'POST',

                success:function(data){
                    succFunc(data);
                },
                error:function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("请求失败!");
                }
            });

    }

    comTool.loginWithGoods = function (name) {
        showlogreg(name);
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

    /*---通过点击商品的图片 ，展示商品的详细信息*/
    comTool.showGoodsDetail = function () {
        //显示商品
      /*  showgoods();
        function showgoods(){
            $('.proPic').bind("click",function(event){
                alert(0);
                /!*商品名称*!/
                var val1= "";
                var val2= $(this).find('.pro-owner').text().substring(4);
                var val3= $(this).find('.product >h4').text();
                var val4= "";
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
                        window.open("http://localhost/Xihua-Second-Street-master/php/goods.php");
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("请求失败!");
                    }
                })
            })
        }*/
    }
    window.comTool =comTool;
})(window)
