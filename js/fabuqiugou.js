window.onload = function () {

    /*---------------------------监听求购专区 确认发布 按钮的点击事件----------*/
    $("#submit-publish").click(function () {

        ajaxWant();
    });
    $("#quit-publish").click(function () {
        /*window.location.href="../Second-hand-site/php/want.php"; */
        window.open("../Second-hand-site/php/want.php");
    })

    /*---------------监听主页求购专区的点击事件--------------*/
    /*
     $("#pubWant").click(function () {
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
     window.location='http://localhost/Xihua-Second-Street-master/php/want.php';
     }
     },
     error:function(XMLHttpRequest, textStatus, errorThrown) {
     alert("请求失败!");
     }
     })
     }
     }
     })*/


//-------------------发布求购按钮点击的ajax请求
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
                 window.location.href="php/want.php";
                 }
                 else{
                 alert("发布失败");
                 }
                // console.log(data.responseText);
            },
            error:function(XMLHttpRequest, textStatus, errorThrown) {
                alert("请求失败!");
            }
        })
    }

    /*------侧边栏导航的问题------*/
    comTool.navLinks('php/selectClassify.php','classfiyProducts.php');
}


