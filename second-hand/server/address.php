<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/4/26
 * Time: 11:49
 */
$flag = $_GET['flag'];
if($flag ==="addressSave"){
     save();
}
function save(){
    $file = 'serverDatas/address.txt';
    if (!file_exists($file)){
        file_put_contents($file,'[]');
    }
    $fileTxt = file_get_contents($file);
    $fileArr =json_decode($fileTxt);
    $content =$_GET['content'];
    $id = $_GET['id'];
    $newAddress = array("id" => $id ,"content" =>$content);
    array_push($fileArr,$newAddress);
    /*---将结果返回去*/
    print_r($content);
    /*--再次保存到文件中*/
    file_put_contents($file,json_encode($fileArr));
}

?>

