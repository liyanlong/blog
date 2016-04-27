<?php

// 建立db连接
try{
	$db = new mysqli("127.0.0.1","root","123456","test");
	$db->set_charset("utf8");
}catch(Exception $e){
    echo $e->getMessage();
    exit;
}


// 查询留言列表
$countQuery = "SELECT count(*)  FROM f_comment";
$result = $db->query($countQuery);
$row    = $result->fetch_row();
$result->close();
echo "count {$row[0]} <br />";
echo "<pre>";
$query = "SELECT f_comment_id, f_user_id, f_comment_content FROM f_comment ORDER by f_comment_id ASC LIMIT 0,50";
if ($result = $db->query($query)) {

    /* fetch object array */
    while ($row = $result->fetch_row()) {
        printf ("%s (%s) (%s)\n", $row[0], $row[1],$row[2]);
    }

    /* free result set */
    $result->close();
}
echo "</pre>";
/* close connection */
$db->close();