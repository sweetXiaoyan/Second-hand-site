<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>求购专区--辽工二手街</title>
    <link rel="stylesheet" href="css/index.css" />
    <link rel="stylesheet" type="text/css" href="css/want.css">
    <link rel="stylesheet" href="css/my-center.css">
<!--    <script type="text/javascript" src="js/common.js"></script>-->
    <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    <script src="js/comTool.js"></script>
    <script src="js/userCenter.js"></script>
    <style type="text/css">
        #user{
            display: block;
        }
        .publish a{
            text-decoration: none;
        }
    </style>
</head>
<?php include "header.php"?>
<div class="buttons">
    <div class="putUsed">发布闲置</div>
    <div class="getUsed">求购闲置</div>
</div>
<?php include "slider.php"?>

<script>
$(".log-reg").hide();
</script>
<div class="my-main">
 <div class="my-container">
     <div class="my-slider">
         <div class="my-msg">
             <img src="" alt="">
             <p class="my-name"></p>
             <p class="my-sno"></p>
         </div>
         <div class="my-goods" id="my-goods">
             <p class="cur">我的闲置</p>
             <p>已发布闲置</p>
             <p>已卖出闲置</p>
             <p>想要的闲置</p>
         </div>
     </div>
     <div class="my-content">
         <div class="noGoods">
             <p>你暂时还没有发布闲置物品，快去发布你的闲置物品，赚闲钱吧！</p>
             <img src="images/error.png" alt="">
         </div>
         <div class="hasGoods">
         </div>
     </div>
 </div>
</div>

<div class="footer">
    <div class="footer-top">
        <div class="footer-top1"></div>
        <div class="footer-top2"></div>
    </div>
    <a href="#">产品意见反馈</a>
    <p> ©2014-2015 和平科技 版权所有 鄂ICP备14003265号-2 </p>
</div><!-- footer结束 -->

</html>
