/**
 * Created by Administrator on 2017/5/4.
 */
(function (window) {
    function contralGoods() {

    }

    /*----喜欢按钮的点击----*/
    $(".icon-heart").click(function () {

        $(".GoodsInformain> sapn>i").toggleClass("icon-hearted");
    })
    $(".icon-github").click(function () {
        $(".Informain>sapn> .icon-github").toggleClass("icon-githubed");
    })
    /*-------tab切换----*/
   $(".container .goods-tab>ul li").click(function () {
       var index  = $(this).index();
       $(this).addClass("active").siblings().removeClass("active");
       $(".tab-cut> div").eq(index).show().siblings().hide();
   })
    
    /*------点击与他对话按钮-----*/
    /*-----聊天模块-----*/
   /* $(".goods-chat").click(function () {
        // window.open("../chat.html");
    })*/
    $(".Informain .goods-chat").click(function () {
        comTool.checkLogin(function () {
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
        }, function () { // 已经登录
            window.location = "../01-chat-client.html";
        });
    });

    /*登录处，点击登录按钮，发送ajax请求*/
    $("#buttonLogin").click(function () {
        comTool.ajaxLogin();
    });
    /*------在提问区，点击提交问题的处理---------------*/
    var time = $(".goodsTime").text();
    var goodsName = $(".GoodsInfortit >p").text();
    $("#ask_sub").click(function () {
        var askContent = $(".ask-con").val();

        /*--邮箱 */
        var emailLogin = $("#username").text();

        if($.trim(askContent)==""){
            return;
        }
        /*----在界面上显示提问添加的内容--*/
        /*第二步：将数据插入到数据库中保存*/
        comTool.sendAskContent(askContent,time,emailLogin,goodsName,function () {
            askSubmit(askContent,emailLogin);
        })
    })

    /*------进入页面需要自动刷新留言信息---*/
    comTool.updateAskContent(goodsName ,time ,function (data) {
        /*console.log(data);*/
        //返回的是json字符串，所以，不要忘了解析
        var askContenArr =JSON.parse(data);
        //创建每一条提问信息的界面结构
        for (var i=0 ;i<askContenArr.length ;i++){
            var content = askContenArr[i]['留言信息'];
            var username = askContenArr[i]['邮箱号'];
            askSubmit(content,username);
        }

    })


   /* -------nav导航条的链接------*/
    /*----侧边栏的导航的点击事件---*/
    comTool.navLinks('selectClassify.php','../classfiyProducts.php');

/*----在界面上显示提问添加的内容--*/
    function askSubmit(askContent,username) {

        /* 第一步：是添加一个p元素，在界面上显示添加的内容*/
        var $p = $("<p class='introduce'>"+askContent+"</p>");
        var $span = $("<span>来自："+username+"  的提问</span>");
        $p.append($span);
        $(".ask-content").append($p);
        /*--清空input内容*/
        $(".ask-con").val("");

    }


})(window)