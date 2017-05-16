/**
 * Created by Administrator on 2017/4/26.
 */

(function (window) {
    function DataTool() {}

    DataTool.addressRequest = function(id,content,successFunc){
        AjaxTool.get("server/address.php",{
            'flag':"addressSave",
            'id':id,
            'content':content
        },function (xhr) {
            successFunc(xhr);
        },function () {
            console.log("请求失败，请检查网络！");
        });
    }
    DataTool.userRequest = function (id,userName,successFunc) {
    AjaxTool.get('server/loginCheck.php',{
        'flag':"loginCheck",
        'id':id,
        'userName':userName
    },function () {
        successFunc();
    },function () {
            console.log("请求失败，请检查网络！");
        })
    }

    /*----向外界抛出DataTool的调用--------*/
    window.DataTool = DataTool;

})(window);


