/**
 * Created by Administrator on 2017/5/7.
 */
$(function () {
    //检查是否登录
    ajaxCheck();
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
    /* ----绑定侧边栏的点击事件----*/

    var flagData =  getUrlRequest();
    console.log(flagData);
    /*---处理url 传递的数据--*/
    function getUrlRequest() {
        var url =location.search;
        console.log(url);
        var splitStr =url.indexOf("?");
        if(splitStr != -1){
            /*返回 url 传递的数据*/
            return decodeURI(url.slice(6));
        }
    }
    /*---根据数据动态增加元素--*/
    function dealData(data) {
        //data是json字符串
        console.log(data);
        var dataArr = JSON.parse(data);
        var $main =$(".class-container .class-main");
        $main.empty();
        console.log($main);
        for (var i=0 ;i<dataArr.length ;i++){
            var item = $("<div class='product'></div>");
            var bgImg = $('<div class="proPic"></div>');
            var price = $('<h4 class="good-price">&yen ;</h4>');
            var title = $('<h4 class="title"></h4>');
            var intro =$('<p class="pro-intro"></p>') ;
            var owner = $('<p class="pro-owner"></p>');
            price.text("￥"+dataArr[i]["价格"]);
            intro.text(dataArr[i]["商品描述"]);
            title.text(dataArr[i]["商品名称"]);
            owner.text('发布者：'+dataArr[i]["邮箱号"]);
            var bgSrc = dataArr[i]["商品图片"].substring(3);
            console.log(bgSrc);
            bgImg.css({
                "background":'url('+bgSrc+') no-repeat center center',
                "background-size":"cover"
            });
            $main.append(item);
            // $item.append($bgImg).append($price).append($intro).append($owner);
            $(item).append(bgImg,price,title,intro,owner);
        }

    }
    comTool.navClickData(flagData,function (data) {
        dealData(data);
    });
    $(".sidebar >ul > .side-li").click(function () {
        flagData = $(this).find("h5").text();
        comTool.navClickData(flagData,function (data) {
            dealData(data);
        });
    })
    /*---点击展示商品详细信息---*/
    showDetails();
    function showDetails(){
        $(".class-main").on("click",".product",function () {

            /*商品名称*/
            var val1= $(this).find('.title').text();
            var val2= $(this).find('.pro-owner').text().substring(4);
            var val3= $(this).find('.good-price').text().substring(1);
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
                    alert(data);
                    window.open("http://localhost/Second-hand-site/php/goods.php");
                },
                error:function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("请求失败!");
                }
            })

        })

    }

});
