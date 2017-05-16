/**
 * Created by Administrator on 2017/4/26.
 */

$(document).ready(function () {
    /*---------------点击切换学校响应----------------*/
    $('.college .collegeName>a').click(function (e) {
        var event = e.event || window.event;
        var schoolName = $(this).text();
        var cityName = $(this).parents('.cityItem').children('span').text();
        /*--阻止a标签的默认跳转行为-*/
        event.preventDefault();
        var id = (new Date()).getTime();
        DataTool.addressRequest(id,schoolName,function (xhr) {
            var data= xhr.responseText;
            //js不同页面直接传值address数据
            document.cookie = 'address='+data;
            /*-------------------------这里不懂为什么--------------------*/
            console.log("辽宁工业大学");
            console.log(data);
            if (schoolName=='辽宁工业大学'){
                window.location.href = "index.html";
            }
            else {
                window.location.href = "errorAddress.php";
            }
        });

    })
    /*--------------点击登录验证--------------------*/
    $('.user>input').focus(function () {
        $(this).on('change',function () {
            var id = (new Date()).getTime();
            var username = $('.user>input').val();
            isPhoneNum(username);
        })
    });
    $('.pwd>input').focus(function () {
        $(this).on('change',function () {
            var password = $(this).val();
            /*--由数字和字符组成的密码6-12---*/
            isPwd(password);
        })
    });
    $('#loginClick').click(function () {



    })


    /*--------------检查手机号码-----------*/
    function isPhoneNum(username) {
        var cellPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
        if (!cellPhone.test(username)){
            if($('.user>p').length==0){
                $('.user>input').css({
                    "margin-top":'6px',
                    "border":"2px solid purple"
                });
                var  pTag = document.createElement('p');
                $(pTag).text("请输入有效的手机号码").css({
                    'color':'orange',
                    'font-size':"14px",
                    'margin-top':'6px',                                     });
                $(pTag).insertBefore('.user>input');
            }
            return;
        }

        /*------输入的是手机号码------*/
        else{
            if($('.user>p').length>0){
                $('.user>input').css({
                    "margin-top":'20px',
                    "border":"1px solid #000"
                });

                $('.user>p').remove();
            }
        }
    }
    /*--------------检查密码-----------*/
    function isPwd(password) {
        var pwdRule=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,12}$/;
        if(!pwdRule.test(password)){
            if($('.pwd>p').length ===0){
                $('.pwd>input').css({
                    "margin-top":'6px',
                    "border":"2px solid purple"
                });
                var  pTag = document.createElement('p');
                $(pTag).text("请输入有效的密码").css({
                    'color':'orange',
                    'font-size':"14px",
                    'margin-top':'6px',
                });
                $(pTag).insertBefore('.pwd>input');
            }
            return;
        }
        else {
            if ($('.pwd>p').length > 0) {
                $('.pwd>input').css({
                    "margin-top": '10px',
                    "border": "1px solid #000",
                });
                $('.pwd>p').remove();
            }
        }
    }




})