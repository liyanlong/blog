
<?php
//error_reporting(E_ALL);
echo "<h2>tcp/ip connection </h2>\n";
$service_port = 10005;
$address = '127.0.0.1';

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
	echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
} else {
	echo "OK. \n";
}

echo "Attempting to connect to '$address' on port '$service_port'...";
$result = socket_connect($socket, $address, $service_port);
if($result === false) {
	echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
} else {
	echo "OK \n";
}
$in = "HEAD / http/1.1\r\n";
$in .= "HOST: localhost \r\n";
$in .= "Connection: close\r\n"."content: nihao"."\r\n";

$out = "";
echo "sending http head request ...";
socket_write($socket, $in, strlen($in));
echo  "OK\n";

echo "Reading response:\n\n";
while ($out = socket_read($socket, 8192)) {
	echo $out;
}
echo "closeing socket..";

socket_close($socket);
echo "ok .\n\n";