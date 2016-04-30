<?php
if($_SERVER['REQUEST_METHOD'] == "POST"){
header("Content-Type:text/css;charset=UTF-8;");
echo "recive:";
print_r($_POST);
exit;	
}
?>
<form action="" method="POST">
<input type="hidden" name="test" value="test">
<button submit>GO</button>	
</form>
