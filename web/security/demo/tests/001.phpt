--TEST--
no ck request 
--FILE--
<?php

// 根据实际情况修改访问地址
$content = file_get_contents("http://localhost/attack/comment.php");
echo $content;
?>
--EXPECT--
no access