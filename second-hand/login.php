<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/address-style.css">
    <style>
        html{
            height: 100%;
        }
        .bg{
            width: 100%;
            height: 100%;
            background-color: #fcf1f5;
        }
        .login{
            width:270px;
            /*height:300px ;*/
            border: 1px solid #aaaaaa;
            margin: 20px auto;
            padding: 10px;
            position: relative;
            background-color: #f2ffeb;
        }
        .login .toggle{
            display:block;
            width:0;
            height:0;
            border-width:50px 50px 0px 50px;
            border-style:solid;
            border-color:transparent transparent transparent #fc0;/*透明 透明 透明 黄*/
            position:absolute;
            top:0px;
            right:0px;
            transform: rotate(-180deg);
            cursor: pointer;
        }
        .login>p span{
            font-size: 16px;
            color: #333333;
            line-height: 40px;
            margin: 26px;
            cursor: pointer;
        }
        .login>p span:nth-child(1){
            margin-left:46px;
        }
        .login .current{
            font-weight: bold;
        }
        .login .hr_1{
            width: 100%;
            border: 1px solid #ddd;
        }
        .user input, .pwd input, .indentifyCode input{
            width: 100%;
            height: 40px;
            border: 1px solid #6e6e6e;
            text-indent: 20px;
            border-radius: 4px;
            color: #d0d0d0;
        }
        #login .currentInput{
            border: 1px solid orangered;
        }
        .user input{
            margin: 20px 0 10px 0 ;
        }
        .pwd input{
            margin-bottom: 10px;
        }
        .indentifyCode{
            margin-bottom: 8px;
        }
        .indentifyCode input{
            width: 45%;
        }
        .indetifyPic{
            width: 45%;
            border: 1px solid #000;
            height: 45px;
            float: right;
            font-size: 24px;
            text-align: center;
            line-height: 45px;
            cursor: pointer;
        }
        .check{
            font-size: 14px;
        }
        .check #checkbox{
            width: 16px;
            height: 16px;
        }
        .check label , .check #checkbox{
            vertical-align: middle;
        }
        .check>a{
            float: right;
        }
        .loginBtn{
            margin: 6px auto;
            width: 256px;
        }
        .loginBtn input{
            width: 250px;
            height: 38px;
            background-color: #ff8545;
            border-radius: 6px;
            color: #e5e5e5;
            font-size: 18px;
        }
    </style>
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/AjaxTool.js"></script>
    <script src="js/dataChangeTool.js"></script>
    <script src="js/index.js"></script>
    <script src="js/login.js"></script>

</head>
<body>
<?php
include "top.php";
?>
<div class="bg">
    <div class="header">
        <div class="H-content">
            <div class="logo">
                <img src="images/logo.png" alt="">
            </div>
            <h2>后街</h2>
            <p>校园二手街-大学生二手交易平台，大学生二手网，免费发布、查询，解决你的学习生活所需</p>

        </div>
        <hr/>
    </div>
    <div class="login" id="login">
        <span class="toggle"></span>
        <p>
            <span class="current">账号登录</span>
            <span>安全登录</span>
        </p>
        <div class="hr_1"></div>

        <div class="user">
            <input type="text" name="username" placeholder="手机号码，仅支持大陆手机">
        </div>
        <div class="pwd">
            <input type="text" name="pwd" placeholder="请输入5-12位,由数字和字符组成的密码">
        </div>
        <div class="indentifyCode">
            <input type="text">
            <div class="indetifyPic">
            </div>
        </div>
        <div class="check">
            <input type="checkbox" id="checkbox" >
            <label for="checkbox">记住密码</label>
            <a href="#">忘记密码</a>
        </div>
        <div class="loginBtn">
            <input type="submit" id="loginClick" value="登 录">
        </div>

        <div>
            <p>还没有后街账号 ？ <a href="#">立即注册</a></p>
        </div>
    </div>
</div>
</body>
</html>