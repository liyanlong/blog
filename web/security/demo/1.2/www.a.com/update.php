<?php
// 更新用户信息
session_start();

// 检查是否登录 未登录不允许访问
if(empty($_SESSION['userName'])){
		die("not login");
}

// 检查是否为POSTQ请求
if($_SERVER['REQUEST_METHOD'] === "POST"){
	// 更新 age
	$_SESSION['initData']['age'] = (int) isset($_POST['age']) ? $_POST['age'] : $_SESSION['initData']['age'];
	echo "更新成功!<a href='{$_SERVER['PHP_SELF']}'>点击返回</a>";
	exit;
}
?>
<form action="<?=$_SERVER['PHP_SELF']?>" method="POST" >
<label>姓名</label><span><?=$_SESSION['userName']?></span><br />
年龄<input type="text" name="age" value="<?=$_SESSION['initData']['age']?>"><br />
<button>确定</button>
</form>