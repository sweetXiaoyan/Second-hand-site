<?php
/**
 * Created by PhpStorm.
 * User: Vanessa
 * Date: 2017/4/20
 * Time: 17:31
 */

if (!file_exists('data.txt')){
    file_put_contents('data.txt','[]');
}
$dataFile = file_get_contents('data.txt');

$dataArray = json_decode($dataFile);

if($_GET['type'] == 'save'){
    $from = $_GET['from'];
    $to = $_GET['to'];
    $text = $_GET['text'];

    $dataObj = array('from'=> $from,'to'=> $to, 'text'=> $text);
    array_push($dataArray,$dataObj);
    $result = json_encode($dataArray);
    file_put_contents('data.txt',$result);
    print_r($result);
}else if ($_GET['type'] == 'get') {
    $result = json_encode($dataArray);
    print_r($result);

}

?>