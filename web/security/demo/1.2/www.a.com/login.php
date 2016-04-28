<?php
$userName = "liyi";
$password = "123456";

// 简单的login.php
function authenticate() {
    header('WWW-Authenticate: Basic realm="Test Authentication System"');
    header('HTTP/1.0 401 Unauthorized');
    echo "You must enter a valid login ID and password to access this resource\n";
    exit;
  }

if (!isset($_SERVER['PHP_AUTH_USER']) || ($_SERVER['PHP_AUTH_USER'] == $userName && $_SERVER['PHP_AUTH_PW'] == $password)) {
	authenticate();
} 

echo "Welcome: {$_SERVER['PHP_AUTH_USER']}<br>";
session_start();
$_SESSION['userName']  = $userName;
$_SESSION['initData'] = array("age" => 18);
