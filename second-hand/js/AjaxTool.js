/**
 * Created by Administrator on 2017/4/20.
 */

// 超时时间
// 就是, 我指定一个时间比如2000, 然后, 当请求时间, 超过这个时间之后, 还没有得到相应, 那么就取消本次请求, 直接返回结果

(function (window) {

    function AjaxTool() {

    }

// 写一个函数
// 功能: 发送一个get请求
    AjaxTool.get = function (url, param, successFunc, faildFunc) {
        AjaxTool.ajaxRequest({
            'requestType': 'get',
            'url': url,
            'paramObj': param,
            'timeout': 0
        }, successFunc, faildFunc);
    }

    AjaxTool.ajaxRequest = function(param, successFunc, failedFunc) {

        var requestType = param['requestType'];
        var url  = param['url'];
        var paramObj  = param['paramObj'];
        var timeout  = param['timeout'];
        // var xxx = param['xxx'];

        if (successFunc === undefined) {
            successFunc = function () {
                
            }
        }
        if (failedFunc === undefined) {
            failedFunc = function () {
                
            }
        }
        

        // 使用ajaxj技术, 发送一个网络请求
        // 1. 创建一个请求对象 (找到一个电话)
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        if (requestType.toLowerCase() === 'get') {
            // 拿到本地需要传送的数据
            var codeURL = encodeURI(url + '?' + getStrWithObject(paramObj));
            xhr.open('get', codeURL, true);
            // 3. 发送请求 (拨出电话)
            xhr.send();
        }else if (requestType.toLowerCase() === 'post') {
            // 拿到本地需要传送的数据
            var codeParam = encodeURI(getStrWithObject(paramObj));
            xhr.open('post', url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // 3. 发送请求 (拨出电话)
            xhr.send(codeParam);
        }

        // 4. 监听服务器响应 (等待电话接通)
        xhr.onreadystatechange = function () {
            // console.log(xhr.readyState);
            // 一旦服务器响应回来之后, 就会执行这个函数;
            // 5. 处理响应数据(对方说话)
//                    console.log(xhr.readyState);
            if (xhr.readyState == 4) {
                // 意味着,服务器,已经给了响应
                // 不代表, 服务器响应正确
                // console.log(xhr.status);
                // 判断, 服务器给的数据是否正常
                var status = xhr.status;
                if (status >= 200 && status < 300 || status == 304) {
                    // 真正处理数据, 在这里进行处理
                    successFunc(xhr);
                    // 额外的, 清除, 取消请求的定时
                    clearTimeout(timer);
                } else {
                    failedFunc();
                }
            }

        }

        // 取消 ajax请求
        // 等到多少timeout秒之后, 才取消
        // 2000
        // 0 代表, 不限制超时时间
        var timer;
        if (timeout > 0) {
            timer = setTimeout(function () {
                xhr.abort();
            }, timeout);
        }



    }


    window.AjaxTool = AjaxTool;


    function getRandomStr() {
        return Math.random() + (new Date()).getTime();
    }
    function getStrWithObject(paramObj) {
        // {
        //     'name': 'sz',
        //     'age': 18
        // }
        // name=sz&age=18
        var resultArray = [];
        for (var key in paramObj) {
            var str = key + '=' + paramObj[key];
            resultArray.push(str);
        }
        resultArray.push('random='+getRandomStr());

        return resultArray.join('&');

    }



})(window)


