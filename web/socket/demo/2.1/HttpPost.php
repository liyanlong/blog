<?php
// 打开socket连接资源
$fp = fsockopen("127.0.0.1",80,$errno,$errstr,5);

// 
if(!$fp){
    die("$errstr ($errno)<br />\n");
}
$data = http_build_query(array(
		"username" => "liyl",
		"pass" => "123456"
	)
);
$out = "POST /post.php HTTP/1.1\r\n";
$out .= "Host: localhost\r\n";
$out .= "Content-Length:" .strlen($data). "\r\n";
$out .= "Content-Type:application/x-www-form-urlencoded\r\n";
$out .= "Connection: keep-alive\r\n\r\n"; // 头部与内容两个换行
$out .=  $data ."\r\n\r\n"; // 结尾两个换行

fwrite($fp,$out); // 写入流
$ret = "";
// while( "" !== ($read = fread($fp,8192)) ){
// 		$ret .= $read;
// }
while(!feof($fp)){
	$ret .= fgets($fp,1280);
}
fclose($fp);
echo $ret;