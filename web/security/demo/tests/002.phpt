--TEST--
ck request 

--POST--
flag=true&comment=注水文章

--FILE--
<?php

// 根据实际情况修改访问地址
$data = array();

// 获取cookie
file_get_contents("http://localhost/attack/generate_ck.php?uid=1");
$str = implode("\r\n",$http_response_header);

if(preg_match_all("#Set-Cookie: ([^;\s]+);?#", $str,$match) !== 0){
	
	$str_cookies = implode("; ",$match[1]);
}
$data = $_POST;
$data['comment'] .= time();
$data = http_build_query($data);
$opt = array(
	"http" => array(
		"method" => "POST",
		"header" => "Content-Type:application/x-www-form-urlencoded\r\n".
		"Content-length:" .strlen($data)."\r\n" .
		"Cookie:{$str_cookies}\r\n",
		"content" => $data
	)
);
$content = file_get_contents("http://localhost/attack/comment.php",false,stream_context_create($opt));
echo $content;
?>
--EXPECT--
success