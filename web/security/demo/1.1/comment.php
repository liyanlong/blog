<?php
# 要求先访问generate_ck.php
<?php
define("SALT","this is a salt");
$userId = "1"; // 假设为 session 保存的内容

// 6a124073a223eec946346918fa5e5d16
if (!isset($_COOKIE['ck']) || $_COOKIE['ck'] !== md5($userId.SALT) ){
	die("no access");
}

if(isset($_POST['flag']) && $_POST['flag']){
	$comment = isset($_POST['comment']) ?  trim($_POST['comment']) : '';
	try{
		$db = new mysqli("127.0.0.1","root","123456","test");
		$db->set_charset("utf8");
	}catch(Exception $e){
	    echo $e->getMessage();
	    exit;
    }
	$ret = $db->real_query("INSERT INTO f_comment (f_user_id , f_comment_content) VALUES ('{$userId}','{$comment}')" );
	if(!$ret){
		echo $db->error;
	}else{
		echo "success";
	}
	exit;
}?>
<html>
<body>
<form action="<?=$_SERVER['PHP_SELF'];?>" method="POST">
<textarea name="comment" id="" cols="30" rows="10"></textarea>
<input type="hidden" name="flag" value="true">
<button type="submit">提交</button>
</form>
</body>
</html>