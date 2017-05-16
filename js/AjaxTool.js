/**
 * Created by Vanessa on 2017/4/20.
 */
(function (window) {
    function getRandomNum() {
        return (new Date()).getTime();
    }

    var AjaxTool = function () {

    };

    AjaxTool.requestData = function (param,succFn,faildFn) {
        var requestType = param['type'];
        var paramData   = param['data'];
        var url = param['url'];

        var dataArr = [];
        for(var key in paramData){
            var str = key + '=' + paramData[key];
            dataArr.push(str);
        }
        var randomNum = 'random = ' + getRandomNum();
        dataArr.push(randomNum);
        var dataStr = dataArr.join('&');

        var xhr;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        if(requestType.toLowerCase() === 'get'){
            xhr.open(requestType,encodeURI(url) +　'?'+dataStr,true);
            xhr.send();
        } else if(requestType.toLowerCase() === 'post'){
            xhr.open(requestType,url,true);
            xhr.setRequestHeader('');
            xhr.send(encodeURI(dataStr));
        }

        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4){
                var status = xhr.status;
                if(status >= 200 && status < 300 || status == 304){
                    succFn(xhr);
                    clearTimeout(timer);
                } else {
                    faildFn();
                }
            }
        };

        var timer = null;
        timer = setTimeout(function () {
            xhr.abort();
        },3000);


    };


    window.AjaxTool = AjaxTool;
})(window);