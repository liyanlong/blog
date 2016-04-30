<?php

// 创建socket套接字
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

// 连接http服务器
socket_connect($socket, "localhost",80);

// 发送请求
$buf  = "GET http://localhost/helloworld.php?v=1\r\n";
$buf .= "Host:localhost\r\n";
$buf .= "User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36\r\n";
$buf .= "Connection:keep-alive\r\n";
socket_write($socket,$buf,strlen($buf)) or sprintf( "Unable to write to socket: %s", socket_strerror(socket_last_error()));
$recive = "";
while( "" !== ($read = socket_read($socket, 1024))){
	$recive .= $read;
}
socket_close($socket);

// 接受内容
echo $recive;