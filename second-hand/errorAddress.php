<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>高校二手交易平台</title>
    <link rel="stylesheet" href="css/reset.css">
    <!--<link rel="stylesheet" href="css/address-style.css">-->
    <style>
        .messageBox{
            width: 500px;
            height: 250px;
            border: 1px solid #f27578;
            border-radius: 4px;
            margin: 20px auto;
        }
        .messageBox .messageTitle{
            color: #d0445b;
            font-size: 20px;
            background-color: #f6b9b8;
            width: 100%;
            height: 34px;
            line-height: 34px;
            border-bottom:1px solid #f6b9b8 ;
            text-indent: 20px;
        }
        .messageBox .detailMsg{
            padding: 50px;
        }
        .detailMsg p{
            font-size: 14px;
            line-height: 26px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
<?php  include 'logoContent.php';?>

<div class="messageBox">
    <div class="messageTitle">提示信息</div>
    <div class="detailMsg">
        <p>对不起，该学校还不是我们的合作院校，我们正在努力交涉，给你带来不便，敬请谅解！</p>
        <a href="address-list.php">如果你的浏览器没有反应，请点击这里</a>
    </div>
</div>
</body>
</html>