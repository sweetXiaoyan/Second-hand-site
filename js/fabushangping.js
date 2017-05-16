window.onload = function () {

     /*------添加照片方法----*/
    function createDiv(){
        var parentdiv=$('<div></div>');
        parentdiv.addClass('preview');
        var childdiv=$('<div></div>');
        var img=$('<img src="" />');
        img.appendTo(childdiv);
        var childspan=$('<span></span>');
        childspan.addClass('delete')
        childdiv.appendTo(parentdiv);
        childspan.appendTo(parentdiv);
        parentdiv.appendTo('.goods-img');
    }
    /*-----监听添加图片按钮改变---*/
    $('#inputfile1').bind('change',function(){
        $('.bk').css('display','none');
        $('.prompt').css('display','block');
        $('.file').css('display','inline-block');
        var file=document.getElementById("inputfile1").files[0];
        if (window.FileReader) {
            var fr=new FileReader();
            fr.onloadend=function(e){
                /*--base64的图片 --*/
                var src=e.target.result;
                createDiv();
                $("div.goods-img div.preview:last-child img").attr("src",src);
            };

            /*--
             ---FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL。Data URL是一项特殊的技术，可以将资料(例如图片)内嵌在网页之中，不用放到外部文件。使用Data URL的好处是，您不需要额外再发出一个HTTP 请求到服务器端取得额外的资料；而缺点便是，网页的大小可能会变大。它适合应用在内嵌小图片，不建议将大图像文件编码成Data URL来使用。您的图像文件不能够超过浏览器限定的大小，否则无法读取图像文件---
             ---*/
            /*使用FileReader对象的readAsDataURL方法来读取图像文件*/
            fr.readAsDataURL(file);
        }
    });

    /*-----点击添加按钮继续添加图片-----*/
    $('#inputfile2').bind('change',function(){
        var file=document.getElementById("inputfile2").files[0];
        if (window.FileReader) {
            var fr=new FileReader();
            fr.onloadend=function(e){
                var src=e.target.result;
                createDiv();
                $("div.goods-img div.preview:last-child img").attr("src",src);
                var len=$('.goods-img').children('div.preview').length;
                if (len>3) {
                    $('.file').css('display','none');
                }
                else{
                    $('.file').css('display','inline-block');
                }
            };
            fr.readAsDataURL(file);
        }
    });

    /*-----绑定删除图片的点击事件-------*/
    $('.goods-img').on("click","span",function(){
        $(this).parent().remove();
        var len=$('.goods-img').children('div.preview').length;
        if(len<4&&len>0){
            $('.file').css('display','inline-block');
        }
        else{
            $('.bk').css('display','block');
            $('.prompt').css('display','none');
        }
    });

    /*------分类下拉列表-------*/
    $("#select").bind("change",function(){
        var options=$("#select option:selected");
        var v=options.val();
        document.getElementById("classify").value=v;
    })


//用jquery的ajax,H5的formData对象上传照片
    var email = $("#username").text();
    console.log(email);
    $("form").submit(function(e){
        e.preventDefault();
        var formElement = document.getElementById("uploadForm");
        var formData  = new FormData(formElement);

        /*记录是谁发的商品 ----通过请求status获取当前登录的用户*/

        /*----请求   保存发布的信息-----*/
        formData.append("email", email);
        // var formData = new FormData($("#uploadForm" )[0]);
        var request = new XMLHttpRequest();
        request.open("POST", "php/fabushangping.php");
        request.send(formData);
        request.onreadystatechange = function () {
            if (request.readyState ==4 && request.status ==200 ||request.status ==304){
                console.log("-----------"+request.response+"--------------");
                if(request.response ==="1"){
                    alert("发布成功!");
                    window.location.href="http://localhost/Second-hand-site/";
                }
            }
        }



        //  ajax请求
        /*	 $.ajax({
         url: 'php/fabushangpingUI.php',
         type: 'POST',
         cache: false,
         data: formData,
         processData: false,
         contentType: false
         }).done(function(res) {
         console.log(res.response);
         if (res=='1') {
         alert("发布成功!");
         window.location.href="http://localhost/Xihua-Second-Street-master/";
         }
         else{
         alert("发布失败!");
         }
         }).fail(function(res) {

         });*/

    });

//    侧边栏导航
    comTool.navLinks('php/selectClassify.php','classfiyProducts.php');
}