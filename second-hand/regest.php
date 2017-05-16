<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>会员注册</title>
    <link rel="stylesheet" href="css/reset.css">
    <style>
        .register{
            width: 1190px;
            margin: 50px auto;
            height: 400px;
            border: 1px solid #000000;
        }
        .topBox ul{
            margin-left: 300px;
            margin-top: 30px;
        }
        .topBox ul li{
            float: left;
            width: 250px;
            height: 26px;
            text-align: center;
            line-height: 26px;
            background-color: #dfdfdf;
            border-radius: 4px;
            margin-left: 10px;
        }
        .topBox ul .currentLi{
            background-color: #f27578;
        }
        .contentBox .type{
            float: left;
            margin-top: 50px;
            margin-left:280px;
            width: 600px;
            height: 200px;
            border: 1px solid rebeccapurple;
            position: relative;
        }
        .contentBox .type span{
            width: 50px;
            height: 50px;
            display: block;
            float: left;
            margin-right: 100px;
            border: 2px solid orange;
            margin-top: 20px;

        }
        .contentBox .type .teacher{
            background: url("images/usertype1.jpg") no-repeat;
            background-size: contain;
            margin-left: 200px;
        }
        .contentBox .type .student{
            background: url("images/userType2.jpg") no-repeat;
            background-size: contain;
        }
        .contentBox .type input{
            width: 20px;
            height: 20px;
            display: block;
            background-color: orange;
        }
        .contentBox .type #radio1{
            position: absolute;
            left: 100px;
            top: 100px;
        }
    </style>
</head>
<body>
<?php
include "top.php";
include "logoContent.php";
?>
<div class="register">
    <div class="topBox">
        <ul>
            <li class="currentLi">1.选择注册类型</li>
            <li>2.填写注册信息</li>
        </ul>
    </div>
    <div class="contentBox">
        <div class="type">
            <span class="teacher"></span>
            <span class="student"></span>
            <input name="type" id="radio1" type="radio">
            <input name="type" id="radio2" type="radio">
        </div>

    </div>
</div>

</body>
</html>