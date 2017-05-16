/**
 * Created by Administrator on 2017/4/10.
 */

$(function () {
    // 1 加载验证码图片
    indetifyImgs();
    //0  当鼠标点击input时，清空默认的内容
    inputFocue();
    // 2 点击提交按钮进行验证
    //  submit();
})

//input获得焦点事件处理
function inputFocue(){
    // 0.1 所有的input获得失去焦点 外边框的变化
    $("input[type=text]")
        .focus(function () {
            $(this).addClass("currentInput");
        })
        .blur(function () {
            $(this).removeClass("currentInput");
        })
    //  0.2 判断用户账号框中是否有内容
        var userContent;
        var pwdContent;
    userFocus =function () {
        userContent = $(this).val();
        if (userContent =="手机号码，仅支持大陆手机" || $.trim(userContent).length <=0){
            $(this).val("");
        }
    }
    userBlur = function () {
        userContent = $(this).val();
        if ($.trim(userContent).length <=0){
            $(this).val("手机号码，仅支持大陆手机");
        }
    }
      $(".user>input")
          .focus(userFocus)
          .blur(userBlur);
       // 0.3 判断密码框是否输入内容
    pwdFocus = function(){
        pwdContent = $(this).val();
        if (pwdContent =="请输入5-12位密码" ||$.trim(pwdContent).length <=0){
            $(this).val("");
        }
    }
    pwdBlur = function () {
        pwdContent = $(this).val();
        if ($.trim(pwdContent).length <=0){
            $(this).val("请输入5-12位密码");
        }
    }
    $(".pwd>input")
        .focus(pwdFocus)
        .blur(pwdBlur)
}
// 加载验证码图片函数
function indetifyImgs(){
    // 1 设置随机背景颜色 rgba
    var r = parseInt(Math.random() * 255);
    var g = parseInt(Math.random() * 255);
    var b = parseInt(Math.random() * 255);
    var a =Math.ceil( Math.random());
    $(".indentifyCode .indetifyPic").css({
        "background-color":"rgba("+r+","+g+","+b+","+a+")",
    })
    // 2 设置验证的字符串
    var num1 = parseInt(Math.random() * 5);
    var num2 = parseInt(Math.random() * 5);
    $(".indentifyCode .indetifyPic")
        .text(num1+" "+"+" +" "+num2)
        .click(function () {
            indetifyImgs();
        });
    $('#loginClick').click(function () {
        var  identCode =  $('.indentifyCode>input').val();
        if (!( parseInt(identCode) == num1+num2)){
           alert("验证码错误！");
        }
        else {
            // alert('11');
        }
    })
}
/*
function submit(){
    $("#loginClick").click(aaa)
}
aaa = function () {
   var  userValue = $(".user>input").val();
    var pwdValue = $(".pwd>input").val();
    userCheck();
    function  userCheck(){
       // 1 判断用户名符合要求嘛(这里只判断了长度，没判断特殊字符)
       if ($.trim(userValue).length <= 0 || userValue =="手机号码，仅支持大陆手机"){
           alert("请输入用户名！");
           $(".user>input").addClass("currentInput");
           return;
       }
       else if($.trim(userValue).length >24){
           alert("用户名太长，不符合！");
           return;
       }
        pwdCheck();
   }
    function pwdCheck(){
       // 判断密码符合要求嘛
       if ($.trim(pwdValue).length <= 0 || pwdValue =="请输入5-12位密码"){
           alert("请输入密码！");
           $(".pwd>input").addClass("currentInput");
           return;
       }
        else if($.trim(pwdValue).length >15 || $.trim(pwdValue).length <5){
           alert("密码超出长度不符合！");
           return;
       }
        codeCheck();

   }
    function codeCheck(){
        // 判断验证码是否输入
        if($.trim($(".indentifyCode>input").val()).length <=0){
            alert("请输入验证码！");
            $(".indentifyCode>input").addClass("currentInput");
            return;
        }
       else if(typeof $(".indentifyCode>input").val() !="Number"){
            // alert("请输入数字")
        }
    }


}*/
