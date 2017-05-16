<?php
$username = $_GET['username'];
$pwd = $_GET['pwd'];
$fileHandle = fopen('F:\e\WWW\day27/01-register/users.txt','r');
$fileSize = filesize('F:\e\WWW\day27/01-register/users.txt');
$contentStr = fread($fileHandle,$fileSize);
$pDic = unserialize($contentStr);
if ($pDic['user'] ==$username && $pDic['pwd'] == $pwd){
    echo "登录成功！";
}
else{
    echo "登录失败！";
}

?>