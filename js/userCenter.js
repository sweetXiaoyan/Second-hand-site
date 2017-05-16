/**
 * Created by Administrator on 2017/5/1.
 */
(function () {
    function userCenter() {}
  /*----获取和用户信息----*/
    userCenter.requestStatus = function(succfunc,failfunc) {
        $.ajax({
            url:'php/status.php',
            data:{
            },
            dataType:"json",
            type:'POST',
            success:succfunc,
            error:failfunc,

        })
    };





    window.userCenter = userCenter;
})(window)
/*----获取用户发布的闲置商品信息----*/
$(function () {

    userCenter.requestStatus(function (xhr) {
        if (xhr=='0') {
            return false;
        }
        else{
            var img=xhr.img;
            var nickname=xhr.nickname;
            var emailLogin =xhr.emailLogin;
            $(".my-msg").find("img").attr("src",img);
            $(".my-msg").find(".my-name").text(nickname);
            $(".my-msg").find(".my-sno").text(emailLogin);
            getGoods(emailLogin);
        }
    }, function () {
        alert("请求失败!");
    });
    /*------处理响应的数据------*/
    function getGoods(emailLogin) {
        console.log(emailLogin);
        $.ajax({
            url:'php/selectUserMsg.php',
            data:{
                emailLogin:emailLogin,
            },
            type:'POST',
            success:function (xhr1) {
                var dataArr = JSON.parse(xhr1);
                if(dataArr.length >0){
                    $(".noGoods").hide();
                    $(".hasGoods").fadeIn();
                    // 创建每一个商品项的结构
                    for (var i=0;i<dataArr.length ;i++){
                        var imgSrc = dataArr[i]['商品图片'].substring(3);
                        var Htitle = dataArr[i]['商品名称'];
                        var des = dataArr[i]['商品描述'];
                        var price = dataArr[i]['价格'];
                        var sell = dataArr[i]['讲价'];
                        var times = dataArr[i]['发布时间'];
                        createElements(imgSrc,Htitle,des,price,sell,times);
                    }
                }
                else {
                    $(".noGoods").css('display','block');
                }
                
            },
            error:function () {
                alert("qeeee");
            },
        })
    }
    /*-----根据获取的数据动态创建节点-----*/
    function createElements(imgSrc,Htitle,des,price,sell,times) {
        var  item = $(" <div class='good-item'></div>");
         //添加到 Goods后面
        $(".hasGoods").append(item);
        var goodImg = $("<div class='my-goodImg'></div>");
        item.append(goodImg);
        var imgItem = $("<img src="+imgSrc+">");
        goodImg.append(imgItem);
        var h4 = $("<h4 class='my-title'>闲置："+Htitle+"</h4>");
        item.append(h4);
        var p0 = $("<p>具体要求："+des+"</p>");
        var p1 = $("<p><strong>期望价格：</strong>: &#65509;<span>"+price+"</span></p>");
        var p2 = $("<p><strong>"+sell+"</strong></p>");
        var time =$("<div class='timer'>");
        var p3 = $("<p>发布时间："+times+"</p>");
        item.append(p0);
        item.append(p1);
        item.append(p2);
        item.append(time);
        time.append(p3);
    }

    /*-----点击我要发布闲置按钮的响应事件----*/
    $(".putUsed").click(function () {
        window.location='fabushangpingUI.php';
    });
    //侧边栏的导航链接
    comTool.navLinks('php/selectClassify.php','classfiyProducts.php');
   /*----点击闲置的切换----*/
    $(".my-goods>p").click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        if ($(this).text() ==="我的闲置" ||$(this).text() ==="已发布闲置"){
            $(".hasGoods").children().remove();
            userCenter.requestStatus(function (xhr) {
                if (xhr=='0') {
                    return false;
                }
                else{
                    var img=xhr.img;
                    var nickname=xhr.nickname;
                    emailLogin =xhr.emailLogin;
                    $(".my-msg").find("img").attr("src",img);
                    $(".my-msg").find(".my-name").text(nickname);
                    $(".my-msg").find(".my-sno").text(emailLogin);
                    getGoods(emailLogin);
                }
            }, function () {
                alert("请求失败!");
            });
        }
        else if($(this).text() ==="已卖出闲置"){
            $(".hasGoods").hide();
            $(".noGoods").fadeIn();
        }
    })


})
