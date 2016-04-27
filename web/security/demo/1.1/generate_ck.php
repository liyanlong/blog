<?php
define("SALT","this is a salt");

if( isset($_COOKIE['ck']) ){
	echo "has exists";
	exit;
}
$userId = isset($_GET['uid']) ? $_GET['uid'] : "";
$userId = intval($userId);

setcookie("ck",md5($userId.SALT),time() + 60 , "/");
setcookie("test","this is test");